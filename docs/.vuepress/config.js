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
    ],
    repo: 'vampire-rip/vampire-docs',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '你说的不对，我有意见！',
    lastUpdated: '上次更新',
  },
  evergreen: true,
}
