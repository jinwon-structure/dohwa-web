import { getSortedPostsData } from '@/lib/posts';
import LiveTechFeed from '@/components/home/LiveTechFeed';
import styles from './page.module.css';

// Force dynamic rendering to ensure fresh content on each build
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Archive() {
    const allPostsData = getSortedPostsData();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Technical Archive</h1>
                <p className={styles.subtitle}>Engineering Knowledge Base & Technical Stardards</p>
            </div>

            <LiveTechFeed posts={allPostsData} showAll={true} />
        </div>
    );
}
