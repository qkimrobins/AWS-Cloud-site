# AWS Student Builder Group — Central University of Jammu

> Official modern website for the **AWS Student Builder Group / Cloud Club** at Central University of Jammu.

[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## ☁ Overview

A modern student developer community platform built with React, Vite, TypeScript, and Tailwind CSS. The website showcases the club's mission, multi-cloud workshop offerings, technical event timelines, leadership core team, and community resources.

### ✨ Features
- **Modern Cloud-Tech Aesthetic**: Dark-mode primary palette with subtle AWS orange accents, ambient glow mesh, and glassmorphic surfaces.
- **Responsive Architecture**: Fully optimized across 320px mobile screens, tablets, laptops, and ultra-wide desktops.
- **Separation of Concerns**: All site copy, events, team rosters, and feature benefits live in centralized TypeScript content files in `src/content/`.
- **Accessible & Performant**: Semantic HTML5 hierarchy, WCAG 2.2 AA compliant contrast, ARIA labels, keyboard focus rings, and `prefers-reduced-motion` compliance.
- **GitHub Pages Ready**: Configured with relative base path support and automated GitHub Actions CI/CD deployment.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Community SVGs
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/AWS-Cloud-Club-CUJ/AWS-Cloud-site.git

# Navigate to project directory
cd AWS-Cloud-site

# Install dependencies
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Build output will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

This repository is pre-configured for free hosting on **GitHub Pages** using two simple methods:

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. Push your latest code to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin main
   ```
2. Go to your repository on GitHub: **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. GitHub Actions will automatically build and publish your website at `https://<your-username>.github.io/AWS-Cloud-site/`.

### Method 2: One-Command Manual Deploy via `gh-pages`

1. Run the deploy script from your terminal:
   ```bash
   npm run deploy
   ```
2. Go to repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Select the **`gh-pages`** branch and `/ (root)` folder, then click **Save**.

---

## 📖 Maintainer Guide

For full details on updating events, team members, images, copy, and themes, see the [Maintainer Handbook (`handbook.md`)](./handbook.md) and [Product Requirements Document (`PRD.md`)](./PRD.md).

---

## 📄 License & Copyright

© 2026 AWS Student Builder Group Central University Of Jammu. All rights reserved.
