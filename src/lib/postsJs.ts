import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MOCK_POSTS, Post } from './mockData';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// Helper to ensure directory exists
if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getAllPosts(): Post[] {
    // 1. Read file system posts
    const fileNames = fs.readdirSync(postsDirectory);
    const filePosts = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            try {
                const slug = fileName.replace(/\.md$/, '');
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');

                const { data, content } = matter(fileContents);

                return {
                    id: slug,
                    slug: slug,
                    title: data.title || 'Untitled',
                    category: data.category || 'General',
                    excerpt: data.excerpt || '',
                    date: data.date || '',
                    content: content,
                    relatedLaw: data.relatedLaw,
                    drawingUrl: data.drawingUrl,
                    toc: data.toc // Assuming TOC is passed or generated? Usually TOC is generated from content.
                } as Post;
            } catch (e) {
                console.error(`Error parsing file ${fileName}:`, e);
                return null;
            }
        })
        .filter(Boolean) as Post[];

    // Merge MOCK_POSTS and filePosts
    // If slug exists in both, filePosts usually takes precedence or just concatenate?
    // Let's concatenate for now.
    return [...MOCK_POSTS, ...filePosts];
}

export function getPostBySlug(slug: string): Post | undefined {
    // Check file system first
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return {
            id: slug,
            slug: slug,
            title: data.title || slug,
            category: data.category || 'General',
            excerpt: data.excerpt || '',
            date: data.date || '',
            content: content,
            relatedLaw: data.relatedLaw,
            drawingUrl: data.drawingUrl,
            toc: data.toc
        } as Post;
    }

    // Fallback to Mock
    return MOCK_POSTS.find(post => post.slug === slug);
}

export function savePost(slug: string, data: Post) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    const frontmatter = {
        title: data.title,
        category: data.category,
        date: data.date,
        excerpt: data.excerpt,
        relatedLaw: data.relatedLaw,
        drawingUrl: data.drawingUrl,
        // TOC likely generated at runtime or saved if validated. 
        // For API save, we just save what we have.
    };

    const fileContent = matter.stringify(data.content || '', frontmatter);
    fs.writeFileSync(fullPath, fileContent);
}
