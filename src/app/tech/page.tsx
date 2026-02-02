import styles from './page.module.css';

export const metadata = {
    title: '기술소개 (Technology) | Dohwa Engineering',
    description: '도화기술의 혁신적인 구조설계 및 엔지니어링 솔루션을 소개합니다.',
};

export default function TechPage() {
    const services = [
        {
            title: '신축 구조설계 및 리모델링 구조설계',
            description: '신축 및 리모델링 구조설계 과정은 건축물의 안전성, 내구성, 기능성 등을 고려하여 적절한 구조물을 설계하는 것을 목표로 합니다. 리모델링 구조설계는 기존 건물이나 시설을 개조하거나 개선할때 발생하는 구조적인 요구를 충족시키기 위해 구조적인 변경이나 보강을 수행하는 과정을 말합니다. 이 과정은 기존 건물의 구조적 결함을 해결하고 안전성을 향상시키는데 중점을 두며, 건물의 새로운 용도나 디자인 변경을 지원하기도 합니다.',
            stats: '신축 및 리모델링 설계 자동화 시스템 구축'
        },
        {
            title: '내진 및 내풍 성능설계',
            description: '내진 내풍 성능설게는 건물이 지진 및 강한 바람과 같은 자연재해에 대비하여 안전하게 설계되도록 하는 과정을 의미합니다. 이러한 설계는 건물 구조물이 지진 또는 강풍으로 인한 외부 하중에 대해 안정적으로 대응할수 있도록 보장하며, 강도 및 강성등의 인자를 고려하여 건물의 구조를 설계하고 강화하는 것을 포함합니다. 이를 통해 내진 내풍 성능이 향상되고, 건물의 안전성과 내구성이 향상됩니다.',
            stats: '자동화 설계 솔루션 개발로 생산성 향상 부분 1위'
        },
        {
            title: '비구조 요소 내진설계',
            description: '비구조 요소 내진설계는 건물의 비구조적인 요소들이 지진 등의 자연재해에 대비하여 안전하게 설계되는 과정을 의미합니다. 이러한 비구조 요소는 건물의 주요 구조물이 아니지마, 지진이나 강풍으로부터 건물을 보호하고 안전성을 유지하는데 중요한 역활을 합니다. 이러한 요소에는 파티션 멱, 천장시스템, 창문 및 탱크 장비패드 등이 포함될수 있습니다. 비구조 요소 내진설계는 이러한 구성요소들이 지진 또는 강풍으로 인한 외부 하중에 대해 안정적으로 대응할 수 있도록 보장하며, 건물의 안전성을 최적화하는 것을 목표로 합니다.',
            stats: '비구조 요소 설계 자동화 부문 1위'
        },
        {
            title: 'PC 구조설계',
            description: 'PC 구조설계는 지하주차장, 물류창고 등 PC 구조물에 대한 설계를 수행하게 됩니다.',
            stats: '물량산출, 도면 자동화 시스템 구축'
        },
        {
            title: '시공전 VE 및 설계 적합성 검토',
            description: '시공전 VE(Value Engineering) 및 설계 적정성 검토는 건설 프로젝트가 시공되기 전에 가치공학 및 설계 적합성을 평가하고 개선하는 프로세스를 의미한다. 이 프로세스는 프로젝트의 비용 효율성, 성능, 품질을 향상시키기 위해 시공전에 기술적, 경제적, 기능적인 측면을 종합적으로 검토하는 것을 목표로 합니다. VE 및 설계 적정성 검토는 프로젝트의 요구 사항과 목표를 충족시키면서도 비용을 최적화 하고, 잠재적인 문제나 결함을 사전에 식별하여 해결할 수 있는 기회를 제공합니다. 이를 통해 프로젝트의 효율성을 향상시키고, 성공적인 건설을 지원하는데 기여합니다.',
            stats: '시공성, 경제성 고려한 설계 시스템 구축'
        }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}>
                    <h1 className={styles.heroTitle}>도화기술 사업 영역 2024</h1>
                    <p className={styles.heroSubtitle}>
                        혁신적인 해결책과 엄격한 도서 품질 기준을 바탕으로<br />
                        고객님의 비전을 신뢰하고 전문적으로 구현해 드립니다.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className={styles.intro}>
                <div className={styles.introContent}>
                    <h2>dohwa HISTORY</h2>
                    <p>
                        도화기술은 다양한 구조설계 분야에 특화되어 있습니다. 신축건물의 구조설계나 리모델링 프로젝트의 구조설계, 안전진단 뿐만 아니라 내진 및 내풍 성능설계, 비구조 요소의 내진설계, PC 구조물의 설계, 시공전 VE 및 설계 적합성 검토에 이르기 까지 다양한 분야에서 우수한 결과물을 제공합니다.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className={styles.services}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDesc}>{service.description}</p>
                            <div className={styles.serviceStats}>
                                <span>{service.stats}</span>
                                <button className={styles.viewDetailBtn}>상세보기</button>
                            </div>
                        </div>
                        <div className={styles.serviceNumber}>{(index + 1).toString().padStart(2, '0')}</div>
                    </div>
                ))}
            </section>
        </div>
    );
}
