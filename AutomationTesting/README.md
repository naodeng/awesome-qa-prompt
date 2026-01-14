# 自动化测试 (Automation Testing)

[English](./README_EN.md) | 简体中文

## 📋 概述

自动化测试是使用工具和脚本来执行测试用例，提高测试效率和质量的重要手段。本模块提供全面的自动化测试架构设计和实施指导，帮助团队建立可扩展、可维护的自动化测试体系。

## 🎯 适用场景

- **Web 自动化测试**：浏览器端应用的自动化测试
- **API 自动化测试**：接口服务的自动化测试
- **移动端自动化测试**：移动应用的自动化测试
- **数据库自动化测试**：数据库操作的自动化验证
- **CI/CD 集成**：持续集成和部署中的自动化测试

## 📚 提示词文件

### [AutomationTestingPrompt.md](AutomationTestingPrompt.md)
**语言**：中文  
**角色**：资深自动化测试架构师  
**功能**：设计全面的自动化测试策略和实施方案

**核心能力**：
- 自动化测试金字塔和分层策略
- Web、API、移动端、数据库自动化
- 技术栈选择和框架设计
- CI/CD 集成和维护优化

### [AutomationTestingPrompt_EN.md](AutomationTestingPrompt_EN.md)
**语言**：English  
**角色**：Senior Test Automation Architect  
**功能**：Design comprehensive test automation strategies and implementation plans

## 🚀 快速开始

### 基本使用流程

1. **分析项目需求**
   ```
   - 项目技术栈
   - 测试需求分析
   - 团队技能评估
   - 自动化目标设定
   ```

2. **制定自动化策略**
   ```
   自动化范围：[需要自动化的测试类型]
   技术选型：[选择的工具和框架]
   实施计划：[分阶段实施计划]
   成功标准：[自动化成功的评判标准]
   ```

3. **获取实施方案**
   - 详细的技术架构设计
   - 自动化框架实现方案
   - CI/CD 集成配置
   - 维护和优化策略

## 💡 核心技术栈

### Web 自动化框架
- **Selenium WebDriver**：跨浏览器自动化测试
- **Playwright**：现代 Web 应用自动化
- **Cypress**：前端开发友好的测试框架
- **Puppeteer**：Chrome DevTools 协议自动化

### API 测试工具
- **REST Assured**：Java REST API 测试
- **Postman/Newman**：API 测试和集合执行
- **Karate DSL**：BDD 风格 API 测试
- **pytest + requests**：Python API 测试

### 移动端框架
- **Appium**：跨平台移动应用自动化
- **XCUITest**：iOS 原生自动化
- **Espresso**：Android 原生自动化
- **Detox**：React Native 自动化

## 🏗️ 架构设计

### 测试金字塔
```
        /\
       /UI\     10% - UI 自动化测试
      /____\
     /      \
    / API测试 \   30% - 接口自动化测试
   /__________\
  /            \
 /   单元测试   \  60% - 单元测试
/________________\
```

### 设计模式
- **Page Object Model (POM)**：页面对象模式
- **Page Factory**：页面工厂模式
- **Fluent Interface**：流畅接口模式
- **Builder Pattern**：建造者模式

## 🔗 相关资源

### 内部资源
- [功能测试](../FunctionalTesting/) - 功能测试策略
- [性能测试](../PerformanceTesting/) - 性能测试自动化
- [移动端测试](../MobileTesting/) - 移动端自动化

### 外部资源
- [Selenium 官方文档](https://selenium.dev/)
- [Playwright 官方文档](https://playwright.dev/)
- [测试自动化最佳实践](https://testautomationu.applitools.com/)

---

**让自动化成为测试效率的倍增器！** 🤖