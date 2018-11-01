module.exports = {
  title: 'Vampire Ink',
  description: 'Where the vampire reads and writes',
  themeConfig: {
    nav: [
      { text: 'vampire-ink', link: '/home' },
      { text: 'vampire-rip', link: 'https://vampire.rip' },
    ],
    sidebar: [
      ['/home', '主页'],
      {
        title: '前端的 Vampire',
        collapsable: false,
        children: [
          ['/vampire/codingstyle.md', '有趣的 Coding Style'],
          ['/vampire/sw.md', '糟糕的 Service Worker']
        ]
      },
      {
        title: '吐槽 & 杂项',
        collapsable: false,
        children: [
          ['/misc/visualstudio.md', '辣鸡 Visual Studio'],
        ]
      },
    ],
    repo: 'vampire-rip/vampire-docs',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '你说的不对，我有意见！',
    lastUpdated: '上次更新',
  },
  evergreen: true,
}
