import Sidebar from '@/components/archive/Sidebar';
import styles from './layout.module.css';

export default function ArchiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
