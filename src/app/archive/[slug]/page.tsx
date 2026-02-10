import { getSortedPostsData, PostData } from '@/lib/posts';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './page.module.css';

interface PostParams {
    slug: string;
}

async function getPostData(slug: string): Promise<PostData & { contentHtml: string }> {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        id: slug,
        contentHtml: matterResult.content,
        ...(matterResult.data as { date: string; title: string; category: string; excerpt: string }),
    };
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<PostParams> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return {
        title: `${postData.title} | Dohwa Engineering`,
        description: postData.excerpt || `Read our technical article about ${postData.title}`,
        alternates: {
            canonical: `/archive/${slug}`,
        },
        openGraph: {
            title: postData.title,
            description: postData.excerpt,
            type: 'article',
            publishedTime: postData.date,
            url: `/archive/${slug}`,
        },
    };
}

export default async function Post({ params }: { params: Promise<PostParams> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article className={styles.article}>
            <div className={styles.header}>
                <span className={styles.category}>{postData.category}</span>
                <h1 className={styles.title}>{postData.title}</h1>
                <div className={styles.meta}>
                    <time>{postData.date}</time>
                </div>
            </div>

            <div className={styles.content}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {postData.contentHtml}
                </ReactMarkdown>
            </div>
        </article>
    );
}
