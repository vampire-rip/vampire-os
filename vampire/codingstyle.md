JavaScript 的代码风格是该遵照
[Google Style Guide](https://google.github.io/styleguide/jsguide.html) 的指引，
还是信 [StandardJS](https://standardjs.com/) 的鬼话呢。。

这真是个令人纠结的问题。。呐，
曾经我是一个坚定的 `Standard` 党，明明 JavaScript 不需要分号嘛，加上分号真是画蛇添足。
直到有一天我写出了这样的代码：

```javascript
(async function its () {
  console.log(`it's`)
})()

(async function wrong () {
  console.log('wrong')
})()
```

    (async function wrong () {
    ^
    TypeError: (intermediate value)(...) is not a function

我终于知道，哪怕中间空两行，怎么想都看不出两者的关系，也会被 JavaScript
解释器当成连续的函数调用。自此以后，我就改用 Google 的 Style 了。然而好景不长，
不久以后我又写出了这样的代码：

```javascript
const goodOneShouldHaveFriends = true;
const sunriseFoxIsGoodEnough = true;
const check = function ifSunriseFoxShouldHaveAFriend() {
  return
    goodOneShouldHaveFriends && sunriseFoxIsGoodEnough;
}
const result = check();
if(result) console.log('sunrisefox will have a friend soon');
else console.log('sunrisefox will be alone forever');
```

好吧，结果显然是 `sunrisefox will be alone forever` 。
加分号真的是害死人啊啊啊啊啊啊(┬＿┬)
于是我也讨厌它了（其实还是自己对 JavaScript 不熟悉啦）

于是以后决定开始尝试自己最开始接触 JavaScript 时遵照的
[Airbnb Style](https://github.com/airbnb/javascript) 了，如果不行的话，
继续回到 Standard。

### 简介

#### Standard

顾名思义，Standard Style，就是官方不承认的、非标准的 JavaScript 代码风格（笑。
不管怎么说，总归没有一种代码风格适合所有项目。最好的话，还是自己写 eslint 规则才是。
或者，干脆自己写得爽就好了，要什么规则（然而在团队合作的时候可能会被打死）。

vampire 用的是 standard style 喵(>^ω^<)

```javascript
// StandardJS
Promise.resolve().then(() =>
  42
).then(number => {
  conlose.log(number)
  return number
}).catch(error => {
  console.error(error.stack)
  return ~~(Math.random() * 100)
}).then(number =>
  console.log('got number: ', number)
)
```

#### Google

谷歌的 Style 相比 Standard 详细很多，而且，不光包含一些代码风格上的内容，
同时还有函数调用惯例、设计方式，等等。讨厌他的原因一方面也是因为他确实管得太宽泛啦，

```javascript
// Google
Promise.resolve().then(() =>
  42
).then((number) => {
  conlose.log(number);
  return number;
}).catch((error) => {
  console.error(error.stack);
  return Math.random() * 100;
}).then((number) =>
  console.log('got number: ', number)
);
```

#### Airbnb

写的时候还没开始用，不过看上去有点...魔法？还要使用过才能评价

```javascript
// Airbnb
Promise.resolve().then(() => 42).then((number) => {
  conlose.log(number);
  return number;
}).catch((error) => {
  console.error(error.stack);
  return ~~(Math.random() * 100);
})
  .then(number => console.log('got number: ', number));
```

### 配置

#### 基本配置

在 eslint 的帮助下，配置它们还是非常非常简单的，只需要

```
npx eslint --init
```

然后就会自动地交互式地安装所希望的代码样式和配置文件啦。

对于 babel 项目来说，为了避免被奇怪的警告（比如类似 import() 未定义），
还要装一个 `babel-eslint` 并且放在配置文件的 `parser` 里面。

对于 vue 项目来说，为了能够正确处理 `.vue` 文件，还要来一个 `eslint-plugin-vue`。
最终，配置文件大概就会变成这个样子（我选择了 JavaScript 格式）：

```javascript
module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "varsIgnorePattern": "^[A-Z]" }]
  }
};

```

#### 自动化配置

为了每次可以愉快地格式化代码，我们可以添加一个 `git pre commit hook`
来自动地执行一些格式化操作，比如，用 [husky](https://github.com/typicode/husky)
处理 Git Hooks，很方便，不需要写 bash 代码啦。

**package.json:**

```json
"husky": {
  "hooks": {
    "pre-commit": "npx eslint --ext .js,.vue src --fix"
  }
}
```

当然，有时候可能并不想格式化全部文件。如果也不愿意处理格式化哪些文件，那么可以用
`lint-staged` 来自动地格式化 `staged` 文件

**package.json:**

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,vue}": [
    "eslint --fix"
  ]
}
```

### 完整流程总结

对于已有 npm 项目：

```bash
npm i eslint -D
npx eslint --init
```

我的选择：
```
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Standard (https://github.com/standard/standard)
? What format do you want your config file to be in? JavaScript
```

需要安装

```bash
npm i eslint-config-standard@latest eslint@>=5.0.0\
 eslint-plugin-import@>=2.13.0 eslint-plugin-node@>=7.0.0\
 eslint-plugin-promise@>=4.0.0 eslint-plugin-standard@>=4.0.0 -D
```

继续安装：

```bash
npm i babel-eslint eslint-plugin-vue -D
```

修改配置文件：

```javascript
module.exports = {
  "extends": [
    "standard",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "varsIgnorePattern": "^[A-Z]" }]
  }
}
```

测试一下

```bash
npx eslint --ext .js,.vue src
```

正常工作，不错哦！

安装 husky，添加 pre-commit hook:

```bash
npm i husky lint-staged -D
```

修改 `package.json`：

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,vue}": [
    "eslint --fix"
  ]
}
```

`commit` 一些文件试试看~ 如果出现了 husky 的提示，恭喜，成功啦！
