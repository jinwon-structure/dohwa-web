import { Metadata } from 'next';
import Link from 'next/link';
import styles from './tech.module.css';

export const metadata: Metadata = {
    title: '사업소개 - DOHWA Engineering',
    description: '도화기술 사업 영역 - 구조설계, 내진설계, 비구조 요소 내진설계, PC 구조, VE 검토',
};

// 사업 영역 데이터
const services = [
    {
        id: 1,
        title: "Structural Design",
        titleKo: "신축 구조설계 및 리모델링 구조설계",
        desc: "신축 및 리모델링 구조설계 과정은 건축물의 안전성, 내구성, 기능성 등을 고려하여 적절한 구조물을 설계하는 것을 목표로 합니다. 리모델링 구조설계는 기존 건물이나 시설을 개조하거나 개선할 때 발생하는 구조적인 요구를 충족시키기 위해 구조적인 변경이나 보강을 수행하는 과정을 말합니다.",
        tags: ["신축설계", "리모델링", "구조보강"],
        icon: "🏗️"
    },
    {
        id: 2,
        title: "Performance Based Design",
        titleKo: "내진 및 내풍 성능설계",
        desc: "내진 내풍 성능설계는 건물이 지진 및 강한 바람과 같은 자연재해에 대비하여 안전하게 설계되도록 하는 과정을 의미합니다. 강도 및 강성 등의 인자를 고려하여 건물의 구조를 설계하고 강화하는 것을 포함합니다. 이를 통해 내진 내풍 성능이 향상되고, 건물의 안전성과 내구성이 향상됩니다.",
        tags: ["내진설계", "내풍설계", "PBD"],
        icon: "🌪️"
    },
    {
        id: 3,
        title: "Non-structural Seismic Design",
        titleKo: "비구조 요소 내진설계",
        desc: "비구조 요소 내진설계는 건물의 비구조적인 요소들이 지진 등의 자연재해에 대비하여 안전하게 설계되는 과정을 의미합니다. 파티션 벽, 천장시스템, 창문 및 탱크, 장비패드 등이 포함됩니다. 이러한 구성요소들이 지진 또는 강풍으로 인한 외부 하중에 대해 안정적으로 대응할 수 있도록 보장합니다.",
        tags: ["비구조요소", "KDS 41 17 00", "천장/파티션"],
        icon: "🧱",
        featured: true,
        link: "/calc"
    },
    {
        id: 4,
        title: "PC Structure Design",
        titleKo: "PC 구조설계",
        desc: "PC 구조설계는 지하주차장, 물류창고 등 PC 구조물에 대한 설계를 수행하게 됩니다. 프리캐스트 콘크리트(PC)의 장점을 활용하여 공기 단축과 품질 향상을 동시에 실현합니다.",
        tags: ["PC구조", "물류창고", "지하주차장"],
        icon: "🏭"
    },
    {
        id: 5,
        title: "Value Engineering",
        titleKo: "시공전 VE 및 설계 적합성 검토",
        desc: "시공전 VE(Value Engineering) 및 설계 적정성 검토는 건설 프로젝트가 시공되기 전에 가치공학 및 설계 적합성을 평가하고 개선하는 프로세스입니다. 비용 효율성, 성능, 품질을 향상시키기 위해 기술적, 경제적, 기능적인 측면을 종합적으로 검토합니다.",
        tags: ["VE검토", "설계적합성", "비용최적화"],
        icon: "💰"
    },
    {
        id: 6,
        title: "AI-Powered Optimization",
        titleKo: "AI 기반 구조 최적화 솔루션",
        desc: "도화기술은 엔지니어의 통찰력에 AI의 연산력을 더해, 건설 IT의 새로운 표준을 세웁니다. 수천 개의 설계 대안을 즉각 도출하고, 공기 단축, 물량 절감, 탄소 중립을 동시에 실현합니다. 단순 반복 업무는 AI가 처리하고, 전문가는 창의적 판단에 몰입합니다.",
        tags: ["AI최적화", "자동화설계", "탄소중립"],
        icon: "🤖"
    }
];

export default function TechPage() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <span className={styles.badge}>DOHWA HISTORY</span>
                <h1 className={styles.title}>사업소개</h1>
                <p className={styles.subtitle}>
                    도화기술 사업 영역 2026
                </p>
            </section>

            {/* Introduction Section */}
            <section className={styles.introSection}>
                <div className={styles.introContent}>
                    <p>
                        도화기술은 다양한 구조설계 분야에 특화되어 있습니다. 신축건물의 구조설계나 리모델링 프로젝트의 구조설계,
                        안전진단 뿐만 아니라 <strong>내진 및 내풍 성능설계</strong>, <strong>비구조 요소의 내진설계</strong>,
                        PC 구조물의 설계, 시공전 VE 및 설계 적합성 검토에 이르기까지 다양한 분야에서 우수한 결과물을 제공합니다.
                    </p>
                    <p>
                        저희의 종합적인 서비스는 혁신적인 해결책과 엄격한 도서 품질 기준을 바탕으로 하며,
                        프로젝트가 안전하게 진행됨을 보장합니다. <strong>고객님의 비전을 신뢰하고 전문적으로 구현해 드립니다.</strong>
                    </p>
                </div>
            </section>

            {/* Featured: 비구조 요소 내진설계 */}
            <section className={styles.featuredSection}>
                <div className={styles.featuredCard}>
                    <div className={styles.featuredBadge}>✨ 핵심 서비스</div>
                    <div className={styles.featuredContent}>
                        <div className={styles.featuredIcon}>🧱</div>
                        <div className={styles.featuredText}>
                            <h2>비구조 요소 내진설계</h2>
                            <p>
                                건물의 비구조적인 요소들이 지진에 대비하여 안전하게 설계되는 과정입니다.
                                파티션 벽, 천장시스템, 창문, 탱크, 장비패드 등 비구조 요소의 내진 안전성을 확보합니다.
                            </p>
                            <div className={styles.featuredTags}>
                                <span>KDS 41 17 00</span>
                                <span>조적벽체</span>
                                <span>천장 브레이스</span>
                                <span>장비 앵커</span>
                            </div>
                            <Link href="/calc" className={styles.featuredButton}>
                                내진설계 계산기 바로가기 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.gridSection}>
                <h2 className={styles.sectionTitle}>사업 영역</h2>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${styles.card} ${service.featured ? styles.cardFeatured : ''}`}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                            </div>
                            <h4 className={styles.cardTitleKo}>{service.titleKo}</h4>
                            <p className={styles.cardDesc}>{service.desc}</p>
                            <div className={styles.tagList}>
                                {service.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            {service.link && (
                                <Link href={service.link} className={styles.cardLink}>
                                    자세히 보기 →
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* AI Section */}
            <section className={styles.aiSection}>
                <div className={styles.aiContent}>

                    <h2>설계의 진화, 가치의 극대화</h2>
                    <p className={styles.aiSubtitle}>AI 기반 구조 최적화 솔루션</p>
                    <div className={styles.aiFeatures}>
                        <div className={styles.aiFeature}>
                            <span className={styles.aiFeatureIcon}>⚡</span>
                            <div>
                                <h4>초지능형 설계 생성</h4>
                                <p>AI 알고리즘으로 다양한 설계 대안을 즉각 도출, 최적의 구조 시스템을 제안합니다.</p>
                            </div>
                        </div>
                        <div className={styles.aiFeature}>
                            <span className={styles.aiFeatureIcon}>🌱</span>
                            <div>
                                <h4>지속 가능한 최적화</h4>
                                <p>구조적 안전성을 넘어 공기 단축, 물량 절감, 탄소 중립을 동시에 실현합니다.</p>
                            </div>
                        </div>
                        <div className={styles.aiFeature}>
                            <span className={styles.aiFeatureIcon}>🎯</span>
                            <div>
                                <h4>엔지니어링의 재정의</h4>
                                <p>단순 반복 업무는 AI가 처리하고, 전문가는 창의적 판단과 전략적 의사결정에 몰입합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
