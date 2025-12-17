# MichaniX Typography Guide

## The Story Behind Our Type Choices

Typography is the voice of design. At MichaniX, we believe that *how* you say something matters as much as *what* you say. Our typographic choices reflect our positioning as strategic consultants who bridge the gap between business insight and technical excellence.

---

## Primary Typefaces

### Fraunces — The Thinker's Serif

**Role**: Display, Headlines, Pull Quotes

**Why Fraunces?**

Fraunces is a variable "soft serif" designed by Undercase Type. We chose it for several deliberate reasons:

1. **Optical Softness**: Unlike rigid serifs (Times, Georgia), Fraunces has subtle curves and "wonkiness" that make it feel approachable yet sophisticated—much like our consulting approach.

2. **Variable Weight Range**: From hairline (100) to black (900), Fraunces provides incredible flexibility while maintaining visual consistency.

3. **Historical Resonance**: Its design references old-style serif traditions while feeling distinctly contemporary. This mirrors how MichaniX respects proven business wisdom while embracing modern technology.

4. **"WONK" Axis**: Fraunces includes a unique "wonk" variable axis that can add playful personality. We use subtle wonk (0.1-0.3) to add character without sacrificing professionalism.

**Specimen**:
```
Fraunces Light (300)
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789

Fraunces Regular (400)
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
```

**Usage**:
- Page titles and hero headlines
- Section headings (H1, H2)
- Pull quotes and testimonials
- Brand-forward display moments

---

### Inter — The Pragmatic Sans

**Role**: Body Text, UI Elements, Secondary Headlines

**Why Inter?**

Inter was designed by Rasmus Andersson specifically for computer screens. It represents the "doing things right" side of our philosophy:

1. **Optimized for Screens**: Inter's letterforms are engineered for pixel rendering, with features like:
   - Slightly taller x-height for small-size readability
   - Open apertures that prevent letters from closing up
   - Carefully adjusted spacing for digital displays

2. **Extensive Character Set**: 2,548 glyphs covering 147 languages, ensuring our content is globally accessible.

3. **Tabular Figures**: Numbers are designed to align vertically, crucial for data-heavy consulting content.

4. **Professional Neutrality**: Inter doesn't call attention to itself—it lets content speak. This is essential for long-form reading and technical explanations.

5. **Variable Font**: A single file that interpolates across weights (100-900) and optical sizes, improving performance.

**Specimen**:
```
Inter Regular (400)
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789

Inter Semibold (600)
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
```

**Usage**:
- All body text and paragraphs
- Navigation and UI elements
- H3, H4, H5, H6 subheadings
- Buttons, labels, and form elements
- Data tables and technical content

---

### JetBrains Mono — The Technical Voice

**Role**: Code Snippets, Technical Annotations

**Why JetBrains Mono?**

When we discuss technical architecture or show code examples, clarity is paramount:

1. **Ligatures for Readability**: Combines character pairs (!=, >=, =>) into single glyphs that are easier to parse.

2. **Increased Height**: 8% taller than most monospace fonts, improving line distinction.

3. **Distinctive Characters**: Clear differentiation between similar characters (0/O, 1/l/I).

**Usage**:
- Code snippets and technical examples
- File names and paths
- Command-line instructions
- Technical identifiers

---

## The Type Scale: Mathematical Harmony

We use a **Major Third (1.25)** modular scale. This isn't arbitrary—it's rooted in music theory and visual harmony.

### What is a Modular Scale?

A modular scale is a sequence of numbers that relate to each other through a consistent ratio. Starting from a base size (16px), each step multiplies by 1.25:

```
Base:     16px    × 1.25 = 20px
          20px    × 1.25 = 25px
          25px    × 1.25 = 31.25px
          31.25px × 1.25 = 39px
          39px    × 1.25 = 48.8px
          48.8px  × 1.25 = 61px
```

### Why 1.25 (Major Third)?

| Ratio | Name | Character |
|-------|------|-----------|
| 1.067 | Minor Second | Very subtle, corporate |
| 1.125 | Major Second | Subtle, editorial |
| **1.25** | **Major Third** | **Balanced, professional** |
| 1.333 | Perfect Fourth | Bold, editorial |
| 1.414 | Augmented Fourth | Dramatic |
| 1.618 | Golden Ratio | Classical, grandiose |

The Major Third provides:
- **Clear hierarchy** without extreme size jumps
- **Versatility** across different content types
- **Musical harmony**—1.25 is the ratio of frequencies in a major third chord

### Our Scale in Practice

| Token | Size | Use Case |
|-------|------|----------|
| `--text-xs` | 10.24px | Legal text, timestamps |
| `--text-sm` | 12.8px | Captions, labels |
| `--text-base` | 16px | Body text |
| `--text-lg` | 20px | Lead paragraphs |
| `--text-xl` | 25px | H4, card titles |
| `--text-2xl` | 31.25px | H3, section intros |
| `--text-3xl` | 39px | H2, page sections |
| `--text-4xl` | 48.8px | H1, page titles |
| `--text-5xl` | 61px | Hero headlines |

---

## Line Height: The Rhythm of Reading

Line height (leading) affects readability more than most realize. Our approach:

### Headlines: Tight Leading (1.1-1.25)
Headlines are meant to be scanned, not read word-by-word. Tight leading creates visual mass and impact:
```css
.headline {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  line-height: 1.1;
}
```

### Body Text: Relaxed Leading (1.6-1.75)
Long-form reading requires generous line spacing:
```css
.body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.65;
}
```

### The 45-75 Character Rule
Optimal line length for reading is 45-75 characters. We enforce this with:
```css
.prose {
  max-width: 65ch; /* ~65 characters */
}
```

---

## Letter Spacing: The Subtle Art

### When to Adjust Letter Spacing

| Scenario | Adjustment | Reason |
|----------|------------|--------|
| Large headlines | -0.02em to -0.01em | Optical tightening at scale |
| All-caps text | +0.05em to +0.1em | Prevents crowding |
| Small text | +0.01em | Improves legibility |
| Body text | 0 (default) | Font's native spacing is optimal |

### Example
```css
.display-text {
  font-size: var(--text-5xl);
  letter-spacing: -0.02em; /* Tighten for cohesion */
}

.label {
  text-transform: uppercase;
  font-size: var(--text-sm);
  letter-spacing: 0.05em; /* Open up for readability */
}
```

---

## Font Loading Strategy

### Performance Considerations

We use the following strategy to balance aesthetics with performance:

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load fonts with display=swap for fast text rendering -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Fallback Strategy

Our font stacks ensure graceful degradation:

```css
--font-display: 'Fraunces', 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

This means:
1. **Fraunces** loads → Perfect experience
2. **Fraunces fails** → Playfair Display (similar soft serif)
3. **Both fail** → Georgia (ubiquitous serif)
4. **System fallback** → Times New Roman

---

## Typographic Hierarchy in Action

### Page Structure Example

```
┌─────────────────────────────────────────┐
│  FRAUNCES 61px / Light / -0.02em        │  ← Hero headline
│  The big idea statement                  │
├─────────────────────────────────────────┤
│  INTER 20px / Regular / +0.02em         │  ← Lead paragraph
│  Supporting context that expands...      │
├─────────────────────────────────────────┤
│  FRAUNCES 39px / Regular                │  ← Section title
│  Section Heading                         │
├─────────────────────────────────────────┤
│  INTER 16px / Regular / 1.65 leading    │  ← Body text
│  The main content that users read...     │
├─────────────────────────────────────────┤
│  INTER 14px / Semibold / Uppercase      │  ← Label
│  CATEGORY                                │
├─────────────────────────────────────────┤
│  INTER 13px / Regular / 0.01em          │  ← Caption
│  Image caption or supplementary info     │
└─────────────────────────────────────────┘
```

---

## Implementation Reference

### CSS Custom Properties

```css
:root {
  /* Font Families */
  --font-display: 'Fraunces', 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

  /* Type Scale (Major Third 1.25) */
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 1.953rem;
  --text-3xl: 2.441rem;
  --text-4xl: 3.052rem;
  --text-5xl: 3.815rem;

  /* Font Weights */
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.15;
  --leading-snug: 1.35;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;
  --leading-loose: 1.8;
}
```

---

## Further Reading

- [Fraunces on Google Fonts](https://fonts.google.com/specimen/Fraunces)
- [Inter on GitHub](https://github.com/rsms/inter)
- [Modular Scale Calculator](https://www.modularscale.com/)
- [The Elements of Typographic Style](https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style)
