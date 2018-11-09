---
title: 加速 APT 下载过程
sidebarDepth: 0
---

### 一般做法

太长不看：将 APT 下载源修改为国内访问较快的

+ [清华大学源(IPv6)](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)、
+ [浙江大学源](https://mirrors.zju.edu.cn/)、
+ [中国科技大学源(IPv6)](https://mirrors.ustc.edu.cn/repogen/)、
+ [阿里云源](https://opsx.alibaba.com/mirror)

::: danger 注意
以下所有操作仅适用于 **Ubuntu 18.04 LTS**（即本教程所选用的操作系统）! 请勿在其他系统上应用下述的任何内容！其他操作系统请自行参考上面链接的提示修改文件。
:::

用你熟悉的编辑器打开 `/etc/apt/sources.list`，将里面的内容替换为对应源的内容即可。这些源的访问速度相似，**选择一个** 自己最相信的且最喜欢的即可。

清华大学源：

```apt
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

浙江大学源：

```apt
deb http://mirrors.zju.edu.cn/ubuntu bionic main universe restricted multiverse
deb http://mirrors.zju.edu.cn/ubuntu bionic-security main universe restricted multiverse
deb http://mirrors.zju.edu.cn/ubuntu bionic-updates main universe restricted multiverse
deb http://mirrors.zju.edu.cn/ubuntu bionic-backports main universe restricted multiverse
deb-src http://mirrors.zju.edu.cn/ubuntu bionic main universe restricted multiverse
deb-src http://mirrors.zju.edu.cn/ubuntu bionic-security main universe restricted multiverse
deb-src http://mirrors.zju.edu.cn/ubuntu bionic-updates main universe restricted multiverse
deb-src http://mirrors.zju.edu.cn/ubuntu bionic-backports main universe restricted multiverse
```

中国科技大学源：

```apt
deb https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse

deb https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

deb https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse

deb https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse

## Not recommended
# deb https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://ipv6.mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

阿里云源：

```apt
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```

### 高科技用户

如果已经有了自己相对稳定的服务器，建议使用官方源 + 设置 APT 代理（注意，不支持 SOCKS）

创建 `/etc/apt/apt.conf.d/proxy.conf` （该文件名是随意选取的，在该目录创建任何文件都会生效），并修改其内容为

``` apt
Acquire::http::Proxy "http://user:password@proxyserver:port/";
Acquire::https::Proxy "http://user:password@proxyserver:port/";
```

其中 user:password，proxyserver，port 替换成自己服务器对应的即可（一般为 localhost）
