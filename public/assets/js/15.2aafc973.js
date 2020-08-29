(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{65:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(1),o=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("p",[t._v("请再次确认已经完成了 "),a("router-link",{attrs:{to:"/dependency.html"}},[t._v("安装依赖")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"获取源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取源代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取源代码")]),t._v(" "),a("p",[t._v("预先获取好的源代码已经附在实验工具中 "),a("code",[t._v("qemu.zip")]),t._v(" 的 "),a("code",[t._v("qemu")]),t._v(" 文件夹中了。如果想使用最新版本的 QEMU，也可以执行：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/mit-pdos/6.828-qemu.git qemu\n")])])]),a("h3",{attrs:{id:"构建并安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建并安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 构建并安装")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意！")]),t._v(" "),a("p",[t._v("该过程 "),a("strong",[t._v("不能")]),t._v(" 在 Windows 目录下完成！ 如果使用 WSL，务必注意不要将其放在 "),a("code",[t._v("/mnt/")]),t._v(" 目录下；如果使用 VMware，务必注意不要将其放在 "),a("code",[t._v("/mnt/hgfs")]),t._v(" 目录下。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" qemu "),a("span",{attrs:{class:"token comment"}},[t._v("# 切换到源代码目录")]),t._v("\n./configure --disable-kvm --disable-werror --target-list"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"i386-softmmu x86_64-softmmu"')]),t._v(" --prefix"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/qemu\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 其中，--disable-werror 是禁止将警告视为错误")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 指定 --target-list 即指定我们需要的模块，留空会大大增加依赖数和编译时间")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 指定 --prefix 是指定 QEMU 的安装目录")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 注意该 makefile 似乎不支持多核心编译，务必不要使用 -j<n>")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 该过程耗时较长且可能会失败，")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 如果结束时出现 `...failed, nothing to be done for ..., stop`")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 类似的提示说明构建失败了，务必检查一下之前操作是否有遗漏再重新执行")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("如果没有错误提示，尝试执行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/usr/local/qemu/bin/qemu-system-i386\n"),a("span",{attrs:{class:"token comment"}},[t._v("# ↑ 如果没有修改安装路径，即，留空或指定了 /usr/local/qemu")]),t._v("\n")])])]),a("p",[t._v("最终会出现这样的提示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"qemu_ok.png",alt:"<QEMU安装成功>"}})]),t._v(" "),a("p",[t._v("恭喜，一切顺利，可以继续配置了~")])])},[],!1,null,null,null);o.options.__file="qemu.md";s.default=o.exports}}]);