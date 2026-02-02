import { getSortedPostsData } from '@/lib/posts';
import LiveTechFeed from '@/components/home/LiveTechFeed';
import styles from './page.module.css';

export default function Archive() {
    const allPostsData = getSortedPostsData();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Technical Archive</h1>
                <p className={styles.subtitle}>Engineering Knowledge Base & Technical Stardards</p>
            </div>

            <LiveTechFeed posts={allPostsData} />
        </div>
    );
}
