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
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <p>(주) 도화기술 | 3소 소장 김진원 | 사업자등록번호 745-86-01353</p>
                        <p>서울시 강남구 역삼로 9길 13 한신빌딩 5층</p>
                        <p>Tel. 02-539-0305 | E-mail. kjw@dohwa.pro</p>
                    </div>
                    <p className={styles.copyright}>&copy; {currentYear} DOHWA Engineering Co., Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
