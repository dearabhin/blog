import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Tech Blog",
  description: "Exploring code, systems, and engineering.",
  

  base: '/blog/', 

  themeConfig: {
    // Top Navigation Bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog Posts', link: '/posts/hello-world' }
    ],

    // Left Sidebar Navigation
    sidebar: [
      {
        text: 'Recent Posts',
        items: [
          { text: 'Hello World', link: '/posts/hello-world' }
        ]
      }
    ],

    // Social Icons on top right
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dearabhin' },
      { icon: 'twitter', link: 'https://x.com/dearabhin' }
    ],
    
    // Footer setup
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Abhin Krishna'
    }
  }
})