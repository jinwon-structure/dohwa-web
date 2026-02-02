import { NextResponse } from 'next/server';
import { savePost } from '@/lib/postsJs';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate required fields (Simple validation)
        if (!body.Post_Title || !body.Main_Body) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Generate slug from title (Simple slugify)
        const slug = body.Post_Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        // Map to internal Post format
        const postData = {
            id: slug, // Use slug as ID for file-based
            slug: slug,
            title: body.Post_Title,
            category: body.Tech_Category || 'General',
            excerpt: body.Main_Body.substring(0, 150) + '...', // Simple excerpt
            date: new Date().toISOString().split('T')[0],
            content: body.Main_Body,
            reference_law: body.Reference_Law,
            drawingUrl: body.Technical_Drawing
        };

        // Save to file system
        // Note: In Vercel deployment, this won't persist. But for local/dedicated server it works.
        // Ideally we'd use a database or Git-based CMS approach (committing to repo).
        savePost(slug, postData as any);

        return NextResponse.json({ success: true, slug: slug }, { status: 201 });
    } catch (error) {
        console.error('Failed to create post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
