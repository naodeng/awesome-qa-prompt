# 部署指南

本文档说明如何将 QA Prompt Collection 部署为静态网站。

## 📦 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

## 🚀 本地开发

启动本地开发服务器：

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看网站。

## 🏗️ 构建生产版本

```bash
npm run docs:build
```

构建产物将生成在 `.vitepress/dist` 目录。

## 👀 预览生产版本

```bash
npm run docs:preview
```

## 📤 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推荐）

1. 在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build with VitePress
        run: npm run docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. 在 GitHub 仓库设置中：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"

3. 推送代码到 main 分支，GitHub Actions 会自动构建和部署

### 方法二：手动部署

```bash
# 构建
npm run docs:build

# 进入构建产物目录
cd .vitepress/dist

# 初始化 git 仓库
git init
git add -A
git commit -m 'deploy'

# 推送到 gh-pages 分支
git push -f git@github.com:naodeng/awesome-qa-prompt.git main:gh-pages

cd -
```

## 📤 部署到 Vercel

1. 在 Vercel 导入你的 GitHub 仓库
2. 配置构建设置：
   - Build Command: `npm run docs:build`
   - Output Directory: `.vitepress/dist`
3. 点击 Deploy

## 📤 部署到 Netlify

1. 在 Netlify 导入你的 GitHub 仓库
2. 配置构建设置：
   - Build command: `npm run docs:build`
   - Publish directory: `.vitepress/dist`
3. 点击 Deploy

或者创建 `netlify.toml` 文件：

```toml
[build]
  command = "npm run docs:build"
  publish = ".vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📤 部署到 Cloudflare Pages

1. 在 Cloudflare Pages 连接你的 GitHub 仓库
2. 配置构建设置：
   - Build command: `npm run docs:build`
   - Build output directory: `.vitepress/dist`
3. 点击 Save and Deploy

## 🔧 自定义域名

### GitHub Pages

1. 在仓库根目录创建 `public/CNAME` 文件
2. 写入你的域名，例如：`qa-prompts.example.com`
3. 在域名提供商处添加 CNAME 记录指向 `yourusername.github.io`

### Vercel/Netlify/Cloudflare

在各平台的设置中添加自定义域名，并按照提示配置 DNS。

## 📝 配置 Base URL

如果你的网站不是部署在根路径，需要在 `.vitepress/config.mts` 中配置 `base`：

```typescript
export default defineConfig({
  base: '/awesome-qa-prompt/', // 你的仓库名
  // ... 其他配置
})
```

## 🔍 SEO 优化

VitePress 已经内置了良好的 SEO 支持：

- 自动生成 sitemap
- 支持 meta 标签
- 语义化 HTML
- 响应式设计

你可以在每个 Markdown 文件的 frontmatter 中添加 SEO 信息：

```yaml
---
title: 页面标题
description: 页面描述
head:
  - - meta
    - name: keywords
      content: qa, testing, prompt, ai
---
```

## 📊 添加分析

### Google Analytics

在 `.vitepress/config.mts` 中添加：

```typescript
export default defineConfig({
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');`
    ]
  ]
})
```

## 🐛 常见问题

### 构建失败

1. 确保 Node.js 版本 >= 18
2. 删除 `node_modules` 和 `package-lock.json`，重新安装依赖
3. 检查是否有语法错误的 Markdown 文件

### 链接 404

1. 确保所有内部链接使用相对路径
2. 检查文件名大小写是否正确
3. 确保 `cleanUrls` 配置正确

### 样式不生效

1. 清除浏览器缓存
2. 检查 `.vitepress/theme/custom.css` 是否正确导入
3. 使用浏览器开发者工具检查 CSS 是否加载

## 📚 更多资源

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress GitHub](https://github.com/vuejs/vitepress)
- [部署示例](https://vitepress.dev/guide/deploy)
