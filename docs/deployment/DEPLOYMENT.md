# 🚀 部署指南 / Deployment Guide

**简体中文** | [English](#english)

---

## 📊 部署状态 / Deployment Status

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-deployed-orange.svg)](https://qaprompt.inaodeng.com)

- 🟢 **deployed** - 部署成功 / Deployment successful
- 🔴 **failed** - 部署失败 / Deployment failed
- 🟡 **building** - 正在构建中 / Building

---

## 🎯 部署说明 / Deployment Instructions

本项目使用 **Cloudflare Pages** 进行自动部署和托管。

This project uses **Cloudflare Pages** for automatic deployment and hosting.

### 步骤 1: 配置 Cloudflare Pages / Step 1: Configure Cloudflare Pages

1. 登录 Cloudflare Dashboard / Log in to Cloudflare Dashboard
2. 进入 "Workers & Pages" / Go to "Workers & Pages"
3. 点击 "Create" -> "Pages" -> "Connect to Git" / Click "Create" -> "Pages" -> "Connect to Git"
4. 选择本项目仓库 / Select this repository
5. 配置构建设置 / Configure build settings：
   - **Framework preset**: `VitePress` (or `None`)
   - **Build command**: `npm run docs:build`
   - **Build output directory**: `.vitepress/dist`
   - **Root directory**: `/` (根目录 / root directory)

### 步骤 2: 自定义域名 / Step 2: Custom Domain

1. 在 Pages 项目设置中添加自定义域名 / Add custom domain in Pages project settings: `qaprompt.inaodeng.com`
2. Cloudflare 会自动配置 DNS 记录 / Cloudflare will automatically configure DNS records

### 步骤 3: 故障排除 / Step 3: Troubleshooting

如果是遇到 **503 Service Unavailable** 错误，请尝试：
If you encounter **503 Service Unavailable** errors, please try:

1. 在 Cloudflare Dashboard 中 / In Cloudflare Dashboard:
   - **Speed** > **Optimization** > **Content Optimization**
   - 禁用 **Speed Brain** / Disable **Speed Brain**
   - 禁用 **Rocket Loader** / Disable **Rocket Loader**
2. 清除缓存并重新部署 / Purge cache and redeploy

---

## 🔄 日常更新 / Daily Updates

配置完成后，每次更新只需推送代码到 `main` 分支，Cloudflare Pages 会自动触发构建和部署。

After configuration, simply push code to the `main` branch to trigger automatic build and deployment on Cloudflare Pages.

```bash
git add .
git commit -m "docs: updates"
git push origin main
```

---

## 💻 本地开发 / Local Development

### 安装依赖 / Install Dependencies

```bash
npm install
```

### 启动开发服务器 / Start Development Server

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看效果 / Visit `http://localhost:5173` to view.

### 构建生产版本 / Build Production Version

```bash
npm run docs:build
```

### 预览生产版本 / Preview Production Version

```bash
npm run docs:preview
```

---

## 🔗 相关链接 / Related Links

- **在线文档 / Online Documentation**: https://qaprompt.inaodeng.com/
- **GitHub 仓库 / GitHub Repository**: https://github.com/naodeng/awesome-qa-prompt
