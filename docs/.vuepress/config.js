module.exports = {
  base: '/',
  title: '知食',
  description: '大明湖畔-王翠花',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/logo-2.jpeg' }]
  ],
  theme: '',
  port: 9000,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'MacOS', link: '/mac/' },
      { text: 'Google', link: 'https://google.com' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/' },
    ],
    sidebar: [
      {
        title: '工作方面',
        path: '/work/',
        collapsable: true,
        sidebarDepth: 4,
        children: [
          '/work/任务中心/',
          '/work/自助升级/',
          '/work/optimize/',
          '/work/header/',
        ]
      },
      {
        title: '笔记',
        path: '/notes/',
        collapsable: true,
        sidebarDepth: 4,
        children: [
          '/notes/WeChat/'
        ]
      },
      {
        title: 'MacOS',
        path: '/mac/',
        collapsable: true,
        children: [
          '/mac/chrome/',
          '/mac/homebrew/',
          '/mac/nvm/',
          '/mac/sh/',
        ]
      },
      {
        title: '知，食',
        path: '/zhishi/',
      }
    ],
    lastUpdated: '上次更新',
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-zooming',
      {
        selector: '.page img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
  ]
}
