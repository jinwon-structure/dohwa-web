import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground} />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <span className={styles.tagline}>Innovative Structural Engineering</span>
                <h1 className={styles.title}>
                    창의적인 <span className={styles.highlight}>엔지니어링</span>
                </h1>
                <p className={styles.subtitle}>
                    혁신적인 엔지니어링과 효율적인 협업을 통해<br />
                    고객들에게 새로운 가치를 제공합니다.
                </p>

                <div className={styles.actions}>
                    <a href="/archive" className={styles.primaryButton}>
                        기술자료 보기
                    </a>
                    <a href="/contact" className={styles.secondaryButton}>
                        문의하기
                    </a>
                </div>
            </div>
        </section>
    );
}
