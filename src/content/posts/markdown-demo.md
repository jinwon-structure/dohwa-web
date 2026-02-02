---
title: 'Markdown Rendering Capability Test'
date: '2024-02-02'
category: 'System Check'
excerpt: 'Comprehensive test of Markdown rendering features including tables, images, code blocks, and complex formatting.'
---

## 1. Typography & Formatting

This is a **bold text**, *italic text*, and ~~strikethrough text~~.
You can also use `inline code` for technical terms.

> **Blockquote**: Engineering is the art of directing the great sources of power in nature for the use and convenience of man.

## 2. Lists

### Unordered List
* Structural Engineering
* Geotechnical Engineering
* Electrical Engineering

### Ordered List
1. Site Survey
2. Design Phase
3. Construction
4. Maintenance

## 3. Tables (GFM Support)

| Component | Status | Priority |
| :--- | :---: | ---: |
| Hero Section | ✅ Ready | High |
| Archive Page | ✅ Ready | Medium |
| Admin Panel | 🚧 Pending | Low |

## 4. Code Blocks

```typescript
// Example TypeScript Code
interface Engineer {
  name: string;
  license: boolean;
}

const engineer: Engineer = {
  name: "Dohwa Tech",
  license: true
};
```

## 5. Media (Images & Links)

![Office Architecture](https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop)
*Figure 1: Modern Office Architecture*

[Visit Dohwa Engineering Website](https://www.dohwa.co.kr)

## 6. Mathematical Formulas (Optional Check)
If supported, basic equations might look like: E = mc^2
