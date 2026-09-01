# AWS Student Builder Group / Cloud Club Website — Maintainer Handbook

Welcome to the **AWS Student Builder Group / Cloud Club at Central University of Jammu** website handbook. This guide helps student maintainers easily update text, events, team members, images, colors, and configuration without needing to redesign the UI or touch complex layout components.

---

## The Golden Rule

> **Change content in `src/content/` data files. Change appearance in `src/styles/theme.css`. Avoid editing components unless you are modifying layout functionality.**

---

## 1. Project Directory Structure

```text
antigrav/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/
│   └── assets/
│       ├── cloudclublogo.png # Official Cloud Club logo
│       ├── cujlogo.png       # Central University of Jammu logo
│       └── team/             # Place team member portraits here (e.g. mrigank.jpg)
├── src/
│   ├── components/
│   │   ├── SiteHeader.tsx    # Responsive navbar & mobile drawer
│   │   ├── HeroSection.tsx   # Hero header & cloud terminal visual
│   │   ├── AboutSection.tsx  # Mission narrative & core pillars
│   │   ├── FeatureGrid.tsx   # "Why Join Us" grid container
│   │   ├── FeatureCard.tsx   # Individual feature card component
│   │   ├── EventsSection.tsx # Events timeline with category filters
│   │   ├── EventCard.tsx     # Technical date & event card
│   │   ├── TeamSection.tsx   # Team leadership grid
│   │   ├── TeamCard.tsx      # Team portrait card with fallback avatars
│   │   ├── Footer.tsx        # Footer, social links, and copyright
│   │   └── UI/
│   │       ├── Badge.tsx     # Status pills and category badges
│   │       ├── Button.tsx    # Accessible glow buttons and links
│   │       ├── Container.tsx # Standard responsive width container
│   │       ├── Icons.tsx     # Custom SVG social icons
│   │       └── SectionHeading.tsx # Standardized section headings
│   ├── content/
│   │   ├── site.ts           # Site identity, hero, about copy, nav, socials
│   │   ├── features.ts       # 6 "Why Join Us" benefits
│   │   ├── events.ts         # Community timeline & workshop events
│   │   └── team.ts           # Leadership team members and roles
│   ├── styles/
│   │   └── theme.css         # Centralized CSS variables & design tokens
│   ├── App.tsx               # Root page layout
│   ├── main.tsx              # React mounting entry point
│   └── index.css             # Root stylesheet
├── index.html                # SEO metadata, Open Graph tags & Google fonts
├── package.json              # Project dependencies and npm scripts
├── vite.config.ts            # Vite configuration with relative base path
├── PRD.md                    # Product Requirements Document
├── handbook.md               # Maintainer Handbook (this file)
└── README.md                 # Quickstart & developer guide
```

---

## 2. Updating Hero Section & General Copy

Open **[`src/content/site.ts`](file:///home/robins/Github/antigrav/src/content/site.ts)** to update:

- **Eyebrow text**: `hero.eyebrow`
- **Main headline**: `hero.title`
- **Supporting description**: `hero.subtitle`
- **Hero CTA labels and links**: `hero.primaryCta` and `hero.secondaryCta`
- **Community Join Form URL**: `hero.joinCta.href` (default Google Form link)
- **Terminal snippet**: `hero.terminalSnippet`
- **Technologies list**: `hero.techBadges`

```ts
export const siteContent = {
  hero: {
    eyebrow: "AWS Student Builder Group • CUJ Chapter",
    title: "Learn • Build • Innovate with Cloud Technologies",
    subtitle: "A student-led technical community...",
    // ...
  }
};
```

---

## 3. Updating the About Section

Open **[`src/content/site.ts`](file:///home/robins/Github/antigrav/src/content/site.ts)** and edit the `about` object:

```ts
about: {
  eyebrow: "Who We Are",
  title: "About Us",
  subtitle: "Empowering university students with practical cloud skills...",
  paragraphs: [
    "Paragraph 1 text...",
    "Paragraph 2 text...",
    "Paragraph 3 text...",
    "Paragraph 4 text...",
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

## 4. Updating "Why Join Us" Cards

Open **[`src/content/features.ts`](file:///home/robins/Github/antigrav/src/content/features.ts)**.

Each feature card is defined in the `features` array:

```ts
{
  id: "cloud-computing",
  title: "Cloud Computing",
  description: "Learn cloud fundamentals and work with AWS, Azure, and GCP...",
  iconName: "Cloud", // Options: 'Cloud' | 'GitBranch' | 'Layers' | 'Calendar' | 'Compass' | 'Award'
  category: "Infrastructure",
  tags: ["AWS", "Azure", "GCP", "Architecture"],
}
```

To add a new feature card, add a new object to the array. The responsive 3-column grid adapts automatically.

---

## 5. Adding & Managing Events

Open **[`src/content/events.ts`](file:///home/robins/Github/antigrav/src/content/events.ts)**.

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

## 6. Adding & Updating Team Members

Open **[`src/content/team.ts`](file:///home/robins/Github/antigrav/src/content/team.ts)**.

### Team Member Format:
```ts
{
  id: "mrigank-jaiswal",
  name: "Mrigank Jaiswal",
  role: "Captain",
  image: "assets/team/mrigank.jpg",
  initials: "MJ",
  badge: "Leadership",
  accentColor: "from-amber-500 to-orange-600",
}
```

### Adding Photos:
1. Save the member's photo inside `public/assets/team/` (e.g. `public/assets/team/mrigank.jpg`).
2. Recommended size: 800x800px or portrait (JPG/PNG/WebP).
3. If an image is missing or cannot be loaded, the site will automatically render a modern stylized monogram avatar using `initials` and `accentColor` so the layout never breaks.

---

## 7. Changing Color Theme & Design Tokens

Open **[`src/styles/theme.css`](file:///home/robins/Github/antigrav/src/styles/theme.css)**.

All color variables are defined in the `:root` block:

```css
:root {
  /* Surface & Background */
  --background: #07111F;
  --background-soft: #0B1728;
  --surface: #101D2E;
  --surface-elevated: #14243A;
  --surface-card: #0E1B2C;

  /* Typography */
  --text-primary: #F7FAFC;
  --text-secondary: #A9B7C9;
  --text-muted: #64748B;

  /* Brand Accents */
  --accent-primary: #FF9900;       /* AWS Orange accent */
  --accent-primary-hover: #FFAC33;
  --accent-secondary: #7DD3FC;     /* Cloud Blue accent */
  --accent-success: #34D399;       /* Verified green */
}
```

Editing a token here updates the theme across all components simultaneously.

---

## 8. Testing & Building Locally

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

---

## 9. Deploying to GitHub Pages

The repository contains a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Deployment Steps:
1. Push changes to the `main` or `master` branch:
   ```bash
   git add .
   git commit -m "Update club events and leadership"
   git push origin main
   ```
2. In your GitHub repository settings:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. GitHub Actions will automatically compile the site and deploy the production bundle to your GitHub Pages URL.
