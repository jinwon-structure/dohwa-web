'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

// 계산기 타입 정의
const calculatorTypes: { [key: string]: { title: string; titleKo: string } } = {
    'floor-mounted': {
        title: 'Floor-Mounted Equipment',
        titleKo: '바닥 설치형 장비 내진 계산기',
    },
    'masonry-wall': {
        title: 'Masonry Wall Seismic Design',
        titleKo: '조적벽체 내진 계산기',
    },
};

interface CalcPageProps {
    params: Promise<{ type: string }>;
}

export default function CalcTypePage({ params }: CalcPageProps) {
    // React.use()로 params unwrap 또는 동기적으로 처리
    const [calcType, setCalcType] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    // params를 동기적으로 처리하기 위한 useEffect 대체
    if (isLoading) {
        params.then((p) => {
            setCalcType(p.type);
            setIsLoading(false);
        });
        return <div className={styles.loading}>로딩 중...</div>;
    }

    const calcInfo = calculatorTypes[calcType];
    if (!calcInfo) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <Link href="/calc">← 계산기 목록</Link>
            </div>

            <header className={styles.header}>
                <h1 className={styles.title}>{calcInfo.titleKo}</h1>
                <p className={styles.subtitle}>{calcInfo.title}</p>
            </header>

            {calcType === 'floor-mounted' && <FloorMountedCalculator />}
            {calcType === 'masonry-wall' && <MasonryWallCalculator />}
        </div>
    );
}

// 바닥 설치형 장비 계산기 컴포넌트
function FloorMountedCalculator() {
    const [inputs, setInputs] = useState({
        Wp: 1000,       // 장비 중량 (N)
        Ip: 1.0,        // 중요도 계수
        ap: 1.0,        // 증폭 계수
        Rp: 2.5,        // 반응수정계수
        z: 0,           // 장비 설치 높이 (m)
        h: 10,          // 건물 높이 (m)
        Sds: 0.5,       // 단주기 설계 스펙트럼 가속도
    });

    const [result, setResult] = useState<{
        Fp: number;
        FpMin: number;
        FpMax: number;
        FpDesign: number;
    } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    const calculate = () => {
        const { Wp, Ip, ap, Rp, z, h, Sds } = inputs;

        // KDS 41 17 00 기준 계산식
        // Fp = (0.4 * ap * Sds * Wp / (Rp/Ip)) * (1 + 2 * z/h)
        const heightFactor = 1 + 2 * (z / h);
        const Fp = (0.4 * ap * Sds * Wp / (Rp / Ip)) * heightFactor;

        // 최소값: 0.3 * Sds * Ip * Wp
        const FpMin = 0.3 * Sds * Ip * Wp;

        // 최대값: 1.6 * Sds * Ip * Wp
        const FpMax = 1.6 * Sds * Ip * Wp;

        // 설계값: min과 max 사이
        const FpDesign = Math.min(Math.max(Fp, FpMin), FpMax);

        setResult({
            Fp: Math.round(Fp * 100) / 100,
            FpMin: Math.round(FpMin * 100) / 100,
            FpMax: Math.round(FpMax * 100) / 100,
            FpDesign: Math.round(FpDesign * 100) / 100,
        });
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.inputSection}>
                <h2 className={styles.sectionTitle}>입력 변수</h2>

                <div className={styles.inputGroup}>
                    <label>장비 중량 (Wp)</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            name="Wp"
                            value={inputs.Wp}
                            onChange={handleChange}
                        />
                        <span className={styles.unit}>N</span>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>중요도 계수 (Ip)</label>
                    <select name="Ip" value={inputs.Ip} onChange={handleChange}>
                        <option value="1.0">1.0 - 일반 시설</option>
                        <option value="1.5">1.5 - 필수 시설 (응급, 소방 등)</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label>증폭 계수 (ap)</label>
                    <select name="ap" value={inputs.ap} onChange={handleChange}>
                        <option value="1.0">1.0 - 강체 장착</option>
                        <option value="2.5">2.5 - 유연 스프링 마운트</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label>반응수정계수 (Rp)</label>
                    <select name="Rp" value={inputs.Rp} onChange={handleChange}>
                        <option value="1.5">1.5 - 취성 연결</option>
                        <option value="2.5">2.5 - 연성 연결 (일반)</option>
                        <option value="3.5">3.5 - 고연성 연결</option>
                    </select>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <label>장비 설치 높이 (z)</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                name="z"
                                value={inputs.z}
                                onChange={handleChange}
                            />
                            <span className={styles.unit}>m</span>
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>건물 높이 (h)</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                name="h"
                                value={inputs.h}
                                onChange={handleChange}
                            />
                            <span className={styles.unit}>m</span>
                        </div>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>단주기 설계스펙트럼 가속도 (SDS)</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            name="Sds"
                            value={inputs.Sds}
                            step="0.01"
                            onChange={handleChange}
                        />
                        <span className={styles.unit}>g</span>
                    </div>
                </div>

                <button className={styles.calcButton} onClick={calculate}>
                    계산하기
                </button>
            </div>

            {result && (
                <div className={styles.resultSection}>
                    <h2 className={styles.sectionTitle}>계산 결과</h2>

                    <div className={styles.formula}>
                        <p>Fp = (0.4 × ap × SDS × Wp) / (Rp/Ip) × (1 + 2z/h)</p>
                    </div>

                    <div className={styles.resultGrid}>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>계산값 (Fp)</span>
                            <span className={styles.resultValue}>{result.Fp.toLocaleString()} N</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>최소값</span>
                            <span className={styles.resultValue}>{result.FpMin.toLocaleString()} N</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>최대값</span>
                            <span className={styles.resultValue}>{result.FpMax.toLocaleString()} N</span>
                        </div>
                        <div className={`${styles.resultItem} ${styles.highlight}`}>
                            <span className={styles.resultLabel}>설계 지진력</span>
                            <span className={styles.resultValue}>{result.FpDesign.toLocaleString()} N</span>
                        </div>
                    </div>

                    <div className={styles.note}>
                        <p>※ KDS 41 17 00 비구조요소의 내진설계 기준에 따라 산정</p>
                        <p>※ 0.3 × SDS × Ip × Wp ≤ Fp ≤ 1.6 × SDS × Ip × Wp</p>
                    </div>
                </div>
            )}
        </div>
    );
}

// 조적벽체 계산기 컴포넌트
function MasonryWallCalculator() {
    const [inputs, setInputs] = useState({
        Sds: 0.5,       // 단주기 설계지반가속도 (g)
        Ip: 1.0,        // 중요도 계수
        z: 5,           // 벽체 설치 높이 (m)
        h: 10,          // 건물 높이 (m)
        ap: 1.0,        // 증폭계수 (조적벽체=1.0)
        Rp: 1.5,        // 반응수정계수 (조적벽체=1.5)
        Wp: 1.8,        // 단위면적당 중량 (kN/m²)
        H_wall: 3.0,    // 벽체 높이 (m)
        t: 0.19,        // 벽체 두께 (m)
    });

    const [result, setResult] = useState<{
        Fp: number;
        FpMin: number;
        FpMax: number;
        FpDesign: number;
        wp: number;
        M_max: number;
        H_allow: number;
        isOk: boolean;
    } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    const calculate = () => {
        const { Sds, Ip, z, h, ap, Rp, Wp, H_wall, t } = inputs;

        // KDS 41 17 00 기준 계산식
        // Fp = (0.4 * ap * Sds * Wp / (Rp/Ip)) * (1 + 2 * z/h)
        const heightFactor = 1 + 2 * (z / h);
        const Fp = (0.4 * ap * Sds * Wp / (Rp / Ip)) * heightFactor;

        // 최소값: 0.3 * Sds * Ip * Wp
        const FpMin = 0.3 * Sds * Ip * Wp;

        // 최대값: 1.6 * Sds * Ip * Wp
        const FpMax = 1.6 * Sds * Ip * Wp;

        // 설계값: min과 max 사이
        const FpDesign = Math.min(Math.max(Fp, FpMin), FpMax);

        // 단위면적당 면외력 (kN/m²)
        const wp = FpDesign;

        // 최대 휨모멘트 (단순지지 가정, kN·m/m)
        // M = wp * H² / 8
        const M_max = (wp * H_wall * H_wall) / 8;

        // 허용높이 계산 (조적벽체 두께비 기준, KDS 41 17 00)
        // 일반적으로 h/t ≤ 20 (보강이 없는 경우)
        // 허용높이 = 20 * t (간략화)
        const H_allow = 20 * t;

        // 판정
        const isOk = H_wall <= H_allow;

        setResult({
            Fp: Math.round(Fp * 1000) / 1000,
            FpMin: Math.round(FpMin * 1000) / 1000,
            FpMax: Math.round(FpMax * 1000) / 1000,
            FpDesign: Math.round(FpDesign * 1000) / 1000,
            wp: Math.round(wp * 1000) / 1000,
            M_max: Math.round(M_max * 1000) / 1000,
            H_allow: Math.round(H_allow * 100) / 100,
            isOk,
        });
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.inputSection}>
                <h2 className={styles.sectionTitle}>입력 변수</h2>

                <div className={styles.inputGroup}>
                    <label>단주기 설계지반가속도 (SDS)</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            name="Sds"
                            value={inputs.Sds}
                            step="0.01"
                            onChange={handleChange}
                        />
                        <span className={styles.unit}>g</span>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>중요도 계수 (Ip)</label>
                    <select name="Ip" value={inputs.Ip} onChange={handleChange}>
                        <option value="1.0">1.0 - 일반 시설</option>
                        <option value="1.5">1.5 - 필수 시설</option>
                    </select>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <label>벽체 설치 높이 (z)</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                name="z"
                                value={inputs.z}
                                onChange={handleChange}
                            />
                            <span className={styles.unit}>m</span>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>건물 높이 (h)</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                name="h"
                                value={inputs.h}
                                onChange={handleChange}
                            />
                            <span className={styles.unit}>m</span>
                        </div>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>단위면적당 중량 (Wp)</label>
                    <select name="Wp" value={inputs.Wp} onChange={handleChange}>
                        <option value="1.8">1.8 kN/m² - 0.5B 조적벽 (90mm)</option>
                        <option value="3.0">3.0 kN/m² - 1.0B 조적벽 (190mm)</option>
                        <option value="4.5">4.5 kN/m² - 1.5B 조적벽 (290mm)</option>
                    </select>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <label>벽체 높이 (H)</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                name="H_wall"
                                value={inputs.H_wall}
                                step="0.1"
                                onChange={handleChange}
                            />
                            <span className={styles.unit}>m</span>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>벽체 두께 (t)</label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                name="t"
                                value={inputs.t}
                                step="0.01"
                                onChange={handleChange}
                            />
                            <span className={styles.unit}>m</span>
                        </div>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <label>증폭계수 (ap)</label>
                        <select name="ap" value={inputs.ap} onChange={handleChange}>
                            <option value="1.0">1.0 - 조적벽체 (기본)</option>
                            <option value="2.5">2.5 - 유연 요소</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>반응수정계수 (Rp)</label>
                        <select name="Rp" value={inputs.Rp} onChange={handleChange}>
                            <option value="1.5">1.5 - 조적벽체 (기본)</option>
                            <option value="2.5">2.5 - 보강된 조적벽체</option>
                        </select>
                    </div>
                </div>

                <button className={styles.calcButton} onClick={calculate}>
                    계산하기
                </button>
            </div>

            {result && (
                <div className={styles.resultSection}>
                    <h2 className={styles.sectionTitle}>계산 결과</h2>

                    <div className={styles.formula}>
                        <p>Fp = (0.4 × ap × SDS × Wp) / (Rp/Ip) × (1 + 2z/h)</p>
                    </div>

                    <div className={styles.resultGrid}>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>계산값 (Fp)</span>
                            <span className={styles.resultValue}>{result.Fp} kN/m²</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>최소값</span>
                            <span className={styles.resultValue}>{result.FpMin} kN/m²</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>최대값</span>
                            <span className={styles.resultValue}>{result.FpMax} kN/m²</span>
                        </div>
                        <div className={`${styles.resultItem} ${styles.highlight}`}>
                            <span className={styles.resultLabel}>설계 면외력</span>
                            <span className={styles.resultValue}>{result.FpDesign} kN/m²</span>
                        </div>
                    </div>

                    <div className={styles.resultGrid}>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>최대 휨모멘트</span>
                            <span className={styles.resultValue}>{result.M_max} kN·m/m</span>
                        </div>
                        <div className={styles.resultItem}>
                            <span className={styles.resultLabel}>허용 높이 (h/t≤20)</span>
                            <span className={styles.resultValue}>{result.H_allow} m</span>
                        </div>
                    </div>

                    <div className={`${styles.verdict} ${result.isOk ? styles.pass : styles.fail}`}>
                        <span className={styles.verdictIcon}>{result.isOk ? '✓' : '✗'}</span>
                        <span className={styles.verdictText}>
                            {result.isOk
                                ? `적합 (H=${inputs.H_wall}m ≤ 허용=${result.H_allow}m)`
                                : `부적합 (H=${inputs.H_wall}m > 허용=${result.H_allow}m) - 보강 필요`}
                        </span>
                    </div>

                    <div className={styles.note}>
                        <p>※ KDS 41 17 00 비구조요소의 내진설계 기준에 따라 산정</p>
                        <p>※ 조적벽체: ap=1.0, Rp=1.5 (표 4.3-1)</p>
                        <p>※ 면외 휨모멘트: M = wp × H² / 8 (단순지지 가정)</p>
                    </div>
                </div>
            )}
        </div>
    );
}
