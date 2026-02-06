import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Seismic Calculator - DOHWA Engineering',
    description: '비구조 요소 내진설계 계산기 - 각 요소별 내진 하중 계산',
};

// 계산기 목록 데이터
const calculators = [
    {
        id: 'floor-mounted',
        title: 'Floor-Mounted Equipment',
        titleKo: '바닥 설치형 장비',
        desc: '바닥에 설치된 기계/전기 장비의 내진 앵커 하중을 계산합니다. 중요도, 증폭계수, 충격계수를 고려한 설계 지진력을 산출합니다.',
        icon: '🔩',
        tags: ['앵커 설계', 'KDS 41 17 00'],
        available: true,
    },
    {
        id: 'wall-mounted',
        title: 'Wall-Mounted Equipment',
        titleKo: '벽체 부착형 장비',
        desc: '벽체에 부착된 장비 및 캐비닛의 고정력을 계산합니다. 벽체 종류와 부착 높이에 따른 설계 하중을 산출합니다.',
        icon: '📦',
        tags: ['벽체 고정', '앵커 볼트'],
        available: false,
    },
    {
        id: 'ceiling',
        title: 'Ceiling System',
        titleKo: '천장 시스템',
        desc: '천장재 및 조명기구의 내진 지지력을 계산합니다. 천장 면적, 무게, 높이에 따른 횡력 및 버팀대 간격을 산출합니다.',
        icon: '💡',
        tags: ['천장 브레이스', '조명기구'],
        available: false,
    },
    {
        id: 'mep',
        title: 'MEP Systems',
        titleKo: '배관/덕트 시스템',
        desc: '기계/전기/배관 설비의 횡지지력을 계산합니다. 배관 사이즈, 내용물에 따른 브레이스 간격을 산출합니다.',
        icon: '🔧',
        tags: ['배관 지지', '덕트 브레이스'],
        available: false,
    },
];

export default function CalcPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Seismic Calculator</h1>
                <p className={styles.subtitle}>
                    비구조 요소 내진설계 계산기<br />
                    KDS 41 17 00 기준에 따른 설계 지진력 산정
                </p>
            </section>

            <section className={styles.gridSection}>
                <div className={styles.grid}>
                    {calculators.map((calc) => (
                        <div key={calc.id} className={`${styles.card} ${!calc.available ? styles.disabled : ''}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {calc.icon}
                                </div>
                                <h2 className={styles.cardTitle}>{calc.title}</h2>
                            </div>
                            <h3 className={styles.cardTitleKo}>{calc.titleKo}</h3>
                            <p className={styles.cardDesc}>{calc.desc}</p>
                            <div className={styles.tagList}>
                                {calc.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <div className={styles.cardFooter}>
                                {calc.available ? (
                                    <Link href={`/calc/${calc.id}`} className={styles.calcButton}>
                                        계산하기 →
                                    </Link>
                                ) : (
                                    <span className={styles.comingSoon}>Coming Soon</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
