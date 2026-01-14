# ✅ GitHub Actions 自动部署配置完成

## 📋 配置总结

已为你配置好 GitHub Actions 自动部署，每次推送代码到 `main` 分支时自动部署到 GitHub Pages。

---

## 🎯 关键配置

### 1. GitHub Actions 工作流

**文件**: `.github/workflows/deploy.yml`

**功能**:
- ✅ 监听 `main` 分支推送
- ✅ 自动安装依赖
- ✅ 构建 VitePress 网站
- ✅ 部署到 GitHub Pages
- ✅ 显示部署结果

**触发条件**:
```yaml
on:
  push:
    branches:
      - main
  workflow_dispatch:  # 支持手动触发
```

### 2. README 部署状态徽章

**中文版** (`README.md`):
```markdown
[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)
```

**英文版** (`README_EN.md`):
```markdown
[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)
```

**徽章状态**:
- 🟢 **passing** - 部署成功
- 🔴 **failing** - 部署失败
- 🟡 **in progress** - 正在部署

### 3. VitePress 配置

**文件**: `.vitepress/config.mts`

**关键配置**:
```typescript
base: '/awesome-qa-prompt/',  // GitHub Pages 路径
```

---

## 🚀 首次部署步骤

### 步骤 1: 提交代码

```bash
git add .
git commit -m "feat: 配置 GitHub Actions 自动部署"
git push origin main
```

### 步骤 2: 启用 GitHub Pages

1. 访问: https://github.com/naodeng/awesome-qa-prompt/settings/pages
2. **Source** 选择: **"GitHub Actions"**
3. 保存设置

### 步骤 3: 等待部署

- 查看进度: https://github.com/naodeng/awesome-qa-prompt/actions
- 预计时间: 2-3 分钟

### 步骤 4: 访问网站

https://naodeng.github.io/awesome-qa-prompt/

---

## 🔄 日常使用

配置完成后，每次更新只需：

```bash
# 1. 修改文档
vim README.md

# 2. 提交推送
git add .
git commit -m "docs: 更新文档"
git push origin main

# 3. 自动部署（无需手动操作）
# GitHub Actions 会自动完成部署
```

---

## 📊 部署状态监控

### 查看部署状态

**方式 1: README 徽章**
- 直接在 README 顶部查看徽章状态
- 点击徽章查看详细日志

**方式 2: Actions 页面**
- 访问: https://github.com/naodeng/awesome-qa-prompt/actions
- 查看所有部署历史和日志

**方式 3: 邮件通知**
- GitHub 会在部署失败时发送邮件通知

### 部署日志

点击 Actions 页面的工作流可以查看：
- ✅ 每个步骤的执行状态
- 📝 详细的构建日志
- ⏱️ 执行时间
- 🔗 部署后的网站地址

---

## 🎨 徽章说明

README 中的徽章会实时显示部署状态：

| 徽章显示 | 含义 | 说明 |
|---------|------|------|
| ![passing](https://img.shields.io/badge/build-passing-brightgreen) | 部署成功 | 网站已成功部署并可访问 |
| ![failing](https://img.shields.io/badge/build-failing-red) | 部署失败 | 需要检查错误日志并修复 |
| ![in progress](https://img.shields.io/badge/build-in%20progress-yellow) | 正在部署 | 等待部署完成 |

---

## 🐛 故障排除

### 部署失败怎么办？

1. **查看错误日志**
   - 访问 Actions 页面
   - 点击失败的工作流
   - 查看红色标记的步骤

2. **常见错误及解决方案**

   **错误**: `npm ci` 失败
   ```
   解决: 检查 package.json 和 package-lock.json 是否正确
   ```

   **错误**: 构建失败
   ```
   解决: 检查 Markdown 文件语法错误
   ```

   **错误**: 权限问题
   ```
   解决: 确认仓库 Settings > Actions > General 中
         Workflow permissions 设置为 "Read and write permissions"
   ```

3. **重新触发部署**
   - 访问 Actions 页面
   - 点击 "Re-run all jobs"

---

## 📁 相关文件

| 文件 | 说明 |
|------|------|
| `.github/workflows/deploy.yml` | GitHub Actions 工作流配置 |
| `.vitepress/config.mts` | VitePress 配置（包含 base 路径） |
| `package.json` | 项目依赖和构建脚本 |
| `README.md` | 项目说明（含部署状态徽章） |
| `QUICK_DEPLOY.md` | 快速部署指南 |
| `GITHUB_ACTIONS_SETUP.md` | 本文件 |

---

## 🔗 重要链接

| 链接 | 用途 |
|------|------|
| [在线文档](https://naodeng.github.io/awesome-qa-prompt/) | 访问部署后的网站 |
| [Actions 日志](https://github.com/naodeng/awesome-qa-prompt/actions) | 查看部署历史和日志 |
| [Pages 设置](https://github.com/naodeng/awesome-qa-prompt/settings/pages) | 配置 GitHub Pages |
| [快速部署指南](./QUICK_DEPLOY.md) | 详细的部署说明 |

---

## ✅ 配置检查清单

部署前确认：
- [x] `.github/workflows/deploy.yml` 文件已创建
- [x] `.vitepress/config.mts` 中 `base` 配置正确
- [x] `package.json` 包含构建脚本
- [x] README 添加部署状态徽章
- [x] 代码已推送到 `main` 分支

首次部署后确认：
- [ ] GitHub Pages 设置为 "GitHub Actions"
- [ ] 部署工作流运行成功（绿色徽章）
- [ ] 网站可以正常访问
- [ ] 所有功能正常工作

---

## 🎉 完成！

现在你的项目已经配置好自动部署：

1. ✅ **自动化**: 推送代码自动部署
2. ✅ **状态监控**: README 徽章实时显示状态
3. ✅ **简单易用**: 无需手动操作
4. ✅ **快速部署**: 2-3 分钟完成部署

**下一步**: 提交代码并启用 GitHub Pages！

```bash
git add .
git commit -m "feat: 配置 GitHub Actions 自动部署"
git push origin main
```

然后访问 https://github.com/naodeng/awesome-qa-prompt/settings/pages 启用 GitHub Pages！🚀
