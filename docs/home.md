---
title: 操作系统上机实验环境搭建
sidebarDepth: 2
---

本次实验需要在 Ubuntu 16.04 及以上版本完成，本教程目标版本是 Ubuntu 18.04 LTS 且均实践通过。其他系统可能会遇到问题，适合动手能力非常强的学生尝试。

## 下载实验工具包

本次实验中所需的全部资源已经尽可能地放在实验工具包中供同学们在内网下载，或是提供了外网对应 IPv6 的下载方式。

所需资源在（可能不需要全部下载，按需下载即可）：

+ 实验所需源代码 [lab.zip](/files/lab.zip)
+ QEMU [qemu.zip](/files/qemu.zip)
+ Ubuntu 18.04 系统镜像（如需）[ubuntu.zip](/files/ubuntu.zip)
+ VMware Player 虚拟机（如需）[vmware.zip](/files/vmware.zip)
+ Windows Subsystem for Linux（如需）[wsl.zip](/files/wsl.zip)

## 安装 Ubuntu 18.04 系统

有以下几种选择，可以参考自己最喜欢的且合适的。按照难易程度、好用程度从上到下排序。

**注意**: 这些操作是互斥的，完成其中一个即可。

+ [VMware Player + Ubuntu 镜像](/vmware.md)，适合一般同学
+ [Windows 10 WSL](/wsl.md)，适合喜爱 Windows 10 且对 Linux 有一定了解的同学
+ VirtualBox，适合真的很喜欢开源软件的同学
+ 双系统，适合真的很喜欢 Linux 且很热衷于挑战的同学

完成后，即可继续配置接下来的环境。

## 在 Ubuntu 中安装 QEMU

**注意**: 这一步骤是在刚刚安装好的新操作系统中完成的，**不是在 Windows 中！**

进入到刚刚安装好的环境中，打开终端，并参考 [安装 QEMU](/qemu.md)。

## 获取 Lab 源代码

我们的实验工具包里的 `lab.zip` 已经包含了完成本次实验所需的全部源代码，因此，本次实验中全程 **不需要** 使用 `git fetch`、`git pull` 等访问网络的指令。

将实验工具包中的 `lab.zip` 解压，并将 `lab` 文件夹拷贝到 Ubuntu 中，或放置在和 Ubuntu 共享的文件夹中，即准备好了实验所需的源代码。

## 配置 QEMU 执行位置

打开 `lab` 目录下的 `conf` 目录下的 `env.mk`，修改最后一行，**注意务必去掉最前面的 # 号**，将其改为你之前安装 QEMU 时所指定的安装目录，默认为 `/usr/local/qemu/bin/qemu-system-i386`

修改好后，应该是这样的：

![修改 QEMU 安装目录](config_qemu.png)

## 一切完成

返回到 `lab` 目录，执行 `make qemu` （选用 WSL 的同学需要替换为 `make qemu-nox`），如果一切正常，将能够看到下面的界面（WSL 有所不同）：

![一切完成](all_set.png)

如果一切顺利，恭喜，你已经完成了实验所需环境的部署，可以继续向着更远的地方前行了。

如果很不幸遇到了一些问题，可以参考我们的 [常见问题解答](/questions.md)。
