---
name: Cyber-Ether Protocol
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#d7ffc5'
  on-secondary: '#053900'
  secondary-container: '#2ff801'
  on-secondary-container: '#0f6d00'
  tertiary: '#fff9f0'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffdb3f'
  on-tertiary-container: '#736000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#79ff5b'
  secondary-fixed-dim: '#2ae500'
  on-secondary-fixed: '#022100'
  on-secondary-fixed-variant: '#095300'
  tertiary-fixed: '#ffe16c'
  tertiary-fixed-dim: '#e7c427'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-xl:
    fontFamily: Space Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is engineered for the high-velocity world of Web3 and decentralized finance. It evokes a "terminal-luxe" aesthetic—combining the precision of a developer environment with the polished sheen of high-end fintech. 

**Style: Cyber-Glassmorphism**
This system utilizes high-transparency layers, backdrop blurs, and neon accents to create a sense of digital depth. The interface feels like a holographic projection over a deep-space void. It rejects heavy solids in favor of light-emitting elements, prioritizing a "dark-first" architecture that reduces eye strain during long-term data monitoring while maintaining an aggressive, futuristic edge.

**Key Visual Principles:**
- **Luminosity:** Elements do not reflect light; they emit it.
- **Translucency:** Information lives on layered glass planes.
- **Precision:** Monospaced accents suggest underlying code and smart contract integrity.

## Colors

The palette is strictly nocturnal, anchored by a deep obsidian base with oceanic undertones. 

- **Base Background:** `#0a0a0f` is the absolute foundation. No pure blacks or whites are permitted.
- **Electric Cyan (#00f5ff):** The primary action color, used for links, primary buttons, and critical data points. It represents "Active" states.
- **Neon Green (#39ff14):** The secondary accent, reserved for success states, "Online" indicators, and positive market movement.
- **Glass Surfaces:** Containers use white with 3-7% opacity combined with a `20px` backdrop-blur to create the "glass" effect.
- **Neon Glows:** Accent colors are frequently used as `box-shadow` or `drop-shadow` with high blur and low spread to simulate light emission.

## Typography

This design system employs a dual-font strategy to balance technical aesthetics with readability.

**Headlines & Labels (Space Mono):** Used for all data-driven text, navigation, and titles. It reinforces the Web3/Developer ethos. Large display titles should be set with tight letter-spacing, while small labels should be uppercase with slightly expanded tracking for clarity.

**Body Content (Sora):** A clean, geometric sans-serif used for descriptions and long-form content. Sora’s high x-height maintains legibility against dark, blurred backgrounds where monospaced fonts would become too rhythmic and difficult to scan.

## Layout & Spacing

The layout is built on a **4px grid system**, ensuring mathematical precision in alignment.

**Grid Architecture:**
- **Desktop:** 12-column fluid grid with 24px gutters. Content is housed in glass modules that align strictly to the grid.
- **Background Pattern:** A subtle dot-matrix pattern (1px dots at 32px intervals) should be overlaid on the `#0a0a0f` background to provide a sense of scale and technical "blueprint" feel.
- **Vertical Timeline:** Used for transaction history and roadmap components. It features a thin 1px cyan line with glowing nodes at interaction points.
- **Containers:** Use large internal padding (min 24px) to allow the glassmorphism effects enough "breathing room" to be visible against the background pattern.

## Elevation & Depth

Depth is not achieved through traditional shadows, but through **light and blur tiers.**

1.  **Level 0 (Background):** Deep blue-black with a fixed dot-matrix pattern.
2.  **Level 1 (Default Surface):** 3% white fill, 16px backdrop blur, 1px border at 10% white.
3.  **Level 2 (Hover/Active):** 7% white fill, 32px backdrop blur, 1px border at 40% primary color (Cyan). This layer includes a subtle outer glow (`box-shadow: 0 0 15px rgba(0, 245, 255, 0.2)`).
4.  **Level 3 (Modals/Popups):** 12% white fill, 40px backdrop blur, 1px border at 60% primary color.

**Thin Glowing Borders:** Borders are critical for defining shape. Always use 1px width. For interactive elements, the border should transition from semi-transparent white to full-saturation Cyan or Green on hover.

## Shapes

The shape language is "Soft-Technical." While the brand is futuristic, it avoids the harshness of pure 90-degree angles to maintain a premium feel.

- **Primary Radius:** `0.25rem (4px)` for cards, input fields, and containers. This creates a sharp, professional look.
- **Pills/Badges:** These are the exception, utilizing a full-pill radius for status tags and tokens to differentiate them from structural UI components.
- **Interactive States:** On hover, cards should "lift" not through physical movement, but through an increase in border brightness and the activation of a neon outer glow.

## Components

**Buttons:**
- **Primary:** Transparent background, 1px Cyan border, Cyan Space Mono text. On hover, background fills with 10% Cyan and border-glow activates.
- **Secondary:** No border, Cyan text. 

**Pill Tags:**
- Used for "Success," "Pending," or "Token Symbols." 
- Style: Semi-transparent background (accent color at 10% opacity), 1px solid accent border, and a subtle `text-shadow` in the same accent color to simulate a neon glow.

**Grid Cards:**
- Glassmorphic panels with a 1px top-left highlight border (20% white) to simulate light hitting a glass edge.
- Interaction: On hover, the border color transitions to Electric Cyan and the backdrop-blur intensity increases.

**Input Fields:**
- Minimalist design: Bottom-border only (1px white @ 20%). On focus, the border expands to 1px Cyan with a soft glow under-glow.

**Vertical Timeline:**
- A 1px vertical Cyan line. Milestone nodes are 8px circles with a 4px white center and a 12px Cyan outer glow.

**Data Visualization:**
- Charts should use thin Cyan lines (1.5px) with a semi-transparent Cyan-to-transparent vertical gradient fill beneath the line. No grid lines; use the background dot-matrix for reference.