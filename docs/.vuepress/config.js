module.exports = {
  title: 'Vampire OS',
  description: 'Full guide of 6.828 OS Lab',
  themeConfig: {
    nav: [
      { text: 'vampire-os', link: '/home' },
      { text: '离线阅读', link: '/optimized.md' },
    ],
    sidebar: [
      ['/home', '环境搭建指南'],
      {
        title: '安装 Ubuntu 18.04 系统',
        collapsable: false,
        children: [
          ['/vmware.md', '虚拟机方式'],
          ['/wsl.md', 'WSL 方式']
        ]
      },
      ['/speedup.md', '加速依赖安装过程'],
      ['/dependency.md', '安装依赖'],
      ['/qemu.md', '安装 QEMU'],
      ['/questions.md', '常见问题及解答'],
      ['/optimized.md', '实验内容参考翻译'],
      {
        title: '内容翻译（原稿）',
        collapsable: true,
        children: [
          ['/Lab_1.md', 'Lab 1 启动 PC'],
          ['/Lab_2.md', 'Lab 2 内存管理'],
          ['/Lab_3.md', 'Lab 3 用户进程'],
          ['/Lab_4.md', 'Lab 4 抢占式多任务管理'],
          ['/Lab_5.md', 'Lab 5 文件系统相关'],
        ]
      }
    ],
    repo: 'vampire-rip/vampire-os',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '你说的不对，我有意见！',
    lastUpdated: '上次更新',
  },
  evergreen: true,
}
