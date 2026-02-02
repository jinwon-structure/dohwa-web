import styles from './CoreValues.module.css';

export default function CoreValues() {
    const values = [
        {
            title: '고객중심',
            subtitle: 'Customer Centric',
            description: '고객의 목소리에 귀 기울이는 전문성, 고객중심의 솔루션 제공',
            color: '#2D2A4A' // Dark purple from image
        },
        {
            title: '기술중심',
            subtitle: 'Technology Centric',
            description: '혁신을 넘어 안전으로 창의적 구조설계 제공',
            color: '#FFFFFF', // White center
            isCenter: true
        },
        {
            title: '미래중심',
            subtitle: 'Future Centric',
            description: '미래를 형성하는 기술 발전을 위한 전문 기술 개발',
            color: '#3B8EA5' // Blue from image
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Technology Development at Dohwa</h2>
                    <p className={styles.subtitle}>창의적 엔지니어링 기업 도화의 도전은 기술개발에서 시작됩니다.</p>
                </div>

                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`${styles.circle} ${value.isCenter ? styles.centerCircle : ''}`}
                        >
                            <div className={styles.circleContent}>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <h4 className={styles.valueSubtitle}>{value.subtitle}</h4>
                                <p className={styles.valueDesc}>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
