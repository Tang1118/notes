import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const { path } = require('@vuepress/utils')


export default defineUserConfig<DefaultThemeOptions>({
  base: '/blog/',
  title: '知食',
  description: '大明湖畔-王翠花',
  dest: './dist',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo-2.jpeg' }]
  ],
  theme: path.resolve(__dirname, 'theme'),
  port: 9000,
  markdown: {
    code: {
      lineNumbers: true
    }
  },
  themeConfig: {
    navbar: [
      { text: 'Home', link: '/' },
      { text: '前端面试', children: ['/fe/',''] },
      { text: '踩坑笔记', link: '/notes/' },
      { text: '常用软件', link: '/app/' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/' }
      // { text: 'GitHub', link: 'https://github.com/Tang1118' },
    ],
    
    sidebar: {
      '/fe/': [
        {
          text: '前端基础',
          link: '/fe/',
          children: [
            '/fe/js/数据类型.md',
            '/fe/js/类型判断原理.md',
            '/fe/js/作用域.md',
            '/fe/js/闭包.md',
            '/fe/js/原型.md',
            '/fe/js/继承.md',
            '/fe/js/new 关键字.md',
            '/fe/js/4-1-this和执行上下文.md',
            '/fe/js/4-2-call-apply-bind.md',
            '/fe/js/4-3-箭头函数和普通函数.md',
            '/fe/js/5-1-说下 event loop.md',
            '/fe/js/6-1-var-let-const区别.md',
            '/fe/js/6-2-Promise.md',
            '/fe/js/6-3-generator原理.md',
            '/fe/js/6-4-async、await.md',
            '/fe/js/6-5-Set 和 Map 数据结构.md',
            '/fe/js/8-1-js执行过程.md',
            '/fe/js/8-2-js 垃圾回收.md',
            '/fe/js/8-3-内存泄露.md',
            '/fe/js/深浅拷贝.md',
            '/fe/js/函数柯理化.md',
            '/fe/js/防抖和节流.md',
            '/fe/js/浮点数精度问题.md',
            {
              text: 'this 与 执行上下文',
              children: []
            },
            {
              text: 'Event Loop（事件机制）',
              children: [
                // '/fe/js/5-2-宏任务和微任务的区别',
                // '/fe/js/5-3-浏览器的执行顺序',
              ]
            },
            {
              text: 'ES6 / ES7 相关',
              children: [
                // '/fe/js/6-6-JS 怎么实现 let 和 const 作用域的',
                // '/fe/js/6-7-JS Babel 和 polyfill',
              ]
            },
            {
              text: 'JS 单线程的理解',
              children: []
            },
            {
              text: 'JS 引擎相关（V8）',
              children: []
            },
            {
              text: '其他',
              children: []
            }
          ]
        },
        {
          text: '编程题',
          link: '/fe/coding/'
        },
        {
          text: 'webpack',
          link: '/fe/webpack/'
        },
        {
          text: '微前端',
          link: '/fe/microFE/'
        },
        {
          text: 'Vue 面试',
          link: '/fe/mianshi/vue/'
        },
        {
          text: 'JS 面试',
          link: '/fe/mianshi/js/'
        },
        {
          text: 'Css 面试',
          link: '/fe/mianshi/css/'
        },
        {
          text: 'http 面试',
          link: '/fe/mianshi/http/'
        },
        {
          text: '面经',
          link: '/fe/mianshi/面试记录.md'
        }
      ],
      '/notes/': [
        {
          text: '踩坑笔记',
          children: [
            '/notes/WeChat/'
          ]
        }
      ],
      '/app/': [
        {
          text: '常用软件',
          children: [
            '/app/chrome/',
            '/app/homebrew/',
            '/app/nvm/',
            '/app/sh/'
          ]
        }
      ]
    },
    sidebarDepth: 2,
    lastUpdatedText: '上次更新'
  },
  plugins: [
    '@vuepress/plugin-search',
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-zooming',
      {
        selector: '.page img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000
        }
      }
    ],
    // ['@vuepress/plugin-pwa'],
    // [
    //   '@vuepress/plugin-pwa-popup',
    //   {
    //     locales: {
    //       '/': {
    //         message: '发现新内容可用',
    //         buttonText: '刷新'
    //       }
    //     }
    //   }
    // ],
  ]
})
