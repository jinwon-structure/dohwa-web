import Link from 'next/link';
import styles from './LiveTechFeed.module.css';
import { PostData } from '@/lib/posts';

interface LiveTechFeedProps {
    posts: PostData[];
    showAll?: boolean;
}

export default function LiveTechFeed({ posts, showAll = false }: LiveTechFeedProps) {
    const displayPosts = showAll ? posts : posts.slice(0, 3);

    return (
        <section className={styles.section}>
            {!showAll && (
                <div className={styles.header}>
                    <h2 className={styles.title}>Live Tech Feed</h2>
                    <Link href="/archive" style={{ textDecoration: 'underline', fontSize: '0.9rem' }}>
                        View All Archives &rarr;
                    </Link>
                </div>
            )}

            <div className={styles.grid}>
                {displayPosts.map((post) => (
                    <Link href={`/archive/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
                        <article className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.category}>{post.category}</span>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                            </div>
                            <div className={styles.meta}>
                                <span className={styles.date}>{post.date}</span>
                                <span>Read More &rarr;</span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}

