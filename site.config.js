module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'ef29dec025d143d3ae29be36681a4fcc',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Mars’ Blog | 记录·分享·回顾',
  domain: 'mars.run',
  author: 'Mars',

  // open graph metadata (optional)
  description: '专注安全技术，个人认知体系成长',
  //socialImageTitle: '菜饼同学',
  //socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  //twitter: null,
  //github: 'frankcbliu',
  //wechatPublicName: '菜饼不菜',
  //wechatPublicURL: 'https://mp.weixin.qq.com/s?__biz=MzkxMzIyOTI1Mg==&mid=2247486027&idx=1&sn=2840f0b8cfdc982b9095dd18ec9892e5',
  notionPublic: 'https://mars0run.notion.site/Mars-Blog-ef29dec025d143d3ae29be36681a4fcc',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  //utterancesGitHubRepo: 'frankcbliu/awesome-nextjs-notion-blog',
  //utterancesGitHubLabel: '博客评论',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: true,

  // set null to remove from year
  copyRightFromYear: 2019,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  
  showPageAsideSocials: true,
  footCounterList: [
    '6a76fdd9ec6d4ae2855aa790d620eec4',
    '651765de-6a0f-4a72-9f91-86f26381aef3'
  ]
}
