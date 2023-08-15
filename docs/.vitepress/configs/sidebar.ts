import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/notes/': [
    {
      text: '目录',
      link: '/notes/'
    },
    {
      text: '2023 年',
      collapsed: false,
      items: [
        { text: 'Chrome 密码填充启用生物识别身份验证', link: '/notes/13' },
      ]
    },
    {
      text: '2022 年',
      collapsed: false,
      items: [
        { text: 'webstrom 不支持 tailwind 提醒', link: '/notes/12' },
        { text: 'fullPage 插件 afterLoad 钩子执行时机', link: '/notes/11' },
        { text: 'quillEditor 自动获取焦点问题', link: '/notes/10' },
        { text: '项目中依赖同一个库多个版本', link: '/notes/9' },
        { text: 'zsh 更新问题', link: '/notes/8' },
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
      text: '📚 目录',
      link: '/fe/'
    },
    {
      text: 'Javascript 基础',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/fe/js/1-数据类型' },
        { text: '类型判断原理', link: '/fe/js/2-类型判断原理' },
        { text: '作用域', link: '/fe/js/3-作用域' },
        { text: '闭包', link: '/fe/js/4-闭包' },
        { text: '原型和原型链', link: '/fe/js/5-原型和原型链' },
        { text: 'this原理以及用法', link: '/fe/js/6-this原理以及用法' },
      ]
    },
    {
      text: '编程题 Coding',
      collapsed: false,
      items: [
        { text: '函数柯理化', link: '/fe/coding/1-函数柯理化' },
        { text: '手写实现继承', link: '/fe/coding/2-手写实现继承' },
        { text: '手写实现 new', link: '/fe/coding/3-手写实现new' },
      ]
    },
    // {
    //   text: 'ES6 / ES7 相关',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: 'HTML / CSS',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: 'Vue / React',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: 'TypeScript',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: 'Node 相关',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: '工程化 vite / webpack',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: '浏览器相关',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: '网络相关',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: '性能优化',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: '前端监控',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: '安全相关',
    //   collapsed: true,
    //   items: []
    // },
    // {
    //   text: '多人协作',
    //   collapsed: true,
    //   items: []
    // }
  ]
}
