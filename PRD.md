# PRD — Central University of Jammu Cloud Club Website

**Document type:** Product Requirements Document  
**Version:** 1.0  
**Purpose:** Build a polished, modern, responsive website for the Central University of Jammu Cloud Club using the existing demo site's content as the source of truth.

---

## 1. Product Overview

Create a modern student-tech-community website for the **AWS Student Builder Group / Cloud Club at Central University of Jammu**.

The current demo establishes the core content:

- Hero message: **“Learn • Build • Innovate with Cloud Technologies”**
- About the community
- Six reasons to join
- Five listed events
- Six team members and roles
- Short footer description

The new site should preserve that factual content while substantially improving:

- Visual hierarchy
- Branding
- Navigation
- Responsiveness
- Typography
- Interaction design
- Event presentation
- Team presentation
- Accessibility
- Maintainability

**Important:** Do not invent new people, events, dates, statistics, testimonials, sponsors, social links, contact information, or achievements unless they are explicitly added later by the club.

---

# 2. Goals

## Primary goals

1. Make the club look like a credible, active modern technology community.
2. Clearly communicate what the club does within the first few seconds.
3. Make upcoming/past events easy to discover.
4. Make the leadership/team section visually strong.
5. Make content easy for a student maintainer to update.
6. Work beautifully on mobile, tablet, and desktop.
7. Provide a strong foundation for future features without overengineering the first version.

## Secondary goals

- Encourage students to explore the club.
- Make the club's cloud/DevOps focus immediately recognizable.
- Give events enough visual importance that future event additions are easy.
- Establish a reusable visual system for future pages.

## Non-goals

Do not build these in v1 unless explicitly requested later:

- User authentication
- Member dashboards
- CMS backend
- Event ticketing/payment
- Database
- Admin panel
- Blog engine
- Complex analytics dashboard
- Chat system
- AI chatbot

---

# 3. Source of Truth / Existing Content

The current demo site is the content reference. The implementation team should use the content below exactly as the initial website content.

## Site identity

**Primary name:** AWS Student Builder Group Central University Of Jammu

**Short description:**  
A student community at Central University Of Jammu focused on cloud learning, innovation, and building with AWS technologies.

**Hero tagline:**  
Learn • Build • Innovate with Cloud Technologies

---

# 4. About Us Content

Use the following copy as the initial About section:

> The AWS Student Builder Group at Central University Of Jammu is a student-led technical community dedicated to helping students explore cloud computing, DevOps, and modern IT practices.

> Our objective is to bridge the gap between academic learning and real-world industry requirements by organizing hands-on workshops, technical sessions, and collaborative projects using platforms such as AWS, Azure, and Google Cloud.

> The group also focuses on leadership development, teamwork, and professional growth. Through hackathons, seminars, and community events, students gain exposure to industry trends and practical problem-solving skills.

> Whether you are a beginner or an experienced learner, the AWS Student Builder Group provides an inclusive environment to learn, experiment, build, and grow together.

---

# 5. Why Join Us Content

Create six feature cards.

### 5.1 Cloud Computing

> Learn cloud fundamentals and work with AWS, Azure, and GCP through guided labs, real-world use cases, and structured learning paths.

### 5.2 DevOps & Automation

> Gain hands-on experience with CI/CD pipelines, Docker, automation tools, and infrastructure as code used in modern software teams.

### 5.3 Hands-on Projects

> Build practical cloud-based projects that strengthen your portfolio and demonstrate your skills to recruiters.

### 5.4 Events & Hackathons

> Participate in workshops, coding events, and hackathons to collaborate with peers and industry professionals.

### 5.5 Career Guidance

> Receive mentorship for internships, certifications, resume building, and interview preparation from experienced members.

### 5.6 Certification Support

> Prepare for AWS, Azure, and GCP certifications with curated resources, mentorship, and practice sessions.

---

# 6. Events Content

Initial events:

| Date | Event |
|---|---|
| 26 Jan 2026 | Introduction & Orientation of Central University Jammu Cloud Club, Central University Of Jammu |
| 01 Mar 2026 | Interactive Ask Me Anything Session (AMA) |
| 10 Apr 2026 | AWS TechXplore |
| 27 Jun 2026 | From Idea to App: Building with IDE & Kiro CLI with Jasdeep Singh Bhalla |
| 01 Jul 2026 | Agentic AI on AWS - AI Tech Talk Series Hosted by AWS Skills Centers |

### Event UX

Each event should be represented as a reusable card/component with:

- Date
- Event title
- Optional category/tag
- Optional description field ready for future use
- Optional external registration/details link ready for future use
- Visually distinct date treatment

Do not fabricate missing descriptions or links.

Recommended visual treatment:

- Desktop: timeline/grid hybrid or elegant event cards
- Mobile: vertical event timeline
- Use subtle hover/scroll transitions
- Keep event titles readable even when long

---

# 7. Team Content

Create a premium team/leadership section.

| Name | Role | Initial image asset |
|---|---|---|
| Mrigank Jaiswal | Captain | `assets/team/mrigank.jpg` |
| Nilesh Kumar | Vice Captain | `assets/team/nilesh.jpg` |
| Divyani Gupta | Technical Lead | `assets/team/divyani.jpg` |
| Amrit Puri | Social Media Lead | `assets/team/amrit.jpg` |
| Shivam Yadav | Events & Outreach Lead | `assets/team/shivam.jpg` |
| Robins Yadav | Community & Engagement Lead | `assets/team/robins.jpg` |

Use the existing image assets from the current repository/site where available.

### Team card requirements

- Portrait image
- Name
- Role
- Consistent image aspect ratio
- Graceful fallback if an image is missing
- Hover/focus state
- Accessible alt text
- Do not crop faces aggressively

Avoid inventing social media links.

---

# 8. Recommended Information Architecture

Use a single-page experience for v1:

1. Header / Navigation
2. Hero
3. About
4. Why Join Us
5. Events
6. Team
7. Footer

Recommended navigation:

- Home
- About
- Why Join
- Events
- Team

The header should remain useful on scroll.

---

# 9. Hero Section

The hero is the most important visual area.

### Required content

Eyebrow:
**AWS Student Builder Group**

Main headline:
**Learn • Build • Innovate with Cloud Technologies**

Supporting copy:
Use a concise version of the About content, not a new claim.

### CTA strategy

Because the existing source has no official registration/community URL, do not invent one.

Use internal navigation CTAs such as:

- Explore the Club
- View Events

A future external CTA can be added through the content configuration.

### Visual direction

Use a sophisticated cloud/technology visual language:

- Dark or deep-neutral base
- Subtle cloud/network/grid patterns
- Soft atmospheric gradients
- Glass-like surfaces used sparingly
- Fine borders
- Small technical UI details
- Avoid generic “stock cloud server” imagery

The visual should feel like a strong student developer community, not a corporate enterprise SaaS landing page.

---

# 10. Design Direction

## Overall aesthetic

**Modern technical editorial + premium developer community.**

Keywords:

- Futuristic
- Clean
- Technical
- Energetic
- Academic
- Community-driven
- Premium but approachable

Avoid:

- Excessive gradients
- Excessive glassmorphism
- Giant meaningless 3D objects
- Generic corporate templates
- Too many animations
- Overly rounded “AI startup” cards everywhere
- Clutter

---

# 11. Color System

Use a centralized theme/token system so the palette can be changed from one location.

Recommended starting palette:

```css
--background: #07111F;
--background-soft: #0B1728;
--surface: #101D2E;
--surface-elevated: #14243A;
--text-primary: #F7FAFC;
--text-secondary: #A9B7C9;
--border: rgba(255, 255, 255, 0.10);

--accent-primary: #FF9900;
--accent-secondary: #7DD3FC;
--accent-success: #34D399;

--white: #FFFFFF;
--black: #000000;
```

The orange accent references AWS visually, but the website must not imply official AWS ownership or endorsement beyond the club's stated identity.

If the club has an official brand palette later, replace the tokens rather than scattering colors throughout components.

---

# 12. Typography

Recommended:

- Primary font: **Inter** or a similarly clean sans-serif
- Optional display font: **Space Grotesk**
- Monospace accent: **JetBrains Mono**

Typography hierarchy:

- Hero: large, bold, responsive
- Section titles: strong and compact
- Body: comfortable line-height around 1.6
- Event dates: monospace/technical treatment
- Small labels: uppercase with tracking

Do not use more than 2–3 font families.

---

# 13. Layout System

Use a centered max-width container.

Recommended:

- Max content width: 1200–1280px
- Horizontal page padding: 20–24px mobile, 32–48px desktop
- Section spacing: generous
- Cards should align to a consistent grid
- Avoid full-width text blocks unless intentionally used for hero/statement sections

Use CSS Grid/Flexbox rather than hard-coded positioning.

---

# 14. Component System

Recommended components:

```text
App
├── SiteHeader
├── HeroSection
├── SectionHeading
├── AboutSection
├── FeatureGrid
│   └── FeatureCard
├── EventsSection
│   └── EventCard
├── TeamSection
│   └── TeamCard
├── Footer
└── UI
    ├── Button
    ├── Badge
    ├── Container
    └── Divider
```

If using React/Next.js, keep components small and composable.

---

# 15. Content Architecture

Do not hard-code content directly inside visual components.

Recommended structure:

```text
src/
  content/
    site.ts
    events.ts
    team.ts
    features.ts
  components/
  styles/
```

Example:

```ts
export const teamMembers = [
  {
    name: "Mrigank Jaiswal",
    role: "Captain",
    image: "/assets/team/mrigank.jpg",
  },
];
```

This makes future updates easy.

If the project uses plain HTML instead of React, create a clearly documented `content.js` or equivalent data file.

---

# 16. Interactions & Motion

Use motion intentionally.

Recommended:

- Hero elements fade/slide in on page load
- Section headings reveal subtly
- Cards lift slightly on hover
- Team portraits have restrained hover treatment
- Event cards can animate into view
- Navigation changes on scroll
- Smooth anchor scrolling

Motion rules:

- Keep transitions around 150–400ms
- Prefer transform/opacity animations
- Respect `prefers-reduced-motion`
- No constant floating animations
- No distracting parallax

---

# 17. Header

Desktop:

- Club identity/logo area
- Navigation links
- Optional future CTA slot

Mobile:

- Compact brand
- Hamburger/menu button
- Full accessible mobile navigation

Header should:

- Remain readable over hero
- Transition to a more solid background when scrolling
- Have visible keyboard focus states

---

# 18. Footer

Include:

**AWS Student Builder Group Central University Of Jammu**

> A student community at Central University Of Jammu focused on cloud learning, innovation, and building with AWS technologies.

Then:

- Copyright: `© 2026 AWS Student Builder Group Central University Of Jammu`
- Optional future social/contact slots, but leave them hidden/empty until real links exist.

---

# 19. Responsive Requirements

Must work at minimum on:

- 320px
- 375px
- 768px
- 1024px
- 1280px
- 1440px+

Mobile requirements:

- No horizontal overflow
- Touch-friendly buttons
- Readable event titles
- Team cards stack cleanly
- Navigation becomes a mobile menu
- Hero remains visually strong without excessive vertical height

---

# 20. Accessibility

Target WCAG 2.2 AA where practical.

Required:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Meaningful alt text
- Sufficient color contrast
- Buttons must have accessible names
- Mobile menu must be keyboard accessible
- Respect reduced-motion preferences
- Do not communicate information by color alone

---

# 21. Performance

Target:

- Fast initial load
- Optimized team images
- Lazy-load below-the-fold images
- Avoid unnecessary JavaScript
- Use modern image formats where practical
- Avoid huge background videos
- Keep dependencies minimal

If using Next.js, use `next/image`.

If using Vite/React, use optimized static assets and lazy loading.

---

# 22. SEO

Add:

- Meaningful `<title>`
- Meta description
- Open Graph metadata
- Twitter/X card metadata if desired
- Canonical URL when deployed
- Semantic page structure

Suggested title:

**AWS Student Builder Group | Central University of Jammu**

Suggested description:

**A student-led technical community at Central University of Jammu focused on cloud computing, DevOps, hands-on projects, events, and professional growth.**

Do not claim official affiliation beyond what the club can substantiate.

---

# 23. Technology Recommendation

Preferred implementation:

### Option A — React + Vite

Best if this is a simple static GitHub Pages project.

- React
- Vite
- TypeScript
- CSS Modules or Tailwind CSS
- Framer Motion or Motion for React only if needed

### Option B — Next.js

Use if future expansion is expected.

- Next.js
- TypeScript
- Tailwind CSS
- Motion
- Static export if deploying to GitHub Pages

For this specific project, **React + Vite + TypeScript** is the recommended balance.

---

# 24. Deployment

The current project is hosted through GitHub Pages.

The implementation should remain GitHub Pages friendly.

Requirements:

- Production build works without server-side APIs
- Asset paths work under a repository subpath
- Avoid assuming deployment at `/`
- Configure the base path correctly if using Vite
- Provide a clear README with build/deploy commands

---

# 25. Content Update Strategy

All frequently changed information should be centralized.

At minimum:

```text
content/
├── site.ts
├── features.ts
├── events.ts
└── team.ts
```

A future maintainer should be able to:

- Add an event
- Remove an event
- Change an event title/date
- Add a team member
- Change a role
- Replace a team image
- Change the hero text
- Change the About copy
- Change feature cards

without editing the layout components.

---

# 26. Future-Ready Slots

Prepare the architecture for future additions without displaying empty UI.

Potential future features:

- Registration links
- Event detail pages
- Gallery
- Blog/resources
- Certifications roadmap
- Project showcase
- Alumni section
- Social links
- Contact section
- Newsletter
- Faculty advisor section
- Sponsors/partners

Do not build empty placeholders into the visible UI in v1.

---

# 27. Acceptance Criteria

The website is complete when:

### Content
- [ ] All current About content is represented accurately.
- [ ] All six “Why Join Us” items are present.
- [ ] All five listed events are present with correct dates/titles.
- [ ] All six team members and roles are present.
- [ ] Existing team images are used.
- [ ] No unsupported facts are invented.

### Design
- [ ] Site looks substantially more modern than the demo.
- [ ] Visual hierarchy is immediately clear.
- [ ] Consistent color tokens are used.
- [ ] Typography is consistent.
- [ ] Cards and sections form a coherent design system.

### UX
- [ ] Navigation works.
- [ ] Anchor links work.
- [ ] Mobile navigation works.
- [ ] Hover/focus states work.
- [ ] Events are easy to scan.

### Responsive
- [ ] No horizontal scrolling on mobile.
- [ ] Layout adapts correctly from mobile to desktop.
- [ ] Images remain well cropped.

### Accessibility
- [ ] Keyboard navigation works.
- [ ] Focus states are visible.
- [ ] Images have alt text.
- [ ] Reduced motion is respected.
- [ ] Contrast is acceptable.

### Maintainability
- [ ] Content is separated from presentation.
- [ ] Color palette is centralized.
- [ ] Team/event arrays are easy to edit.
- [ ] A handbook explains common edits.

### Deployment
- [ ] Production build succeeds.
- [ ] GitHub Pages deployment works.
- [ ] Repository-subpath assets work correctly.

---

# 28. Suggested Prompt for OpenCode / Antigravity

Use this after providing the PRD:

> Read `PRD.md` completely before making changes.
>
> Build the website described in the PRD as a production-quality implementation. First inspect the existing repository and preserve useful existing assets/content. Do not invent content that is not present in the PRD.
>
> Prioritize:
> 1. premium modern visual design,
> 2. responsive behavior,
> 3. accessibility,
> 4. clean component architecture,
> 5. centralized editable content,
> 6. centralized theme/color tokens,
> 7. GitHub Pages compatibility.
>
> After implementation, test the production build, verify all navigation anchors, verify mobile layout, and check that all content matches `PRD.md`.
>
> Finally, create/update `handbook.md` so a non-expert club maintainer can change text, events, team members, images, colors, typography, and common UI behavior without guessing.

---

# 29. Definition of Done

The implementation should feel like a **real, active university developer community website**, not a generic generated landing page.

A visitor should understand within 5 seconds:

1. What the club is.
2. Where it is based.
3. What students can learn/build.
4. What events are happening/have happened.
5. Who runs the community.

A maintainer should understand within 5 minutes:

1. Where content lives.
2. Where colors live.
3. Where images live.
4. How to add an event.
5. How to add a team member.
6. How to deploy changes.
