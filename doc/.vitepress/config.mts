import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// Keeping the sleek orange vector logo that matches your style.css
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23D95C41" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12.1" y1="11.9" x2="18.9" y2="8.2" /><line x1="12.1" y1="12.1" x2="20.3" y2="12.9" /><line x1="12.2" y1="12.4" x2="16.6" y2="19.1" /><line x1="11.8" y1="12.4" x2="7.3" y2="19.2" /><line x1="11.9" y1="12.1" x2="3.7" y2="13.3" /><line x1="11.8" y1="11.7" x2="7.8" y2="4.4" /></svg>';

export default withMermaid(
  defineConfig({
    // Crucial for GitHub Pages hosting on a repo named "blog"
    base: "/blog/",
    
    title: "Abhin Krishna",
    description: "Exploring Brain-Computer Interfaces, LLMs, and building the future.",
    cleanUrls: true,
    
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: brandLogo }]
    ],

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
        message: 'Built with VitePress',
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