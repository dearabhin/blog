# Abhin Krishna's Blog

Exploring Brain-Computer Interfaces, Large Language Models, and building the future.

This repository contains the source code for my personal blog, hosted at **[blog.abhinkrishna.com](https://blog.abhinkrishna.com/)**.

---

## 🛠️ Tech Stack & Features

- **Framework**: [VitePress](https://vitepress.dev/) (Vite & Vue-powered static site generator)
- **Diagrams**: [Mermaid.js](https://mermaid.js.org/) integrated via `vitepress-plugin-mermaid`
- **Analytics**: Google Analytics (`gtag.js`)
- **Hosting**: GitHub Pages with a custom domain (`blog.abhinkrishna.com`) managed through Cloudflare DNS
- **CI/CD**: Automated building and deployment using GitHub Actions

---

## 🚀 Local Development

Follow these steps to run the blog locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v20 or higher) installed.

### 2. Install Dependencies
Clone the repository and install the npm packages:
```bash
git clone https://github.com/dearabhin/blog.git
cd blog
npm install
```

### 3. Development Commands

| Command | Action |
| :--- | :--- |
| `npm run docs:dev` | Start the local development server (usually at `http://localhost:5173`) |
| `npm run docs:build` | Build the static website for production under `doc/.vitepress/dist` |
| `npm run docs:preview` | Preview the production build locally |

---

## 📂 Project Structure

```text
├── .github/workflows/    # GitHub Actions deployment workflow
├── doc/
│   ├── .vitepress/       # VitePress configuration & build output
│   │   ├── config.mts    # Site configuration, head tags, theme settings
│   │   └── theme/        # Custom styling and theme overrides
│   ├── posts/            # Blog posts (Markdown files)
│   ├── public/           # Static assets (favicons, CNAME, robots.txt, images)
│   └── index.md          # Homepage content
├── package.json          # Node dependencies and scripts
└── README.md             # This file
```

---

## 🚢 Deployment

The website is configured for continuous deployment:
1. **GitHub Actions**: On every push to the `main` branch, the `.github/workflows/deploy.yml` workflow automatically installs dependencies, runs `npm run docs:build`, and publishes the output.
2. **Custom Domain (CNAME)**: The domain is routed to `blog.abhinkrishna.com` via the `CNAME` file located in the static asset directory (`doc/public/CNAME`).
