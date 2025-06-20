// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EarthCube',
  tagline: 'One Unique Towny',
  favicon: 'img/EarthCube logo-favicon.png',

  // Set the production url of your site here
  url: 'https://www.earthcubemc.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RangerOro', // Usually your GitHub org/user name.
  projectName: 'test-website-earthcube', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
  [
    'classic',
    ({
      docs: {
        sidebarPath: './sidebars.js',
        routeBasePath: '/docs',
      },
      blog: {
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
      },
    }),
  ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'EarthCube logo',
          src: 'img/EarthCube logo-favicon.png',
        },
        items: [
          {
            label: 'Community',
            position: 'left',
            items: [
              { label: 'Discord', href: 'https://discord.earthcubemc.net' },
              { label: 'YouTube', href: 'https://www.youtube.com/@EarthCubeMC'},
              { label: 'TikTok', href: 'https://www.tiktok.com/@earthcubemcserver' }
            ],
          },
          { to: '/docs', label: 'Docs', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'http://map.earthcubemc.net/', label: 'Map', position: 'left' },
          { href: 'https://store.earthcubemc.net/', label: 'Store', position: 'left' },
          { to: '/#join', label: 'Play Now', position: 'right', className: 'navbar__button' },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        { name: 'description', content: 'Explore a 1:750 scale version of the real world, build your own town, and engage in politics and warfare!' },
        { name: 'keywords', content: 'Minecraft, Towny, Earth, Server, Politics, Economy, Planets, Minecraft Server, Minecraft Towny, Minecraft Economy, Minecraft Earth' },
        { property: 'og:title', content: 'EarthCubeMC - Minecraft Earth Server' },
        { property: 'og:description', content: 'Explore a 1:750 scale version of the real world, build your own town, and engage in politics and warfare!' },
        { property: 'og:image', content: 'https://test-website-earthcube-git-main-rangeroros-projects.vercel.app/img/europemap.png' },
        { property: 'og:url', content: 'https://test-website-earthcube-git-main-rangeroros-projects.vercel.app/' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
    }),
};

export default config;