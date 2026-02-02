import { MOCK_POSTS } from '@/lib/mockData';
import styles from '@/app/archive/page.module.css';
import ArchiveList from '@/components/archive/ArchiveList';

interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    // Simple case-insensitive match
    const filteredPosts = MOCK_POSTS.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{category.toUpperCase()}</h1>
                <p className={styles.subtitle}>Total {filteredPosts.length} documents</p>
            </header>

            <ArchiveList posts={filteredPosts} />
        </div>
    );
}
