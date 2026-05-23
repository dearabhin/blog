import { defineConfig } from "vitepress";
import type { HeadConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// Keeping the sleek orange vector logo that matches your style.css
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23D95C41" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12.1" y1="11.9" x2="18.9" y2="8.2" /><line x1="12.1" y1="12.1" x2="20.3" y2="12.9" /><line x1="12.2" y1="12.4" x2="16.6" y2="19.1" /><line x1="11.8" y1="12.4" x2="7.3" y2="19.2" /><line x1="11.9" y1="12.1" x2="3.7" y2="13.3" /><line x1="11.8" y1="11.7" x2="7.8" y2="4.4" /></svg>';

const SITE_URL = 'https://blog.abhinkrishna.com';
const BASE_PATH = '/';

export default withMermaid(
  defineConfig({
    // Serve from the root of the custom domain
    base: BASE_PATH,
    
    title: "Abhin Krishna",
    description: "Exploring Brain-Computer Interfaces, LLMs, and building the future.",
    cleanUrls: true,

    // Auto-generates sitemap.xml at build time
    sitemap: {
      hostname: SITE_URL
    },
    
    head: [
      // Google Analytics
      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-EE4E441Y4N' }],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EE4E441Y4N');`
      ],

      // Favicons
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],

      // OpenGraph global tags
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Abhin Krishna' }],
      ['meta', { property: 'og:locale', content: 'en_US' }],
      ['meta', { property: 'og:image', content: `${SITE_URL}/og-image.png` }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],

      // Twitter Card global tags
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@dearabhin' }],
      ['meta', { name: 'twitter:creator', content: '@dearabhin' }],
      ['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }],
    ],

    // Dynamic per-page meta tags (og:title, og:description, og:url, canonical)
    // transformHead runs during SSR so tags appear in the actual HTML source
    transformHead({ pageData }) {
      const canonicalUrl = `${SITE_URL}${BASE_PATH}${pageData.relativePath}`
        .replace(/index\.md$/, '')
        .replace(/\.md$/, '');

      const head: HeadConfig[] = [
        ['link', { rel: 'canonical', href: canonicalUrl }],
        ['meta', { property: 'og:title', content: pageData.title || 'Abhin Krishna — Engineering, AI & Neurotech' }],
        ['meta', { property: 'og:url', content: canonicalUrl }],
      ];

      if (pageData.description) {
        head.push(['meta', { property: 'og:description', content: pageData.description }]);
      }

      // Mark posts as article type for richer search results
      if (pageData.relativePath.startsWith('posts/')) {
        head.push(['meta', { property: 'og:type', content: 'article' }]);
        if (pageData.frontmatter?.date) {
          head.push(['meta', { property: 'article:published_time', content: String(pageData.frontmatter.date) }]);
        }
      }

      return head;
    },

    themeConfig: {
      logo: brandLogo,
      
      // Enables the sleek local search bar at the top
      search: {
        provider: "local"
      },
      
      // Top Navigation
      nav: [
        { text: "Home", link: "/" },
        { text: "Posts", link: "/posts/ai-and-llms" }
      ],
      
      // Left Sidebar Navigation
      sidebar: [
        {
          text: "Recent Articles",
          items: [
            { text: "AI & Machine Learning", link: "/posts/ai-and-llms" },
            { text: "Computational Neuroscience", link: "/posts/neurotech" },
            { text: "Startups & Hardware", link: "/posts/startup-journey" }
          ]
        }
      ],
      
      // Social Links connected to your accounts
      socialLinks: [
        { icon: "github", link: "https://github.com/dearabhin" },
        { icon: "twitter", link: "https://x.com/dearabhin" },
        { icon: "linkedin", link: "https://www.linkedin.com/in/abhin-krishna/" },
        { icon: "youtube", link: "https://youtube.com/dearabhin" },
        { icon: "instagram", link: "https://instagram.com/dearabhin" }
      ],
      
      footer: {
        message: 'Built with Sting Energy Drink <img src="/sting-energy.png" alt="Sting" style="height: 1.2em; display: inline-block; vertical-align: middle; margin-left: 4px; margin-bottom: 3px;" />',
        copyright: 'Copyright © 2026 Abhin Krishna'
      }
    },

    // Gives your code blocks the polished GitHub syntax highlighting
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },

    // Custom Mermaid configuration matching the original aesthetic
    mermaid: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#F4F3EE',
        primaryBorderColor: '#D1D1D1',
        primaryTextColor: '#1A1A1A',
        lineColor: '#B3B3B3',
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px'
      },
      flowchart: {
        nodeSpacing: 40,
        rankSpacing: 56,
        padding: 12
      }
    }
  })
);