# 快速启动指南

## 🚀 启动本地文档网站

### 第一步：安装依赖

```bash
npm install
```

如果你使用其他包管理器：

```bash
# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 第二步：启动开发服务器

```bash
npm run docs:dev
```

### 第三步：访问网站

打开浏览器访问：`http://localhost:5173`

你将看到一个美观的文档网站，包含：
- 📚 所有测试类型的提示词（完整版 + 精简版）
- 🔄 三个实用的测试工作流程
- 🔍 全文搜索功能
- 🌏 中英文双语切换
- 🌓 深色/浅色主题

## 📝 使用提示词

### 方式一：通过网站浏览

1. 在左侧导航栏选择测试类型
2. 点击"完整版"或"精简版"
3. 复制提示词内容
4. 粘贴到 AI 助手（ChatGPT、Claude 等）

### 方式二：直接访问文件

所有提示词文件都在对应的文件夹中：

```
RequirementsAnalysis/RequirementsAnalysisPrompt.md      # 需求分析（完整版）
RequirementsAnalysis/RequirementsAnalysisPrompt_Lite.md # 需求分析（精简版）
TestCaseWriting/TestCaseWritingPrompt.md                # 测试用例编写（完整版）
...
```

## 🔄 工作流程使用

访问 `Workflows/` 目录或在网站上点击"工作流程"：

- **日常测试工作流程**：适合日常测试活动
- **迭代测试工作流程**：适合 2 周敏捷迭代
- **发布测试工作流程**：适合生产环境发布

每个工作流程都包含：
- 详细的时间线
- 检查清单
- 相关提示词链接
- 最佳实践建议

## 🛠️ 构建静态网站

如果你想构建静态网站用于部署：

```bash
npm run docs:build
```

构建产物在 `.vitepress/dist` 目录。

预览构建结果：

```bash
npm run docs:preview
```

## 📤 部署到 GitHub Pages

详细部署说明请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

快速部署：

1. 推送代码到 GitHub
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为源
4. GitHub Actions 会自动构建和部署

## 💡 提示

### 搜索功能

按 `/` 或点击搜索框，输入关键词快速查找内容。

### 主题切换

点击右上角的主题切换按钮，在深色和浅色主题之间切换。

### 语言切换

点击右上角的语言切换按钮，在中文和英文之间切换。

### 复制代码

将鼠标悬停在代码块上，点击右上角的复制按钮。

### 目录导航

右侧显示当前页面的目录，点击可快速跳转到对应章节。

## 🐛 遇到问题？

### 端口被占用

如果 5173 端口被占用，VitePress 会自动使用下一个可用端口。

### 依赖安装失败

尝试删除 `node_modules` 和 `package-lock.json`，然后重新安装：

```bash
rm -rf node_modules package-lock.json
npm install
```

### 页面显示异常

清除浏览器缓存或使用无痕模式访问。

### 更多问题

查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 的常见问题部分。

## 📚 更多资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [项目 GitHub 仓库](https://github.com/naodeng/awesome-qa-prompt)

---

**祝你使用愉快！** 🎉
