import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    location: string;
    image: string;
    featured: boolean;
    contentHtml?: string;
}

export function getSortedProjectsData(): ProjectData[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(projectsDirectory)) {
        fs.mkdirSync(projectsDirectory, { recursive: true });
    }

    // Get file names under /projects
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the project metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as { title: string; category: string; location: string; image: string; featured: boolean }),
        };
    });

    // Sort projects by title or add a date field later. For now, just return.
    return allProjectsData;
}

export function getFeaturedProjects(): ProjectData[] {
    const allProjects = getSortedProjectsData();
    return allProjects.filter(project => project.featured);
}
