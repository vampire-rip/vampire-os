### 如何完美卸载 Visual Stuido 2017

（做梦）

---

尝试了整整 3 天，如何在不重新安装系统的情况下卸载掉损坏了的 Visual Studio 和 Windows SDK 并重新安装新版本。这期间尝试了各种办法，查找了各种资料，结论当然是，全都没用。但是最后，凭借我的聪明才智，最后还是成功地强行装上了。总之，做个总结吧。

辣鸡微软 MSI 安装机制到现在还没有改！而且疑难解答工具也越做越差。真的不知道 Windows 还能继续做多久。

本文适用于 不小心删除了 Visual Studio 的安装目录、删除了对应的 MSI 安装包、尝试使用官方安装卸载工具但是中途打断、无法从卸载面板卸载 Visual Studio、也没办法重新安装（提示找不到 MSI 或者毫无提示安装中途卡死）的情况。

+ 首先尝试使用官方清理工具。打开管理控制台，切换到 `%ProgramFiles(x86)%\Microsoft Visual Studio\Installer\resources\app\layout\` 目录（这个目录是在安装过程中创建的！如果没有，运行一次安装程序）。运行 `.\InstallCleanup.exe -i`。

+ 如果之后仍然失败，恭喜。继续尝试使用微软的辣鸡卸载工具，已经不维护了，不适用于新版本的 Visual Studio 2017 了。而且它说是最后的努力，根本不是，这种辣鸡工具还是趁早删了吧。[https://github.com/Microsoft/VisualStudioUninstaller](https://github.com/Microsoft/VisualStudioUninstaller)

+ 之后肯定还是会失败啦，所以，手动解决，自己动手丰衣足食吧。看看日志：`Visual Studio` 的日志在 `https://visualstudio.microsoft.com/zh-hans/vs/support/can-get-visual-studio-installation-logs/`，`Windows SDK` 的安装日志在 `%TEMP%\winsdks`。

+ 日志失败的最后一行一定会有失败包所对应依赖的 UUID，也就是类似 {xxxxxxxx-xxxx- xxxx-xxxxxxxxxxxxxxxx} 这样的。找到它。然后，打开注册表，从 `计HKEY_LOCAL_MACHINE\SOFTWARE` 开始搜索 **项**，找到它。注意，有时候可能会找到在 `dependency` 目录下的同 UUID 包，目前还不用在意，只要找到它是谁，它的版本号是谁就好了。

+ 下载 [msicuu.exe](http://www.majorgeeks.com/files/details/windows_installer_cleanup_utility.html)。注意解压之后把 MsiZapU.exe 复制一份改叫 `MsiZap.exe`，然后以管理员权限安装它。

+ 找到所有版本号相同的包，选中，删除。

+ 运行 Visual Studio 2017 安装程序，选择修复，重新启动。

---

啊啊啊辣鸡 Windows 在我尝试搜索注册表的时候死机了。
