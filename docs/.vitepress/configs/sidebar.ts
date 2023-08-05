import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/notes/': [
    {
      text: '目录',
      link: '/notes/'
    },
    {
      text: '2022 年',
      collapsed: false,
      items: [
        { text: '富文本内容展示问题', link: '/notes/7' },
        { text: 'canvas 工具方法', link: '/notes/6' },
      ]
    },
    {
      text: '2021 年',
      collapsed: false,
      items: [
        { text: 'Mac 前端开发环境', link: '/notes/5' },
        { text: '微信支付开发对接流程', link: '/notes/4' },
        { text: 'vue2 + ts 路由钩子函数不生效', link: '/notes/3' },
        { text: 'git 相关的', link: '/notes/2' },
      ]
    },
    {
      text: '2020 年',
      collapsed: false,
      items: [
        { text: '微信公众号开发', link: '/notes/1' },
      ]
    },
  ],
  '/fe/': [
    {
      text: '前端相关',
      link: '/fe/'
    },
  ]
}
