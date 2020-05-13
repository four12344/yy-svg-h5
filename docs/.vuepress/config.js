/* 导航栏 */
var nav = {
    // 导航栏 Logo
    // logo: '/logo.jpeg',

    // 导航栏 链接
    nav: [
      { text: 'Home', link: '/' },
      { text: '【短链1.5】', link: '/【200406】短链1.5工作笔记/' },
      // { text: '【日积月累】', link: '/【日积月累】/' },
      // { text: '【文章】', link: '/【文章】/' },
      // {
      //   text: '【知识点】',
      //   ariaLabel: 'Guide Menu', // 不知道又啥用
      //   items: [
      //     // { text: 'CSS', link: '/【知识点】/CSS/' },
      //     { text: 'Http及浏览器', link: '/【知识点】/HTTP及浏览器/' },
      //     // { text: 'JS', link: '/【知识点】/JS/' },
      //     // { text: 'MP', link: '/【知识点】/MP/' },
      //     { text: 'VUE', link: '/【知识点】/VUE/' },
      //     { text: 'Webpack', link: '/【知识点】/Webpack/' }
      //   ]
      // },
      // // 外网
      // { text: '外网', link: 'https://google.com', target:'_self', rel:'' },
    ],


    // 导航栏 禁用
    // navbar: false
}

/* 侧边栏 */
var sidebar = {
  // sidebar: [
  //   '/',
  //   ['/config', '重命名'], // 默认显示 h1，可以修改名字
  //   { 
  //     title: 'guide', // 必要的
  //     // path: '', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  //     // collapsable: false, // 可选的, 默认值是 true, 是否永远展开
  //     // sidebarDepth: 1,    // 可选的, 默认值是 1
  //     children: [
  //       '/guide/',
  //       '/guide/heihei' // 默认显示 h1，可以修改名字
  //     ]
  //   }
  // ],

  // displayAllHeaders: false, // 是否显示非活动页的二级标题 默认为true

  sidebar: 'auto', // 自动生成，当前页面的导航栏
}

/* 搜索框 */
var search = {
  // search: false, // 禁用
  searchMaxSuggestions: 10, // 搜索框显示的搜索结果数量

  // Algolia 搜索 需要你在使用之前将你的网站提交给它们用于创建索引。
  // algolia: {
  //   apiKey: '<API_KEY>',
  //   indexName: '<INDEX_NAME>'
  // }
}

module.exports = {
  base: '/i-want-to-tell-u/',
  title: '前端卖菜情报局', // 网站标题
  description: '前端卖菜情报局',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'referrer', content: 'no-referrer'}]
    // ['meta', { name: 'baidu-site-verification', content: 'ZAdkE6LA10'}]
  ],
  themeConfig: {
    ...nav, // 导航栏
    ...sidebar, // 侧边栏
    ...search, // 搜索框
    lastUpdated: '上次更新', // string | boolean // 最后更新时间 // 基于 git 的项目
  },
  markdown: {
    lineNumbers: true // 是否显示代码块的行数
  },
  // 语言的设置
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性 // en-US
    },
  }
}