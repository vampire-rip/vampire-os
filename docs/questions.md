---
title:  常见问题及其解答
sidebarDepth: 0
---

### 我有问题！

如果你按照我们的实验步骤逐步进行的，99% 可能不会遇到任何问题。请首先尝试检查一下是不是遗漏了某些步骤。请从 [操作系统上机实验环境搭建](/home.md) 重新开始。

### 我真的还有问题！

真的不可能的啦，我已经按照这一教程实验无数遍了，每一次都成功的。注意再仔细检查一下是不是没有遵照 **注意** 中的事项。

### 你有问题！

请在 GitHub 上注册一个账户，然后本项目提出 issue 或者 pull request，麻烦您啦。

### 安装 qemu 时提示找不到 ***

请检查依赖是否安装正确，参考 [安装依赖](/dependency.md)

### 安装 qemu 时提示 No rule to make target 'all'

不要在 Windows 目录下执行你的编译过程！已经在注意事项里面说了，回去重看 [编译并安装 QEMU](/qemu.md)。

### 安装 qemu 时提示需要执行 git submodule...

./configure 的时候没有指定 --target，回去重看 [编译并安装 QEMU](/qemu.md)。

### 切换到实验目录，make qemu 时提示 Couldn't find a working QEMU executable.

没有取消注释或者没有改对，回去重看 [操作系统上机实验环境搭建](/home.md)
