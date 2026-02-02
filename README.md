# Dohwa Engineering Website
**(주) 도화기술 공식 홈페이지 및 기술 아카이브**

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![CSS Modules](https://img.shields.io/badge/Style-CSS%20Modules-blue) ![Status](https://img.shields.io/badge/Status-Live-success)

도화기술의 엔지니어링 역량과 프로젝트를 소개하는 공식 웹사이트입니다. Next.js 14 App Router를 기반으로 구축되었으며, 반응형 디자인과 현대적인 UI/UX를 제공합니다.

🔗 **Live Site**: [https://dohwa-web.vercel.app](https://dohwa-web.vercel.app)

## 🌟 Key Features (주요 기능)

-   **Home (`/`)**: 프리미엄 비디오/이미지 배경의 Hero 섹션 및 최신 프로젝트 라이브 피드.
-   **Technology (`/tech`)**: 핵심 기술(초고층 설계, 성능기반설계, 내진보강 등) 소개.
-   **Contact (`/contact`)**: Google 지도 연동 및 상세 비즈니스/연락처 정보.
-   **Archive (`/archive`)**: 기술 자료 및 엔지니어링 리포트 아카이브 (Markdown 기반).
-   **About (`/about`)**: 회사 소개 및 설립 이념 (고화질 건축 이미지 적용).

## 🛠 Tech Stack (기술 스택)

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: TypeScript
-   **Styling**: CSS Modules (Scoped CSS)
-   **Deployment**: Vercel

## 📂 Project Structure (폴더 구조)

```bash
src/
├── app/                  # Next.js App Router Pages
│   ├── about/           # 회사 소개 페이지
│   ├── contact/         # 연락처 및 지도 페이지
│   ├── tech/            # 기술 소개 페이지
│   ├── archive/         # 기술 자료실 (Dynamic Routes)
│   └── page.tsx         # 메인 페이지
├── components/          # Reusable UI Components
│   ├── common/          # Header, Footer 등 공통 컴포넌트
│   └── home/            # 메인 페이지 전용 컴포넌트 (Hero 등)
├── lib/                 # 유틸리티 함수 (Markdown 파싱 등)
└── content/             # (Optional) 로컬 콘텐츠 데이터
```

## 🚀 Getting Started (실행 방법)

### 1. 개발 서버 실행
```bash
npm run dev
# 접속: http://localhost:3000
```

### 2. 빌드 및 프로덕션 실행
```bash
npm run build
npm start
```

## 📝 License
Copyright © 2026 DOHWA Engineering Co., Ltd. All rights reserved.
