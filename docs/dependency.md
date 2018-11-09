---
title: 安装依赖
sidebarDepth: 0
---

（如果该过程下载极慢，建议参考 [加速 APT 下载过程](/speedup.md) ）

太长不看：复制以下代码，贴入终端即可（终端的粘贴快捷键是 Ctrl+Shift+V）。

```bash
sudo apt update
sudo apt install git build-essential binutils g++-multilib libgtk2.0-dev libtool-bin libsdl-dev -y
```

---

对上面内容的解释：

+ 需要安装尽可能新版的 gcc 用于编译、git 用于完成我们的实验，包含在 `git` 和 `build-essential` 中。
+ 编译 QEMU 过程需要 `binutils` 、 `libgtk2.0-dev` 和 `libtool-bin`
+ 我们是 64 位系统，编译 16 位和 32 位软件需要 `g++-multilib`，有时候会包含在 `build-essential` 中，有时候不会，为了避免错误，确认一下。
+ QEMU 显示图形界面需要 `libsdl-dev`，但是 WSL 不能显示图形界面，所以实际上也不需要这个。

该过程应该不会出现任何错误，如果出错，请再次确认 [加速 APT 下载过程](/speedup.md) 是否正确完成。
