# 移动端测试 (Mobile Testing)

[English](./README_EN.md) | 简体中文

## 📋 概述

移动端测试是针对移动应用和移动设备特性进行的专项测试活动。本模块提供全面的移动端测试策略和方法指导，帮助测试工程师应对移动端测试的独特挑战，确保移动应用的质量和用户体验。

## 🎯 适用场景

- **原生应用测试**：iOS 和 Android 原生应用测试
- **混合应用测试**：Hybrid 应用的测试验证
- **移动 Web 测试**：移动浏览器中的 Web 应用测试
- **跨平台兼容性测试**：多平台设备兼容性验证
- **移动端性能测试**：移动应用性能和资源优化

## 📚 提示词文件

### [MobileTestingPrompt.md](MobileTestingPrompt.md)
**语言**：中文  
**角色**：资深移动端测试专家  
**功能**：设计全面的移动端测试策略和测试方案

**核心能力**：
- iOS 和 Android 平台特性测试
- 设备兼容性和网络连接测试
- 移动端生命周期和用户交互测试
- 性能、安全、用户体验专项测试

### [MobileTestingPrompt_EN.md](MobileTestingPrompt_EN.md)
**语言**：English  
**角色**：Senior Mobile Testing Expert  
**功能**：Design comprehensive mobile testing strategies and test plans

## 🚀 快速开始

### 基本使用流程

1. **分析应用特性**
   ```
   - 应用类型（原生/混合/Web）
   - 目标平台（iOS/Android）
   - 核心功能和用户场景
   - 技术架构和依赖
   ```

2. **制定测试策略**
   ```
   设备覆盖：[目标设备和系统版本]
   测试重点：[关键测试场景和功能]
   测试方法：[手动测试和自动化测试]
   质量标准：[移动端质量评判标准]
   ```

3. **获取测试方案**
   - 设备兼容性测试矩阵
   - 移动端专项测试用例
   - 自动化测试实施方案
   - 性能和用户体验评估

## 💡 核心测试领域

### 平台特性测试
- **iOS 平台**：Siri 集成、Touch ID/Face ID、3D Touch
- **Android 平台**：Google 服务、多窗口模式、权限模型
- **系统集成**：通知、分享、快捷方式
- **设备特性**：传感器、摄像头、GPS、NFC

### 兼容性测试
- **设备兼容性**：不同品牌、型号、配置的设备
- **系统版本**：不同操作系统版本的兼容性
- **屏幕适配**：不同屏幕尺寸、分辨率、密度
- **网络环境**：2G/3G/4G/5G/WiFi 网络测试

### 用户体验测试
- **触摸交互**：点击、滑动、缩放、旋转手势
- **响应性能**：启动时间、页面切换、操作响应
- **电池优化**：电池消耗和省电模式适配
- **中断处理**：来电、短信、通知的处理

## 🔧 测试工具

### 自动化工具
- **Appium**：跨平台移动应用自动化
- **XCUITest**：iOS 原生自动化测试
- **Espresso**：Android 原生自动化测试
- **Detox**：React Native 应用自动化

### 云测试平台
- **Firebase Test Lab**：Google 云测试平台
- **AWS Device Farm**：Amazon 设备测试服务
- **BrowserStack**：跨设备云测试平台
- **Sauce Labs**：移动应用云测试

### 性能分析工具
- **Xcode Instruments**：iOS 性能分析
- **Android Profiler**：Android 性能分析
- **GameBench**：移动应用性能监控
- **TestFairy**：移动应用测试和分析

## 📱 设备管理策略

### 设备选择原则
- **市场份额**：基于市场占有率选择主流设备
- **用户群体**：基于目标用户群体选择设备
- **技术特性**：覆盖不同技术特性的设备
- **成本效益**：平衡测试覆盖和成本投入

### 测试环境
- **真机测试**：在真实设备上进行测试
- **模拟器测试**：使用模拟器进行快速验证
- **云端测试**：利用云平台进行大规模测试
- **设备农场**：建立内部设备测试农场

## 🔗 相关资源

### 内部资源
- [自动化测试](../AutomationTesting/) - 移动端自动化实施
- [性能测试](../PerformanceTesting/) - 移动端性能测试
- [用户体验测试](../TestStrategy/) - 移动端 UX 测试策略

### 外部资源
- [Appium 官方文档](http://appium.io/)
- [移动测试最佳实践](https://www.guru99.com/mobile-testing.html)
- [iOS 测试指南](https://developer.apple.com/testing/)
- [Android 测试指南](https://developer.android.com/training/testing)

---

**确保移动应用在任何设备上都能完美运行！** 📱