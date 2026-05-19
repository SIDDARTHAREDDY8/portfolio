# Siddartha Reddy Chinthala — Portfolio

An immersive, interactive developer portfolio built with **Next.js 16**, **React Three Fiber**, and **Tailwind CSS v4**. Features a 3D mechanical keyboard hero scene, seasonal themes, smooth scroll animations, and a fully responsive design.

**[Live Site](https://siddarthareddy.com)** &nbsp;|&nbsp; **Built by [Siddartha Reddy Chinthala](https://www.linkedin.com/in/siddarthareddy9/)**

---

## Highlights

- **Interactive 3D Keyboard** — A full mechanical keyboard rendered with React Three Fiber and Three.js. Keys react to real keypresses with physics-based animations and sound effects.
- **Seasonal Themes** — Four complete visual themes (Winter, Spring, Summer, Autumn) that re-skin the entire UI — colours, gradients, and 3D scene lighting — with a single click.
- **Project Showcases** — Modal dialogs with image carousels, tech stack chips, and links to live demos and source code.
- **Ambient Audio** — Forest ambience toggle for an immersive browsing experience.
- **Smooth Scroll & Reveal Animations** — Powered by [Lenis](https://github.com/darkroomengineering/lenis) with intersection-observer-based reveal effects.
- **Custom Cursor & Magnetic Targets** — A custom cursor that morphs on interactive elements, with magnetic snap behaviour on buttons.
- **Responsive & Mobile-First** — Optimised for recruiters reviewing on phones. WebGL performance and touch interactions are first-class concerns.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| 3D | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [Simple Icons](https://simpleicons.org/) (tech logos on 3D keycaps) |
| Language | TypeScript |
| Deploy | GitHub Pages |

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/SIDDARTHAREDDY8/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static export is emitted to `./out` and served via GitHub Pages automatically on every push to `main`.

## Project Structure

```
├── app/
│   ├── globals.css          # Tailwind + CSS custom properties (seasonal themes)
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page — projects, experience, education, contact
├── components/
│   ├── FrozenKeyboard.tsx   # 3D keyboard scene (R3F) — 4×5 grid, 20 tech keys
│   ├── FrozenBackground.tsx # Animated background particles
│   ├── AmbientAudio.tsx     # Forest ambience toggle
│   ├── Carousel.tsx         # Image carousel with browser mockup frames
│   ├── ProjectModal.tsx     # Fullscreen project detail dialog
│   ├── SeasonProvider.tsx   # Seasonal theme context
│   ├── SeasonPicker.tsx     # Theme switcher UI
│   ├── LanguageProvider.tsx # i18n context
│   ├── LanguagePicker.tsx   # Language toggle
│   ├── CustomCursor.tsx     # Custom cursor with hover states
│   ├── MagneticTargets.tsx  # Magnetic snap on interactive elements
│   ├── Reveal.tsx           # Scroll-triggered reveal animations
│   ├── SectionNav.tsx       # Dot navigation sidebar
│   ├── CopyEmail.tsx        # Copy-to-clipboard email button
│   └── smooth-scroll.tsx    # Lenis smooth scroll wrapper
├── lib/
│   ├── i18n.ts              # Bilingual dictionary (ES/EN)
│   └── seasons.ts           # Season theme definitions
├── public/
│   ├── cv.pdf               # Resume
│   ├── projects/            # Project screenshots
│   └── sounds/              # Keyboard click sounds + ambient audio
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions — build & deploy to Pages
├── next.config.ts           # Static export config
└── package.json
```

## Sections

- **Hero** — Name, role, resume download, contact and social links
- **Tech Stack** — Interactive 3D keyboard with 20 technology keys (hover for tooltips)
- **Experience** — DXC Technology · Digital Technology Solutions · Tata Consultancy Services
- **Education** — MS Computer Science, University of Cincinnati (GPA 3.6)
- **Projects** — Ohio Real Estate Intelligence · Expense Tracker · TalentAI
- **Contact** — Email, GitHub, LinkedIn

## Deployment

Deployed automatically via GitHub Actions on every push to `main`. The workflow runs `npm run build`, exports the static site to `./out`, and publishes it to GitHub Pages.

Live at **[siddarthareddy.com](https://siddarthareddy.com)**

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Siddartha Reddy Chinthala**

- [Portfolio](https://siddarthareddy.com)
- [LinkedIn](https://www.linkedin.com/in/siddarthareddy9/)
- [GitHub](https://github.com/SIDDARTHAREDDY8)
- [Email](mailto:siddarthareddychinthala@gmail.com)
