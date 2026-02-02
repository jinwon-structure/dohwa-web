import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>DOHWA Engineering</h3>
                        <p>Advanced Technology Archive</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.group}>
                            <h4>Company</h4>
                            <Link href="https://www.dohwa.co.kr" target="_blank">Corporate Site</Link>
                            <Link href="/about">About Us</Link>
                        </div>
                        <div className={styles.group}>
                            <h4>Contact</h4>
                            <p>Seoul, Korea</p>
                            <Link href="mailto:contact@dohwa.pro">contact@dohwa.pro</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} DOHWA Engineering Co., Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
