import { createRequire } from 'module'
import { defineConfig } from 'vitepress'
import { generateSidebarChapter } from './side_bar.js'

const require = createRequire(import.meta.url)

const chapters = generateSidebarChapter('en_US', new Map([
  ['introduction', 'Introduction'],
  ['configuration', 'Configuration'],
  ['premium', 'Premium'],
  ['runtime', 'Runtime'],
  ['advanced-usages', 'Advanced Usages'],
]))

export default defineConfig({
  lang: 'en-US',

  description: 'A rule-based tunnel in Go.',

  themeConfig: {
    nav: nav(),

    logo: '/logo.png',

    lastUpdatedText: 'Last updated at',

    sidebar: chapters,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dalaosec/clash-core' },
    ],

    editLink: {
      pattern: 'https://github.com/dalaosec/clash-core/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    outline: {
      level: 'deep',
      label: 'On this page',
    },

  }
})

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Configuration', link: '/configuration/configuration-reference' },
    {
      text: 'Download',
      items: [
        { text: 'Open-source Edition', link: 'https://github.com/dalaosec/clash-core/releases/' },
        { text: 'Premium Edition', link: 'https://github.com/dalaosec/clash-core/releases/tag/premium' },
      ]
    }
  ]
}


