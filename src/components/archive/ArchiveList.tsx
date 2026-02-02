import Link from 'next/link';
import { Post } from '@/lib/mockData';
import styles from '@/app/archive/page.module.css'; // Reusing styles

export default function ArchiveList({ posts }: { posts: Post[] }) {
    if (posts.length === 0) {
        return <div style={{ padding: '2rem', color: '#666' }}>No documents found in this category.</div>;
    }

    return (
        <div className={styles.grid}>
            {posts.map((post) => (
                <article key={post.id} className={styles.card}>
                    <Link href={`/archive/${post.slug}`} className={styles.link}>
                        <div className={styles.category}>{post.category}</div>
                        <h2 className={styles.cardTitle}>{post.title}</h2>
                        <p className={styles.excerpt}>{post.excerpt}</p>
                        <div className={styles.date}>{post.date}</div>
                    </Link>
                </article>
            ))}
        </div>
    );
}
