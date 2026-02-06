'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { ProjectData } from '@/lib/projects';
import styles from './FeaturedProjects.module.css';

interface FeaturedProjectsProps {
    projects: ProjectData[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Card width + gap
            const currentScroll = scrollContainerRef.current.scrollLeft;
            const newScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="featured-projects" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>대표 프로젝트</h2>
                    <div className={styles.controls}>
                        <button
                            className={styles.controlBtn}
                            onClick={() => scroll('left')}
                            aria-label="Previous project"
                        >
                            &larr;
                        </button>
                        <button
                            className={styles.controlBtn}
                            onClick={() => scroll('right')}
                            aria-label="Next project"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>

                <div className={styles.gallery} ref={scrollContainerRef}>
                    {projects.map((project) => (
                        <Link href={`/projects/${project.id}`} key={project.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div className={styles.image}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className={styles.overlay}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.location}>{project.location}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
