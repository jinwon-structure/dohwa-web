import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground} />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Innovative Structural
                    <span className={styles.highlight}>Engineering</span>
                </h1>
                <p className={styles.subtitle}>
                    Building the future with precision and creativity.<br className="hidden md:block" />
                    We deliver value through advanced engineering solutions.
                </p>

                <div className={styles.actions}>
                    <a href="/archive" className={styles.primaryButton}>
                        Explore Archive
                    </a>
                    <a href="/contact" className={styles.secondaryButton}>
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
