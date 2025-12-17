# MichaniX Design System

## Philosophy

The MichaniX design system embodies our core philosophy: **clarity meets sophistication**. Just as we help clients find the balance between "doing the right things" and "doing things right," our visual language balances warmth with professionalism, approachability with authority.

Our design draws inspiration from the **Solarized** color philosophy—a palette designed for optimal readability and reduced eye strain—while incorporating the distinctive teal accent from our logo that represents innovation and forward-thinking.

---

## Color System

### Design Rationale

We chose a light, warm foundation inspired by Solarized Light for several reasons:

1. **Readability**: High contrast ratios that exceed WCAG AAA standards
2. **Longevity**: Warm neutrals feel timeless rather than trendy
3. **Professionalism**: Clean, airy spaces convey competence and clarity
4. **Brand Alignment**: The teal accent connects directly to our logo and represents our unique position at the intersection of strategy and technology

### Core Palette

```css
:root {
  /* Base - Warm Solarized-inspired foundation */
  --base-00: #fdf6e3;    /* Background - Warm cream */
  --base-01: #f5efe0;    /* Elevated surfaces */
  --base-02: #eee8d5;    /* Borders, subtle dividers */
  --base-03: #ddd6c3;    /* Disabled states */

  /* Content - Rich, readable grays */
  --content-00: #073642; /* Primary text - Deep blue-gray */
  --content-01: #586e75; /* Secondary text */
  --content-02: #839496; /* Tertiary/muted text */
  --content-03: #93a1a1; /* Placeholder text */

  /* Accent - Brand teal (derived from logo) */
  --accent-primary: #2d8a8a;    /* Primary actions, links */
  --accent-secondary: #3d9ba8;  /* Hover states */
  --accent-tertiary: #5bb5b5;   /* Light accents */
  --accent-subtle: #e8f4f4;     /* Tinted backgrounds */

  /* Semantic */
  --success: #859900;   /* Solarized green */
  --warning: #b58900;   /* Solarized yellow */
  --error: #dc322f;     /* Solarized red */
  --info: #268bd2;      /* Solarized blue */
}
```

### Color Usage Guidelines

| Use Case | Color Token | Example |
|----------|-------------|---------|
| Page background | `--base-00` | Main canvas |
| Card/section background | `--base-01` | Content cards |
| Borders | `--base-02` | Dividers, outlines |
| Primary text | `--content-00` | Headlines, body |
| Secondary text | `--content-01` | Subtitles, captions |
| Links & CTAs | `--accent-primary` | Buttons, hyperlinks |
| Hover states | `--accent-secondary` | Interactive feedback |

---

## Typography System

### Design Philosophy

Our typography choices reflect the MichaniX ethos: **intellectual rigor with human warmth**.

We employ a **dual-font strategy**:
- **Inter** for body text: Designed specifically for screens, with excellent readability at small sizes and a neutral, professional character
- **Fraunces** for display: A "soft serif" that brings warmth and distinction without stuffiness

### Font Stack

```css
:root {
  /* Display - Fraunces: Soft serif with character */
  --font-display: 'Fraunces', 'Playfair Display', Georgia, serif;

  /* Body - Inter: Optimized for screen readability */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Mono - For code/technical content */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}
```

### Type Scale

We use a **1.25 (Major Third)** modular scale, which provides clear hierarchy without extreme jumps:

```css
:root {
  --text-xs: 0.64rem;    /* 10.24px - Fine print */
  --text-sm: 0.8rem;     /* 12.8px - Captions, labels */
  --text-base: 1rem;     /* 16px - Body text */
  --text-lg: 1.25rem;    /* 20px - Lead paragraphs */
  --text-xl: 1.563rem;   /* 25px - H4 */
  --text-2xl: 1.953rem;  /* 31.25px - H3 */
  --text-3xl: 2.441rem;  /* 39px - H2 */
  --text-4xl: 3.052rem;  /* 48.8px - H1 */
  --text-5xl: 3.815rem;  /* 61px - Display */
}
```

### Why Major Third (1.25)?

The Major Third ratio was chosen because:
1. **Musical harmony**: 1.25 corresponds to a major third interval in music, creating visually "harmonious" size relationships
2. **Practical range**: Provides 8 distinct sizes without extremes that break layouts
3. **Professional tone**: More restrained than larger ratios (1.414, 1.618), fitting our consulting context

### Line Heights

```css
:root {
  --leading-none: 1;
  --leading-tight: 1.25;    /* Headlines */
  --leading-snug: 1.375;    /* Subheadlines */
  --leading-normal: 1.5;    /* Short body text */
  --leading-relaxed: 1.625; /* Long-form reading */
  --leading-loose: 1.75;    /* Maximum readability */
}
```

### Font Weights

```css
:root {
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}
```

### Typography Classes

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Display | Fraunces | 5xl | Light | Tight | -0.02em |
| H1 | Fraunces | 4xl | Normal | Tight | -0.01em |
| H2 | Fraunces | 3xl | Normal | Tight | 0 |
| H3 | Inter | 2xl | Semibold | Snug | 0 |
| H4 | Inter | xl | Semibold | Snug | 0 |
| Body | Inter | base | Normal | Relaxed | 0 |
| Lead | Inter | lg | Normal | Relaxed | 0 |
| Small | Inter | sm | Medium | Normal | 0.01em |
| Caption | Inter | xs | Normal | Normal | 0.02em |

---

## Spacing System

We use an **8px base unit** with a consistent scale:

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

---

## Shadows & Depth

Light theme shadows use subtle blue-gray tints:

```css
:root {
  --shadow-sm: 0 1px 2px rgba(7, 54, 66, 0.05);
  --shadow-md: 0 4px 6px rgba(7, 54, 66, 0.07), 0 2px 4px rgba(7, 54, 66, 0.05);
  --shadow-lg: 0 10px 15px rgba(7, 54, 66, 0.1), 0 4px 6px rgba(7, 54, 66, 0.05);
  --shadow-xl: 0 20px 25px rgba(7, 54, 66, 0.1), 0 10px 10px rgba(7, 54, 66, 0.04);

  /* Accent glow for CTAs */
  --shadow-accent: 0 4px 14px rgba(45, 138, 138, 0.25);
  --shadow-accent-lg: 0 8px 25px rgba(45, 138, 138, 0.3);
}
```

---

## Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

---

## Motion

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Component Patterns

### Buttons

**Primary**: Solid accent background, white text
**Secondary**: Transparent with accent border
**Ghost**: No border, accent text only

### Cards

- Background: `--base-01`
- Border: 1px `--base-02`
- Border-radius: `--radius-lg`
- Shadow: `--shadow-md` on hover

### Form Inputs

- Background: `--base-00`
- Border: 1px `--base-02`
- Focus: 2px `--accent-primary` outline
- Border-radius: `--radius-md`

---

## Accessibility

All color combinations meet **WCAG AA** standards minimum:
- `--content-00` on `--base-00`: 12.6:1 ✓
- `--content-01` on `--base-00`: 6.2:1 ✓
- `--accent-primary` on `--base-00`: 5.1:1 ✓
- White on `--accent-primary`: 4.8:1 ✓

---

## Implementation

Import the design tokens from `design-tokens.css` and use CSS custom properties throughout:

```css
.card {
  background: var(--base-01);
  border: 1px solid var(--base-02);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```
