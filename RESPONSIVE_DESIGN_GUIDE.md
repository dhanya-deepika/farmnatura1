# Responsive Design Guide - About Page

## Overview
This document outlines the responsive behavior of each section in the About page.

---

## 1. Hero Section

### Mobile (< 768px)
```
┌─────────────────────────┐
│                         │
│   [Hero Image]          │
│                         │
│   About Us (36px)       │
└─────────────────────────┘
Height: 400px
Padding: left-6, bottom-10
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────┐
│                                      │
│         [Hero Image]                 │
│                                      │
│   About Us (60px)                    │
└──────────────────────────────────────┘
Height: 600px
Padding: left-20, bottom-20
```

---

## 2. Evolution Natural Farming Section

### Mobile (< 1024px)
```
┌─────────────────────────┐
│  Evolution Natural      │
│  Farming (32px)         │
│                         │
│  [Description text]     │
│                         │
├─────────────────────────┤
│                         │
│   [Cow Image]           │
│                         │
└─────────────────────────┘
Layout: Stacked (Column)
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────┐
│  Evolution Natural  │                │
│  Farming (47px)     │                │
│                     │   [Cow Image]  │
│  [Description]      │                │
│                     │                │
└──────────────────────────────────────┘
Layout: Side-by-side (50/50)
```

---

## 3. Research & Development Section

### Mobile (< 1024px)
```
┌─────────────────────────┐
│  Research &             │
│  Development (32px)     │
│                         │
│  [Description text]     │
│                         │
│  [Download Button]      │
│                         │
├─────────────────────────┤
│                         │
│   [Pottery Image]       │
│                         │
└─────────────────────────┘
Layout: Text first, then image
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────┐
│                     │  Research &     │
│                     │  Development    │
│   [Pottery Image]   │  (47px)         │
│                     │                 │
│                     │  [Description]  │
│                     │                 │
│                     │  [Button]       │
└──────────────────────────────────────┘
Layout: Image left, text right (50/50)
```

---

## 4. Inspired By Section

### Mobile (< 640px)
```
┌─────────────────────────┐
│   Inspired By (32px)    │
│                         │
│   ┌─────────────┐       │
│   │  [Profile]  │       │
│   │  Vinay Ram  │       │
│   └─────────────┘       │
│                         │
│   ┌─────────────┐       │
│   │  [Profile]  │       │
│   │  Subhash P. │       │
│   └─────────────┘       │
└─────────────────────────┘
Layout: Stacked vertically
Image size: 200px
```

### Desktop (> 1280px)
```
┌──────────────────────────────────────┐
│        Inspired By (47px)            │
│                                      │
│  ┌──────────┐      ┌──────────┐     │
│  │[Profile] │      │[Profile] │     │
│  │Vinay Ram │      │Subhash P.│     │
│  └──────────┘      └──────────┘     │
└──────────────────────────────────────┘
Layout: Side-by-side
Image size: 362px
Gap: 80px
```

---

## 5. Vision & Mission Section

### Mobile (< 768px)
```
┌─────────────────────────┐
│  Vision & Mission       │
│                         │
│   ┌─────────────┐       │
│   │  [Dewdrop]  │       │
│   └─────────────┘       │
│                         │
│   OUR VISION            │
│   [Description]         │
│                         │
├─────────────────────────┤
│                         │
│   OUR MISSION           │
│   [Description]         │
│   [Button]              │
│                         │
│   ┌─────────────┐       │
│   │  [Sprout]   │       │
│   └─────────────┘       │
└─────────────────────────┘
Layout: Stacked
```

### Desktop (> 768px)
```
┌──────────────────────────────────────┐
│        Vision & Mission              │
│                                      │
│  ┌──────────┐    OUR VISION          │
│  │[Dewdrop] │    [Description]       │
│  └──────────┘                        │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  OUR MISSION          ┌──────────┐   │
│  [Description]        │ [Sprout] │   │
│  [Button]             └──────────┘   │
└──────────────────────────────────────┘
Layout: Alternating (40/60 split)
```

---

## 6. About Planet Green Infra Section

### Mobile (< 1024px)
```
┌─────────────────────────┐
│  About Planet           │
│  Green Infra (32px)     │
│                         │
│  [Description text]     │
│                         │
│  [Logo]                 │
│                         │
├─────────────────────────┤
│                         │
│   [Farm Field Image]    │
│                         │
└─────────────────────────┘
Layout: Stacked
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────┐
│  About Planet       │                │
│  Green Infra (47px) │                │
│                     │  [Farm Field]  │
│  [Description]      │     Image      │
│                     │                │
│  [Logo]             │                │
└──────────────────────────────────────┘
Layout: Side-by-side (50/50)
```

---

## Spacing System

### Container Padding (Horizontal)
- Mobile (< 640px): `px-6` (24px)
- Small (640px - 768px): `px-8` (32px)
- Medium (768px - 1024px): `px-12` (48px)
- Large (1024px - 1280px): `px-16` (64px)
- XL (> 1280px): `px-20` (80px)

### Section Padding (Vertical)
- Mobile (< 640px): `py-12` (48px)
- Small (640px - 768px): `py-16` (64px)
- Medium (768px - 1024px): `py-20` (80px)
- Large (> 1024px): `py-24` (96px)

### Gap Between Elements
- Mobile: `gap-6` to `gap-8` (24px - 32px)
- Desktop: `gap-10` to `gap-12` (40px - 48px)

---

## Color Palette

```css
/* Background */
--bg-primary: #FFFDF2;

/* Text Colors */
--text-primary: #404040;
--text-secondary: #282828;
--text-tertiary: #4a4a4a;
--text-quaternary: #727272;

/* Accent Colors */
--accent-green: #358b6c;
--accent-green-dark: #3d7b3b;
--border-green: #16a34a; /* For buttons */
```

---

## Typography Scale

### Font Families
- **Headings**: Jost (600 weight)
- **Body**: Sofia Pro (400 weight)
- **Secondary Body**: Josefin Sans (400 weight)

### Font Sizes (Responsive)
```
Element          Mobile    SM      MD      LG      XL
─────────────────────────────────────────────────────
H1 (Hero)        36px     42px    48px    56px    60px
H2 (Sections)    32px     36px    40px    44px    47px
H3 (Subsections) 24px     26px    28px    30px    30px
Body Text        14px     15px    16px    17px    18px
Names            20px     22px    24px    26px    28px
```

---

## Image Sizes

### Profile Images (Inspired By)
- Mobile: 200x200px
- Small: 220x220px
- Medium: 260x260px
- Large: 300x300px
- XL: 362x362px

### Vision/Mission Icons
- All screens: max-width 280px (maintains aspect ratio)

### Section Images
- Mobile: height 300px
- Small: height 350px
- Medium: height 400px
- Large: height 450px
- XL: height 500px

---

## Button Styles

```css
.download-button {
  border: 2px solid #16a34a;
  color: #16a34a;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 300ms;
}

.download-button:hover {
  background-color: #16a34a;
  color: white;
}
```

---

## Breakpoint Reference

```javascript
// Tailwind CSS Breakpoints
sm: '640px'   // Small devices
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices (laptops)
xl: '1280px'  // Extra large devices (desktops)
2xl: '1536px' // 2X large devices (large desktops)
```

---

## Testing Checklist

- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile (390px - iPhone 12/13/14)
- [ ] Mobile (414px - iPhone Plus)
- [ ] Tablet (768px - iPad)
- [ ] Tablet (820px - iPad Air)
- [ ] Laptop (1024px)
- [ ] Desktop (1280px)
- [ ] Large Desktop (1440px)
- [ ] XL Desktop (1920px)

---

## Performance Notes

1. All images use Next.js Image component for optimization
2. Images are lazy-loaded by default
3. GSAP animations are hardware-accelerated
4. Minimal layout shifts with proper image dimensions
5. Responsive images serve appropriate sizes per device

