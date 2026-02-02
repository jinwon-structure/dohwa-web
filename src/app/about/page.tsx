import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: '회사소개 (About Us) | Dohwa Engineering',
    description: '도화기술의 설립이념, 비전, 그리고 고객과의 파트너십에 대해 소개합니다.',
};

export default function AboutPage() {
    return (
        <div className={styles.container}>

            {/* Top Intro Section with Side Border */}
            <section className={styles.topSection}>
                <div className={styles.topContent}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.sideBar}></div>
                        <h1 className={styles.mainTitle}>
                            차별화된 기술력과<br />
                            창의적인 엔지니어링으로
                        </h1>
                    </div>
                    <p className={styles.mainDescription}>
                        고객의 다양한 요구를 만족 시키며, 변화를 두려워하지 않고 지속적으로 도전하고 있습니다.
                        현재에 안주하지 않으며 언제나 변화와 차별화, 창의적인 엔지니어링을 향해 도전하고 있습니다.
                    </p>
                </div>
            </section>

            {/* Main Content Split Section */}
            <section className={styles.splitSection}>
                <div className={styles.wrapper}>

                    {/* Left Side: Images */}
                    <div className={styles.imageSide}>
                        <div className={styles.imageMain}>
                            <Image
                                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Architecture Facade"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.imageSub}>
                            <Image
                                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                                alt="Construction Detail"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Right Side: Philosophy Text */}
                    <div className={styles.textSide}>
                        <h2 className={styles.subTitle}>(주) 도화기술 설립이념</h2>
                        <div className={styles.divider}></div>

                        <div className={styles.textBlock}>
                            <strong className={styles.highlightText}>(주) 도화기술</strong>
                            <span>은 모든 프로젝트에서 최상의 고객 서비스와 우수한 고객 소통을 제공하는 것을 목표로 합니다.</span>
                        </div>

                        <p className={styles.copyText}>
                            우리는 지식이 풍부하고 창의적이고, 혁신적인 엔지니어들로 구성하고, 고급설계 소프트웨어와 기술을 제공해
                            건설업계의 최신 트렌드와 설계 코드 개정에 맞춰 지속적으로 발전하고자 노력합니다.
                            또한 직원들이 열린 마음으로 지식을 확장하고, 혁신적이고 경제적인 설계 솔루션을 제공하도록 지원하고 있습니다.
                            안전하고 효율적인 구조설계를 통해, 각 프로젝트가 최고의 성능을 발휘하도록 돕습니다.
                        </p>

                        <div className={styles.dividerSmall}></div>

                        <div className={styles.textBlock}>
                            <strong className={styles.highlightText}>(주) 도화기술</strong>
                            <span>은 구조 설계의 지속적인 혁신을 추구하며, 과거에 안주하지 않습니다.</span>
                        </div>

                        <p className={styles.copyText}>
                            다양한 사내 세미나와 전문 컨퍼런스를 제공하며, 엔지니어와 모델러들이 지속적으로 학습하고 기술을 향상하도록 돕습니다.
                            또한 지진공학회(EESK), 기술사회(KSEA), 강구조학회(KSSC), 건축학회(AIK)의 기술 및 코드 위원회에 참여하는 것을 장려하며,
                            엔지니어들이 기술반전에 대한 정보를 얻고 전문성을 키울수 있도록 합니다. 우리 엔지니어들은 다양한 협회에 참여해 왔습니다.
                        </p>

                        <p className={styles.copyText}>
                            우리는 성공적인 프로젝트를 위해 프로젝트 팀 구성원 간의 효과적인 커뮤니케이션이 핵심이라고 믿습니다.
                            고객과 컨설턴트와의 긴밀하고 개인적인 관계를 구축하고 이를 지속하는 것이 원활한 소통과 팀워크를 촉진한다고 생각합니다.
                        </p>

                        <p className={styles.lastText}>
                            다양한 경험을 통해 얻은 중요한 교훈은 성공의 핵심은 신뢰를 바탕으로 한 파트너십이라는 것입니다.
                            도화기술은 고객과의 신뢰를 기반으로 함께 성장하며, 각 프로젝트의 성공을 위해 함께 노력하는 파트너가 되겠습니다.
                        </p>

                    </div>

                </div>
            </section>

        </div>
    );
}
