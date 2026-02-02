"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const CATEGORIES = [
    { name: 'All', path: '/archive' },
    { name: 'Structure', path: '/archive/category/structure' },
    { name: 'Performance', path: '/archive/category/performance' },
    { name: 'Seismic', path: '/archive/category/seismic' },
    { name: 'PC', path: '/archive/category/pc' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <h3 className={styles.title}>Categories</h3>
            <ul className={styles.list}>
                {CATEGORIES.map((cat) => {
                    const isActive = pathname === cat.path || (cat.path !== '/archive' && pathname.startsWith(cat.path));
                    return (
                        <li key={cat.name} className={styles.item}>
                            <Link
                                href={cat.path}
                                className={`${styles.link} ${isActive ? styles.active : ''}`}
                            >
                                {cat.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
