---
title: WSL 下的部署过程
sidebarDepth: 0
---

::: tip
这个过程与 [VMware 下的部署过程](/vmware.md) 是互斥的。
:::

**注意**：WSL 方式虽可以正常完成我们的全部实验，但因为缺少图形界面，部分实验过程可能与实验过程描述有所差别，部分挑战代码实现可能有所差别，适合自主解决问题能力较强的同学使用。

### WSL (Windows Subsystem for Linux) 简介

在 Windows 10 下通过虚拟技术原生的运行 Linux 操作系统的技术。比虚拟机性能更好，交互更方便。

[维基百科](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)

### 启用

+ 按下 `Windows徽标键 + S` 打开小娜，输入 `windows features`，打开 `启用或关闭 Windows 功能` 窗口（或直接 `Windows + R` 运行 `OptionalFeatures.exe`）。
+ 滚动到最下面，勾选 `适用于 Linux 的 Windows 子系统`，确定，重新启动。

### 安装 Linux 发行版

+ 该发行版附于实验工具包 `wsl.zip` 中的 `CanonicalGroupLimited.Ubuntu18.04onWindows_1804.2018.817.0_x64__79rhkp1fndgsc.cab` 。如果你希望使用最新版，也可以从 `https://aka.ms/wsl-ubuntu-1804` 下载，注意如果自己下载，务必 **不要** 运行下载好的包，而是将其后缀修改为 `.cab` 备用。
+ 解压准备好的 cab 文件到任意位置，该位置将是我们新的 Linux 操作系统的根目录，一旦安装好后不要轻易移动、删除，否则可能会造成其他后果。务必 **不要** 在未解压的情况下运行！
+ 右键选择 `以管理员权限运行`，启动 **解压好的** 目录中的 `ubuntu1804.exe` 即可完成安装。（如果只是为了本次操作系统实验，设置 ubuntu 的用户名和密码时，直接按 Ctrl + C 后重新运行可以直接使用无密码的 root 账户，可以避免 sudo 和权限控制的麻烦，但 WSL 直接使用 Root 会导致 Windows 系统暴露在安全风险之中！）
+ 安装后想要使用 WSL，若从未安装过其他版本的 WSL，可以直接使用 win+R，输入 bash，或者在 cmd 里输入 bash，若曾经安装过其他版本的 WSL，需再次双击下载好的 ubuntu.exe 运行

### 使用注意事项

+ Windows 下的目录和 linux 下目录的对应关系：

  + Windows 的 `C:\` 对应 Linux 下的 `/mnt/c/`，其他文件夹同理
  + Linux 下的 `/` 对应 Windows 的 `<WSL解压目录>/rootfs/`

  因此，我们可以在 Windows 下用 Visual Studio Code 这样的软件编写我们的代码，并在 WSL 中运行。**注意**: 由于 Windows 不支持符号链接，也不支持 0644 和 0755 的权限控制，因此不适合执行除了编写实验代码外的其他操作。在共享文件夹中进行 `git checkout` 后可能会遇到所有文件从 0644 -> 0755 的权限改动，commit 这些改动即可。

+ 实验中，所有的 `make qemu` 都需要用 `make qemu-nox` 代替。`make qemu-gdb` 需要用 `make qemu-nox-gdb` 代替
+ 使用 `Ctrl+A， X` 来退出 QEMU。
