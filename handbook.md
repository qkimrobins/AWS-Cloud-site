# AWS Student Builder Group / Cloud Club Website — Maintainer Handbook

Welcome to the **AWS Student Builder Group / Cloud Club at Central University of Jammu** website maintainer handbook. This guide helps student leads and maintainers easily update text, events, team members, images, colors, and configuration without breaking the UI or GitHub Pages hosting.

---

## The Golden Rule

> **Change content in `src/content/` data files. Change appearance in `src/styles/theme.css`. Modify or add dedicated pages in `src/pages/`.**

---

## 1. Project Directory Structure

```text
AWS-Cloud-site/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── 404.html              # GitHub Pages fallback redirect
│   └── assets/
│       ├── cloudclublogo.png # Official Cloud Club logo
│       ├── cujlogo.png       # Central University of Jammu logo
│       └── team/             # Team member portraits (e.g. mrigank.jpg)
├── src/
│   ├── pages/                # Individual dedicated page components
│   │   ├── HomePage.tsx      # Overview landing page with metrics & previews
│   │   ├── AboutPage.tsx     # Full university charter, values, & FAQs
│   │   ├── WhyJoinPage.tsx   # Filterable benefits, 4-stage roadmap, tech stack
│   │   ├── EventsPage.tsx    # Searchable & filterable workshops hub
│   │   ├── TeamPage.tsx      # Filterable leadership & committee directory
│   │   └── ContactPage.tsx   # Community channels, campus location & join form
│   ├── components/
│   │   ├── SiteHeader.tsx    # Sticky navbar with active page indicator & mobile drawer
│   │   ├── HeroSection.tsx   # Minimalist hero header & cloud terminal preview
│   │   ├── AboutSection.tsx  # Mission narrative & core focus pillars
│   │   ├── FeatureGrid.tsx   # "Why Join Us" benefits grid container
│   │   ├── FeatureCard.tsx   # Individual benefit card component
│   │   ├── EventsSection.tsx # Events timeline with category filters
│   │   ├── EventCard.tsx     # Technical date & event session card
│   │   ├── TeamSection.tsx   # Team leadership grid
│   │   ├── TeamCard.tsx      # Team portrait card with fallback avatars & bios
│   │   ├── Footer.tsx        # Footer, social links, and navigation
│   │   └── UI/
│   │       ├── Badge.tsx     # Minimal status pills and category badges (no pulse)
│   │       ├── Button.tsx    # Accessible gradient buttons and action links
│   │       ├── Container.tsx # Standard responsive width container
│   │       ├── Icons.tsx     # Custom SVG social icons
│   │       └── SectionHeading.tsx # Standardized section headings
│   ├── content/
│   │   ├── site.ts           # Site identity, hero, about copy, nav, socials
│   │   ├── features.ts       # 6 "Why Join Us" benefits
│   │   ├── events.ts         # Community timeline & workshop events
│   │   └── team.ts           # Leadership team members, roles, and bios
│   ├── styles/
│   │   └── theme.css         # Centralized CSS variables & design tokens
│   ├── App.tsx               # Root page router and view controller
│   ├── main.tsx              # React mounting entry point
│   └── index.css             # Root stylesheet
├── index.html                # SEO metadata, Open Graph tags & Google fonts
├── package.json              # Project dependencies and npm scripts
├── vite.config.ts            # Vite configuration with relative base path ('./')
├── PRD.md                    # Product Requirements Document
├── handbook.md               # Maintainer Handbook (this file)
└── README.md                 # Quickstart & developer guide
```

---

## 2. Multi-Page Architecture & Navigation

The site uses a robust hash-based client-side routing model (`#home`, `#about`, `#why-join`, `#events`, `#team`, `#contact`).

### Why Hash Routing for GitHub Pages?
- **Zero 404 Errors**: Works natively on static GitHub Pages hosting and subfolder paths (`/AWS-Cloud-site/`) without requiring custom server redirects or rewrites.
- **Deep Linking**: Direct bookmarks and shared URLs (e.g. `.../#events` or `.../#team`) load the specific page immediately.
- **Browser History**: Supports native browser Back and Forward navigation seamlessly.

To add or modify navigation items, edit `navigation` in [`src/content/site.ts`](file:///home/robins/Github/AWS-Cloud-site/src/content/site.ts):

```ts
navigation: [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Join", href: "#why-join" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
],
```

---

## 3. Updating Hero Section & General Copy

Open **[`src/content/site.ts`](file:///home/robins/Github/AWS-Cloud-site/src/content/site.ts)** to update:

- **Eyebrow text**: `hero.eyebrow`
- **Main headline**: `hero.title`
- **Supporting description**: `hero.subtitle`
- **Community Join Form URL**: `hero.joinCta.href` (default Google Form link)
- **Terminal snippet**: `hero.terminalSnippet`
- **Technologies list**: `hero.techBadges`

---

## 4. Updating the About Section & Charter

Open **[`src/content/site.ts`](file:///home/robins/Github/AWS-Cloud-site/src/content/site.ts)** and edit the `about` object:

```ts
about: {
  eyebrow: "Who We Are",
  title: "About Us",
  subtitle: "Empowering university students with practical cloud skills...",
  paragraphs: [
    "Paragraph 1 text...",
    "Paragraph 2 text...",
  ],
  pillars: [
    {
      title: "Multi-Cloud Fundamentals",
      description: "Hands-on guided labs covering AWS, Azure, and GCP.",
      icon: "Cloud",
    },
    // ...
  ]
}
```

---

## 5. Updating "Why Join Us" Cards

Open **[`src/content/features.ts`](file:///home/robins/Github/AWS-Cloud-site/src/content/features.ts)**:

```ts
{
  id: "cloud-computing",
  title: "Cloud Computing",
  description: "Learn cloud fundamentals and work with AWS, Azure, and GCP...",
  iconName: "Cloud", // Options: 'Cloud' | 'GitBranch' | 'Layers' | 'Calendar' | 'Compass' | 'Award'
  category: "Infrastructure", // 'Infrastructure' | 'Engineering' | 'Development' | 'Community' | 'Growth' | 'Credentials'
  tags: ["AWS", "Azure", "GCP", "Architecture"],
}
```

---

## 6. Adding & Managing Events

Open **[`src/content/events.ts`](file:///home/robins/Github/AWS-Cloud-site/src/content/events.ts)**:

### Event Format:
```ts
{
  id: "event-2026-08-15",
  date: "2026-08-15",               // Standard YYYY-MM-DD format
  displayDate: "15 Aug 2026",       // Formatted human readable date
  title: "Serverless on AWS Hands-on Workshop",
  category: "Workshop",             // 'Orientation' | 'AMA' | 'Tech Talk' | 'Workshop' | 'Conference'
  status: "upcoming",               // 'upcoming' | 'completed'
  location: "CUJ CS Labs / Virtual",
  speaker: "Guest Speaker Name",    // Optional
  description: "Learn Lambda, API Gateway, and DynamoDB.", // Optional
  link: "https://real-registration-link.com",              // Optional official link
}
```

> **Note on links**: Only provide real official URLs. If no registration link exists yet, omit the `link` property and no broken button will render.

---

## 7. Adding & Updating Team Members

Open **[`src/content/team.ts`](file:///home/robins/Github/AWS-Cloud-site/src/content/team.ts)**:

```ts
{
  id: "mrigank-jaiswal",
  name: "Mrigank Jaiswal",
  role: "Captain",
  image: "assets/team/mrigank.jpg",
  initials: "MJ",
  badge: "Leadership",
  department: "Executive Committee",
  bio: "Guiding strategic vision and multi-cloud roadmap at CUJ.",
  accentColor: "from-blue-600 to-indigo-700",
}
```

### Adding Photos:
1. Save the member's photo inside `public/assets/team/` (e.g. `public/assets/team/mrigank.jpg`).
2. Recommended size: 800x800px or portrait (JPG/PNG/WebP).
3. If an image is missing or cannot be loaded, the site will automatically render a stylized fallback avatar using `initials` and `accentColor` so the layout never breaks.

---

## 8. Color Palette & Design Tokens

Open **[`src/styles/theme.css`](file:///home/robins/Github/AWS-Cloud-site/src/styles/theme.css)**:

The website uses a **Blue, Purple, Gray, Black, and White** color palette:

```css
:root {
  /* Surfaces & Backgrounds */
  --background: #080C16;       /* Obsidian Black / Deep Navy */
  --background-soft: #0C1222;
  --surface: #10192D;          /* Dark Slate Surface */
  --surface-elevated: #15223C;
  --surface-card: #0E1629;     /* Deep Card Surface */

  /* Typography */
  --text-primary: #F8FAFC;     /* Clean White */
  --text-secondary: #94A3B8;   /* Cool Slate Gray */
  --text-muted: #64748B;

  /* Accents */
  --accent-blue: #3B82F6;      /* Electric Blue */
  --accent-blue-hover: #2563EB;
  --accent-purple: #8B5CF6;    /* Violet / Purple */
  --accent-purple-hover: #7C3AED;
  --accent-indigo: #6366F1;
  --accent-cyan: #38BDF8;
}
```

---

## 9. Testing & Building Locally

Run the local development server:
```bash
npm run dev
```

Run a production TypeScript build and bundle check:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

Run linter checks:
```bash
npm run lint
```

---

## 10. Deploying to GitHub Pages

The repository is configured for automated deployments with GitHub Actions and manual deployments via `gh-pages`.

### Automated GitHub Actions Workflow (Recommended):
1. Push changes to the `main` or `master` branch:
   ```bash
   git add .
   git commit -m "Update club content"
   git push origin main
   ```
2. In GitHub repository settings:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. GitHub Actions (`.github/workflows/deploy.yml`) builds the site into `./dist` and deploys it automatically.

### Manual Deployment:
```bash
npm run deploy
```

> **Hosting Integrity Check**:
> - `vite.config.ts` sets `base: './'`, ensuring relative asset paths resolve correctly regardless of domain subpath (`https://qkimrobins.github.io/AWS-Cloud-site/`).
> - `public/404.html` acts as a safety redirect for direct path visits.
> - Multi-page navigation uses hash routing (`#about`, `#events`, etc.) ensuring no server 404s on page refresh.
