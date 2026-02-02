'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
                DOHWA ENGINEERING
            </Link>

            <button
                className={styles.mobileMenuBtn}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
                    <span />
                    <span />
                    <span />
                </div>
            </button>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <Link href="/about" className={styles.navLink} onClick={closeMenu}>About</Link>
                <Link href="/tech" className={styles.navLink} onClick={closeMenu}>Technology</Link>
                <Link href="/archive" className={styles.navLink} onClick={closeMenu}>Archive</Link>
                <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
            </nav>
        </header>
    );
}
