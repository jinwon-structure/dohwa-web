import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { getSortedProjectsData } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dohwa.pro';

    // 1. Static Pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tech`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/archive`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/calc`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
    ];

    // 2. Dynamic Posts (Archive)
    const posts = getSortedPostsData();
    const postUrls = posts.map((post) => ({
        url: `${baseUrl}/archive/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // 3. Dynamic Projects
    const projects = getSortedProjectsData();
    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...postUrls, ...projectUrls];
}
