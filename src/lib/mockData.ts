export interface Post {
    id: string;
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    date: string;
    content: string; // Markdown content
    relatedLaw?: string;
    drawingUrl?: string;
    toc?: { id: string; label: string; level: number }[];
}

export const MOCK_POSTS: Post[] = [
    {
        id: '1',
        slug: 'performance-based-design',
        title: 'Performance Based Design for High-Rise',
        category: 'Structure',
        excerpt: 'Detailed analysis of wind load simulation results for the new 50-story complex, focusing on damping systems.',
        date: '2024.02.01',
        relatedLaw: 'https://law.go.kr/LSW/lsInfoP.do?efYd=20220211&lsiSeq=239566',
        drawingUrl: '/drawings/sample-dwg.pdf',
        toc: [
            { id: 'intro', label: '1. Introduction', level: 1 },
            { id: 'methodology', label: '2. Methodology', level: 1 },
            { id: 'wind-load', label: '2.1 Wind Load Simulation', level: 2 },
            { id: 'results', label: '3. Results', level: 1 },
        ],
        content: `# Performance Based Design for High-Rise

## 1. Introduction
High-rise buildings are subject to significant lateral forces...

## 2. Methodology
We utilized **NFE (Non-linear Finite Element)** analysis...

### 2.1 Wind Load Simulation
Using *RWDI* wind tunnel test data...

## 3. Results
The maximum displacement was reduced by 15%...
    `
    },
    {
        id: '2',
        slug: 'seismic-retrofitting-kds-41',
        title: 'Seismic Retrofitting Guidelines (KDS 41)',
        category: 'Seismic',
        excerpt: 'Updated rapid assessment protocols for existing reinforced concrete buildings in accordance with KDS 41.',
        date: '2024.01.28',
        toc: [
            { id: 'kds41', label: 'KDS 41 Standard', level: 1 },
            { id: 'assessment', label: 'Rapid Assessment', level: 1 }
        ],
        content: `# Seismic Retrofitting

## KDS 41 Standard
The Korean Design Standard (KDS) 41 has been updated...
    `
    },
    {
        id: '3',
        slug: 'pc-joint-details',
        title: 'Precast Concrete Joint Details',
        category: 'PC',
        excerpt: 'Standardization of connection details for industrial warehouse frames to improve constructability.',
        date: '2024.01.15',
        toc: [
            { id: 'connection', label: 'Connection Types', level: 1 },
            { id: 'drawings', label: 'Detail Drawings', level: 1 }
        ],
        content: `# PC Joint Details

## Connection Types
1. Wet Connection
2. Dry Connection

## Detail Drawings
![Detail A](/images/detail-a.png)
    `
    },
];

export function getPostBySlug(slug: string) {
    return MOCK_POSTS.find(post => post.slug === slug);
}
