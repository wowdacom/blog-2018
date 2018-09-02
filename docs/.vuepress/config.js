module.exports = {
  // 啟用一個自定義的主題
  theme: 'yubisaki',
  title: '吉姆的 Medium',
  description: 'vuepress theme Yubisaki',
  head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  port: 3000,
  // Google Analytics ID
  ga: 'UA-118398641-1',
  // PWA support
  // serviceWorker: true,
  // fuck IE
  //evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    // anchor: { permalink: true },
    // markdown-it-toc 的选项
    //toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // 一個 checkbox 的 TODO List 插件
        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定義的 md 圖片大小 ![](http://test.png =200x200)
    }
  },
  // 主題的一些配置
  themeConfig: {
    // blog 背景圖片
    background: `/path/`,
    // github card
    github: 'wowdacom',
    // blog logo
    logo: 'https://avatars2.githubusercontent.com/u/19840063?s=400&u=2581a9506341ddf7157a1b63a92ace1598d43511&v=4',
    // 制定文章標題顏色
    accentColor: '#2A99AA',
    // 每頁顯示的文章數量
    per_page: 5,
    // 和 vuepress 默認主題一樣，定義導航上的連結
    nav: [
        { text: 'HOME', link: '/' },
        { text: 'GITHUB', link: 'https://github.com/wowdacom' },
        { text: 'CODEPEN', link: '/gallery/' },
        { text: 'ABOUT', link: '/about/' } 
    ]
  }
}
