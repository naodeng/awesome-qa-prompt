# 🚀 快速部署指南

## 自动部署配置

本项目已配置 GitHub Actions 自动部署，每次推送到 `main` 分支时自动触发。

### 📋 部署状态

查看实时部署状态：

[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)

- **绿色 (passing)**: 部署成功 ✅
- **红色 (failing)**: 部署失败 ❌
- **黄色 (in progress)**: 正在部署中 ⏳

---

## 🎯 首次部署步骤

### 1. 提交代码

```bash
git add .
git commit -m "feat: 配置 GitHub Pages 自动部署"
git push origin main
```

### 2. 启用 GitHub Pages

访问仓库设置：https://github.com/naodeng/awesome-qa-prompt/settings/pages

在 **"Build and deployment"** 部分：
- **Source**: 选择 **"GitHub Actions"**
- 保存设置

### 3. 等待部署

- 查看部署进度：https://github.com/naodeng/awesome-qa-prompt/actions
- 首次部署约需 2-3 分钟

### 4. 访问网站

部署成功后访问：https://naodeng.github.io/awesome-qa-prompt/

---

## 🔄 后续更新

配置完成后，每次推送代码到 `main` 分支都会自动触发部署：

```bash
# 修改文件后
git add .
git commit -m "docs: 更新文档内容"
git push origin main

# GitHub Actions 会自动：
# 1. 检出代码
# 2. 安装依赖
# 3. 构建网站
# 4. 部署到 GitHub Pages
```

---

## 📊 部署工作流说明

### 触发条件

- ✅ 推送到 `main` 分支
- ✅ 手动触发（在 Actions 页面）

### 工作流程

```
1. Checkout 代码
   ↓
2. 设置 Node.js 环境 (v20)
   ↓
3. 安装依赖 (npm ci)
   ↓
4. 构建 VitePress (npm run docs:build)
   ↓
5. 上传构建产物
   ↓
6. 部署到 GitHub Pages
   ↓
7. 完成 ✅
```

### 构建时间

- 首次构建：约 2-3 分钟
- 后续构建：约 1-2 分钟

---

## 🎨 README 徽章说明

README 中的徽章会自动显示部署状态：

```markdown
[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)
```

- 点击徽章可查看详细的部署历史
- 徽章会实时更新部署状态

---

## 🐛 故障排除

### 问题 1: 部署失败

**查看日志**：
1. 访问 https://github.com/naodeng/awesome-qa-prompt/actions
2. 点击失败的工作流
3. 查看错误信息

**常见原因**：
- Node.js 版本不兼容
- 依赖安装失败
- 构建错误（Markdown 语法错误）
- 权限问题

### 问题 2: 网站显示 404

**解决方案**：
1. 确认 GitHub Pages 设置正确（Source: GitHub Actions）
2. 检查 `.vitepress/config.mts` 中的 `base` 配置
3. 重新触发部署

### 问题 3: 样式丢失

**解决方案**：
1. 确认 `base: '/awesome-qa-prompt/'` 配置正确
2. 清除浏览器缓存
3. 重新部署

---

## 📈 部署统计

查看部署历史和统计：
- **Actions 页面**: https://github.com/naodeng/awesome-qa-prompt/actions
- **部署历史**: 点击 "Deploy to GitHub Pages" 工作流
- **成功率**: 查看工作流运行记录

---

## 🔗 相关链接

- **在线文档**: https://naodeng.github.io/awesome-qa-prompt/
- **GitHub 仓库**: https://github.com/naodeng/awesome-qa-prompt
- **Actions 日志**: https://github.com/naodeng/awesome-qa-prompt/actions
- **Pages 设置**: https://github.com/naodeng/awesome-qa-prompt/settings/pages

---

## ✅ 部署检查清单

首次部署前：
- [x] GitHub Actions 工作流文件已创建 (`.github/workflows/deploy.yml`)
- [x] VitePress 配置正确 (`.vitepress/config.mts`)
- [x] `base` 路径设置为 `/awesome-qa-prompt/`
- [x] README 添加部署状态徽章
- [x] 代码已推送到 `main` 分支

首次部署后：
- [ ] GitHub Pages 设置为 "GitHub Actions"
- [ ] 部署工作流运行成功
- [ ] 网站可以正常访问
- [ ] 所有功能正常工作

---

## 🎉 完成！

配置完成后，你只需要：

1. **编辑文档** - 修改 Markdown 文件
2. **提交代码** - `git commit` 和 `git push`
3. **自动部署** - GitHub Actions 自动完成部署
4. **查看结果** - 访问在线文档查看更新

就是这么简单！🚀
