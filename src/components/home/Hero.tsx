import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground} />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Innovative Structural<br />
                    <span className={styles.highlight}>Engineering</span>
                </h1>
                <p className={styles.subtitle}>
                    혁신적인 엔지니어링과 효율적인 협업을 통해<br />
                    고객들에게 새로운 가치를 제공합니다.
                </p>

                <div className={styles.actions}>
                    <a href="#featured-projects" className={styles.primaryButton}>
                        Explore Projects
                    </a>
                    <a href="/archive" className={styles.secondaryButton}>
                        Technical Archive
                    </a>
                </div>
            </div>
        </section>
    );
}
