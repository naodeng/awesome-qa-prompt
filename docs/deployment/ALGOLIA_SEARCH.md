# Algolia 搜索配置指南

## 📋 配置概览

网站已配置使用 Algolia DocSearch 作为搜索提供者。

### 当前配置

**英文版本（en）**：
```typescript
search: {
  provider: "algolia",
  options: {
    appId: "NV9AJ0CYJ5",
    apiKey: "6c4de688cfc2c543b47aef5101794175",
    indexName: "Awesome QA Prompt",
  },
}
```

**中文版本（root）**：
```typescript
search: {
  provider: "local",
  options: {
    locales: {
      root: {
        translations: { /* 中文翻译 */ }
      }
    }
  }
}
```

## 🔑 Algolia 配置说明

### 必需参数

- **appId**: Algolia 应用 ID
- **apiKey**: 公开搜索 API 密钥（仅用于前端）
- **indexName**: 搜索索引名称

### 配置位置

配置文件：`.vitepress/config.mts`

- 中文版本搜索配置：`locales.root.themeConfig.search`
- 英文版本搜索配置：`locales.en.themeConfig.search`

## 🔍 如何获取 Algolia 凭证

### 方法 1: 申请官方 DocSearch 服务（推荐）

1. 访问 [DocSearch 申请页面](https://docsearch.algolia.com/apply/)
2. 提交你的网站 URL
3. 等待 Algolia 团队索引你的网站
4. 收到 `apiKey` 和 `indexName`

### 方法 2: 使用自己的 Algolia 账户

1. 注册 [Algolia 账户](https://www.algolia.com/)
2. 创建新的应用程序
3. 使用 Algolia Crawler 爬取你的网站
4. 获取 `appId`、`apiKey` 和 `indexName`

## ⚙️ 配置选项

### 基本配置

```typescript
search: {
  provider: "algolia",
  options: {
    appId: "YOUR_APP_ID",
    apiKey: "YOUR_API_KEY",
    indexName: "YOUR_INDEX_NAME",
  }
}
```

### 高级配置（可选）

```typescript
search: {
  provider: "algolia",
  options: {
    appId: "YOUR_APP_ID",
    apiKey: "YOUR_API_KEY",
    indexName: "YOUR_INDEX_NAME",
    // 可选：自定义搜索参数
    searchParameters: {
      facetFilters: ['language:en']
    },
    // 可选：自定义占位符
    placeholder: 'Search docs',
    // 可选：翻译
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search'
      }
    }
  }
}
```

## 🌍 多语言支持

### 为不同语言配置不同的索引

```typescript
locales: {
  root: {
    themeConfig: {
      search: {
        provider: "algolia",
        options: {
          appId: "YOUR_APP_ID",
          apiKey: "YOUR_API_KEY",
          indexName: "awesome-qa-prompt-zh", // 中文索引
        }
      }
    }
  },
  en: {
    themeConfig: {
      search: {
        provider: "algolia",
        options: {
          appId: "YOUR_APP_ID",
          apiKey: "YOUR_API_KEY",
          indexName: "awesome-qa-prompt-en", // 英文索引
        }
      }
    }
  }
}
```

## 🔒 安全注意事项

### API Key 安全

⚠️ **重要**：`apiKey` 应该是**公开搜索 API 密钥**，不是管理 API 密钥。

- ✅ 可以提交到 Git 仓库
- ✅ 仅用于前端搜索
- ❌ 不能用于管理操作（如添加/删除索引）

### 环境变量（可选）

如果需要使用环境变量：

```typescript
search: {
  provider: "algolia",
  options: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME,
  }
}
```

然后在 `.env` 文件中：
```
ALGOLIA_APP_ID=NV9AJ0CYJ5
ALGOLIA_API_KEY=6c4de688cfc2c543b47aef5101794175
ALGOLIA_INDEX_NAME=Awesome QA Prompt
```

## 🐛 故障排除

### 问题 1: 搜索不显示

**可能原因**：
- API Key 无效
- Index Name 不正确
- 索引尚未创建

**解决方案**：
1. 检查 Algolia 控制台中的索引是否存在
2. 验证 API Key 是否正确
3. 确认索引名称拼写正确

### 问题 2: 搜索结果为空

**可能原因**：
- 索引尚未被爬取
- 索引配置不正确

**解决方案**：
1. 检查 Algolia 控制台中的索引记录数
2. 运行爬虫重新索引网站
3. 等待索引完成（可能需要几分钟）

### 问题 3: 搜索按钮不显示

**可能原因**：
- 配置格式错误
- VitePress 版本不兼容

**解决方案**：
1. 检查配置格式是否正确
2. 查看浏览器控制台是否有错误
3. 确认 VitePress 版本支持 Algolia 搜索

## 📝 更新索引

### 自动更新

如果使用 Algolia DocSearch 服务，索引会自动更新。

### 手动更新

如果使用自己的爬虫：

1. 登录 Algolia 控制台
2. 进入 Crawler 配置
3. 手动触发爬取
4. 等待爬取完成

## 🔗 相关资源

- [VitePress 搜索文档](https://vitepress.dev/reference/default-theme-search)
- [Algolia DocSearch 文档](https://docsearch.algolia.com/)
- [Algolia 控制台](https://www.algolia.com/account/api-keys/)
- [DocSearch 申请](https://docsearch.algolia.com/apply/)

## 📅 更新日志

- **2025-01-24**: 配置 Algolia 搜索（英文版本）
- **2025-01-24**: 移除不必要的 `askAi` 配置项
- **2025-01-24**: 创建配置文档
