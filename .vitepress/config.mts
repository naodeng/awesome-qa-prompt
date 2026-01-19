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
    ['meta', { property: 'og:url', content: 'https://qaprompt.inaodeng.com/' }],
    ['meta', { property: 'og:title', content: 'Awesome QA Prompt - Professional QA AI Prompt Library' }],
    ['meta', { property: 'og:description', content: 'A professional collection of AI prompts for QA professionals, covering the complete testing lifecycle from requirements analysis to test reporting. 专业的质量保证AI提示词库，涵盖从需求分析到测试报告的完整测试生命周期。' }],
    ['meta', { property: 'og:image', content: `https://qaprompt.inaodeng.com${base}logo.svg` }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://qaprompt.inaodeng.com/' }],
    ['meta', { name: 'twitter:title', content: 'Awesome QA Prompt - Professional QA AI Prompt Library' }],
    ['meta', { name: 'twitter:description', content: 'A professional collection of AI prompts for QA professionals, covering the complete testing lifecycle from requirements analysis to test reporting.' }],
    ['meta', { name: 'twitter:image', content: `https://qaprompt.inaodeng.com${base}logo.svg` }],
    
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
      url: 'https://qaprompt.inaodeng.com/',
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
    '**/future-updates/**'
  ],
  
  // 忽略死链接检查
  ignoreDeadLinks: true,
  
  // 重写规则 - 适应新的目录结构
  rewrites: {
    // 首页文件映射
    'docs/index.md': 'index.md',
    'docs/en.md': 'en/index.md',
    'README_EN.md': 'en/README.md',
    
    // 中文版本 - 将 testing-types 下的文件映射到根路径
    'testing-types/requirements-analysis/README.md': 'RequirementsAnalysis/index.md',
    'testing-types/test-case-writing/README.md': 'TestCaseWriting/index.md',
    'testing-types/functional-testing/README.md': 'FunctionalTesting/index.md',
    'testing-types/performance-testing/README.md': 'PerformanceTesting/index.md',
    'testing-types/automation-testing/README.md': 'AutomationTesting/index.md',
    'testing-types/mobile-testing/README.md': 'MobileTesting/index.md',
    'testing-types/bug-reporting/README.md': 'BugReporting/index.md',
    'testing-types/test-reporting/README.md': 'TestReporting/index.md',
    'testing-types/test-strategy/README.md': 'TestStrategy/index.md',
    'testing-types/ai-assisted-testing/README.md': 'AIAssistedTesting/index.md',
    'testing-types/manual-testing/README.md': 'ManualTesting/index.md',
    'testing-types/security-testing/README.md': 'SecurityTesting/index.md',
    'testing-types/api-testing/README.md': 'APITesting/index.md',
    'testing-types/accessibility-testing/README.md': 'AccessibilityTesting/index.md',
    'testing-types/test-case-reviewer/README.md': 'TestCaseReviewer/index.md',
    
    // 中文版本 - 提示词文件映射
    'testing-types/requirements-analysis/RequirementsAnalysisPrompt.md': 'RequirementsAnalysis/RequirementsAnalysisPrompt.md',
    'testing-types/requirements-analysis/RequirementsAnalysisPrompt_Lite.md': 'RequirementsAnalysis/RequirementsAnalysisPrompt_Lite.md',
    'testing-types/test-case-writing/TestCaseWritingPrompt.md': 'TestCaseWriting/TestCaseWritingPrompt.md',
    'testing-types/test-case-writing/TestCaseWritingPrompt_Lite.md': 'TestCaseWriting/TestCaseWritingPrompt_Lite.md',
    'testing-types/functional-testing/FunctionalTestingPrompt.md': 'FunctionalTesting/FunctionalTestingPrompt.md',
    'testing-types/functional-testing/FunctionalTestingPrompt_Lite.md': 'FunctionalTesting/FunctionalTestingPrompt_Lite.md',
    'testing-types/performance-testing/PerformanceTestingPrompt.md': 'PerformanceTesting/PerformanceTestingPrompt.md',
    'testing-types/performance-testing/PerformanceTestingPrompt_Lite.md': 'PerformanceTesting/PerformanceTestingPrompt_Lite.md',
    'testing-types/automation-testing/AutomationTestingPrompt.md': 'AutomationTesting/AutomationTestingPrompt.md',
    'testing-types/automation-testing/AutomationTestingPrompt_Lite.md': 'AutomationTesting/AutomationTestingPrompt_Lite.md',
    'testing-types/mobile-testing/MobileTestingPrompt.md': 'MobileTesting/MobileTestingPrompt.md',
    'testing-types/mobile-testing/MobileTestingPrompt_Lite.md': 'MobileTesting/MobileTestingPrompt_Lite.md',
    'testing-types/bug-reporting/BugReportingPrompt.md': 'BugReporting/BugReportingPrompt.md',
    'testing-types/bug-reporting/BugReportingPrompt_Lite.md': 'BugReporting/BugReportingPrompt_Lite.md',
    'testing-types/test-reporting/TestReportingPrompt.md': 'TestReporting/TestReportingPrompt.md',
    'testing-types/test-reporting/TestReportingPrompt_Lite.md': 'TestReporting/TestReportingPrompt_Lite.md',
    'testing-types/test-strategy/TestStrategyPrompt.md': 'TestStrategy/TestStrategyPrompt.md',
    'testing-types/test-strategy/TestStrategyPrompt_Lite.md': 'TestStrategy/TestStrategyPrompt_Lite.md',
    'testing-types/ai-assisted-testing/AIAssistedTestingPrompt.md': 'AIAssistedTesting/AIAssistedTestingPrompt.md',
    'testing-types/ai-assisted-testing/AIAssistedTestingPrompt_Lite.md': 'AIAssistedTesting/AIAssistedTestingPrompt_Lite.md',
    'testing-types/manual-testing/ManualTestingPrompt.md': 'ManualTesting/ManualTestingPrompt.md',
    'testing-types/manual-testing/ManualTestingPrompt_Lite.md': 'ManualTesting/ManualTestingPrompt_Lite.md',
    'testing-types/security-testing/SecurityTestingPrompt.md': 'SecurityTesting/SecurityTestingPrompt.md',
    'testing-types/security-testing/SecurityTestingPrompt_Lite.md': 'SecurityTesting/SecurityTestingPrompt_Lite.md',
    'testing-types/api-testing/APITestingPrompt.md': 'APITesting/APITestingPrompt.md',
    'testing-types/api-testing/APITestingPrompt_Lite.md': 'APITesting/APITestingPrompt_Lite.md',
    'testing-types/accessibility-testing/AccessibilityTestingPrompt.md': 'AccessibilityTesting/AccessibilityTestingPrompt.md',
    'testing-types/accessibility-testing/AccessibilityTestingPrompt_Lite.md': 'AccessibilityTesting/AccessibilityTestingPrompt_Lite.md',
    'testing-types/test-case-reviewer/TestCaseReviewerPrompt.md': 'TestCaseReviewer/TestCaseReviewerPrompt.md',
    'testing-types/test-case-reviewer/TestCaseReviewerPrompt_Lite.md': 'TestCaseReviewer/TestCaseReviewerPrompt_Lite.md',
    
    // 工作流程映射
    'workflows/README.md': 'Workflows/index.md',
    'workflows/daily-testing-workflow_CN.md': 'Workflows/daily-testing-workflow_CN.md',
    'workflows/sprint-testing-workflow_CN.md': 'Workflows/sprint-testing-workflow_CN.md',
    'workflows/release-testing-workflow_CN.md': 'Workflows/release-testing-workflow_CN.md',
    
    // 英文版本映射
    'testing-types/requirements-analysis/README_EN.md': 'en/RequirementsAnalysis/index.md',
    'testing-types/requirements-analysis/RequirementsAnalysisPrompt_EN.md': 'en/RequirementsAnalysis/RequirementsAnalysisPrompt.md',
    'testing-types/requirements-analysis/RequirementsAnalysisPrompt_Lite_EN.md': 'en/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite.md',
    'testing-types/test-case-writing/README_EN.md': 'en/TestCaseWriting/index.md',
    'testing-types/test-case-writing/TestCaseWritingPrompt_EN.md': 'en/TestCaseWriting/TestCaseWritingPrompt.md',
    'testing-types/test-case-writing/TestCaseWritingPrompt_Lite_EN.md': 'en/TestCaseWriting/TestCaseWritingPrompt_Lite.md',
    'testing-types/functional-testing/README_EN.md': 'en/FunctionalTesting/index.md',
    'testing-types/functional-testing/FunctionalTestingPrompt_EN.md': 'en/FunctionalTesting/FunctionalTestingPrompt.md',
    'testing-types/functional-testing/FunctionalTestingPrompt_Lite_EN.md': 'en/FunctionalTesting/FunctionalTestingPrompt_Lite.md',
    'testing-types/performance-testing/README_EN.md': 'en/PerformanceTesting/index.md',
    'testing-types/performance-testing/PerformanceTestingPrompt_EN.md': 'en/PerformanceTesting/PerformanceTestingPrompt.md',
    'testing-types/performance-testing/PerformanceTestingPrompt_Lite_EN.md': 'en/PerformanceTesting/PerformanceTestingPrompt_Lite.md',
    'testing-types/automation-testing/README_EN.md': 'en/AutomationTesting/index.md',
    'testing-types/automation-testing/AutomationTestingPrompt_EN.md': 'en/AutomationTesting/AutomationTestingPrompt.md',
    'testing-types/automation-testing/AutomationTestingPrompt_Lite_EN.md': 'en/AutomationTesting/AutomationTestingPrompt_Lite.md',
    'testing-types/mobile-testing/README_EN.md': 'en/MobileTesting/index.md',
    'testing-types/mobile-testing/MobileTestingPrompt_EN.md': 'en/MobileTesting/MobileTestingPrompt.md',
    'testing-types/mobile-testing/MobileTestingPrompt_Lite_EN.md': 'en/MobileTesting/MobileTestingPrompt_Lite.md',
    'testing-types/bug-reporting/README_EN.md': 'en/BugReporting/index.md',
    'testing-types/bug-reporting/BugReportingPrompt_EN.md': 'en/BugReporting/BugReportingPrompt.md',
    'testing-types/bug-reporting/BugReportingPrompt_Lite_EN.md': 'en/BugReporting/BugReportingPrompt_Lite.md',
    'testing-types/test-reporting/README_EN.md': 'en/TestReporting/index.md',
    'testing-types/test-reporting/TestReportingPrompt_EN.md': 'en/TestReporting/TestReportingPrompt.md',
    'testing-types/test-reporting/TestReportingPrompt_Lite_EN.md': 'en/TestReporting/TestReportingPrompt_Lite.md',
    'testing-types/test-strategy/README_EN.md': 'en/TestStrategy/index.md',
    'testing-types/test-strategy/TestStrategyPrompt_EN.md': 'en/TestStrategy/TestStrategyPrompt.md',
    'testing-types/test-strategy/TestStrategyPrompt_Lite_EN.md': 'en/TestStrategy/TestStrategyPrompt_Lite.md',
    'testing-types/ai-assisted-testing/README_EN.md': 'en/AIAssistedTesting/index.md',
    'testing-types/ai-assisted-testing/AIAssistedTestingPrompt_EN.md': 'en/AIAssistedTesting/AIAssistedTestingPrompt.md',
    'testing-types/ai-assisted-testing/AIAssistedTestingPrompt_Lite_EN.md': 'en/AIAssistedTesting/AIAssistedTestingPrompt_Lite.md',
    'testing-types/manual-testing/README_EN.md': 'en/ManualTesting/index.md',
    'testing-types/manual-testing/ManualTestingPrompt_EN.md': 'en/ManualTesting/ManualTestingPrompt.md',
    'testing-types/manual-testing/ManualTestingPrompt_Lite_EN.md': 'en/ManualTesting/ManualTestingPrompt_Lite.md',
    'testing-types/security-testing/README_EN.md': 'en/SecurityTesting/index.md',
    'testing-types/security-testing/SecurityTestingPrompt_EN.md': 'en/SecurityTesting/SecurityTestingPrompt.md',
    'testing-types/security-testing/SecurityTestingPrompt_Lite_EN.md': 'en/SecurityTesting/SecurityTestingPrompt_Lite.md',
    'testing-types/api-testing/README_EN.md': 'en/APITesting/index.md',
    'testing-types/api-testing/APITestingPrompt_EN.md': 'en/APITesting/APITestingPrompt.md',
    'testing-types/api-testing/APITestingPrompt_Lite_EN.md': 'en/APITesting/APITestingPrompt_Lite.md',
    'testing-types/accessibility-testing/README_EN.md': 'en/AccessibilityTesting/index.md',
    'testing-types/accessibility-testing/AccessibilityTestingPrompt_EN.md': 'en/AccessibilityTesting/AccessibilityTestingPrompt.md',
    'testing-types/accessibility-testing/AccessibilityTestingPrompt_Lite_EN.md': 'en/AccessibilityTesting/AccessibilityTestingPrompt_Lite.md',
    'testing-types/test-case-reviewer/README_EN.md': 'en/TestCaseReviewer/index.md',
    'testing-types/test-case-reviewer/TestCaseReviewerPrompt_EN.md': 'en/TestCaseReviewer/TestCaseReviewerPrompt.md',
    'testing-types/test-case-reviewer/TestCaseReviewerPrompt_Lite_EN.md': 'en/TestCaseReviewer/TestCaseReviewerPrompt_Lite.md',
    'workflows/README_EN.md': 'en/Workflows/index.md',
    'workflows/daily-testing-workflow_EN.md': 'en/Workflows/daily-testing-workflow.md',
    'workflows/sprint-testing-workflow_EN.md': 'en/Workflows/sprint-testing-workflow.md',
    'workflows/release-testing-workflow_EN.md': 'en/Workflows/release-testing-workflow.md',
    
    // 旧路径重定向规则 - 向后兼容
    'AccessibilityTesting/:page': 'testing-types/accessibility-testing/:page',
    'AIAssistedTesting/:page': 'testing-types/ai-assisted-testing/:page',
    'APITesting/:page': 'testing-types/api-testing/:page',
    'AutomationTesting/:page': 'testing-types/automation-testing/:page',
    'BugReporting/:page': 'testing-types/bug-reporting/:page',
    'FunctionalTesting/:page': 'testing-types/functional-testing/:page',
    'ManualTesting/:page': 'testing-types/manual-testing/:page',
    'MobileTesting/:page': 'testing-types/mobile-testing/:page',
    'PerformanceTesting/:page': 'testing-types/performance-testing/:page',
    'RequirementsAnalysis/:page': 'testing-types/requirements-analysis/:page',
    'SecurityTesting/:page': 'testing-types/security-testing/:page',
    'TestCaseReviewer/:page': 'testing-types/test-case-reviewer/:page',
    'TestCaseWriting/:page': 'testing-types/test-case-writing/:page',
    'TestReporting/:page': 'testing-types/test-reporting/:page',
    'TestStrategy/:page': 'testing-types/test-strategy/:page',
    'Workflows/:page': 'workflows/:page',
    'Base/PromptExample/:page': 'prompt-frameworks/frameworks/:page'
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
          { icon: 'github', link: 'https://github.com/naodeng/awesome-qa-prompt' },
          { 
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Website</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 7.568l-1.414 1.414c-.707-.707-1.768-1.061-2.829-1.061s-2.122.354-2.829 1.061l-1.414-1.414c1.06-1.06 2.475-1.647 4.243-1.647s3.182.586 4.243 1.647zM12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/></svg>'
            }, 
            link: 'https://inaodeng.com',
            ariaLabel: '个人网站'
          }
        ],
        
        footer: {
          message: '🚀 让 AI 成为测试工程师最好的助手！基于 MIT 许可发布',
          copyright: 'Copyright © 2024-present <a href="https://github.com/naodeng/awesome-qa-prompt/graphs/contributors">Awesome QA Prompt Contributors</a>'
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
          { icon: 'github', link: 'https://github.com/naodeng/awesome-qa-prompt' },
          { 
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Website</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 7.568l-1.414 1.414c-.707-.707-1.768-1.061-2.829-1.061s-2.122.354-2.829 1.061l-1.414-1.414c1.06-1.06 2.475-1.647 4.243-1.647s3.182.586 4.243 1.647zM12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/></svg>'
            }, 
            link: 'https://inaodeng.com',
            ariaLabel: 'Personal Website'
          }
        ],
        
        footer: {
          message: '🚀 Let AI be the best assistant for test engineers! Released under the MIT License',
          copyright: 'Copyright © 2024-present <a href="https://github.com/naodeng/awesome-qa-prompt/graphs/contributors">Awesome QA Prompt Contributors</a>'
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
    hostname: 'https://qaprompt.inaodeng.com/'
  }
})
