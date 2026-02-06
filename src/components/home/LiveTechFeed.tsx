import Link from 'next/link';
import Image from 'next/image';
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
                    <div>
                        <h2 className={styles.title}>Media</h2>
                        <p className={styles.subtitle}>도화기술에서 전해드리는 새로운 소식을 지금 만나세요</p>
                    </div>
                    <Link href="/archive" className={styles.viewAll}>
                        전체보기 &rarr;
                    </Link>
                </div>
            )}

            <div className={styles.grid}>
                {displayPosts.map((post) => (
                    <Link href={`/archive/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
                        <article className={styles.card}>
                            {post.image && (
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            )}
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
