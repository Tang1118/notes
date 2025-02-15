import type { NavLinkType } from './components/type'

type NavData = {
  title: string
  items: NavLinkType[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '工具',
    items: [
      {
        icon: 'https://readhub.cn/icons/favicon-32x32.png',
        title: 'Readhub',
        desc: 'Readhub',
        link: 'https://readhub.cn/'
      },
      {
        icon: '',
        title: '中国-最新加密货币和商业新闻',
        desc: ' 中国-最新加密货币和商业新闻',
        link: 'https://www.business2community.com/zh-cn'
      },
      {
        icon: 'https://satellitemap.space/favicon.ico',
        title: '卫星覆盖图',
        desc: 'Starlink 卫星覆盖图',
        link: 'https://satellitemap.space/'
      },
      {
        icon: 'https://data.worldbank.org.cn/favicon.ico?v=1.1',
        title: '人均 GDP（现价美元）',
        desc: '各个国家的人均 GDP（现价美元）',
        link: 'https://data.worldbank.org.cn/indicator/NY.GDP.PCAP.CD?locations=CN-US&name_desc=false'
      },
      {
        icon: 'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:100:100.image',
        title: '飞书文档',
        desc: '飞书文档',
        link: 'https://www.feishu.cn/drive/home/'
      },
      {
        icon: '',
        title: 'CPI 数据',
        desc: '居民消费价格指数',
        link: 'https://data.eastmoney.com/cjsj/cpi.html'
      },

      {
        icon: 'https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png',
        title: 'Google 邮箱',
        desc: '谷歌 邮箱',
        link: 'https://mail.google.com'
      },
      {
        icon: 'https://mail.163.com/favicon.ico',
        title: '163 网易 邮箱',
        desc: '163 网易 邮箱',
        link: 'https://mail.163.com'
      },
      {
        icon: 'https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_48h.png',
        title: 'QQ 邮箱',
        desc: 'qq 邮箱',
        link: 'https://mail.qq.com'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: '',
        title: '代码截图',
        desc: '',
        link: 'https://carbon.now.sh/'
      },
      {
        icon: '',
        title: 'JSON 格式化', // TODO: 添加图标
        desc: '',
        link: 'chrome-extension://pkgccpejnmalmdinmhkkfafefagiiiad/json-format/index.html'
      },
      {
        icon: '',
        title: 'Excalidraw', // TODO: 添加图标
        desc: '手绘流程图',
        link: 'https://excalidraw.com/'
      },
      {
        icon: '',
        title: '诸君！梦想在此',
        desc: 'Queen Studios 官方网站和商店',
        link: 'https://queenstudios.shop/zh-CN'
      },
    ]
  },
  {
    title: '周刊和博客',
    items: [
      {
        icon: '',
        title: '前端精读',
        desc: '前端精读',
        link: 'https://github.com/ascoders/weekly'
      },
      {
        icon: '',
        title: '奇舞周刊',
        desc: '奇舞周刊',
        link: 'https://weekly.75.team/'
      },
      {
        icon: '',
        title: '阮一峰',
        desc: '阮一峰',
        link: 'https://github.com/ruanyf/weekly'
      },
      {
        icon: '',
        title: 'Rust',
        desc: 'Rust 语言圣经',
        link: 'https://course.rs/about-book.html'
      },
    ]
  },
  {
    title: '新时代的锈儿',
    items: [
      {
        icon: '',
        title: 'Rust',
        desc: 'Rust 语言圣经',
        link: 'https://course.rs/about-book.html'
      },
      {
        icon: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round-min.png',
        title: 'Oxlint',
        desc: 'ESLint 被锈化',
        link: 'https://oxc-project.github.io/docs/guide/usage/linter.html'
      },
      {
        icon: 'https://biomejs.dev/_astro/biome-logo.cd0a0a87.svg',
        title: 'biomejs',
        desc: 'Prettier 被锈化',
        link: 'https://biomejs.dev/'
      },
      {
        icon: 'https://www.rspack.dev/static/image/logo.b5ceba6d.png',
        title: 'Rspack',
        desc: 'Webpack 被锈化',
        link: 'https://www.rspack.dev/zh/'
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Babel 被锈化',
        link: 'https://swc.rs'
      },
      {
        icon: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round-min.png',
        title: 'Oxc',
        desc: '地表速度最快的 JS 解析器 —— Oxc',
        link: 'https://oxc-project.github.io/docs/guide/usage/linter.html'
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: '基于 SWC 的构建工具',
        link: 'https://turbo.build'
      },
    ]
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element',
        desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
        link: 'https://element.eleme.cn/#/zh-CN/component/installation'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.gitee.io/zh-CN'
      },
      {
        icon: 'https://www.naiveui.com/assets/naivelogo-93278402.svg',
        title: 'Naïve UI',
        desc: '一个 Vue 3 组件库比较完整，主题可调，使用 TypeScript，快！有点意思',
        link: 'https://www.naiveui.com/zh-CN/dark'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org'
      },
      {
        icon: 'https://vitepress.dev/vitepress-logo-mini.svg',
        title: 'VitePress',
        desc: 'VitePress 是一个轻量级文档工具',
        link: 'https://vitepress.dev/'
      },
    ]
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com'
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://www.nextjs.cn/'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant-design.antgroup.com/index-cn'
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs'
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN'
      },
      {
        icon: 'https://create.t3.gg/images/t3-dark.svg',
        title: 'create t3 app',
        desc: '让你以最快的方式启动一个独立、全栈、类型安全 NextJS 应用。',
        link: 'https://create.t3.gg/zh-hans/introduction'
      },
      {
        icon: 'https://www.framer.com/images/favicons/favicon.png',
        title: 'motion',
        desc: '强大的 Web 动画库，适用于各种类型的 Web 应用程序',
        link: 'https://github.com/framer/motion'
      },
    ]
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev'
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io'
      },
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com'
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com'
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn'
      },
    ]
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn'
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com'
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com'
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN'
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn'
      },
    ]
  },
  {
    title: 'TypeScript 相关',
    items: [
      {
        icon: '',
        title: '深入理解 TypeScript',
        desc: '深入理解 TypeScript',
        link: 'https://jkchao.github.io/typescript-book-chinese/'
      },
      {
        icon: 'https://zod.dev/logo.svg',
        title: 'Zod',
        desc: 'Zod 是一个以 TypeScript 为首的模式声明和验证库。可以做到静态和运行时的类型检查',
        link: 'https://github.com/colinhacks/zod/blob/master/README_ZH.md'
      },
      {
        icon: 'https://trpc.io/img/logo.svg',
        title: 'tRPC',
        desc: '轻松实现端到端的类型安全 API',
        link: 'https://kuizuo.cn/blog/typescript-full-stack-technology-trpc'
      },
    ]
  },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com'
      },
      {
        icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      },
      {
        icon: 'https://github.githubassets.com/images/icons/emoji/unicode/1f33c.png',
        title: 'DaisyUI 组件',
        desc: '基于 Tailwind CSS 的 UI 组件库',
        link: 'https://daisyui.com/'
      }
    ]
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com'
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai'
      }
    ]
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org'
      },
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        icon: 'https://antv.vision/icons/icon-72x72.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/'
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org'
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org'
      },
    ]
  },
  {
    title: '前端学习资料',
    items: [
      {
        title: 'MDN | Web 开发者指南',
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN'
      },
      {
        title: '菜鸟教程',
        icon: 'https://static.runoob.com/images/favicon.ico',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com'
      },
      {
        title: 'ES6 入门教程',
        icon: '/icons/es6.svg',
        desc: '阮一峰的网络日志',
        link: 'https://es6.ruanyifeng.com'
      }
    ]
  },
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com'
      },
      {
        title: 'Stack Overflow',
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn'
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com'
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com'
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://zhihu.com'
      }
    ]
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc'
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: 'https://v.qq.com'
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        // desc: '',
        link: 'https://www.bilibili.com'
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com'
      },
      {
        icon: '/icons/twitter.svg',
        title: 'Twitter',
        // desc: '',
        link: 'https://twitter.com'
      },
    ]
  }
]
