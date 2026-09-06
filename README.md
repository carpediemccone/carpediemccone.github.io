# chenchen · 学术个人主页（极简一页式）

参考 guopeiming.github.io 这类极简学术主页：左侧作者栏 + 右侧几大文字段落，
白底细分割线、信息密集，并按视口高度自适应收紧，尽量一屏看完。
纯 HTML/CSS/JS 手写，无构建工具、无外部字体/CDN。

```
github-homepage/
├── index.html     单页内容（中英成对，右上角切换）
├── css/style.css  双皮肤（亮/暗+跟随系统）、两栏极简、高度自适应
├── js/main.js     主题/语言切换(localStorage 记忆)、页脚“最后更新”
├── assets/avatar.svg  站内图标占位
└── README.md      部署 + 内容状态（本文件）
```

本地预览：
```
cd github-homepage
python -m http.server 8000     # 浏览器打开 http://localhost:8000
```
或直接双击 `index.html`。

## 一、上线

1. 建公开仓库 **`carpediemccone.github.io`**；Settings → Pages → 选 `main` 分支、`/ (root)`。
2. 把本目录下 `index.html`、`css/`、`js/`、`assets/` 推到仓库根目录：
   ```
   git init
   git add .
   git commit -m "init homepage"
   git branch -M main
   git remote add origin https://github.com/carpediemccone/carpediemccone.github.io.git
   git push -u origin main
   ```
3. 约 1 分钟后访问 https://carpediemccone.github.io/。

## 二、内容状态

已填入真实信息：简介（哈工大·CS，AI agents + 多模态大模型）、教育经历三段、
论文两篇、邮箱、GitHub、ORCID。右上角 `☾/☀` 换主题、`中/EN` 换语言。

可继续补充（找到相应位置替换即可）：

| 可补充 | 说明 |
|---|---|
| 中文名汉字 | 页头未显示汉字名；提供后取消 index.html 中注释的 `name-zh` 行即可 |
| 研究经历 / 学术活动 | 有 RA/实习/审稿经历时可加回对应小段 |
| 论文作者行 | 现每条只显示标题+期刊+年份；可补作者行（自己的名字可 `<strong>` 加粗） |
| 头像/favicon | `assets/avatar.svg` 是占位，可换成照片 |

## 三、说明
- 托管域只能是 `carpediemccone.github.io`（GitHub Pages 前缀=用户名）；页面署名用 chenchen。
- 若以后想用自定义域名：仓库根放 `CNAME`（内容=你的域名），域名服务商加
  `CNAME → carpediemccone.github.io`。
