import { getSortedProjectsData, ProjectData } from '@/lib/projects';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './page.module.css';

interface ProjectParams {
    slug: string;
}

async function getProjectData(slug: string): Promise<ProjectData & { contentHtml: string }> {
    const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
    const fullPath = path.join(projectsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error('Project not found');
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        id: slug,
        contentHtml: matterResult.content,
        ...(matterResult.data as { title: string; category: string; location: string; image: string; featured: boolean }),
    };
}

export async function generateStaticParams() {
    const projects = getSortedProjectsData();
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<ProjectParams> }) {
    const { slug } = await params;
    const project = await getProjectData(slug);

    return {
        title: `${project.title} | Dohwa Engineering`,
        description: `Learn more about our ${project.category} project: ${project.title} in ${project.location}.`,
        openGraph: {
            images: [project.image],
        },
    };
}

export default async function ProjectDetail({ params }: { params: Promise<ProjectParams> }) {
    const { slug } = await params;
    const project = await getProjectData(slug);

    return (
        <article className={styles.container}>
            <div className={styles.hero} style={{ backgroundImage: `url(${project.image})` }}>
                <div className={styles.overlay}>
                    <div className={styles.heroContent}>
                        <span className={styles.category}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.location}>{project.location}</p>
                    </div>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {project.contentHtml || ''}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
