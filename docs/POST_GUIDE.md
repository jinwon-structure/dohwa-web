# 포스트 작성 가이드

## 1. 새 포스트 작성 흐름

```
1. 이미지 준비
      ↓
2. 이미지 폴더 생성 및 파일 저장
      ↓
3. 마크다운 파일 작성
      ↓
4. Git 커밋 & 푸시
      ↓
5. Vercel 자동 배포 (약 1-2분)
```

---

## 2. 이미지 관리

### 폴더 구조
```
public/images/posts/{post-slug}/
├── cover.jpg    ← 대표 이미지 (Live Tech Feed 카드용)
├── 01.jpg       ← 본문 이미지 1
├── 02.jpg       ← 본문 이미지 2
└── ...
```

### 파일 명명 규칙
| 용도 | 파일명 | 형식 |
|------|--------|------|
| 대표 이미지 | `cover.jpg` | JPG 권장 |
| 본문 이미지 | `01.jpg`, `02.jpg`, ... | JPG, PNG, WebP, GIF |

### 예시
포스트 slug가 `emergency-exit-light-seismic`인 경우:
```
public/images/posts/emergency-exit-light-seismic/
├── cover.jpg
├── 01.jpg
├── 02.png
└── 03.gif
```

---

## 3. 마크다운 파일 작성

### 저장 위치
```
src/content/posts/{post-slug}.md
```

### Frontmatter 템플릿
```yaml
---
title: '포스트 제목'
date: '2024-02-04'
category: 'Seismic'  # Structure, Performance, Seismic, PC, R&D 등
excerpt: '포스트 요약 (1-2문장)'
relatedLaw: 'KDS 41 17 00'  # 관련 법규 (선택)
image: '/images/posts/{slug}/cover.jpg'  # 대표 이미지
---
```

### 본문 이미지 삽입
```markdown
## 1. 섹션 제목

내용 텍스트...

![이미지 설명](/images/posts/{slug}/01.jpg)

추가 내용...
```

---

## 4. 전체 예시

### 마크다운 파일: `src/content/posts/new-post-example.md`
```markdown
---
title: '새 포스트 예시'
date: '2024-02-04'
category: 'Seismic'
excerpt: '새 포스트의 요약 설명입니다.'
relatedLaw: 'KDS 41 17 00'
image: '/images/posts/new-post-example/cover.jpg'
---

## 1. 개요

포스트 내용 시작...

![개요 이미지](/images/posts/new-post-example/01.jpg)

## 2. 상세 내용

추가 설명...

![상세 이미지](/images/posts/new-post-example/02.jpg)
```

### 이미지 폴더 구조
```
public/images/posts/new-post-example/
├── cover.jpg
├── 01.jpg
└── 02.jpg
```

---

## 5. Git 배포 명령어

```powershell
# 1. 변경사항 추가
git add .

# 2. 커밋
git commit -m "feat: Add new post - 포스트제목"

# 3. 푸시 (Vercel 자동 배포)
git push
```

---

## 6. AI 자동화 참고사항

AI가 포스트를 자동 생성할 때 따라야 할 규칙:

1. **slug 생성**: 제목을 영문 소문자 + 하이픈으로 변환
2. **이미지 폴더**: `public/images/posts/{slug}/` 자동 생성
3. **대표 이미지**: 항상 `cover.jpg` 사용
4. **본문 이미지**: 순번(`01`, `02`, ...)으로 명명
5. **마크다운 경로**: `/images/posts/{slug}/파일명` 사용
