import { defineConfig } from 'vitepress'

// 🌟 动态 base 配置
// 如果部署在 GitHub Pages，就用 /awesome-qa-prompt/
// 如果部署在 Cloudflare Pages，就用根路径 /
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const base = isGithubPages ? '/awesome-qa-prompt/' : '/'

// 生成英文侧边栏的辅助函数
function getEnglishSidebar() {
  return [
    {
      text: '📚 Testing Types',
      collapsed: false,
      items: [
        {
          text: '📝 Requirements Analysis',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/RequirementsAnalysis/RequirementsAnalysisPrompt' },
            { text: 'Lite Version', link: '/en/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite' },
            { text: 'Documentation', link: '/en/RequirementsAnalysis/' }
          ]
        },
        {
          text: '✍️ Test Case Writing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/TestCaseWriting/TestCaseWritingPrompt' },
            { text: 'Lite Version', link: '/en/TestCaseWriting/TestCaseWritingPrompt_Lite' },
            { text: 'Documentation', link: '/en/TestCaseWriting/' }
          ]
        },
        {
          text: '🔍 Functional Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/FunctionalTesting/FunctionalTestingPrompt' },
            { text: 'Lite Version', link: '/en/FunctionalTesting/FunctionalTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/FunctionalTesting/' }
          ]
        },
        {
          text: '⚡ Performance Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/PerformanceTesting/PerformanceTestingPrompt' },
            { text: 'Lite Version', link: '/en/PerformanceTesting/PerformanceTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/PerformanceTesting/' }
          ]
        },
        {
          text: '🤖 Automation Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/AutomationTesting/AutomationTestingPrompt' },
            { text: 'Lite Version', link: '/en/AutomationTesting/AutomationTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/AutomationTesting/' }
          ]
        },
        {
          text: '📱 Mobile Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/MobileTesting/MobileTestingPrompt' },
            { text: 'Lite Version', link: '/en/MobileTesting/MobileTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/MobileTesting/' }
          ]
        },
        {
          text: '🐛 Bug Reporting',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/BugReporting/BugReportingPrompt' },
            { text: 'Lite Version', link: '/en/BugReporting/BugReportingPrompt_Lite' },
            { text: 'Documentation', link: '/en/BugReporting/' }
          ]
        },
        {
          text: '📊 Test Reporting',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/TestReporting/TestReportingPrompt' },
            { text: 'Lite Version', link: '/en/TestReporting/TestReportingPrompt_Lite' },
            { text: 'Documentation', link: '/en/TestReporting/' }
          ]
        },
        {
          text: '🎯 Test Strategy',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/TestStrategy/TestStrategyPrompt' },
            { text: 'Lite Version', link: '/en/TestStrategy/TestStrategyPrompt_Lite' },
            { text: 'Documentation', link: '/en/TestStrategy/' }
          ]
        },
        {
          text: '🤖 AI-Assisted Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/AIAssistedTesting/AIAssistedTestingPrompt' },
            { text: 'Lite Version', link: '/en/AIAssistedTesting/AIAssistedTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/AIAssistedTesting/' }
          ]
        },
        {
          text: '📋 Manual Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/ManualTesting/ManualTestingPrompt' },
            { text: 'Lite Version', link: '/en/ManualTesting/ManualTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/ManualTesting/' }
          ]
        },
        {
          text: '🔒 Security Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/SecurityTesting/SecurityTestingPrompt' },
            { text: 'Lite Version', link: '/en/SecurityTesting/SecurityTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/SecurityTesting/' }
          ]
        },
        {
          text: '🔌 API Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/APITesting/APITestingPrompt' },
            { text: 'Lite Version', link: '/en/APITesting/APITestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/APITesting/' }
          ]
        },
        {
          text: '♿ Accessibility Testing',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/AccessibilityTesting/AccessibilityTestingPrompt' },
            { text: 'Lite Version', link: '/en/AccessibilityTesting/AccessibilityTestingPrompt_Lite' },
            { text: 'Documentation', link: '/en/AccessibilityTesting/' }
          ]
        },
        {
          text: '🔍 Test Case Review',
          collapsed: true,
          items: [
            { text: 'Full Version', link: '/en/TestCaseReviewer/TestCaseReviewerPrompt' },
            { text: 'Lite Version', link: '/en/TestCaseReviewer/TestCaseReviewerPrompt_Lite' },
            { text: 'Documentation', link: '/en/TestCaseReviewer/' }
          ]
        }
      ]
    },
    {
      text: '🔄 Workflows',
      collapsed: false,
      items: [
        { text: 'Workflows Overview', link: '/en/Workflows/' },
        { text: '📅 Daily Testing Workflow', link: '/en/Workflows/daily-testing-workflow' },
        { text: '🏃 Sprint Testing Workflow', link: '/en/Workflows/sprint-testing-workflow' },
        { text: '🚀 Release Testing Workflow', link: '/en/Workflows/release-testing-workflow' }
      ]
    }
  ]
}

export default defineConfig({
  title: 'Awesome QA Prompt',
  description: '专业的 QA（质量保证）AI 提示词集合',
  
  // ✅ 动态 base 配置 - 支持 GitHub Pages 和 Cloudflare Pages
  base: base,
  
  // Head 配置 - SEO 和图标
  head: [
    // Umami Analytics
    ['script', { 
      async: '', 
      src: 'https://analytics.naodeng.com.cn/hugo',
      'data-website-id': '8f49daf0-3378-44d6-8e65-f80848bc0d07'
    }],
    
    // Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${base}favicon-16x16.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${base}apple-touch-icon.png` }],
    ['link', { rel: 'manifest', href: `${base}manifest.json` }],
    
    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'QA, Quality Assurance, Testing, AI Prompts, Test Automation, Software Testing, Test Cases, Bug Reporting, Performance Testing, Security Testing, API Testing, Mobile Testing, 测试, 质量保证, AI提示词' }],
    ['meta', { name: 'author', content: 'Awesome QA Prompt Contributors' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://naodeng.github.io/awesome-qa-prompt/' }],
    ['meta', { property: 'og:title', content: 'Awesome QA Prompt - Professional QA AI Prompt Library' }],
    ['meta', { property: 'og:description', content: 'A professional collection of AI prompts for QA professionals, covering the complete testing lifecycle from requirements analysis to test reporting. 专业的质量保证AI提示词库，涵盖从需求分析到测试报告的完整测试生命周期。' }],
    ['meta', { property: 'og:image', content: `https://naodeng.github.io${base}logo.svg` }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://naodeng.github.io/awesome-qa-prompt/' }],
    ['meta', { name: 'twitter:title', content: 'Awesome QA Prompt - Professional QA AI Prompt Library' }],
    ['meta', { name: 'twitter:description', content: 'A professional collection of AI prompts for QA professionals, covering the complete testing lifecycle from requirements analysis to test reporting.' }],
    ['meta', { name: 'twitter:image', content: `https://naodeng.github.io${base}logo.svg` }],
    
    // Additional SEO
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    
    // Structured Data (JSON-LD)
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Awesome QA Prompt',
      description: 'Professional QA AI Prompt Library for Software Testing',
      url: 'https://naodeng.github.io/awesome-qa-prompt/',
      inLanguage: ['zh-CN', 'en-US'],
      author: {
        '@type': 'Organization',
        name: 'Awesome QA Prompt Contributors'
      },
      keywords: 'QA, Quality Assurance, Testing, AI Prompts, Test Automation, Software Testing'
    })]
  ],
  
  // 设置根目录为项目根目录
  srcDir: '.',
  
  // 排除不需要处理的目录
  srcExclude: [
    '**/node_modules/**',
    '**/.git/**',
    '**/.vitepress/**',
    '**/Reference/**'
  ],
  
  // 忽略死链接检查
  ignoreDeadLinks: true,
  
  // 重写规则 - 将 _EN 文件映射到 /en/ 路径，将 README.md 映射到 index.md
  rewrites: {
    'en.md': 'en/index.md',
    'README_EN.md': 'en/README.md',
    // 中文版本 - 将 README.md 映射到 index.md
    'RequirementsAnalysis/README.md': 'RequirementsAnalysis/index.md',
    'TestCaseWriting/README.md': 'TestCaseWriting/index.md',
    'FunctionalTesting/README.md': 'FunctionalTesting/index.md',
    'PerformanceTesting/README.md': 'PerformanceTesting/index.md',
    'AutomationTesting/README.md': 'AutomationTesting/index.md',
    'MobileTesting/README.md': 'MobileTesting/index.md',
    'BugReporting/README.md': 'BugReporting/index.md',
    'TestReporting/README.md': 'TestReporting/index.md',
    'TestStrategy/README.md': 'TestStrategy/index.md',
    'AIAssistedTesting/README.md': 'AIAssistedTesting/index.md',
    'ManualTesting/README.md': 'ManualTesting/index.md',
    'SecurityTesting/README.md': 'SecurityTesting/index.md',
    'APITesting/README.md': 'APITesting/index.md',
    'AccessibilityTesting/README.md': 'AccessibilityTesting/index.md',
    'TestCaseReviewer/README.md': 'TestCaseReviewer/index.md',
    'Workflows/README.md': 'Workflows/index.md',
    'Workflows/daily-testing-workflow_CN.md': 'Workflows/daily-testing-workflow_CN.md',
    'Workflows/sprint-testing-workflow_CN.md': 'Workflows/sprint-testing-workflow_CN.md',
    'Workflows/release-testing-workflow_CN.md': 'Workflows/release-testing-workflow_CN.md',
    // 英文版本 - 将 _EN 文件映射到 /en/ 路径
    'RequirementsAnalysis/README_EN.md': 'en/RequirementsAnalysis/index.md',
    'RequirementsAnalysis/RequirementsAnalysisPrompt_EN.md': 'en/RequirementsAnalysis/RequirementsAnalysisPrompt.md',
    'RequirementsAnalysis/RequirementsAnalysisPrompt_Lite_EN.md': 'en/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite.md',
    'TestCaseWriting/README_EN.md': 'en/TestCaseWriting/index.md',
    'TestCaseWriting/TestCaseWritingPrompt_EN.md': 'en/TestCaseWriting/TestCaseWritingPrompt.md',
    'TestCaseWriting/TestCaseWritingPrompt_Lite_EN.md': 'en/TestCaseWriting/TestCaseWritingPrompt_Lite.md',
    'FunctionalTesting/README_EN.md': 'en/FunctionalTesting/index.md',
    'FunctionalTesting/FunctionalTestingPrompt_EN.md': 'en/FunctionalTesting/FunctionalTestingPrompt.md',
    'FunctionalTesting/FunctionalTestingPrompt_Lite_EN.md': 'en/FunctionalTesting/FunctionalTestingPrompt_Lite.md',
    'PerformanceTesting/README_EN.md': 'en/PerformanceTesting/index.md',
    'PerformanceTesting/PerformanceTestingPrompt_EN.md': 'en/PerformanceTesting/PerformanceTestingPrompt.md',
    'PerformanceTesting/PerformanceTestingPrompt_Lite_EN.md': 'en/PerformanceTesting/PerformanceTestingPrompt_Lite.md',
    'AutomationTesting/README_EN.md': 'en/AutomationTesting/index.md',
    'AutomationTesting/AutomationTestingPrompt_EN.md': 'en/AutomationTesting/AutomationTestingPrompt.md',
    'AutomationTesting/AutomationTestingPrompt_Lite_EN.md': 'en/AutomationTesting/AutomationTestingPrompt_Lite.md',
    'MobileTesting/README_EN.md': 'en/MobileTesting/index.md',
    'MobileTesting/MobileTestingPrompt_EN.md': 'en/MobileTesting/MobileTestingPrompt.md',
    'MobileTesting/MobileTestingPrompt_Lite_EN.md': 'en/MobileTesting/MobileTestingPrompt_Lite.md',
    'BugReporting/README_EN.md': 'en/BugReporting/index.md',
    'BugReporting/BugReportingPrompt_EN.md': 'en/BugReporting/BugReportingPrompt.md',
    'BugReporting/BugReportingPrompt_Lite_EN.md': 'en/BugReporting/BugReportingPrompt_Lite.md',
    'TestReporting/README_EN.md': 'en/TestReporting/index.md',
    'TestReporting/TestReportingPrompt_EN.md': 'en/TestReporting/TestReportingPrompt.md',
    'TestReporting/TestReportingPrompt_Lite_EN.md': 'en/TestReporting/TestReportingPrompt_Lite.md',
    'TestStrategy/README_EN.md': 'en/TestStrategy/index.md',
    'TestStrategy/TestStrategyPrompt_EN.md': 'en/TestStrategy/TestStrategyPrompt.md',
    'TestStrategy/TestStrategyPrompt_Lite_EN.md': 'en/TestStrategy/TestStrategyPrompt_Lite.md',
    'AIAssistedTesting/README_EN.md': 'en/AIAssistedTesting/index.md',
    'AIAssistedTesting/AIAssistedTestingPrompt_EN.md': 'en/AIAssistedTesting/AIAssistedTestingPrompt.md',
    'AIAssistedTesting/AIAssistedTestingPrompt_Lite_EN.md': 'en/AIAssistedTesting/AIAssistedTestingPrompt_Lite.md',
    'ManualTesting/README_EN.md': 'en/ManualTesting/index.md',
    'ManualTesting/ManualTestingPrompt_EN.md': 'en/ManualTesting/ManualTestingPrompt.md',
    'ManualTesting/ManualTestingPrompt_Lite_EN.md': 'en/ManualTesting/ManualTestingPrompt_Lite.md',
    'SecurityTesting/README_EN.md': 'en/SecurityTesting/index.md',
    'SecurityTesting/SecurityTestingPrompt_EN.md': 'en/SecurityTesting/SecurityTestingPrompt.md',
    'SecurityTesting/SecurityTestingPrompt_Lite_EN.md': 'en/SecurityTesting/SecurityTestingPrompt_Lite.md',
    'APITesting/README_EN.md': 'en/APITesting/index.md',
    'APITesting/APITestingPrompt_EN.md': 'en/APITesting/APITestingPrompt.md',
    'APITesting/APITestingPrompt_Lite_EN.md': 'en/APITesting/APITestingPrompt_Lite.md',
    'AccessibilityTesting/README_EN.md': 'en/AccessibilityTesting/index.md',
    'AccessibilityTesting/AccessibilityTestingPrompt_EN.md': 'en/AccessibilityTesting/AccessibilityTestingPrompt.md',
    'AccessibilityTesting/AccessibilityTestingPrompt_Lite_EN.md': 'en/AccessibilityTesting/AccessibilityTestingPrompt_Lite.md',
    'TestCaseReviewer/README_EN.md': 'en/TestCaseReviewer/index.md',
    'TestCaseReviewer/TestCaseReviewerPrompt_EN.md': 'en/TestCaseReviewer/TestCaseReviewerPrompt.md',
    'TestCaseReviewer/TestCaseReviewerPrompt_Lite_EN.md': 'en/TestCaseReviewer/TestCaseReviewerPrompt_Lite.md',
    'Workflows/README_EN.md': 'en/Workflows/index.md',
    'Workflows/daily-testing-workflow_EN.md': 'en/Workflows/daily-testing-workflow.md',
    'Workflows/sprint-testing-workflow_EN.md': 'en/Workflows/sprint-testing-workflow.md',
    'Workflows/release-testing-workflow_EN.md': 'en/Workflows/release-testing-workflow.md'
  },
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '测试类型', link: '/RequirementsAnalysis/' },
          { text: '工作流程', link: '/Workflows/' },
          { 
            text: '快速开始',
            items: [
              { text: '需求分析', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt' },
              { text: '测试用例编写', link: '/TestCaseWriting/TestCaseWritingPrompt' },
              { text: '功能测试', link: '/FunctionalTesting/FunctionalTestingPrompt' }
            ]
          },
          { text: '📊 访问统计', link: 'https://analytics.naodeng.com.cn/share/c54EH1zavEoV6hLB/naodeng.github.io', target: '_blank' }
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
                    { text: '说明文档', link: '/RequirementsAnalysis/' }
                  ]
                },
                {
                  text: '✍️ 测试用例编写',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/TestCaseWriting/TestCaseWritingPrompt' },
                    { text: '精简版', link: '/TestCaseWriting/TestCaseWritingPrompt_Lite' },
                    { text: '说明文档', link: '/TestCaseWriting/' }
                  ]
                },
                {
                  text: '🔍 功能测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/FunctionalTesting/FunctionalTestingPrompt' },
                    { text: '精简版', link: '/FunctionalTesting/FunctionalTestingPrompt_Lite' },
                    { text: '说明文档', link: '/FunctionalTesting/' }
                  ]
                },
                {
                  text: '⚡ 性能测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/PerformanceTesting/PerformanceTestingPrompt' },
                    { text: '精简版', link: '/PerformanceTesting/PerformanceTestingPrompt_Lite' },
                    { text: '说明文档', link: '/PerformanceTesting/' }
                  ]
                },
                {
                  text: '🤖 自动化测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/AutomationTesting/AutomationTestingPrompt' },
                    { text: '精简版', link: '/AutomationTesting/AutomationTestingPrompt_Lite' },
                    { text: '说明文档', link: '/AutomationTesting/' }
                  ]
                },
                {
                  text: '📱 移动端测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/MobileTesting/MobileTestingPrompt' },
                    { text: '精简版', link: '/MobileTesting/MobileTestingPrompt_Lite' },
                    { text: '说明文档', link: '/MobileTesting/' }
                  ]
                },
                {
                  text: '🐛 缺陷上报',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/BugReporting/BugReportingPrompt' },
                    { text: '精简版', link: '/BugReporting/BugReportingPrompt_Lite' },
                    { text: '说明文档', link: '/BugReporting/' }
                  ]
                },
                {
                  text: '📊 测试报告',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/TestReporting/TestReportingPrompt' },
                    { text: '精简版', link: '/TestReporting/TestReportingPrompt_Lite' },
                    { text: '说明文档', link: '/TestReporting/' }
                  ]
                },
                {
                  text: '🎯 测试策略',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/TestStrategy/TestStrategyPrompt' },
                    { text: '精简版', link: '/TestStrategy/TestStrategyPrompt_Lite' },
                    { text: '说明文档', link: '/TestStrategy/' }
                  ]
                },
                {
                  text: '🤖 AI辅助测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/AIAssistedTesting/AIAssistedTestingPrompt' },
                    { text: '精简版', link: '/AIAssistedTesting/AIAssistedTestingPrompt_Lite' },
                    { text: '说明文档', link: '/AIAssistedTesting/' }
                  ]
                },
                {
                  text: '📋 手动测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/ManualTesting/ManualTestingPrompt' },
                    { text: '精简版', link: '/ManualTesting/ManualTestingPrompt_Lite' },
                    { text: '说明文档', link: '/ManualTesting/' }
                  ]
                },
                {
                  text: '🔒 安全测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/SecurityTesting/SecurityTestingPrompt' },
                    { text: '精简版', link: '/SecurityTesting/SecurityTestingPrompt_Lite' },
                    { text: '说明文档', link: '/SecurityTesting/' }
                  ]
                },
                {
                  text: '🔌 API测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/APITesting/APITestingPrompt' },
                    { text: '精简版', link: '/APITesting/APITestingPrompt_Lite' },
                    { text: '说明文档', link: '/APITesting/' }
                  ]
                },
                {
                  text: '♿ 可访问性测试',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/AccessibilityTesting/AccessibilityTestingPrompt' },
                    { text: '精简版', link: '/AccessibilityTesting/AccessibilityTestingPrompt_Lite' },
                    { text: '说明文档', link: '/AccessibilityTesting/' }
                  ]
                },
                {
                  text: '🔍 测试用例评审',
                  collapsed: true,
                  items: [
                    { text: '完整版', link: '/TestCaseReviewer/TestCaseReviewerPrompt' },
                    { text: '精简版', link: '/TestCaseReviewer/TestCaseReviewerPrompt_Lite' },
                    { text: '说明文档', link: '/TestCaseReviewer/' }
                  ]
                }
              ]
            },
            {
              text: '🔄 工作流程',
              collapsed: false,
              items: [
                { text: '工作流程概览', link: '/Workflows/' },
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
          { text: 'Home', link: '/en/' },
          { text: 'Testing Types', link: '/en/RequirementsAnalysis/' },
          { text: 'Workflows', link: '/en/Workflows/' },
          { 
            text: 'Quick Start',
            items: [
              { text: 'Requirements Analysis', link: '/en/RequirementsAnalysis/RequirementsAnalysisPrompt' },
              { text: 'Test Case Writing', link: '/en/TestCaseWriting/TestCaseWritingPrompt' },
              { text: 'Functional Testing', link: '/en/FunctionalTesting/FunctionalTestingPrompt' }
            ]
          },
          { text: '📊 Analytics', link: 'https://analytics.naodeng.com.cn/share/c54EH1zavEoV6hLB/naodeng.github.io', target: '_blank' }
        ],
        
        sidebar: {
          '/en/': getEnglishSidebar()
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
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: {
                  button: {
                    buttonText: 'Search',
                    buttonAriaLabel: 'Search'
                  },
                  modal: {
                    noResultsText: 'No results found',
                    resetButtonTitle: 'Clear query',
                    footer: {
                      selectText: 'Select',
                      navigateText: 'Navigate'
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
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2024-present'
        }
      }
    }
  },
  
  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Awesome QA Prompt'
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
  cleanUrls: true,
  
  // Sitemap 配置
  sitemap: {
    hostname: 'https://naodeng.github.io/awesome-qa-prompt/'
  }
})
