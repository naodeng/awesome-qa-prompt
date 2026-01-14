import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Awesome QA Prompt Collection',
  description: '专业的 QA（质量保证）AI 提示词集合',
  
  // GitHub Pages 部署配置
  base: '/awesome-qa-prompt/',
  
  // 设置根目录为项目根目录
  srcDir: '.',
  
  // 排除不需要处理的目录
  srcExclude: [
    '**/node_modules/**',
    '**/.git/**',
    '**/.vitepress/**',
    '**/Reference/**'
  ],
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '测试类型', link: '/RequirementsAnalysis/README' },
          { text: '工作流程', link: '/Workflows/README' },
          { 
            text: '快速开始',
            items: [
              { text: '需求分析', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt' },
              { text: '测试用例编写', link: '/TestCaseWriting/TestCaseWritingPrompt' },
              { text: '功能测试', link: '/FunctionalTesting/FunctionalTestingPrompt' }
            ]
          }
        ],
        
        sidebar: {
          '/': [
            {
              text: '📚 测试类型',
              collapsed: false,
              items: [
                {
                  text: '📝 需求分析',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt' },
                    { text: '精简版', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite' },
                    { text: '说明文档', link: '/RequirementsAnalysis/README' }
                  ]
                },
                {
                  text: '✍️ 测试用例编写',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/TestCaseWriting/TestCaseWritingPrompt' },
                    { text: '精简版', link: '/TestCaseWriting/TestCaseWritingPrompt_Lite' },
                    { text: '说明文档', link: '/TestCaseWriting/README' }
                  ]
                },
                {
                  text: '🔍 功能测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/FunctionalTesting/FunctionalTestingPrompt' },
                    { text: '精简版', link: '/FunctionalTesting/FunctionalTestingPrompt_Lite' },
                    { text: '说明文档', link: '/FunctionalTesting/README' }
                  ]
                },
                {
                  text: '⚡ 性能测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/PerformanceTesting/PerformanceTestingPrompt' },
                    { text: '精简版', link: '/PerformanceTesting/PerformanceTestingPrompt_Lite' },
                    { text: '说明文档', link: '/PerformanceTesting/README' }
                  ]
                },
                {
                  text: '🤖 自动化测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/AutomationTesting/AutomationTestingPrompt' },
                    { text: '精简版', link: '/AutomationTesting/AutomationTestingPrompt_Lite' },
                    { text: '说明文档', link: '/AutomationTesting/README' }
                  ]
                },
                {
                  text: '📱 移动端测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/MobileTesting/MobileTestingPrompt' },
                    { text: '精简版', link: '/MobileTesting/MobileTestingPrompt_Lite' },
                    { text: '说明文档', link: '/MobileTesting/README' }
                  ]
                },
                {
                  text: '🐛 缺陷上报',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/BugReporting/BugReportingPrompt' },
                    { text: '精简版', link: '/BugReporting/BugReportingPrompt_Lite' },
                    { text: '说明文档', link: '/BugReporting/README' }
                  ]
                },
                {
                  text: '📊 测试报告',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/TestReporting/TestReportingPrompt' },
                    { text: '精简版', link: '/TestReporting/TestReportingPrompt_Lite' },
                    { text: '说明文档', link: '/TestReporting/README' }
                  ]
                },
                {
                  text: '🎯 测试策略',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/TestStrategy/TestStrategyPrompt' },
                    { text: '精简版', link: '/TestStrategy/TestStrategyPrompt_Lite' },
                    { text: '说明文档', link: '/TestStrategy/README' }
                  ]
                },
                {
                  text: '🤖 AI辅助测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/AIAssistedTesting/AIAssistedTestingPrompt' },
                    { text: '精简版', link: '/AIAssistedTesting/AIAssistedTestingPrompt_Lite' },
                    { text: '说明文档', link: '/AIAssistedTesting/README' }
                  ]
                },
                {
                  text: '📋 手动测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/ManualTesting/ManualTestingPrompt' },
                    { text: '精简版', link: '/ManualTesting/ManualTestingPrompt_Lite' },
                    { text: '说明文档', link: '/ManualTesting/README' }
                  ]
                },
                {
                  text: '🔒 安全测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/SecurityTesting/SecurityTestingPrompt' },
                    { text: '精简版', link: '/SecurityTesting/SecurityTestingPrompt_Lite' },
                    { text: '说明文档', link: '/SecurityTesting/README' }
                  ]
                },
                {
                  text: '🔌 API测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/APITesting/APITestingPrompt' },
                    { text: '精简版', link: '/APITesting/APITestingPrompt_Lite' },
                    { text: '说明文档', link: '/APITesting/README' }
                  ]
                },
                {
                  text: '♿ 可访问性测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/AccessibilityTesting/AccessibilityTestingPrompt' },
                    { text: '精简版', link: '/AccessibilityTesting/AccessibilityTestingPrompt_Lite' },
                    { text: '说明文档', link: '/AccessibilityTesting/README' }
                  ]
                }
              ]
            },
            {
              text: '🔄 工作流程',
              collapsed: false,
              items: [
                { text: '工作流程概览', link: '/Workflows/README' },
                { text: '📅 日常测试工作流程', link: '/Workflows/daily-testing-workflow_CN' },
                { text: '🏃 迭代测试工作流程', link: '/Workflows/sprint-testing-workflow_CN' },
                { text: '🚀 发布测试工作流程', link: '/Workflows/release-testing-workflow_CN' }
              ]
            }
          ]
        },
        
        outline: {
          level: [2, 3],
          label: '目录'
        },
        
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                  },
                  modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换'
                    }
                  }
                }
              }
            }
          }
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/naodeng/awesome-qa-prompt' }
        ],
        
        footer: {
          message: '基于 MIT 许可发布',
          copyright: 'Copyright © 2024-present'
        }
      }
    },
    
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/README_EN' },
          { text: 'Testing Types', link: '/RequirementsAnalysis/README' },
          { text: 'Workflows', link: '/Workflows/README' },
          { 
            text: 'Quick Start',
            items: [
              { text: 'Requirements Analysis', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt_EN' },
              { text: 'Test Case Writing', link: '/TestCaseWriting/TestCaseWritingPrompt_EN' },
              { text: 'Functional Testing', link: '/FunctionalTesting/FunctionalTestingPrompt_EN' }
            ]
          }
        ],
        
        sidebar: {
          '/': [
            {
              text: '📚 Testing Types',
              collapsed: false,
              items: [
                {
                  text: '📝 Requirements Analysis',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt_EN' },
                    { text: 'Lite Version', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/RequirementsAnalysis/README' }
                  ]
                },
                {
                  text: '✍️ Test Case Writing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/TestCaseWriting/TestCaseWritingPrompt_EN' },
                    { text: 'Lite Version', link: '/TestCaseWriting/TestCaseWritingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/TestCaseWriting/README' }
                  ]
                },
                {
                  text: '🔍 Functional Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/FunctionalTesting/FunctionalTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/FunctionalTesting/FunctionalTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/FunctionalTesting/README' }
                  ]
                },
                {
                  text: '⚡ Performance Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/PerformanceTesting/PerformanceTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/PerformanceTesting/PerformanceTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/PerformanceTesting/README' }
                  ]
                },
                {
                  text: '🤖 Automation Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/AutomationTesting/AutomationTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/AutomationTesting/AutomationTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/AutomationTesting/README' }
                  ]
                },
                {
                  text: '📱 Mobile Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/MobileTesting/MobileTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/MobileTesting/MobileTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/MobileTesting/README' }
                  ]
                },
                {
                  text: '🐛 Bug Reporting',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/BugReporting/BugReportingPrompt_EN' },
                    { text: 'Lite Version', link: '/BugReporting/BugReportingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/BugReporting/README' }
                  ]
                },
                {
                  text: '📊 Test Reporting',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/TestReporting/TestReportingPrompt_EN' },
                    { text: 'Lite Version', link: '/TestReporting/TestReportingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/TestReporting/README' }
                  ]
                },
                {
                  text: '🎯 Test Strategy',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/TestStrategy/TestStrategyPrompt_EN' },
                    { text: 'Lite Version', link: '/TestStrategy/TestStrategyPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/TestStrategy/README' }
                  ]
                },
                {
                  text: '🤖 AI-Assisted Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/AIAssistedTesting/AIAssistedTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/AIAssistedTesting/AIAssistedTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/AIAssistedTesting/README' }
                  ]
                },
                {
                  text: '📋 Manual Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/ManualTesting/ManualTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/ManualTesting/ManualTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/ManualTesting/README' }
                  ]
                },
                {
                  text: '🔒 Security Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/SecurityTesting/SecurityTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/SecurityTesting/SecurityTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/SecurityTesting/README' }
                  ]
                },
                {
                  text: '🔌 API Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/APITesting/APITestingPrompt_EN' },
                    { text: 'Lite Version', link: '/APITesting/APITestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/APITesting/README' }
                  ]
                },
                {
                  text: '♿ Accessibility Testing',
                  collapsed: true,
                  items: [
                    { text: 'Full Version', link: '/AccessibilityTesting/AccessibilityTestingPrompt_EN' },
                    { text: 'Lite Version', link: '/AccessibilityTesting/AccessibilityTestingPrompt_Lite_EN' },
                    { text: 'Documentation', link: '/AccessibilityTesting/README' }
                  ]
                }
              ]
            },
            {
              text: '🔄 Workflows',
              collapsed: false,
              items: [
                { text: 'Workflows Overview', link: '/Workflows/README' },
                { text: '📅 Daily Testing Workflow', link: '/Workflows/daily-testing-workflow_EN' },
                { text: '🏃 Sprint Testing Workflow', link: '/Workflows/sprint-testing-workflow_EN' },
                { text: '🚀 Release Testing Workflow', link: '/Workflows/release-testing-workflow_EN' }
              ]
            }
          ]
        },
        
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        
        lastUpdated: {
          text: 'Last updated'
        },
        
        search: {
          provider: 'local'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/naodeng/awesome-qa-prompt' }
        ],
        
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2024-present'
        }
      }
    }
  },
  
  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'QA Prompt Collection'
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  // 最后更新时间
  lastUpdated: true,
  
  // 清理 URL
  cleanUrls: true
})
