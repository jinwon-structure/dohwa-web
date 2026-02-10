import { Metadata } from 'next';
import Image from 'next/image';
import styles from './contact.module.css';

export const metadata: Metadata = {
    title: '오시는 길 · 연락처',
    description: '(주)도화기술 오시는 길, 연락처 안내. 서울시 강남구 역삼로 9길 13 한신빌딩 5층. Tel. 02-539-0305',
};

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>
                    Innovative Structural Engineering & Advanced Technology Archive
                </p>
            </div>

            <div className={styles.content}>
                <div className={styles.infoSection}>
                    <div className={styles.logoBox}>
                        <Image
                            src="https://dohwa.pro/wp-content/uploads/2024/04/cropped-logo_black_small-1.png"
                            alt="Dohwa Engineering Logo"
                            width={180}
                            height={60}
                            className={styles.logo}
                            unoptimized
                        />
                    </div>

                    <div className={styles.infoGroup}>
                        <div className={styles.item}>
                            <span className={styles.label}>Company</span>
                            <span className={styles.value}>(주) 도화기술</span>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.label}>Representative</span>
                            <span className={styles.value}>3소 소장 김진원</span>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.label}>Registration No.</span>
                            <span className={styles.value}>745-86-01353</span>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.label}>Address</span>
                            <span className={styles.value}>
                                서울시 강남구 역삼로 9길 13 한신빌딩 5층<br />
                                (06242) 5F Hansin Bldg, 13, Yeoksam-ro 9-gil, Gangnam-gu, Seoul, Korea
                            </span>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.label}>Contact</span>
                            <span className={styles.value}>
                                Tel. 02-539-0305<br />
                                E-mail. kjw@dohwa.pro
                            </span>
                        </div>

                        <div className={styles.item}>
                            <span className={styles.label}>Careers</span>
                            <span className={styles.value}>Talent is always welcome</span>
                        </div>
                    </div>

                    <div className={styles.contactActions}>
                        <a href="mailto:kjw@dohwa.pro" className={styles.actionButton}>
                            Send Email
                        </a>
                        <a href="tel:025390305" className={`${styles.actionButton} ${styles.secondary}`}>
                            Call Us
                        </a>
                    </div>
                </div>

                <div className={styles.mapSection}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.829198208886!2d127.0326443!3d37.4924194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14e1a0dfd1f%3A0x6b5e0c5f5e2d1d0!2z7ISc7Jq47Yq567OE7IucIOs1euuCqOq1rCDsl63sSamroCDXqiA56rCAIDEz!5e0!3m2!1sko!2skr!4v1706927000000!5m2!1sko!2skr&z=17"
                        className={styles.mapFrame}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dohwa Engineering Location"
                    />
                </div>
            </div>
        </div>
    );
}
