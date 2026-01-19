# 性能测试 (Performance Testing)

[English](./README_EN.md) | 简体中文

## 📋 概述

性能测试是验证系统在特定负载条件下的性能表现，识别性能瓶颈并提供优化建议的测试活动。本模块提供全面的性能测试策略和方法指导，帮助测试工程师设计科学的性能测试方案，确保系统的性能指标达到预期要求。

## 🎯 适用场景

- **负载测试**：验证系统在预期负载下的性能表现
- **压力测试**：确定系统的最大处理能力和破坏点
- **容量测试**：验证系统在大数据量下的性能表现
- **稳定性测试**：验证系统长时间运行的稳定性
- **性能瓶颈分析**：识别和分析系统性能瓶颈

## 📚 提示词文件

### [PerformanceTestingPrompt.md](PerformanceTestingPrompt.md)
**语言**：中文  
**角色**：资深性能测试专家  
**功能**：设计全面的性能测试策略和测试方案

**核心能力**：
- 负载、压力、峰值、容量等多种性能测试
- 性能指标体系和瓶颈分析框架
- 测试场景真实性和性能优化建议
- 性能监控和趋势分析

### [PerformanceTestingPrompt_EN.md](PerformanceTestingPrompt_EN.md)
**语言**：English  
**角色**：Senior Performance Testing Expert  
**功能**：Design comprehensive performance testing strategies and test plans

## 🚀 快速开始

### 基本使用流程

1. **准备系统信息**
   ```
   - 系统架构图
   - 技术栈信息
   - 业务场景描述
   - 性能目标要求
   ```

2. **设定性能目标**
   ```
   响应时间目标：≤ 2秒
   并发用户数：≥ 1000
   吞吐量目标：≥ 500 TPS
   资源使用率：CPU ≤ 70%
   ```

3. **获取测试方案**
   - 详细的性能测试策略
   - 性能测试场景设计
   - 监控指标和分析方法
   - 瓶颈分析和优化建议

## 💡 核心测试类型

### 性能测试分类
- **负载测试**：验证系统在预期负载下的性能表现
- **压力测试**：确定系统的最大处理能力和破坏点
- **峰值测试**：验证系统在突发负载下的性能表现
- **容量测试**：验证系统在大数据量下的性能表现
- **稳定性测试**：验证系统长时间运行的稳定性

### 性能指标体系
- **用户体验指标**：响应时间、页面加载时间
- **系统吞吐量指标**：TPS、QPS、RPS、并发用户数
- **系统资源指标**：CPU、内存、磁盘、网络使用率
- **应用性能指标**：错误率、可用性、稳定性

## 🔧 常用工具

### 开源工具
- **JMeter**：功能强大的负载测试工具
- **Gatling**：高性能的负载测试工具
- **K6**：现代化的负载测试工具
- **Locust**：Python 编写的负载测试工具

### 商业工具
- **LoadRunner**：企业级性能测试解决方案
- **NeoLoad**：Web 应用性能测试工具
- **BlazeMeter**：云端性能测试平台

## 🔗 相关资源

### 内部资源
- [自动化测试](../testing-types/automation-testing/) - 性能测试自动化
- [测试报告](../testing-types/test-reporting/) - 性能测试报告
- [测试策略](../testing-types/test-strategy/) - 性能测试策略

### 外部资源
- [性能测试最佳实践](https://www.guru99.com/performance-testing.html)
- [JMeter 官方文档](https://jmeter.apache.org/)
- [性能测试指南](https://www.softwaretestinghelp.com/performance-testing-tutorial/)

---

**让系统在任何负载下都能稳定高效运行！** ⚡