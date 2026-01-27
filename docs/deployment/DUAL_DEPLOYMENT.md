# 双部署配置说明

本项目同时支持部署到 **GitHub Pages** 和 **自定义域名**（如 `qaprompt.inaodeng.com`）。

## 📋 部署架构

### 1. GitHub Pages 部署
- **Base 路径**: `/awesome-qa-prompt/`
- **访问地址**: `https://[username].github.io/awesome-qa-prompt/`
- **构建配置**: `GITHUB_PAGES=true`

### 2. 自定义域名部署
- **Base 路径**: `/`（根路径）
- **访问地址**: `https://qaprompt.inaodeng.com`
- **构建配置**: `GITHUB_PAGES=false`

## 🔧 GitHub Actions 工作流

项目使用 GitHub Actions 自动构建两个版本：

### 构建任务

1. **build-github-pages**: 构建 GitHub Pages 版本
   - 使用 `GITHUB_PAGES=true`
   - Base 路径: `/awesome-qa-prompt/`
   - 自动部署到 GitHub Pages

2. **build-custom-domain**: 构建自定义域名版本
   - 使用 `GITHUB_PAGES=false`
   - Base 路径: `/`
   - 生成构建产物供手动部署或 Cloudflare Pages 使用

### 部署任务

1. **deploy-github-pages**: 自动部署到 GitHub Pages
2. **deploy-custom-domain**: 准备自定义域名部署（需要手动配置）

## 🌐 自定义域名部署选项

### 选项 1: Cloudflare Pages（推荐）

1. 在 Cloudflare Dashboard 中创建新的 Pages 项目
2. 连接到 GitHub 仓库
3. 配置构建设置：
   - **Build command**: `npm run docs:build`
   - **Build output directory**: `.vitepress/dist`
   - **Root directory**: `/`（项目根目录）
   - **Environment variables**:
     - `GITHUB_PAGES`: `false`
     - `NODE_VERSION`: `20`

4. 配置自定义域名：`qaprompt.inaodeng.com`

### 选项 2: 手动部署

1. 从 GitHub Actions 下载 `custom-domain-artifact`
2. 将 `.vitepress/dist` 目录内容上传到你的托管服务
3. 确保服务器配置支持 SPA（单页应用）路由

### 选项 3: 使用 GitHub Actions 自动部署到 Cloudflare Pages

如果需要，可以添加 Cloudflare Pages API 集成到 workflow 中。

## ⚙️ 本地构建测试

### 构建 GitHub Pages 版本

```bash
GITHUB_PAGES=true npm run docs:build
```

### 构建自定义域名版本

```bash
GITHUB_PAGES=false npm run docs:build
# 或者
npm run docs:build  # 默认使用根路径
```

## 🔍 验证部署

### GitHub Pages
- 访问: `https://[username].github.io/awesome-qa-prompt/`
- 检查资源路径: 应该包含 `/awesome-qa-prompt/` 前缀

### 自定义域名
- 访问: `https://qaprompt.inaodeng.com`
- 检查资源路径: 应该是根路径 `/`，不包含 `/awesome-qa-prompt/` 前缀

## 🐛 常见问题

### Q: 为什么需要两个构建？
A: 因为 GitHub Pages 和自定义域名使用不同的 base 路径，需要分别构建。

### Q: 如何只部署到其中一个？
A: 可以在 workflow 中禁用不需要的 job，或者使用条件判断。

### Q: 资源加载 503/404 错误？
A: 检查 base 路径配置是否正确：
- GitHub Pages: 必须使用 `/awesome-qa-prompt/`
- 自定义域名: 必须使用 `/`

## 📝 注意事项

1. **Base 路径必须匹配部署环境**，否则会出现资源加载错误
2. **Sitemap 配置**：当前 sitemap 使用自定义域名 hostname
3. **构建时间**：双构建会增加 CI/CD 时间，但确保两个部署都正常工作
