import styles from './Services.module.css';
import { Building2, Activity, ShieldCheck, Lightbulb } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: '구조설계',
            titleEn: 'Structural Design',
            description: '신축 및 리모델링 건물에 대한 안전하고 경제적인 구조 설계 결과물을 제공합니다.',
            icon: <Building2 size={40} className={styles.iconSvg} />
        },
        {
            title: '성능설계',
            titleEn: 'Performance Based Design',
            description: '건물이 지진 및 바람과 같은 자연 재해에 대비하여 안전하게 거동하도록 내진 및 내풍 성능을 향상시킵니다.',
            icon: <Activity size={40} className={styles.iconSvg} />
        },
        {
            title: '비구조내진설계',
            titleEn: 'Non-Structural Seismic',
            description: '지진이나 강풍으로부터 건물을 보호하는 비구조 요소에 대한 안정적인 내진 설계를 제공합니다.',
            icon: <ShieldCheck size={40} className={styles.iconSvg} />
        },
        {
            title: 'VE / 설계 적정성',
            titleEn: 'Value Engineering',
            description: '프로젝트의 비용 효율성과 성능 품질을 향상시키고 잠재적인 문제를 사전에 해결합니다.',
            icon: <Lightbulb size={40} className={styles.iconSvg} />
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Business Area</h2>
                    <p className={styles.subtitle}>도화기술의 경쟁력은 다양한 분야에 특화된 구조설계 솔루션에서 시작됩니다</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
