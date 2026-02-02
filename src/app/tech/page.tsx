import { Metadata } from 'next';
import styles from './tech.module.css';

export const metadata: Metadata = {
    title: 'Technology - DOHWA Engineering',
    description: 'Core Technologies and Expertise of DOHWA Engineering',
};

// Data for technologies
const technologies = [
    {
        id: 1,
        title: "High-Rise Building Design",
        titleKo: "초고층 및 일반 건축물 설계",
        desc: "최첨단 구조 해석 기법을 통해 초고층 건물의 안정성을 확보하고, 효율적인 구조 시스템을 제안합니다. 복잡한 비정형 구조물에 대한 최적의 솔루션을 도출합니다.",
        tags: ["High-Rise", "Complex Geometry", "Structural Optimization"],
        icon: "🏢"
    },
    {
        id: 2,
        title: "Performance Based Design",
        titleKo: "성능기반설계 (PBD)",
        desc: "단순한 법규 준수를 넘어, 실제 지진 발생 시 구조물의 거동을 예측하고 목표 성능을 확보하는 선진적인 내진 설계 기법을 적용합니다.",
        tags: ["Non-linear Analysis", "Seismic Safety", "PBD"],
        icon: "📊"
    },
    {
        id: 3,
        title: "Seismic Retrofit",
        titleKo: "내진설계 및 내진보강",
        desc: "기존 건축물의 내진 성능을 평가하고, 최적의 보강 공법을 통해 안전성을 증대시킵니다. 경제성과 시공성을 고려한 합리적인 보강안을 제시합니다.",
        tags: ["Retrofit", "Seismic Evaluation", "Safety Assessment"],
        icon: "🏗️"
    },
    {
        id: 4,
        title: "Value Engineering",
        titleKo: "경제성 검토 (VE)",
        desc: "설계 초기 단계부터 구조 시스템의 경제성을 면밀히 검토하여, 안전성을 유지하면서도 공사비를 절감할 수 있는 최적의 대안을 마련합니다.",
        tags: ["Cost Reduction", "Efficiency", "Value Analysis"],
        icon: "💰"
    }
];

export default function TechPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Core Capabilities</h1>
                <p className={styles.subtitle}>
                    도화기술은 끊임없는 연구개발과 기술혁신을 통해<br />
                    구조 엔지니어링의 새로운 기준을 제시합니다.
                </p>
            </section>

            <section className={styles.gridSection}>
                <div className={styles.grid}>
                    {technologies.map((tech) => (
                        <div key={tech.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {tech.icon}
                                </div>
                                <h2 className={styles.cardTitle}>{tech.title}</h2>
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', fontWeight: 600 }}>{tech.titleKo}</h3>
                            <p className={styles.cardDesc}>{tech.desc}</p>
                            <div className={styles.tagList}>
                                {tech.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
