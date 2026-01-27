# 🚀 部署指南 / Deployment Guide

**简体中文** | [English](#english)

---

## 📊 部署状态 / Deployment Status

[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)

- 🟢 **passing** - 部署成功 / Deployment successful
- 🔴 **failing** - 部署失败 / Deployment failed
- 🟡 **in progress** - 正在部署中 / Deploying

---

## 🎯 首次部署（必读） / First-Time Deployment (Required Reading)

### ⚠️ 重要：必须先启用 GitHub Pages！/ Important: Enable GitHub Pages First!

**正确顺序 / Correct Order**：
1. ✅ 先启用 GitHub Pages / Enable GitHub Pages first
2. ✅ 再推送代码部署 / Then push code to deploy

### 步骤 1: 启用 GitHub Pages / Step 1: Enable GitHub Pages

1. 访问仓库设置 / Visit repository settings：
   ```
   https://github.com/naodeng/awesome-qa-prompt/settings/pages
   ```

2. 在 **"Build and deployment"** 部分 / In the **"Build and deployment"** section：
   - **Source**: 选择 **"GitHub Actions"**（不是 "Deploy from a branch"）/ Select **"GitHub Actions"** (not "Deploy from a branch")
   - 点击保存 / Click Save

3. 确认设置已保存（页面显示 "Your site is ready to be published"）/ Confirm settings are saved

### 步骤 2: 推送代码 / Step 2: Push Code

```bash
git add .
git commit -m "feat: 配置 GitHub Pages 自动部署 / configure GitHub Pages auto-deployment"
git push origin main
```

### 步骤 3: 等待部署 / Step 3: Wait for Deployment

- 查看部署进度 / View deployment progress: https://github.com/naodeng/awesome-qa-prompt/actions
- 首次部署约需 2-3 分钟 / First deployment takes about 2-3 minutes
- 等待工作流显示绿色勾号 ✅ / Wait for workflow to show green checkmark ✅

### 步骤 4: 访问网站 / Step 4: Visit Website

部署成功后访问 / After successful deployment, visit：
```
https://qaprompt.inaodeng.com/
```

---

## 🔄 日常更新 / Daily Updates

配置完成后，每次更新只需 / After configuration, each update only requires：

```bash
# 1. 修改文档 / Edit documentation
vim README.md

# 2. 提交推送 / Commit and push
git add .
git commit -m "docs: 更新文档内容 / update documentation"
git push origin main

# 3. 自动部署（无需手动操作）/ Auto-deploy (no manual action needed)
# GitHub Actions 会自动完成部署 / GitHub Actions will automatically complete deployment
```

---

## 📊 部署架构 / Deployment Architecture

本项目同时支持部署到 **GitHub Pages** 和 **自定义域名**（如 `qaprompt.inaodeng.com`）。

This project supports deployment to both **GitHub Pages** and **custom domain** (e.g., `qaprompt.inaodeng.com`).

### 1. GitHub Pages 部署 / GitHub Pages Deployment

- **Base 路径 / Base Path**: `/awesome-qa-prompt/`
- **访问地址 / Access URL**: `https://[username].github.io/awesome-qa-prompt/`
- **构建配置 / Build Config**: `GITHUB_PAGES=true`

### 2. 自定义域名部署 / Custom Domain Deployment

- **Base 路径 / Base Path**: `/`（根路径 / root path）
- **访问地址 / Access URL**: `https://qaprompt.inaodeng.com`
- **构建配置 / Build Config**: `GITHUB_PAGES=false`

---

## 📊 部署工作流说明 / Deployment Workflow Explanation

### 工作流程 / Workflow Process

```
┌─────────────────────────────────────┐
│  Push to main branch                │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Job 1: Build GitHub Pages Version │
├─────────────────────────────────────┤
│  📥 Checkout repository             │
│  🟢 Setup Node.js (v20)             │
│  ⚙️  Setup Pages                     │
│  📦 Install dependencies            │
│  🏗️  Build site (GITHUB_PAGES=true)│
│  📤 Upload artifact                 │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Job 2: Build Custom Domain Version│
├─────────────────────────────────────┤
│  📥 Checkout repository             │
│  🟢 Setup Node.js (v20)             │
│  📦 Install dependencies            │
│  🏗️  Build site (GITHUB_PAGES=false)│
│  📤 Upload artifact                 │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Job 3: Deploy to GitHub Pages     │
├─────────────────────────────────────┤
│  🚀 Deploy to GitHub Pages          │
│  🎉 Deployment complete             │
└─────────────────────────────────────┘
```

### 触发条件 / Trigger Conditions

- ✅ 推送到 `main` 分支 / Push to `main` branch
- ✅ 手动触发（在 Actions 页面点击 "Run workflow"）/ Manual trigger

### 构建时间 / Build Time

- 首次构建 / First build: 约 2-3 分钟 / ~2-3 minutes
- 后续构建 / Subsequent builds: 约 1-2 分钟 / ~1-2 minutes

---

## 🌐 自定义域名部署选项 / Custom Domain Deployment Options

### 选项 1: Cloudflare Pages（推荐）/ Option 1: Cloudflare Pages (Recommended)

1. 在 Cloudflare Dashboard 中创建新的 Pages 项目 / Create a new Pages project in Cloudflare Dashboard
2. 连接到 GitHub 仓库 / Connect to GitHub repository
3. 配置构建设置 / Configure build settings：
   - **Build command**: `npm run docs:build`
   - **Build output directory**: `.vitepress/dist`
   - **Root directory**: `/`（项目根目录 / project root）
   - **Environment variables**:
     - `GITHUB_PAGES`: `false`
     - `NODE_VERSION`: `20`

4. 配置自定义域名 / Configure custom domain: `qaprompt.inaodeng.com`

### 选项 2: 手动部署 / Option 2: Manual Deployment

1. 从 GitHub Actions 下载 `custom-domain-artifact` / Download `custom-domain-artifact` from GitHub Actions
2. 将 `.vitepress/dist` 目录内容上传到你的托管服务 / Upload `.vitepress/dist` contents to your hosting service
3. 确保服务器配置支持 SPA（单页应用）路由 / Ensure server supports SPA routing

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
# GitHub Pages 版本 / GitHub Pages version
GITHUB_PAGES=true npm run docs:build

# 自定义域名版本 / Custom domain version
GITHUB_PAGES=false npm run docs:build
# 或者 / or
npm run docs:build  # 默认使用根路径 / default uses root path
```

### 预览生产版本 / Preview Production Version

```bash
npm run docs:preview
```

---

## 🐛 故障排除 / Troubleshooting

### 问题 1: "Get Pages site failed" 或 "Not Found" 错误 / Issue 1: "Get Pages site failed" or "Not Found" Error

**错误信息 / Error Message**：
```
Error: Get Pages site failed
Error: HttpError: Not Found
```

**原因 / Cause**：GitHub Pages 还未启用 / GitHub Pages not yet enabled

**解决方案 / Solution**：
1. 访问 / Visit: https://github.com/naodeng/awesome-qa-prompt/settings/pages
2. Source 选择 **"GitHub Actions"** / Select **"GitHub Actions"** for Source
3. 点击保存 / Click Save
4. 在 Actions 页面点击 "Re-run all jobs" 重新运行 / Click "Re-run all jobs" on Actions page

### 问题 2: 部署失败 / Issue 2: Deployment Failed

**查看日志 / View Logs**：
1. 访问 / Visit: https://github.com/naodeng/awesome-qa-prompt/actions
2. 点击失败的工作流 / Click on the failed workflow
3. 查看错误信息 / View error messages

**常见原因 / Common Causes**：
- 依赖安装失败 / Dependency installation failed: 删除 `node_modules` 重新安装 / Delete `node_modules` and reinstall
- 构建错误 / Build error: 检查 Markdown 文件语法 / Check Markdown file syntax
- 权限问题 / Permission issue: 确认 Actions 有读写权限 / Confirm Actions has read/write permissions

### 问题 3: 网站显示 404 / Issue 3: Website Shows 404

**解决方案 / Solution**：
1. 确认 GitHub Pages Source 设置为 "GitHub Actions" / Confirm GitHub Pages Source is set to "GitHub Actions"
2. 检查 `.vitepress/config.mts` 中 `base` 配置正确 / Check `base` configured correctly in `.vitepress/config.mts`
3. 清除浏览器缓存重试 / Clear browser cache and retry

### 问题 4: 资源加载 503/404 错误 / Issue 4: Resource Loading 503/404 Errors

**解决方案 / Solution**：
检查 base 路径配置是否正确 / Check base path configuration：
- GitHub Pages: 必须使用 `/awesome-qa-prompt/` / Must use `/awesome-qa-prompt/`
- 自定义域名: 必须使用 `/` / Must use `/`

---

## 📋 部署检查清单 / Deployment Checklist

### 首次部署前 / Before First Deployment

- [ ] GitHub Pages 已启用 / GitHub Pages enabled
- [ ] Source 设置为 "GitHub Actions" / Source set to "GitHub Actions"
- [ ] `.vitepress/config.mts` 中 `base` 配置正确 / `base` configured correctly in `.vitepress/config.mts`
- [ ] 代码已推送到 `main` 分支 / Code pushed to `main` branch

### 首次部署后 / After First Deployment

- [ ] Actions 工作流运行成功（绿色勾号）/ Actions workflow runs successfully (green checkmark)
- [ ] 网站可以正常访问 / Website accessible
- [ ] 所有功能正常工作 / All features working
- [ ] README 徽章显示 "passing" / README badge shows "passing"

---

## 🔗 相关链接 / Related Links

- **在线文档 / Online Documentation**: https://qaprompt.inaodeng.com/
- **GitHub 仓库 / GitHub Repository**: https://github.com/naodeng/awesome-qa-prompt
- **Actions 日志 / Actions Logs**: https://github.com/naodeng/awesome-qa-prompt/actions
- **Pages 设置 / Pages Settings**: https://github.com/naodeng/awesome-qa-prompt/settings/pages

---

## 💡 提示 / Tips

1. **首次配置 / First-time setup**: 必须先启用 Pages，再运行 Actions / Must enable Pages before running Actions
2. **Source 选择 / Source selection**: 一定要选 "GitHub Actions"，不是 "Deploy from a branch" / Must select "GitHub Actions", not "Deploy from a branch"
3. **自动部署 / Auto-deployment**: 配置完成后，每次推送自动部署 / After configuration, every push auto-deploys
4. **部署时间 / Deployment time**: 通常 2-3 分钟完成 / Usually completes in 2-3 minutes
5. **Base 路径 / Base path**: 必须匹配部署环境，否则会出现资源加载错误 / Must match deployment environment, otherwise resource loading errors occur

---

**需要帮助？/ Need help?** 查看 [Actions 日志](https://github.com/naodeng/awesome-qa-prompt/actions) 获取详细错误信息 / Check [Actions logs](https://github.com/naodeng/awesome-qa-prompt/actions) for detailed error information.
