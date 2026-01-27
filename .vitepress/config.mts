import { defineConfig } from 'vitepress'

// 🌟 动态 base 配置
// 如果部署在 GitHub Pages，就用 /awesome-qa-prompt/
// 如果部署在 Cloudflare Pages 或自定义域名（如 qaprompt.inaodeng.com），就用根路径 /
// 注意：自定义域名部署应该使用根路径 '/'，而不是 '/awesome-qa-prompt/'
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const base = isGithubPages ? '/awesome-qa-prompt/' : '/'

// 输出 base 路径用于调试（仅在开发环境）
if (process.env.NODE_ENV === 'development') {
  console.log(`📦 VitePress base path: ${base}`)
}

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
            { text: 'Documentation', link: '/en/RequirementsAnalysis/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/RequirementsAnalysis/RequirementsAnalysisPrompt' },
                { text: 'Lite Version', link: '/en/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Full' },
                { text: 'Lite Version', link: '/en/RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Full' },
                { text: 'Lite Version', link: '/en/RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Full' },
                { text: 'Lite Version', link: '/en/RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '✍️ Test Case Writing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/TestCaseWriting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseWriting/TestCaseWritingPrompt' },
                { text: 'Lite Version', link: '/en/TestCaseWriting/TestCaseWritingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseWriting/RISE-version/TestCaseWriting-RISE-Full' },
                { text: 'Lite Version', link: '/en/TestCaseWriting/RISE-version/TestCaseWriting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🔍 Functional Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/FunctionalTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/FunctionalTesting/FunctionalTestingPrompt' },
                { text: 'Lite Version', link: '/en/FunctionalTesting/FunctionalTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/FunctionalTesting/RISE-version/FunctionalTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/FunctionalTesting/RISE-version/FunctionalTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '⚡ Performance Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/PerformanceTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/PerformanceTesting/PerformanceTestingPrompt' },
                { text: 'Lite Version', link: '/en/PerformanceTesting/PerformanceTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/PerformanceTesting/RISE-version/PerformanceTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/PerformanceTesting/RISE-version/PerformanceTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🤖 Automation Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/AutomationTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AutomationTesting/AutomationTestingPrompt' },
                { text: 'Lite Version', link: '/en/AutomationTesting/AutomationTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AutomationTesting/ROSES-version/AutomationTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/AutomationTesting/ROSES-version/AutomationTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AutomationTesting/ICIO-version/AutomationTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/AutomationTesting/ICIO-version/AutomationTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AutomationTesting/RISE-version/AutomationTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/AutomationTesting/RISE-version/AutomationTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '📱 Mobile Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/MobileTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/MobileTesting/MobileTestingPrompt' },
                { text: 'Lite Version', link: '/en/MobileTesting/MobileTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/MobileTesting/ROSES-version/MobileTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/MobileTesting/ROSES-version/MobileTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/MobileTesting/LangGPT-version/MobileTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/MobileTesting/LangGPT-version/MobileTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/MobileTesting/ICIO-version/MobileTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/MobileTesting/ICIO-version/MobileTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/MobileTesting/CRISPE-version/MobileTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/MobileTesting/CRISPE-version/MobileTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/MobileTesting/RISE-version/MobileTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/MobileTesting/RISE-version/MobileTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🐛 Bug Reporting',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/BugReporting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/BugReporting/BugReportingPrompt' },
                { text: 'Lite Version', link: '/en/BugReporting/BugReportingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/BugReporting/ROSES-version/BugReporting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/BugReporting/ROSES-version/BugReporting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/BugReporting/LangGPT-version/BugReporting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/BugReporting/LangGPT-version/BugReporting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/BugReporting/ICIO-version/BugReporting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/BugReporting/ICIO-version/BugReporting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/BugReporting/CRISPE-version/BugReporting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/BugReporting/CRISPE-version/BugReporting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/BugReporting/RISE-version/BugReporting-RISE-Full' },
                { text: 'Lite Version', link: '/en/BugReporting/RISE-version/BugReporting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '📊 Test Reporting',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/TestReporting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestReporting/TestReportingPrompt' },
                { text: 'Lite Version', link: '/en/TestReporting/TestReportingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestReporting/ROSES-version/TestReporting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/TestReporting/ROSES-version/TestReporting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestReporting/LangGPT-version/TestReporting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/TestReporting/LangGPT-version/TestReporting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestReporting/ICIO-version/TestReporting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/TestReporting/ICIO-version/TestReporting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestReporting/CRISPE-version/TestReporting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/TestReporting/CRISPE-version/TestReporting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestReporting/RISE-version/TestReporting-RISE-Full' },
                { text: 'Lite Version', link: '/en/TestReporting/RISE-version/TestReporting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🎯 Test Strategy',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/TestStrategy/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestStrategy/TestStrategyPrompt' },
                { text: 'Lite Version', link: '/en/TestStrategy/TestStrategyPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestStrategy/ROSES-version/TestStrategy-ROSES-Full' },
                { text: 'Lite Version', link: '/en/TestStrategy/ROSES-version/TestStrategy-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestStrategy/LangGPT-version/TestStrategy-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/TestStrategy/LangGPT-version/TestStrategy-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestStrategy/ICIO-version/TestStrategy-ICIO-Full' },
                { text: 'Lite Version', link: '/en/TestStrategy/ICIO-version/TestStrategy-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestStrategy/CRISPE-version/TestStrategy-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/TestStrategy/CRISPE-version/TestStrategy-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestStrategy/RISE-version/TestStrategy-RISE-Full' },
                { text: 'Lite Version', link: '/en/TestStrategy/RISE-version/TestStrategy-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🤖 AI-Assisted Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/AIAssistedTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AIAssistedTesting/AIAssistedTestingPrompt' },
                { text: 'Lite Version', link: '/en/AIAssistedTesting/AIAssistedTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '📋 Manual Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/ManualTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/ManualTesting/ManualTestingPrompt' },
                { text: 'Lite Version', link: '/en/ManualTesting/ManualTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/ManualTesting/ROSES-version/ManualTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/ManualTesting/ROSES-version/ManualTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/ManualTesting/LangGPT-version/ManualTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/ManualTesting/LangGPT-version/ManualTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/ManualTesting/ICIO-version/ManualTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/ManualTesting/ICIO-version/ManualTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/ManualTesting/CRISPE-version/ManualTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/ManualTesting/CRISPE-version/ManualTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/ManualTesting/RISE-version/ManualTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/ManualTesting/RISE-version/ManualTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🔒 Security Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/SecurityTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/SecurityTesting/SecurityTestingPrompt' },
                { text: 'Lite Version', link: '/en/SecurityTesting/SecurityTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/SecurityTesting/ROSES-version/SecurityTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/SecurityTesting/ROSES-version/SecurityTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/SecurityTesting/ICIO-version/SecurityTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/SecurityTesting/ICIO-version/SecurityTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/SecurityTesting/RISE-version/SecurityTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/SecurityTesting/RISE-version/SecurityTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🔌 API Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/APITesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/APITesting/APITestingPrompt' },
                { text: 'Lite Version', link: '/en/APITesting/APITestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/APITesting/ROSES-version/APITesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/APITesting/ROSES-version/APITesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/APITesting/LangGPT-version/APITesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/APITesting/LangGPT-version/APITesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/APITesting/ICIO-version/APITesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/APITesting/ICIO-version/APITesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/APITesting/CRISPE-version/APITesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/APITesting/CRISPE-version/APITesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/APITesting/RISE-version/APITesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/APITesting/RISE-version/APITesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '♿ Accessibility Testing',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/AccessibilityTesting/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AccessibilityTesting/AccessibilityTestingPrompt' },
                { text: 'Lite Version', link: '/en/AccessibilityTesting/AccessibilityTestingPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Full' },
                { text: 'Lite Version', link: '/en/AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Full' },
                { text: 'Lite Version', link: '/en/AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Full' },
                { text: 'Lite Version', link: '/en/AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Lite' }
              ]
            }
          ]
        },
        {
          text: '🔍 Test Case Review',
          collapsed: true,
          items: [
            { text: 'Documentation', link: '/en/TestCaseReviewer/' },
            {
              text: 'Standard Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseReviewer/TestCaseReviewerPrompt' },
                { text: 'Lite Version', link: '/en/TestCaseReviewer/TestCaseReviewerPrompt_Lite' }
              ]
            },
            {
              text: 'ROSES Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Full' },
                { text: 'Lite Version', link: '/en/TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Lite' }
              ]
            },
            {
              text: 'LangGPT Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Full' },
                { text: 'Lite Version', link: '/en/TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Lite' }
              ]
            },
            {
              text: 'ICIO Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Full' },
                { text: 'Lite Version', link: '/en/TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Lite' }
              ]
            },
            {
              text: 'CRISPE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Full' },
                { text: 'Lite Version', link: '/en/TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Lite' }
              ]
            },
            {
              text: 'RISE Framework Version',
              collapsed: true,
              items: [
                { text: 'Full Version', link: '/en/TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Full' },
                { text: 'Lite Version', link: '/en/TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Lite' }
              ]
            }
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
    
    // 赞助页面映射
    'docs/sponsor.md': 'sponsor.md',
    'docs/sponsor_EN.md': 'en/sponsor.md',
    
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
    
    // 中文版本 - 提示词文件映射（Standard-version）
    'testing-types/requirements-analysis/Standard-version/RequirementsAnalysisPrompt.md': 'RequirementsAnalysis/RequirementsAnalysisPrompt.md',
    'testing-types/requirements-analysis/Standard-version/RequirementsAnalysisPrompt_Lite.md': 'RequirementsAnalysis/RequirementsAnalysisPrompt_Lite.md',
    'testing-types/requirements-analysis/Standard-version/RequirementsAnalysisPrompt_EN.md': 'en/RequirementsAnalysis/RequirementsAnalysisPrompt.md',
    'testing-types/requirements-analysis/Standard-version/RequirementsAnalysisPrompt_Lite_EN.md': 'en/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite.md',
    
    // 中文版本 - ROSES 框架版本
    'testing-types/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Full.md': 'RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Full.md',
    'testing-types/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Lite.md': 'RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Lite.md',
    'testing-types/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Full_EN.md': 'en/RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Full.md',
    'testing-types/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Lite_EN.md': 'en/RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Lite.md',
    
    // 中文版本 - LangGPT 框架版本
    'testing-types/requirements-analysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full.md': 'RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full.md',
    'testing-types/requirements-analysis/LangGPT-version/RequirementsAnalysis-LangGPT-Lite.md': 'RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Lite.md',
    'testing-types/requirements-analysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full_EN.md': 'en/RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full.md',
    'testing-types/requirements-analysis/LangGPT-version/RequirementsAnalysis-LangGPT-Lite_EN.md': 'en/RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Lite.md',
    
    // 中文版本 - ICIO 框架版本
    'testing-types/requirements-analysis/ICIO-version/RequirementsAnalysis-ICIO-Full.md': 'RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Full.md',
    'testing-types/requirements-analysis/ICIO-version/RequirementsAnalysis-ICIO-Lite.md': 'RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Lite.md',
    'testing-types/requirements-analysis/ICIO-version/RequirementsAnalysis-ICIO-Full_EN.md': 'en/RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Full.md',
    'testing-types/requirements-analysis/ICIO-version/RequirementsAnalysis-ICIO-Lite_EN.md': 'en/RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Lite.md',
    
    // 中文版本 - CRISPE 框架版本
    'testing-types/requirements-analysis/CRISPE-version/RequirementsAnalysis-CRISPE-Full.md': 'RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Full.md',
    'testing-types/requirements-analysis/CRISPE-version/RequirementsAnalysis-CRISPE-Lite.md': 'RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Lite.md',
    'testing-types/requirements-analysis/CRISPE-version/RequirementsAnalysis-CRISPE-Full_EN.md': 'en/RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Full.md',
    'testing-types/requirements-analysis/CRISPE-version/RequirementsAnalysis-CRISPE-Lite_EN.md': 'en/RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Lite.md',
    
    // 中文版本 - RISE 框架版本
    'testing-types/requirements-analysis/RISE-version/RequirementsAnalysis-RISE-Full.md': 'RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Full.md',
    'testing-types/requirements-analysis/RISE-version/RequirementsAnalysis-RISE-Lite.md': 'RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Lite.md',
    'testing-types/requirements-analysis/RISE-version/RequirementsAnalysis-RISE-Full_EN.md': 'en/RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Full.md',
    'testing-types/requirements-analysis/RISE-version/RequirementsAnalysis-RISE-Lite_EN.md': 'en/RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Lite.md',
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
    
    // ========== Standard-version 和框架版本路由映射 ==========
    // RequirementsAnalysis - Standard-version

    // TestCaseWriting - Standard-version
    'testing-types/test-case-writing/Standard-version/TestCaseWritingPrompt.md': 'TestCaseWriting/TestCaseWritingPrompt.md',
    'testing-types/test-case-writing/Standard-version/TestCaseWritingPrompt_Lite.md': 'TestCaseWriting/TestCaseWritingPrompt_Lite.md',
    'testing-types/test-case-writing/Standard-version/TestCaseWritingPrompt_EN.md': 'en/TestCaseWriting/TestCaseWritingPrompt.md',
    'testing-types/test-case-writing/Standard-version/TestCaseWritingPrompt_Lite_EN.md': 'en/TestCaseWriting/TestCaseWritingPrompt_Lite.md',

    // FunctionalTesting - Standard-version
    'testing-types/functional-testing/Standard-version/FunctionalTestingPrompt.md': 'FunctionalTesting/FunctionalTestingPrompt.md',
    'testing-types/functional-testing/Standard-version/FunctionalTestingPrompt_Lite.md': 'FunctionalTesting/FunctionalTestingPrompt_Lite.md',
    'testing-types/functional-testing/Standard-version/FunctionalTestingPrompt_EN.md': 'en/FunctionalTesting/FunctionalTestingPrompt.md',
    'testing-types/functional-testing/Standard-version/FunctionalTestingPrompt_Lite_EN.md': 'en/FunctionalTesting/FunctionalTestingPrompt_Lite.md',

    // PerformanceTesting - Standard-version
    'testing-types/performance-testing/Standard-version/PerformanceTestingPrompt.md': 'PerformanceTesting/PerformanceTestingPrompt.md',
    'testing-types/performance-testing/Standard-version/PerformanceTestingPrompt_Lite.md': 'PerformanceTesting/PerformanceTestingPrompt_Lite.md',
    'testing-types/performance-testing/Standard-version/PerformanceTestingPrompt_EN.md': 'en/PerformanceTesting/PerformanceTestingPrompt.md',
    'testing-types/performance-testing/Standard-version/PerformanceTestingPrompt_Lite_EN.md': 'en/PerformanceTesting/PerformanceTestingPrompt_Lite.md',

    // AutomationTesting - Standard-version
    'testing-types/automation-testing/Standard-version/AutomationTestingPrompt.md': 'AutomationTesting/AutomationTestingPrompt.md',
    'testing-types/automation-testing/Standard-version/AutomationTestingPrompt_Lite.md': 'AutomationTesting/AutomationTestingPrompt_Lite.md',
    'testing-types/automation-testing/Standard-version/AutomationTestingPrompt_EN.md': 'en/AutomationTesting/AutomationTestingPrompt.md',
    'testing-types/automation-testing/Standard-version/AutomationTestingPrompt_Lite_EN.md': 'en/AutomationTesting/AutomationTestingPrompt_Lite.md',

    // MobileTesting - Standard-version
    'testing-types/mobile-testing/Standard-version/MobileTestingPrompt.md': 'MobileTesting/MobileTestingPrompt.md',
    'testing-types/mobile-testing/Standard-version/MobileTestingPrompt_Lite.md': 'MobileTesting/MobileTestingPrompt_Lite.md',
    'testing-types/mobile-testing/Standard-version/MobileTestingPrompt_EN.md': 'en/MobileTesting/MobileTestingPrompt.md',
    'testing-types/mobile-testing/Standard-version/MobileTestingPrompt_Lite_EN.md': 'en/MobileTesting/MobileTestingPrompt_Lite.md',

    // BugReporting - Standard-version
    'testing-types/bug-reporting/Standard-version/BugReportingPrompt.md': 'BugReporting/BugReportingPrompt.md',
    'testing-types/bug-reporting/Standard-version/BugReportingPrompt_Lite.md': 'BugReporting/BugReportingPrompt_Lite.md',
    'testing-types/bug-reporting/Standard-version/BugReportingPrompt_EN.md': 'en/BugReporting/BugReportingPrompt.md',
    'testing-types/bug-reporting/Standard-version/BugReportingPrompt_Lite_EN.md': 'en/BugReporting/BugReportingPrompt_Lite.md',

    // TestReporting - Standard-version
    'testing-types/test-reporting/Standard-version/TestReportingPrompt.md': 'TestReporting/TestReportingPrompt.md',
    'testing-types/test-reporting/Standard-version/TestReportingPrompt_Lite.md': 'TestReporting/TestReportingPrompt_Lite.md',
    'testing-types/test-reporting/Standard-version/TestReportingPrompt_EN.md': 'en/TestReporting/TestReportingPrompt.md',
    'testing-types/test-reporting/Standard-version/TestReportingPrompt_Lite_EN.md': 'en/TestReporting/TestReportingPrompt_Lite.md',

    // TestStrategy - Standard-version
    'testing-types/test-strategy/Standard-version/TestStrategyPrompt.md': 'TestStrategy/TestStrategyPrompt.md',
    'testing-types/test-strategy/Standard-version/TestStrategyPrompt_Lite.md': 'TestStrategy/TestStrategyPrompt_Lite.md',
    'testing-types/test-strategy/Standard-version/TestStrategyPrompt_EN.md': 'en/TestStrategy/TestStrategyPrompt.md',
    'testing-types/test-strategy/Standard-version/TestStrategyPrompt_Lite_EN.md': 'en/TestStrategy/TestStrategyPrompt_Lite.md',

    // APITesting - Standard-version
    'testing-types/api-testing/Standard-version/APITestingPrompt.md': 'APITesting/APITestingPrompt.md',
    'testing-types/api-testing/Standard-version/APITestingPrompt_Lite.md': 'APITesting/APITestingPrompt_Lite.md',
    'testing-types/api-testing/Standard-version/APITestingPrompt_EN.md': 'en/APITesting/APITestingPrompt.md',
    'testing-types/api-testing/Standard-version/APITestingPrompt_Lite_EN.md': 'en/APITesting/APITestingPrompt_Lite.md',

    // SecurityTesting - Standard-version
    'testing-types/security-testing/Standard-version/SecurityTestingPrompt.md': 'SecurityTesting/SecurityTestingPrompt.md',
    'testing-types/security-testing/Standard-version/SecurityTestingPrompt_Lite.md': 'SecurityTesting/SecurityTestingPrompt_Lite.md',
    'testing-types/security-testing/Standard-version/SecurityTestingPrompt_EN.md': 'en/SecurityTesting/SecurityTestingPrompt.md',
    'testing-types/security-testing/Standard-version/SecurityTestingPrompt_Lite_EN.md': 'en/SecurityTesting/SecurityTestingPrompt_Lite.md',

    // AccessibilityTesting - Standard-version
    'testing-types/accessibility-testing/Standard-version/AccessibilityTestingPrompt.md': 'AccessibilityTesting/AccessibilityTestingPrompt.md',
    'testing-types/accessibility-testing/Standard-version/AccessibilityTestingPrompt_Lite.md': 'AccessibilityTesting/AccessibilityTestingPrompt_Lite.md',
    'testing-types/accessibility-testing/Standard-version/AccessibilityTestingPrompt_EN.md': 'en/AccessibilityTesting/AccessibilityTestingPrompt.md',
    'testing-types/accessibility-testing/Standard-version/AccessibilityTestingPrompt_Lite_EN.md': 'en/AccessibilityTesting/AccessibilityTestingPrompt_Lite.md',

    // AIAssistedTesting - Standard-version
    'testing-types/ai-assisted-testing/Standard-version/AIAssistedTestingPrompt.md': 'AIAssistedTesting/AIAssistedTestingPrompt.md',
    'testing-types/ai-assisted-testing/Standard-version/AIAssistedTestingPrompt_Lite.md': 'AIAssistedTesting/AIAssistedTestingPrompt_Lite.md',
    'testing-types/ai-assisted-testing/Standard-version/AIAssistedTestingPrompt_EN.md': 'en/AIAssistedTesting/AIAssistedTestingPrompt.md',
    'testing-types/ai-assisted-testing/Standard-version/AIAssistedTestingPrompt_Lite_EN.md': 'en/AIAssistedTesting/AIAssistedTestingPrompt_Lite.md',

    // ManualTesting - Standard-version
    'testing-types/manual-testing/Standard-version/ManualTestingPrompt.md': 'ManualTesting/ManualTestingPrompt.md',
    'testing-types/manual-testing/Standard-version/ManualTestingPrompt_Lite.md': 'ManualTesting/ManualTestingPrompt_Lite.md',
    'testing-types/manual-testing/Standard-version/ManualTestingPrompt_EN.md': 'en/ManualTesting/ManualTestingPrompt.md',
    'testing-types/manual-testing/Standard-version/ManualTestingPrompt_Lite_EN.md': 'en/ManualTesting/ManualTestingPrompt_Lite.md',

    // TestCaseReviewer - Standard-version
    'testing-types/test-case-reviewer/Standard-version/TestCaseReviewerPrompt.md': 'TestCaseReviewer/TestCaseReviewerPrompt.md',
    'testing-types/test-case-reviewer/Standard-version/TestCaseReviewerPrompt_Lite.md': 'TestCaseReviewer/TestCaseReviewerPrompt_Lite.md',
    'testing-types/test-case-reviewer/Standard-version/TestCaseReviewerPrompt_EN.md': 'en/TestCaseReviewer/TestCaseReviewerPrompt.md',
    'testing-types/test-case-reviewer/Standard-version/TestCaseReviewerPrompt_Lite_EN.md': 'en/TestCaseReviewer/TestCaseReviewerPrompt_Lite.md',

    // RequirementsAnalysis - ROSES-version

    // RequirementsAnalysis - LangGPT-version

    // RequirementsAnalysis - ICIO-version

    // RequirementsAnalysis - CRISPE-version

    // RequirementsAnalysis - RISE-version

    // TestCaseWriting - ROSES-version
    'testing-types/test-case-writing/ROSES-version/TestCaseWriting-ROSES-Full.md': 'TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Full.md',
    'testing-types/test-case-writing/ROSES-version/TestCaseWriting-ROSES-Lite.md': 'TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Lite.md',
    'testing-types/test-case-writing/ROSES-version/TestCaseWriting-ROSES-Full_EN.md': 'en/TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Full.md',
    'testing-types/test-case-writing/ROSES-version/TestCaseWriting-ROSES-Lite_EN.md': 'en/TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Lite.md',

    // TestCaseWriting - LangGPT-version
    'testing-types/test-case-writing/LangGPT-version/TestCaseWriting-LangGPT-Full.md': 'TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Full.md',
    'testing-types/test-case-writing/LangGPT-version/TestCaseWriting-LangGPT-Lite.md': 'TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Lite.md',
    'testing-types/test-case-writing/LangGPT-version/TestCaseWriting-LangGPT-Full_EN.md': 'en/TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Full.md',
    'testing-types/test-case-writing/LangGPT-version/TestCaseWriting-LangGPT-Lite_EN.md': 'en/TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Lite.md',

    // TestCaseWriting - ICIO-version
    'testing-types/test-case-writing/ICIO-version/TestCaseWriting-ICIO-Full.md': 'TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Full.md',
    'testing-types/test-case-writing/ICIO-version/TestCaseWriting-ICIO-Lite.md': 'TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Lite.md',
    'testing-types/test-case-writing/ICIO-version/TestCaseWriting-ICIO-Full_EN.md': 'en/TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Full.md',
    'testing-types/test-case-writing/ICIO-version/TestCaseWriting-ICIO-Lite_EN.md': 'en/TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Lite.md',

    // TestCaseWriting - CRISPE-version
    'testing-types/test-case-writing/CRISPE-version/TestCaseWriting-CRISPE-Full.md': 'TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Full.md',
    'testing-types/test-case-writing/CRISPE-version/TestCaseWriting-CRISPE-Lite.md': 'TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Lite.md',
    'testing-types/test-case-writing/CRISPE-version/TestCaseWriting-CRISPE-Full_EN.md': 'en/TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Full.md',
    'testing-types/test-case-writing/CRISPE-version/TestCaseWriting-CRISPE-Lite_EN.md': 'en/TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Lite.md',

    // TestCaseWriting - RISE-version
    'testing-types/test-case-writing/RISE-version/TestCaseWriting-RISE-Full.md': 'TestCaseWriting/RISE-version/TestCaseWriting-RISE-Full.md',
    'testing-types/test-case-writing/RISE-version/TestCaseWriting-RISE-Lite.md': 'TestCaseWriting/RISE-version/TestCaseWriting-RISE-Lite.md',
    'testing-types/test-case-writing/RISE-version/TestCaseWriting-RISE-Full_EN.md': 'en/TestCaseWriting/RISE-version/TestCaseWriting-RISE-Full.md',
    'testing-types/test-case-writing/RISE-version/TestCaseWriting-RISE-Lite_EN.md': 'en/TestCaseWriting/RISE-version/TestCaseWriting-RISE-Lite.md',

    // FunctionalTesting - ROSES-version
    'testing-types/functional-testing/ROSES-version/FunctionalTesting-ROSES-Full.md': 'FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Full.md',
    'testing-types/functional-testing/ROSES-version/FunctionalTesting-ROSES-Lite.md': 'FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Lite.md',
    'testing-types/functional-testing/ROSES-version/FunctionalTesting-ROSES-Full_EN.md': 'en/FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Full.md',
    'testing-types/functional-testing/ROSES-version/FunctionalTesting-ROSES-Lite_EN.md': 'en/FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Lite.md',

    // FunctionalTesting - LangGPT-version
    'testing-types/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Full.md': 'FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Full.md',
    'testing-types/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Lite.md': 'FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Lite.md',
    'testing-types/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Full_EN.md': 'en/FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Full.md',
    'testing-types/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Lite_EN.md': 'en/FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Lite.md',

    // FunctionalTesting - ICIO-version
    'testing-types/functional-testing/ICIO-version/FunctionalTesting-ICIO-Full.md': 'FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Full.md',
    'testing-types/functional-testing/ICIO-version/FunctionalTesting-ICIO-Lite.md': 'FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Lite.md',
    'testing-types/functional-testing/ICIO-version/FunctionalTesting-ICIO-Full_EN.md': 'en/FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Full.md',
    'testing-types/functional-testing/ICIO-version/FunctionalTesting-ICIO-Lite_EN.md': 'en/FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Lite.md',

    // FunctionalTesting - CRISPE-version
    'testing-types/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Full.md': 'FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Full.md',
    'testing-types/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Lite.md': 'FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Lite.md',
    'testing-types/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Full_EN.md': 'en/FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Full.md',
    'testing-types/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Lite_EN.md': 'en/FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Lite.md',

    // FunctionalTesting - RISE-version
    'testing-types/functional-testing/RISE-version/FunctionalTesting-RISE-Full.md': 'FunctionalTesting/RISE-version/FunctionalTesting-RISE-Full.md',
    'testing-types/functional-testing/RISE-version/FunctionalTesting-RISE-Lite.md': 'FunctionalTesting/RISE-version/FunctionalTesting-RISE-Lite.md',
    'testing-types/functional-testing/RISE-version/FunctionalTesting-RISE-Full_EN.md': 'en/FunctionalTesting/RISE-version/FunctionalTesting-RISE-Full.md',
    'testing-types/functional-testing/RISE-version/FunctionalTesting-RISE-Lite_EN.md': 'en/FunctionalTesting/RISE-version/FunctionalTesting-RISE-Lite.md',

    // PerformanceTesting - ROSES-version
    'testing-types/performance-testing/ROSES-version/PerformanceTesting-ROSES-Full.md': 'PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Full.md',
    'testing-types/performance-testing/ROSES-version/PerformanceTesting-ROSES-Lite.md': 'PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Lite.md',
    'testing-types/performance-testing/ROSES-version/PerformanceTesting-ROSES-Full_EN.md': 'en/PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Full.md',
    'testing-types/performance-testing/ROSES-version/PerformanceTesting-ROSES-Lite_EN.md': 'en/PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Lite.md',

    // PerformanceTesting - LangGPT-version
    'testing-types/performance-testing/LangGPT-version/PerformanceTesting-LangGPT-Full.md': 'PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Full.md',
    'testing-types/performance-testing/LangGPT-version/PerformanceTesting-LangGPT-Lite.md': 'PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Lite.md',
    'testing-types/performance-testing/LangGPT-version/PerformanceTesting-LangGPT-Full_EN.md': 'en/PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Full.md',
    'testing-types/performance-testing/LangGPT-version/PerformanceTesting-LangGPT-Lite_EN.md': 'en/PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Lite.md',

    // PerformanceTesting - ICIO-version
    'testing-types/performance-testing/ICIO-version/PerformanceTesting-ICIO-Full.md': 'PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Full.md',
    'testing-types/performance-testing/ICIO-version/PerformanceTesting-ICIO-Lite.md': 'PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Lite.md',
    'testing-types/performance-testing/ICIO-version/PerformanceTesting-ICIO-Full_EN.md': 'en/PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Full.md',
    'testing-types/performance-testing/ICIO-version/PerformanceTesting-ICIO-Lite_EN.md': 'en/PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Lite.md',

    // PerformanceTesting - CRISPE-version
    'testing-types/performance-testing/CRISPE-version/PerformanceTesting-CRISPE-Full.md': 'PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Full.md',
    'testing-types/performance-testing/CRISPE-version/PerformanceTesting-CRISPE-Lite.md': 'PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Lite.md',
    'testing-types/performance-testing/CRISPE-version/PerformanceTesting-CRISPE-Full_EN.md': 'en/PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Full.md',
    'testing-types/performance-testing/CRISPE-version/PerformanceTesting-CRISPE-Lite_EN.md': 'en/PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Lite.md',

    // PerformanceTesting - RISE-version
    'testing-types/performance-testing/RISE-version/PerformanceTesting-RISE-Full.md': 'PerformanceTesting/RISE-version/PerformanceTesting-RISE-Full.md',
    'testing-types/performance-testing/RISE-version/PerformanceTesting-RISE-Lite.md': 'PerformanceTesting/RISE-version/PerformanceTesting-RISE-Lite.md',
    'testing-types/performance-testing/RISE-version/PerformanceTesting-RISE-Full_EN.md': 'en/PerformanceTesting/RISE-version/PerformanceTesting-RISE-Full.md',
    'testing-types/performance-testing/RISE-version/PerformanceTesting-RISE-Lite_EN.md': 'en/PerformanceTesting/RISE-version/PerformanceTesting-RISE-Lite.md',

    // AutomationTesting - ROSES-version
    'testing-types/automation-testing/ROSES-version/AutomationTesting-ROSES-Full.md': 'AutomationTesting/ROSES-version/AutomationTesting-ROSES-Full.md',
    'testing-types/automation-testing/ROSES-version/AutomationTesting-ROSES-Lite.md': 'AutomationTesting/ROSES-version/AutomationTesting-ROSES-Lite.md',
    'testing-types/automation-testing/ROSES-version/AutomationTesting-ROSES-Full_EN.md': 'en/AutomationTesting/ROSES-version/AutomationTesting-ROSES-Full.md',
    'testing-types/automation-testing/ROSES-version/AutomationTesting-ROSES-Lite_EN.md': 'en/AutomationTesting/ROSES-version/AutomationTesting-ROSES-Lite.md',

    // AutomationTesting - LangGPT-version
    'testing-types/automation-testing/LangGPT-version/AutomationTesting-LangGPT-Full.md': 'AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Full.md',
    'testing-types/automation-testing/LangGPT-version/AutomationTesting-LangGPT-Lite.md': 'AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Lite.md',
    'testing-types/automation-testing/LangGPT-version/AutomationTesting-LangGPT-Full_EN.md': 'en/AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Full.md',
    'testing-types/automation-testing/LangGPT-version/AutomationTesting-LangGPT-Lite_EN.md': 'en/AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Lite.md',

    // AutomationTesting - ICIO-version
    'testing-types/automation-testing/ICIO-version/AutomationTesting-ICIO-Full.md': 'AutomationTesting/ICIO-version/AutomationTesting-ICIO-Full.md',
    'testing-types/automation-testing/ICIO-version/AutomationTesting-ICIO-Lite.md': 'AutomationTesting/ICIO-version/AutomationTesting-ICIO-Lite.md',
    'testing-types/automation-testing/ICIO-version/AutomationTesting-ICIO-Full_EN.md': 'en/AutomationTesting/ICIO-version/AutomationTesting-ICIO-Full.md',
    'testing-types/automation-testing/ICIO-version/AutomationTesting-ICIO-Lite_EN.md': 'en/AutomationTesting/ICIO-version/AutomationTesting-ICIO-Lite.md',

    // AutomationTesting - CRISPE-version
    'testing-types/automation-testing/CRISPE-version/AutomationTesting-CRISPE-Full.md': 'AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Full.md',
    'testing-types/automation-testing/CRISPE-version/AutomationTesting-CRISPE-Lite.md': 'AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Lite.md',
    'testing-types/automation-testing/CRISPE-version/AutomationTesting-CRISPE-Full_EN.md': 'en/AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Full.md',
    'testing-types/automation-testing/CRISPE-version/AutomationTesting-CRISPE-Lite_EN.md': 'en/AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Lite.md',

    // AutomationTesting - RISE-version
    'testing-types/automation-testing/RISE-version/AutomationTesting-RISE-Full.md': 'AutomationTesting/RISE-version/AutomationTesting-RISE-Full.md',
    'testing-types/automation-testing/RISE-version/AutomationTesting-RISE-Lite.md': 'AutomationTesting/RISE-version/AutomationTesting-RISE-Lite.md',
    'testing-types/automation-testing/RISE-version/AutomationTesting-RISE-Full_EN.md': 'en/AutomationTesting/RISE-version/AutomationTesting-RISE-Full.md',
    'testing-types/automation-testing/RISE-version/AutomationTesting-RISE-Lite_EN.md': 'en/AutomationTesting/RISE-version/AutomationTesting-RISE-Lite.md',

    // MobileTesting - ROSES-version
    'testing-types/mobile-testing/ROSES-version/MobileTesting-ROSES-Full.md': 'MobileTesting/ROSES-version/MobileTesting-ROSES-Full.md',
    'testing-types/mobile-testing/ROSES-version/MobileTesting-ROSES-Lite.md': 'MobileTesting/ROSES-version/MobileTesting-ROSES-Lite.md',
    'testing-types/mobile-testing/ROSES-version/MobileTesting-ROSES-Full_EN.md': 'en/MobileTesting/ROSES-version/MobileTesting-ROSES-Full.md',
    'testing-types/mobile-testing/ROSES-version/MobileTesting-ROSES-Lite_EN.md': 'en/MobileTesting/ROSES-version/MobileTesting-ROSES-Lite.md',

    // MobileTesting - LangGPT-version
    'testing-types/mobile-testing/LangGPT-version/MobileTesting-LangGPT-Full.md': 'MobileTesting/LangGPT-version/MobileTesting-LangGPT-Full.md',
    'testing-types/mobile-testing/LangGPT-version/MobileTesting-LangGPT-Lite.md': 'MobileTesting/LangGPT-version/MobileTesting-LangGPT-Lite.md',
    'testing-types/mobile-testing/LangGPT-version/MobileTesting-LangGPT-Full_EN.md': 'en/MobileTesting/LangGPT-version/MobileTesting-LangGPT-Full.md',
    'testing-types/mobile-testing/LangGPT-version/MobileTesting-LangGPT-Lite_EN.md': 'en/MobileTesting/LangGPT-version/MobileTesting-LangGPT-Lite.md',

    // MobileTesting - ICIO-version
    'testing-types/mobile-testing/ICIO-version/MobileTesting-ICIO-Full.md': 'MobileTesting/ICIO-version/MobileTesting-ICIO-Full.md',
    'testing-types/mobile-testing/ICIO-version/MobileTesting-ICIO-Lite.md': 'MobileTesting/ICIO-version/MobileTesting-ICIO-Lite.md',
    'testing-types/mobile-testing/ICIO-version/MobileTesting-ICIO-Full_EN.md': 'en/MobileTesting/ICIO-version/MobileTesting-ICIO-Full.md',
    'testing-types/mobile-testing/ICIO-version/MobileTesting-ICIO-Lite_EN.md': 'en/MobileTesting/ICIO-version/MobileTesting-ICIO-Lite.md',

    // MobileTesting - CRISPE-version
    'testing-types/mobile-testing/CRISPE-version/MobileTesting-CRISPE-Full.md': 'MobileTesting/CRISPE-version/MobileTesting-CRISPE-Full.md',
    'testing-types/mobile-testing/CRISPE-version/MobileTesting-CRISPE-Lite.md': 'MobileTesting/CRISPE-version/MobileTesting-CRISPE-Lite.md',
    'testing-types/mobile-testing/CRISPE-version/MobileTesting-CRISPE-Full_EN.md': 'en/MobileTesting/CRISPE-version/MobileTesting-CRISPE-Full.md',
    'testing-types/mobile-testing/CRISPE-version/MobileTesting-CRISPE-Lite_EN.md': 'en/MobileTesting/CRISPE-version/MobileTesting-CRISPE-Lite.md',

    // MobileTesting - RISE-version
    'testing-types/mobile-testing/RISE-version/MobileTesting-RISE-Full.md': 'MobileTesting/RISE-version/MobileTesting-RISE-Full.md',
    'testing-types/mobile-testing/RISE-version/MobileTesting-RISE-Lite.md': 'MobileTesting/RISE-version/MobileTesting-RISE-Lite.md',
    'testing-types/mobile-testing/RISE-version/MobileTesting-RISE-Full_EN.md': 'en/MobileTesting/RISE-version/MobileTesting-RISE-Full.md',
    'testing-types/mobile-testing/RISE-version/MobileTesting-RISE-Lite_EN.md': 'en/MobileTesting/RISE-version/MobileTesting-RISE-Lite.md',

    // BugReporting - ROSES-version
    'testing-types/bug-reporting/ROSES-version/BugReporting-ROSES-Full.md': 'BugReporting/ROSES-version/BugReporting-ROSES-Full.md',
    'testing-types/bug-reporting/ROSES-version/BugReporting-ROSES-Lite.md': 'BugReporting/ROSES-version/BugReporting-ROSES-Lite.md',
    'testing-types/bug-reporting/ROSES-version/BugReporting-ROSES-Full_EN.md': 'en/BugReporting/ROSES-version/BugReporting-ROSES-Full.md',
    'testing-types/bug-reporting/ROSES-version/BugReporting-ROSES-Lite_EN.md': 'en/BugReporting/ROSES-version/BugReporting-ROSES-Lite.md',

    // BugReporting - LangGPT-version
    'testing-types/bug-reporting/LangGPT-version/BugReporting-LangGPT-Full.md': 'BugReporting/LangGPT-version/BugReporting-LangGPT-Full.md',
    'testing-types/bug-reporting/LangGPT-version/BugReporting-LangGPT-Lite.md': 'BugReporting/LangGPT-version/BugReporting-LangGPT-Lite.md',
    'testing-types/bug-reporting/LangGPT-version/BugReporting-LangGPT-Full_EN.md': 'en/BugReporting/LangGPT-version/BugReporting-LangGPT-Full.md',
    'testing-types/bug-reporting/LangGPT-version/BugReporting-LangGPT-Lite_EN.md': 'en/BugReporting/LangGPT-version/BugReporting-LangGPT-Lite.md',

    // BugReporting - ICIO-version
    'testing-types/bug-reporting/ICIO-version/BugReporting-ICIO-Full.md': 'BugReporting/ICIO-version/BugReporting-ICIO-Full.md',
    'testing-types/bug-reporting/ICIO-version/BugReporting-ICIO-Lite.md': 'BugReporting/ICIO-version/BugReporting-ICIO-Lite.md',
    'testing-types/bug-reporting/ICIO-version/BugReporting-ICIO-Full_EN.md': 'en/BugReporting/ICIO-version/BugReporting-ICIO-Full.md',
    'testing-types/bug-reporting/ICIO-version/BugReporting-ICIO-Lite_EN.md': 'en/BugReporting/ICIO-version/BugReporting-ICIO-Lite.md',

    // BugReporting - CRISPE-version
    'testing-types/bug-reporting/CRISPE-version/BugReporting-CRISPE-Full.md': 'BugReporting/CRISPE-version/BugReporting-CRISPE-Full.md',
    'testing-types/bug-reporting/CRISPE-version/BugReporting-CRISPE-Lite.md': 'BugReporting/CRISPE-version/BugReporting-CRISPE-Lite.md',
    'testing-types/bug-reporting/CRISPE-version/BugReporting-CRISPE-Full_EN.md': 'en/BugReporting/CRISPE-version/BugReporting-CRISPE-Full.md',
    'testing-types/bug-reporting/CRISPE-version/BugReporting-CRISPE-Lite_EN.md': 'en/BugReporting/CRISPE-version/BugReporting-CRISPE-Lite.md',

    // BugReporting - RISE-version
    'testing-types/bug-reporting/RISE-version/BugReporting-RISE-Full.md': 'BugReporting/RISE-version/BugReporting-RISE-Full.md',
    'testing-types/bug-reporting/RISE-version/BugReporting-RISE-Lite.md': 'BugReporting/RISE-version/BugReporting-RISE-Lite.md',
    'testing-types/bug-reporting/RISE-version/BugReporting-RISE-Full_EN.md': 'en/BugReporting/RISE-version/BugReporting-RISE-Full.md',
    'testing-types/bug-reporting/RISE-version/BugReporting-RISE-Lite_EN.md': 'en/BugReporting/RISE-version/BugReporting-RISE-Lite.md',

    // TestReporting - ROSES-version
    'testing-types/test-reporting/ROSES-version/TestReporting-ROSES-Full.md': 'TestReporting/ROSES-version/TestReporting-ROSES-Full.md',
    'testing-types/test-reporting/ROSES-version/TestReporting-ROSES-Lite.md': 'TestReporting/ROSES-version/TestReporting-ROSES-Lite.md',
    'testing-types/test-reporting/ROSES-version/TestReporting-ROSES-Full_EN.md': 'en/TestReporting/ROSES-version/TestReporting-ROSES-Full.md',
    'testing-types/test-reporting/ROSES-version/TestReporting-ROSES-Lite_EN.md': 'en/TestReporting/ROSES-version/TestReporting-ROSES-Lite.md',

    // TestReporting - LangGPT-version
    'testing-types/test-reporting/LangGPT-version/TestReporting-LangGPT-Full.md': 'TestReporting/LangGPT-version/TestReporting-LangGPT-Full.md',
    'testing-types/test-reporting/LangGPT-version/TestReporting-LangGPT-Lite.md': 'TestReporting/LangGPT-version/TestReporting-LangGPT-Lite.md',
    'testing-types/test-reporting/LangGPT-version/TestReporting-LangGPT-Full_EN.md': 'en/TestReporting/LangGPT-version/TestReporting-LangGPT-Full.md',
    'testing-types/test-reporting/LangGPT-version/TestReporting-LangGPT-Lite_EN.md': 'en/TestReporting/LangGPT-version/TestReporting-LangGPT-Lite.md',

    // TestReporting - ICIO-version
    'testing-types/test-reporting/ICIO-version/TestReporting-ICIO-Full.md': 'TestReporting/ICIO-version/TestReporting-ICIO-Full.md',
    'testing-types/test-reporting/ICIO-version/TestReporting-ICIO-Lite.md': 'TestReporting/ICIO-version/TestReporting-ICIO-Lite.md',
    'testing-types/test-reporting/ICIO-version/TestReporting-ICIO-Full_EN.md': 'en/TestReporting/ICIO-version/TestReporting-ICIO-Full.md',
    'testing-types/test-reporting/ICIO-version/TestReporting-ICIO-Lite_EN.md': 'en/TestReporting/ICIO-version/TestReporting-ICIO-Lite.md',

    // TestReporting - CRISPE-version
    'testing-types/test-reporting/CRISPE-version/TestReporting-CRISPE-Full.md': 'TestReporting/CRISPE-version/TestReporting-CRISPE-Full.md',
    'testing-types/test-reporting/CRISPE-version/TestReporting-CRISPE-Lite.md': 'TestReporting/CRISPE-version/TestReporting-CRISPE-Lite.md',
    'testing-types/test-reporting/CRISPE-version/TestReporting-CRISPE-Full_EN.md': 'en/TestReporting/CRISPE-version/TestReporting-CRISPE-Full.md',
    'testing-types/test-reporting/CRISPE-version/TestReporting-CRISPE-Lite_EN.md': 'en/TestReporting/CRISPE-version/TestReporting-CRISPE-Lite.md',

    // TestReporting - RISE-version
    'testing-types/test-reporting/RISE-version/TestReporting-RISE-Full.md': 'TestReporting/RISE-version/TestReporting-RISE-Full.md',
    'testing-types/test-reporting/RISE-version/TestReporting-RISE-Lite.md': 'TestReporting/RISE-version/TestReporting-RISE-Lite.md',
    'testing-types/test-reporting/RISE-version/TestReporting-RISE-Full_EN.md': 'en/TestReporting/RISE-version/TestReporting-RISE-Full.md',
    'testing-types/test-reporting/RISE-version/TestReporting-RISE-Lite_EN.md': 'en/TestReporting/RISE-version/TestReporting-RISE-Lite.md',

    // TestStrategy - ROSES-version
    'testing-types/test-strategy/ROSES-version/TestStrategy-ROSES-Full.md': 'TestStrategy/ROSES-version/TestStrategy-ROSES-Full.md',
    'testing-types/test-strategy/ROSES-version/TestStrategy-ROSES-Lite.md': 'TestStrategy/ROSES-version/TestStrategy-ROSES-Lite.md',
    'testing-types/test-strategy/ROSES-version/TestStrategy-ROSES-Full_EN.md': 'en/TestStrategy/ROSES-version/TestStrategy-ROSES-Full.md',
    'testing-types/test-strategy/ROSES-version/TestStrategy-ROSES-Lite_EN.md': 'en/TestStrategy/ROSES-version/TestStrategy-ROSES-Lite.md',

    // TestStrategy - LangGPT-version
    'testing-types/test-strategy/LangGPT-version/TestStrategy-LangGPT-Full.md': 'TestStrategy/LangGPT-version/TestStrategy-LangGPT-Full.md',
    'testing-types/test-strategy/LangGPT-version/TestStrategy-LangGPT-Lite.md': 'TestStrategy/LangGPT-version/TestStrategy-LangGPT-Lite.md',
    'testing-types/test-strategy/LangGPT-version/TestStrategy-LangGPT-Full_EN.md': 'en/TestStrategy/LangGPT-version/TestStrategy-LangGPT-Full.md',
    'testing-types/test-strategy/LangGPT-version/TestStrategy-LangGPT-Lite_EN.md': 'en/TestStrategy/LangGPT-version/TestStrategy-LangGPT-Lite.md',

    // TestStrategy - ICIO-version
    'testing-types/test-strategy/ICIO-version/TestStrategy-ICIO-Full.md': 'TestStrategy/ICIO-version/TestStrategy-ICIO-Full.md',
    'testing-types/test-strategy/ICIO-version/TestStrategy-ICIO-Lite.md': 'TestStrategy/ICIO-version/TestStrategy-ICIO-Lite.md',
    'testing-types/test-strategy/ICIO-version/TestStrategy-ICIO-Full_EN.md': 'en/TestStrategy/ICIO-version/TestStrategy-ICIO-Full.md',
    'testing-types/test-strategy/ICIO-version/TestStrategy-ICIO-Lite_EN.md': 'en/TestStrategy/ICIO-version/TestStrategy-ICIO-Lite.md',

    // TestStrategy - CRISPE-version
    'testing-types/test-strategy/CRISPE-version/TestStrategy-CRISPE-Full.md': 'TestStrategy/CRISPE-version/TestStrategy-CRISPE-Full.md',
    'testing-types/test-strategy/CRISPE-version/TestStrategy-CRISPE-Lite.md': 'TestStrategy/CRISPE-version/TestStrategy-CRISPE-Lite.md',
    'testing-types/test-strategy/CRISPE-version/TestStrategy-CRISPE-Full_EN.md': 'en/TestStrategy/CRISPE-version/TestStrategy-CRISPE-Full.md',
    'testing-types/test-strategy/CRISPE-version/TestStrategy-CRISPE-Lite_EN.md': 'en/TestStrategy/CRISPE-version/TestStrategy-CRISPE-Lite.md',

    // TestStrategy - RISE-version
    'testing-types/test-strategy/RISE-version/TestStrategy-RISE-Full.md': 'TestStrategy/RISE-version/TestStrategy-RISE-Full.md',
    'testing-types/test-strategy/RISE-version/TestStrategy-RISE-Lite.md': 'TestStrategy/RISE-version/TestStrategy-RISE-Lite.md',
    'testing-types/test-strategy/RISE-version/TestStrategy-RISE-Full_EN.md': 'en/TestStrategy/RISE-version/TestStrategy-RISE-Full.md',
    'testing-types/test-strategy/RISE-version/TestStrategy-RISE-Lite_EN.md': 'en/TestStrategy/RISE-version/TestStrategy-RISE-Lite.md',

    // APITesting - ROSES-version
    'testing-types/api-testing/ROSES-version/APITesting-ROSES-Full.md': 'APITesting/ROSES-version/APITesting-ROSES-Full.md',
    'testing-types/api-testing/ROSES-version/APITesting-ROSES-Lite.md': 'APITesting/ROSES-version/APITesting-ROSES-Lite.md',
    'testing-types/api-testing/ROSES-version/APITesting-ROSES-Full_EN.md': 'en/APITesting/ROSES-version/APITesting-ROSES-Full.md',
    'testing-types/api-testing/ROSES-version/APITesting-ROSES-Lite_EN.md': 'en/APITesting/ROSES-version/APITesting-ROSES-Lite.md',

    // APITesting - LangGPT-version
    'testing-types/api-testing/LangGPT-version/APITesting-LangGPT-Full.md': 'APITesting/LangGPT-version/APITesting-LangGPT-Full.md',
    'testing-types/api-testing/LangGPT-version/APITesting-LangGPT-Lite.md': 'APITesting/LangGPT-version/APITesting-LangGPT-Lite.md',
    'testing-types/api-testing/LangGPT-version/APITesting-LangGPT-Full_EN.md': 'en/APITesting/LangGPT-version/APITesting-LangGPT-Full.md',
    'testing-types/api-testing/LangGPT-version/APITesting-LangGPT-Lite_EN.md': 'en/APITesting/LangGPT-version/APITesting-LangGPT-Lite.md',

    // APITesting - ICIO-version
    'testing-types/api-testing/ICIO-version/APITesting-ICIO-Full.md': 'APITesting/ICIO-version/APITesting-ICIO-Full.md',
    'testing-types/api-testing/ICIO-version/APITesting-ICIO-Lite.md': 'APITesting/ICIO-version/APITesting-ICIO-Lite.md',
    'testing-types/api-testing/ICIO-version/APITesting-ICIO-Full_EN.md': 'en/APITesting/ICIO-version/APITesting-ICIO-Full.md',
    'testing-types/api-testing/ICIO-version/APITesting-ICIO-Lite_EN.md': 'en/APITesting/ICIO-version/APITesting-ICIO-Lite.md',

    // APITesting - CRISPE-version
    'testing-types/api-testing/CRISPE-version/APITesting-CRISPE-Full.md': 'APITesting/CRISPE-version/APITesting-CRISPE-Full.md',
    'testing-types/api-testing/CRISPE-version/APITesting-CRISPE-Lite.md': 'APITesting/CRISPE-version/APITesting-CRISPE-Lite.md',
    'testing-types/api-testing/CRISPE-version/APITesting-CRISPE-Full_EN.md': 'en/APITesting/CRISPE-version/APITesting-CRISPE-Full.md',
    'testing-types/api-testing/CRISPE-version/APITesting-CRISPE-Lite_EN.md': 'en/APITesting/CRISPE-version/APITesting-CRISPE-Lite.md',

    // APITesting - RISE-version
    'testing-types/api-testing/RISE-version/APITesting-RISE-Full.md': 'APITesting/RISE-version/APITesting-RISE-Full.md',
    'testing-types/api-testing/RISE-version/APITesting-RISE-Lite.md': 'APITesting/RISE-version/APITesting-RISE-Lite.md',
    'testing-types/api-testing/RISE-version/APITesting-RISE-Full_EN.md': 'en/APITesting/RISE-version/APITesting-RISE-Full.md',
    'testing-types/api-testing/RISE-version/APITesting-RISE-Lite_EN.md': 'en/APITesting/RISE-version/APITesting-RISE-Lite.md',

    // SecurityTesting - ROSES-version
    'testing-types/security-testing/ROSES-version/SecurityTesting-ROSES-Full.md': 'SecurityTesting/ROSES-version/SecurityTesting-ROSES-Full.md',
    'testing-types/security-testing/ROSES-version/SecurityTesting-ROSES-Lite.md': 'SecurityTesting/ROSES-version/SecurityTesting-ROSES-Lite.md',
    'testing-types/security-testing/ROSES-version/SecurityTesting-ROSES-Full_EN.md': 'en/SecurityTesting/ROSES-version/SecurityTesting-ROSES-Full.md',
    'testing-types/security-testing/ROSES-version/SecurityTesting-ROSES-Lite_EN.md': 'en/SecurityTesting/ROSES-version/SecurityTesting-ROSES-Lite.md',

    // SecurityTesting - LangGPT-version
    'testing-types/security-testing/LangGPT-version/SecurityTesting-LangGPT-Full.md': 'SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Full.md',
    'testing-types/security-testing/LangGPT-version/SecurityTesting-LangGPT-Lite.md': 'SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Lite.md',
    'testing-types/security-testing/LangGPT-version/SecurityTesting-LangGPT-Full_EN.md': 'en/SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Full.md',
    'testing-types/security-testing/LangGPT-version/SecurityTesting-LangGPT-Lite_EN.md': 'en/SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Lite.md',

    // SecurityTesting - ICIO-version
    'testing-types/security-testing/ICIO-version/SecurityTesting-ICIO-Full.md': 'SecurityTesting/ICIO-version/SecurityTesting-ICIO-Full.md',
    'testing-types/security-testing/ICIO-version/SecurityTesting-ICIO-Lite.md': 'SecurityTesting/ICIO-version/SecurityTesting-ICIO-Lite.md',
    'testing-types/security-testing/ICIO-version/SecurityTesting-ICIO-Full_EN.md': 'en/SecurityTesting/ICIO-version/SecurityTesting-ICIO-Full.md',
    'testing-types/security-testing/ICIO-version/SecurityTesting-ICIO-Lite_EN.md': 'en/SecurityTesting/ICIO-version/SecurityTesting-ICIO-Lite.md',

    // SecurityTesting - CRISPE-version
    'testing-types/security-testing/CRISPE-version/SecurityTesting-CRISPE-Full.md': 'SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Full.md',
    'testing-types/security-testing/CRISPE-version/SecurityTesting-CRISPE-Lite.md': 'SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Lite.md',
    'testing-types/security-testing/CRISPE-version/SecurityTesting-CRISPE-Full_EN.md': 'en/SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Full.md',
    'testing-types/security-testing/CRISPE-version/SecurityTesting-CRISPE-Lite_EN.md': 'en/SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Lite.md',

    // SecurityTesting - RISE-version
    'testing-types/security-testing/RISE-version/SecurityTesting-RISE-Full.md': 'SecurityTesting/RISE-version/SecurityTesting-RISE-Full.md',
    'testing-types/security-testing/RISE-version/SecurityTesting-RISE-Lite.md': 'SecurityTesting/RISE-version/SecurityTesting-RISE-Lite.md',
    'testing-types/security-testing/RISE-version/SecurityTesting-RISE-Full_EN.md': 'en/SecurityTesting/RISE-version/SecurityTesting-RISE-Full.md',
    'testing-types/security-testing/RISE-version/SecurityTesting-RISE-Lite_EN.md': 'en/SecurityTesting/RISE-version/SecurityTesting-RISE-Lite.md',

    // AccessibilityTesting - ROSES-version
    'testing-types/accessibility-testing/ROSES-version/AccessibilityTesting-ROSES-Full.md': 'AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Full.md',
    'testing-types/accessibility-testing/ROSES-version/AccessibilityTesting-ROSES-Lite.md': 'AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Lite.md',
    'testing-types/accessibility-testing/ROSES-version/AccessibilityTesting-ROSES-Full_EN.md': 'en/AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Full.md',
    'testing-types/accessibility-testing/ROSES-version/AccessibilityTesting-ROSES-Lite_EN.md': 'en/AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Lite.md',

    // AccessibilityTesting - LangGPT-version
    'testing-types/accessibility-testing/LangGPT-version/AccessibilityTesting-LangGPT-Full.md': 'AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Full.md',
    'testing-types/accessibility-testing/LangGPT-version/AccessibilityTesting-LangGPT-Lite.md': 'AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Lite.md',
    'testing-types/accessibility-testing/LangGPT-version/AccessibilityTesting-LangGPT-Full_EN.md': 'en/AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Full.md',
    'testing-types/accessibility-testing/LangGPT-version/AccessibilityTesting-LangGPT-Lite_EN.md': 'en/AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Lite.md',

    // AccessibilityTesting - ICIO-version
    'testing-types/accessibility-testing/ICIO-version/AccessibilityTesting-ICIO-Full.md': 'AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Full.md',
    'testing-types/accessibility-testing/ICIO-version/AccessibilityTesting-ICIO-Lite.md': 'AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Lite.md',
    'testing-types/accessibility-testing/ICIO-version/AccessibilityTesting-ICIO-Full_EN.md': 'en/AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Full.md',
    'testing-types/accessibility-testing/ICIO-version/AccessibilityTesting-ICIO-Lite_EN.md': 'en/AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Lite.md',

    // AccessibilityTesting - CRISPE-version
    'testing-types/accessibility-testing/CRISPE-version/AccessibilityTesting-CRISPE-Full.md': 'AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Full.md',
    'testing-types/accessibility-testing/CRISPE-version/AccessibilityTesting-CRISPE-Lite.md': 'AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Lite.md',
    'testing-types/accessibility-testing/CRISPE-version/AccessibilityTesting-CRISPE-Full_EN.md': 'en/AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Full.md',
    'testing-types/accessibility-testing/CRISPE-version/AccessibilityTesting-CRISPE-Lite_EN.md': 'en/AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Lite.md',

    // AccessibilityTesting - RISE-version
    'testing-types/accessibility-testing/RISE-version/AccessibilityTesting-RISE-Full.md': 'AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Full.md',
    'testing-types/accessibility-testing/RISE-version/AccessibilityTesting-RISE-Lite.md': 'AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Lite.md',
    'testing-types/accessibility-testing/RISE-version/AccessibilityTesting-RISE-Full_EN.md': 'en/AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Full.md',
    'testing-types/accessibility-testing/RISE-version/AccessibilityTesting-RISE-Lite_EN.md': 'en/AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Lite.md',

    // AIAssistedTesting - ROSES-version
    'testing-types/ai-assisted-testing/ROSES-version/AIAssistedTesting-ROSES-Full.md': 'AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Full.md',
    'testing-types/ai-assisted-testing/ROSES-version/AIAssistedTesting-ROSES-Lite.md': 'AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Lite.md',
    'testing-types/ai-assisted-testing/ROSES-version/AIAssistedTesting-ROSES-Full_EN.md': 'en/AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Full.md',
    'testing-types/ai-assisted-testing/ROSES-version/AIAssistedTesting-ROSES-Lite_EN.md': 'en/AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Lite.md',

    // AIAssistedTesting - LangGPT-version
    'testing-types/ai-assisted-testing/LangGPT-version/AIAssistedTesting-LangGPT-Full.md': 'AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Full.md',
    'testing-types/ai-assisted-testing/LangGPT-version/AIAssistedTesting-LangGPT-Lite.md': 'AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Lite.md',
    'testing-types/ai-assisted-testing/LangGPT-version/AIAssistedTesting-LangGPT-Full_EN.md': 'en/AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Full.md',
    'testing-types/ai-assisted-testing/LangGPT-version/AIAssistedTesting-LangGPT-Lite_EN.md': 'en/AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Lite.md',

    // AIAssistedTesting - ICIO-version
    'testing-types/ai-assisted-testing/ICIO-version/AIAssistedTesting-ICIO-Full.md': 'AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Full.md',
    'testing-types/ai-assisted-testing/ICIO-version/AIAssistedTesting-ICIO-Lite.md': 'AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Lite.md',
    'testing-types/ai-assisted-testing/ICIO-version/AIAssistedTesting-ICIO-Full_EN.md': 'en/AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Full.md',
    'testing-types/ai-assisted-testing/ICIO-version/AIAssistedTesting-ICIO-Lite_EN.md': 'en/AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Lite.md',

    // AIAssistedTesting - CRISPE-version
    'testing-types/ai-assisted-testing/CRISPE-version/AIAssistedTesting-CRISPE-Full.md': 'AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Full.md',
    'testing-types/ai-assisted-testing/CRISPE-version/AIAssistedTesting-CRISPE-Lite.md': 'AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Lite.md',
    'testing-types/ai-assisted-testing/CRISPE-version/AIAssistedTesting-CRISPE-Full_EN.md': 'en/AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Full.md',
    'testing-types/ai-assisted-testing/CRISPE-version/AIAssistedTesting-CRISPE-Lite_EN.md': 'en/AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Lite.md',

    // AIAssistedTesting - RISE-version
    'testing-types/ai-assisted-testing/RISE-version/AIAssistedTesting-RISE-Full.md': 'AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Full.md',
    'testing-types/ai-assisted-testing/RISE-version/AIAssistedTesting-RISE-Lite.md': 'AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Lite.md',
    'testing-types/ai-assisted-testing/RISE-version/AIAssistedTesting-RISE-Full_EN.md': 'en/AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Full.md',
    'testing-types/ai-assisted-testing/RISE-version/AIAssistedTesting-RISE-Lite_EN.md': 'en/AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Lite.md',

    // ManualTesting - ROSES-version
    'testing-types/manual-testing/ROSES-version/ManualTesting-ROSES-Full.md': 'ManualTesting/ROSES-version/ManualTesting-ROSES-Full.md',
    'testing-types/manual-testing/ROSES-version/ManualTesting-ROSES-Lite.md': 'ManualTesting/ROSES-version/ManualTesting-ROSES-Lite.md',
    'testing-types/manual-testing/ROSES-version/ManualTesting-ROSES-Full_EN.md': 'en/ManualTesting/ROSES-version/ManualTesting-ROSES-Full.md',
    'testing-types/manual-testing/ROSES-version/ManualTesting-ROSES-Lite_EN.md': 'en/ManualTesting/ROSES-version/ManualTesting-ROSES-Lite.md',

    // ManualTesting - LangGPT-version
    'testing-types/manual-testing/LangGPT-version/ManualTesting-LangGPT-Full.md': 'ManualTesting/LangGPT-version/ManualTesting-LangGPT-Full.md',
    'testing-types/manual-testing/LangGPT-version/ManualTesting-LangGPT-Lite.md': 'ManualTesting/LangGPT-version/ManualTesting-LangGPT-Lite.md',
    'testing-types/manual-testing/LangGPT-version/ManualTesting-LangGPT-Full_EN.md': 'en/ManualTesting/LangGPT-version/ManualTesting-LangGPT-Full.md',
    'testing-types/manual-testing/LangGPT-version/ManualTesting-LangGPT-Lite_EN.md': 'en/ManualTesting/LangGPT-version/ManualTesting-LangGPT-Lite.md',

    // ManualTesting - ICIO-version
    'testing-types/manual-testing/ICIO-version/ManualTesting-ICIO-Full.md': 'ManualTesting/ICIO-version/ManualTesting-ICIO-Full.md',
    'testing-types/manual-testing/ICIO-version/ManualTesting-ICIO-Lite.md': 'ManualTesting/ICIO-version/ManualTesting-ICIO-Lite.md',
    'testing-types/manual-testing/ICIO-version/ManualTesting-ICIO-Full_EN.md': 'en/ManualTesting/ICIO-version/ManualTesting-ICIO-Full.md',
    'testing-types/manual-testing/ICIO-version/ManualTesting-ICIO-Lite_EN.md': 'en/ManualTesting/ICIO-version/ManualTesting-ICIO-Lite.md',

    // ManualTesting - CRISPE-version
    'testing-types/manual-testing/CRISPE-version/ManualTesting-CRISPE-Full.md': 'ManualTesting/CRISPE-version/ManualTesting-CRISPE-Full.md',
    'testing-types/manual-testing/CRISPE-version/ManualTesting-CRISPE-Lite.md': 'ManualTesting/CRISPE-version/ManualTesting-CRISPE-Lite.md',
    'testing-types/manual-testing/CRISPE-version/ManualTesting-CRISPE-Full_EN.md': 'en/ManualTesting/CRISPE-version/ManualTesting-CRISPE-Full.md',
    'testing-types/manual-testing/CRISPE-version/ManualTesting-CRISPE-Lite_EN.md': 'en/ManualTesting/CRISPE-version/ManualTesting-CRISPE-Lite.md',

    // ManualTesting - RISE-version
    'testing-types/manual-testing/RISE-version/ManualTesting-RISE-Full.md': 'ManualTesting/RISE-version/ManualTesting-RISE-Full.md',
    'testing-types/manual-testing/RISE-version/ManualTesting-RISE-Lite.md': 'ManualTesting/RISE-version/ManualTesting-RISE-Lite.md',
    'testing-types/manual-testing/RISE-version/ManualTesting-RISE-Full_EN.md': 'en/ManualTesting/RISE-version/ManualTesting-RISE-Full.md',
    'testing-types/manual-testing/RISE-version/ManualTesting-RISE-Lite_EN.md': 'en/ManualTesting/RISE-version/ManualTesting-RISE-Lite.md',

    // TestCaseReviewer - ROSES-version
    'testing-types/test-case-reviewer/ROSES-version/TestCaseReviewer-ROSES-Full.md': 'TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Full.md',
    'testing-types/test-case-reviewer/ROSES-version/TestCaseReviewer-ROSES-Lite.md': 'TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Lite.md',
    'testing-types/test-case-reviewer/ROSES-version/TestCaseReviewer-ROSES-Full_EN.md': 'en/TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Full.md',
    'testing-types/test-case-reviewer/ROSES-version/TestCaseReviewer-ROSES-Lite_EN.md': 'en/TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Lite.md',

    // TestCaseReviewer - LangGPT-version
    'testing-types/test-case-reviewer/LangGPT-version/TestCaseReviewer-LangGPT-Full.md': 'TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Full.md',
    'testing-types/test-case-reviewer/LangGPT-version/TestCaseReviewer-LangGPT-Lite.md': 'TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Lite.md',
    'testing-types/test-case-reviewer/LangGPT-version/TestCaseReviewer-LangGPT-Full_EN.md': 'en/TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Full.md',
    'testing-types/test-case-reviewer/LangGPT-version/TestCaseReviewer-LangGPT-Lite_EN.md': 'en/TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Lite.md',

    // TestCaseReviewer - ICIO-version
    'testing-types/test-case-reviewer/ICIO-version/TestCaseReviewer-ICIO-Full.md': 'TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Full.md',
    'testing-types/test-case-reviewer/ICIO-version/TestCaseReviewer-ICIO-Lite.md': 'TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Lite.md',
    'testing-types/test-case-reviewer/ICIO-version/TestCaseReviewer-ICIO-Full_EN.md': 'en/TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Full.md',
    'testing-types/test-case-reviewer/ICIO-version/TestCaseReviewer-ICIO-Lite_EN.md': 'en/TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Lite.md',

    // TestCaseReviewer - CRISPE-version
    'testing-types/test-case-reviewer/CRISPE-version/TestCaseReviewer-CRISPE-Full.md': 'TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Full.md',
    'testing-types/test-case-reviewer/CRISPE-version/TestCaseReviewer-CRISPE-Lite.md': 'TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Lite.md',
    'testing-types/test-case-reviewer/CRISPE-version/TestCaseReviewer-CRISPE-Full_EN.md': 'en/TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Full.md',
    'testing-types/test-case-reviewer/CRISPE-version/TestCaseReviewer-CRISPE-Lite_EN.md': 'en/TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Lite.md',

    // TestCaseReviewer - RISE-version
    'testing-types/test-case-reviewer/RISE-version/TestCaseReviewer-RISE-Full.md': 'TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Full.md',
    'testing-types/test-case-reviewer/RISE-version/TestCaseReviewer-RISE-Lite.md': 'TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Lite.md',
    'testing-types/test-case-reviewer/RISE-version/TestCaseReviewer-RISE-Full_EN.md': 'en/TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Full.md',
    'testing-types/test-case-reviewer/RISE-version/TestCaseReviewer-RISE-Lite_EN.md': 'en/TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Lite.md',

    // RequirementsAnalysis (EN) - Standard-version

    // RequirementsAnalysis (EN) - ROSES-version

    // RequirementsAnalysis (EN) - LangGPT-version

    // RequirementsAnalysis (EN) - ICIO-version

    // RequirementsAnalysis (EN) - CRISPE-version

    // RequirementsAnalysis (EN) - RISE-version

    // TestCaseWriting (EN) - Standard-version

    // TestCaseWriting (EN) - ROSES-version

    // TestCaseWriting (EN) - LangGPT-version

    // TestCaseWriting (EN) - ICIO-version

    // TestCaseWriting (EN) - CRISPE-version

    // TestCaseWriting (EN) - RISE-version

    // FunctionalTesting (EN) - Standard-version

    // FunctionalTesting (EN) - ROSES-version

    // FunctionalTesting (EN) - LangGPT-version

    // FunctionalTesting (EN) - ICIO-version

    // FunctionalTesting (EN) - CRISPE-version

    // FunctionalTesting (EN) - RISE-version

    // PerformanceTesting (EN) - Standard-version

    // PerformanceTesting (EN) - ROSES-version

    // PerformanceTesting (EN) - LangGPT-version

    // PerformanceTesting (EN) - ICIO-version

    // PerformanceTesting (EN) - CRISPE-version

    // PerformanceTesting (EN) - RISE-version

    // AutomationTesting (EN) - Standard-version

    // AutomationTesting (EN) - ROSES-version

    // AutomationTesting (EN) - LangGPT-version

    // AutomationTesting (EN) - ICIO-version

    // AutomationTesting (EN) - CRISPE-version

    // AutomationTesting (EN) - RISE-version

    // MobileTesting (EN) - Standard-version

    // MobileTesting (EN) - ROSES-version

    // MobileTesting (EN) - LangGPT-version

    // MobileTesting (EN) - ICIO-version

    // MobileTesting (EN) - CRISPE-version

    // MobileTesting (EN) - RISE-version

    // BugReporting (EN) - Standard-version

    // BugReporting (EN) - ROSES-version

    // BugReporting (EN) - LangGPT-version

    // BugReporting (EN) - ICIO-version

    // BugReporting (EN) - CRISPE-version

    // BugReporting (EN) - RISE-version

    // TestReporting (EN) - Standard-version

    // TestReporting (EN) - ROSES-version

    // TestReporting (EN) - LangGPT-version

    // TestReporting (EN) - ICIO-version

    // TestReporting (EN) - CRISPE-version

    // TestReporting (EN) - RISE-version

    // TestStrategy (EN) - Standard-version

    // TestStrategy (EN) - ROSES-version

    // TestStrategy (EN) - LangGPT-version

    // TestStrategy (EN) - ICIO-version

    // TestStrategy (EN) - CRISPE-version

    // TestStrategy (EN) - RISE-version

    // APITesting (EN) - Standard-version

    // APITesting (EN) - ROSES-version

    // APITesting (EN) - LangGPT-version

    // APITesting (EN) - ICIO-version

    // APITesting (EN) - CRISPE-version

    // APITesting (EN) - RISE-version

    // SecurityTesting (EN) - Standard-version

    // SecurityTesting (EN) - ROSES-version

    // SecurityTesting (EN) - LangGPT-version

    // SecurityTesting (EN) - ICIO-version

    // SecurityTesting (EN) - CRISPE-version

    // SecurityTesting (EN) - RISE-version

    // AccessibilityTesting (EN) - Standard-version

    // AccessibilityTesting (EN) - ROSES-version

    // AccessibilityTesting (EN) - LangGPT-version

    // AccessibilityTesting (EN) - ICIO-version

    // AccessibilityTesting (EN) - CRISPE-version

    // AccessibilityTesting (EN) - RISE-version

    // AIAssistedTesting (EN) - Standard-version

    // AIAssistedTesting (EN) - ROSES-version

    // AIAssistedTesting (EN) - LangGPT-version

    // AIAssistedTesting (EN) - ICIO-version

    // AIAssistedTesting (EN) - CRISPE-version

    // AIAssistedTesting (EN) - RISE-version

    // ManualTesting (EN) - Standard-version

    // ManualTesting (EN) - ROSES-version

    // ManualTesting (EN) - LangGPT-version

    // ManualTesting (EN) - ICIO-version

    // ManualTesting (EN) - CRISPE-version

    // ManualTesting (EN) - RISE-version

    // TestCaseReviewer (EN) - Standard-version

    // TestCaseReviewer (EN) - ROSES-version

    // TestCaseReviewer (EN) - LangGPT-version

    // TestCaseReviewer (EN) - ICIO-version

    // TestCaseReviewer (EN) - CRISPE-version

    // TestCaseReviewer (EN) - RISE-version (已在上面的中文版本中映射，这里只保留英文路径)


    
    

    // ========== 英文版本路由映射 ==========







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
          { text: '💝 赞助支持', link: '/sponsor' },
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
                    { text: '说明文档', link: '/RequirementsAnalysis/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt' },
                        { text: '精简版', link: '/RequirementsAnalysis/RequirementsAnalysisPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Full' },
                        { text: '精简版', link: '/RequirementsAnalysis/ROSES-version/RequirementsAnalysis-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full' },
                        { text: '精简版', link: '/RequirementsAnalysis/LangGPT-version/RequirementsAnalysis-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Full' },
                        { text: '精简版', link: '/RequirementsAnalysis/ICIO-version/RequirementsAnalysis-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Full' },
                        { text: '精简版', link: '/RequirementsAnalysis/CRISPE-version/RequirementsAnalysis-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Full' },
                        { text: '精简版', link: '/RequirementsAnalysis/RISE-version/RequirementsAnalysis-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '✍️ 测试用例编写',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/TestCaseWriting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseWriting/TestCaseWritingPrompt' },
                        { text: '精简版', link: '/TestCaseWriting/TestCaseWritingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Full' },
                        { text: '精简版', link: '/TestCaseWriting/ROSES-version/TestCaseWriting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Full' },
                        { text: '精简版', link: '/TestCaseWriting/LangGPT-version/TestCaseWriting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Full' },
                        { text: '精简版', link: '/TestCaseWriting/ICIO-version/TestCaseWriting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Full' },
                        { text: '精简版', link: '/TestCaseWriting/CRISPE-version/TestCaseWriting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseWriting/RISE-version/TestCaseWriting-RISE-Full' },
                        { text: '精简版', link: '/TestCaseWriting/RISE-version/TestCaseWriting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🔍 功能测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/FunctionalTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/FunctionalTesting/FunctionalTestingPrompt' },
                        { text: '精简版', link: '/FunctionalTesting/FunctionalTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Full' },
                        { text: '精简版', link: '/FunctionalTesting/ROSES-version/FunctionalTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Full' },
                        { text: '精简版', link: '/FunctionalTesting/LangGPT-version/FunctionalTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Full' },
                        { text: '精简版', link: '/FunctionalTesting/ICIO-version/FunctionalTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Full' },
                        { text: '精简版', link: '/FunctionalTesting/CRISPE-version/FunctionalTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/FunctionalTesting/RISE-version/FunctionalTesting-RISE-Full' },
                        { text: '精简版', link: '/FunctionalTesting/RISE-version/FunctionalTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '⚡ 性能测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/PerformanceTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/PerformanceTesting/PerformanceTestingPrompt' },
                        { text: '精简版', link: '/PerformanceTesting/PerformanceTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Full' },
                        { text: '精简版', link: '/PerformanceTesting/ROSES-version/PerformanceTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Full' },
                        { text: '精简版', link: '/PerformanceTesting/LangGPT-version/PerformanceTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Full' },
                        { text: '精简版', link: '/PerformanceTesting/ICIO-version/PerformanceTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Full' },
                        { text: '精简版', link: '/PerformanceTesting/CRISPE-version/PerformanceTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/PerformanceTesting/RISE-version/PerformanceTesting-RISE-Full' },
                        { text: '精简版', link: '/PerformanceTesting/RISE-version/PerformanceTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🤖 自动化测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/AutomationTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AutomationTesting/AutomationTestingPrompt' },
                        { text: '精简版', link: '/AutomationTesting/AutomationTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AutomationTesting/ROSES-version/AutomationTesting-ROSES-Full' },
                        { text: '精简版', link: '/AutomationTesting/ROSES-version/AutomationTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Full' },
                        { text: '精简版', link: '/AutomationTesting/LangGPT-version/AutomationTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AutomationTesting/ICIO-version/AutomationTesting-ICIO-Full' },
                        { text: '精简版', link: '/AutomationTesting/ICIO-version/AutomationTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Full' },
                        { text: '精简版', link: '/AutomationTesting/CRISPE-version/AutomationTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AutomationTesting/RISE-version/AutomationTesting-RISE-Full' },
                        { text: '精简版', link: '/AutomationTesting/RISE-version/AutomationTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '📱 移动端测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/MobileTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/MobileTesting/MobileTestingPrompt' },
                        { text: '精简版', link: '/MobileTesting/MobileTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/MobileTesting/ROSES-version/MobileTesting-ROSES-Full' },
                        { text: '精简版', link: '/MobileTesting/ROSES-version/MobileTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/MobileTesting/LangGPT-version/MobileTesting-LangGPT-Full' },
                        { text: '精简版', link: '/MobileTesting/LangGPT-version/MobileTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/MobileTesting/ICIO-version/MobileTesting-ICIO-Full' },
                        { text: '精简版', link: '/MobileTesting/ICIO-version/MobileTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/MobileTesting/CRISPE-version/MobileTesting-CRISPE-Full' },
                        { text: '精简版', link: '/MobileTesting/CRISPE-version/MobileTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/MobileTesting/RISE-version/MobileTesting-RISE-Full' },
                        { text: '精简版', link: '/MobileTesting/RISE-version/MobileTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🐛 缺陷上报',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/BugReporting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/BugReporting/BugReportingPrompt' },
                        { text: '精简版', link: '/BugReporting/BugReportingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/BugReporting/ROSES-version/BugReporting-ROSES-Full' },
                        { text: '精简版', link: '/BugReporting/ROSES-version/BugReporting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/BugReporting/LangGPT-version/BugReporting-LangGPT-Full' },
                        { text: '精简版', link: '/BugReporting/LangGPT-version/BugReporting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/BugReporting/ICIO-version/BugReporting-ICIO-Full' },
                        { text: '精简版', link: '/BugReporting/ICIO-version/BugReporting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/BugReporting/CRISPE-version/BugReporting-CRISPE-Full' },
                        { text: '精简版', link: '/BugReporting/CRISPE-version/BugReporting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/BugReporting/RISE-version/BugReporting-RISE-Full' },
                        { text: '精简版', link: '/BugReporting/RISE-version/BugReporting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '📊 测试报告',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/TestReporting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestReporting/TestReportingPrompt' },
                        { text: '精简版', link: '/TestReporting/TestReportingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestReporting/ROSES-version/TestReporting-ROSES-Full' },
                        { text: '精简版', link: '/TestReporting/ROSES-version/TestReporting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestReporting/LangGPT-version/TestReporting-LangGPT-Full' },
                        { text: '精简版', link: '/TestReporting/LangGPT-version/TestReporting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestReporting/ICIO-version/TestReporting-ICIO-Full' },
                        { text: '精简版', link: '/TestReporting/ICIO-version/TestReporting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestReporting/CRISPE-version/TestReporting-CRISPE-Full' },
                        { text: '精简版', link: '/TestReporting/CRISPE-version/TestReporting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestReporting/RISE-version/TestReporting-RISE-Full' },
                        { text: '精简版', link: '/TestReporting/RISE-version/TestReporting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🎯 测试策略',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/TestStrategy/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestStrategy/TestStrategyPrompt' },
                        { text: '精简版', link: '/TestStrategy/TestStrategyPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestStrategy/ROSES-version/TestStrategy-ROSES-Full' },
                        { text: '精简版', link: '/TestStrategy/ROSES-version/TestStrategy-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestStrategy/LangGPT-version/TestStrategy-LangGPT-Full' },
                        { text: '精简版', link: '/TestStrategy/LangGPT-version/TestStrategy-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestStrategy/ICIO-version/TestStrategy-ICIO-Full' },
                        { text: '精简版', link: '/TestStrategy/ICIO-version/TestStrategy-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestStrategy/CRISPE-version/TestStrategy-CRISPE-Full' },
                        { text: '精简版', link: '/TestStrategy/CRISPE-version/TestStrategy-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestStrategy/RISE-version/TestStrategy-RISE-Full' },
                        { text: '精简版', link: '/TestStrategy/RISE-version/TestStrategy-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🤖 AI辅助测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/AIAssistedTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AIAssistedTesting/AIAssistedTestingPrompt' },
                        { text: '精简版', link: '/AIAssistedTesting/AIAssistedTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Full' },
                        { text: '精简版', link: '/AIAssistedTesting/ROSES-version/AIAssistedTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Full' },
                        { text: '精简版', link: '/AIAssistedTesting/LangGPT-version/AIAssistedTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Full' },
                        { text: '精简版', link: '/AIAssistedTesting/ICIO-version/AIAssistedTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Full' },
                        { text: '精简版', link: '/AIAssistedTesting/CRISPE-version/AIAssistedTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Full' },
                        { text: '精简版', link: '/AIAssistedTesting/RISE-version/AIAssistedTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '📋 手动测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/ManualTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/ManualTesting/ManualTestingPrompt' },
                        { text: '精简版', link: '/ManualTesting/ManualTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/ManualTesting/ROSES-version/ManualTesting-ROSES-Full' },
                        { text: '精简版', link: '/ManualTesting/ROSES-version/ManualTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/ManualTesting/LangGPT-version/ManualTesting-LangGPT-Full' },
                        { text: '精简版', link: '/ManualTesting/LangGPT-version/ManualTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/ManualTesting/ICIO-version/ManualTesting-ICIO-Full' },
                        { text: '精简版', link: '/ManualTesting/ICIO-version/ManualTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/ManualTesting/CRISPE-version/ManualTesting-CRISPE-Full' },
                        { text: '精简版', link: '/ManualTesting/CRISPE-version/ManualTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/ManualTesting/RISE-version/ManualTesting-RISE-Full' },
                        { text: '精简版', link: '/ManualTesting/RISE-version/ManualTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🔒 安全测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/SecurityTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/SecurityTesting/SecurityTestingPrompt' },
                        { text: '精简版', link: '/SecurityTesting/SecurityTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/SecurityTesting/ROSES-version/SecurityTesting-ROSES-Full' },
                        { text: '精简版', link: '/SecurityTesting/ROSES-version/SecurityTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Full' },
                        { text: '精简版', link: '/SecurityTesting/LangGPT-version/SecurityTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/SecurityTesting/ICIO-version/SecurityTesting-ICIO-Full' },
                        { text: '精简版', link: '/SecurityTesting/ICIO-version/SecurityTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Full' },
                        { text: '精简版', link: '/SecurityTesting/CRISPE-version/SecurityTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/SecurityTesting/RISE-version/SecurityTesting-RISE-Full' },
                        { text: '精简版', link: '/SecurityTesting/RISE-version/SecurityTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🔌 API测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/APITesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/APITesting/APITestingPrompt' },
                        { text: '精简版', link: '/APITesting/APITestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/APITesting/ROSES-version/APITesting-ROSES-Full' },
                        { text: '精简版', link: '/APITesting/ROSES-version/APITesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/APITesting/LangGPT-version/APITesting-LangGPT-Full' },
                        { text: '精简版', link: '/APITesting/LangGPT-version/APITesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/APITesting/ICIO-version/APITesting-ICIO-Full' },
                        { text: '精简版', link: '/APITesting/ICIO-version/APITesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/APITesting/CRISPE-version/APITesting-CRISPE-Full' },
                        { text: '精简版', link: '/APITesting/CRISPE-version/APITesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/APITesting/RISE-version/APITesting-RISE-Full' },
                        { text: '精简版', link: '/APITesting/RISE-version/APITesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '♿ 可访问性测试',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/AccessibilityTesting/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AccessibilityTesting/AccessibilityTestingPrompt' },
                        { text: '精简版', link: '/AccessibilityTesting/AccessibilityTestingPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Full' },
                        { text: '精简版', link: '/AccessibilityTesting/ROSES-version/AccessibilityTesting-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Full' },
                        { text: '精简版', link: '/AccessibilityTesting/LangGPT-version/AccessibilityTesting-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Full' },
                        { text: '精简版', link: '/AccessibilityTesting/ICIO-version/AccessibilityTesting-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Full' },
                        { text: '精简版', link: '/AccessibilityTesting/CRISPE-version/AccessibilityTesting-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Full' },
                        { text: '精简版', link: '/AccessibilityTesting/RISE-version/AccessibilityTesting-RISE-Lite' }
                      ]
                    }
                  ]
                },
                {
                  text: '🔍 测试用例评审',
                  collapsed: true,
                  items: [
                    { text: '说明文档', link: '/TestCaseReviewer/' },
                    { 
                      text: '标准版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseReviewer/TestCaseReviewerPrompt' },
                        { text: '精简版', link: '/TestCaseReviewer/TestCaseReviewerPrompt_Lite' }
                      ]
                    },
                    { 
                      text: 'ROSES 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Full' },
                        { text: '精简版', link: '/TestCaseReviewer/ROSES-version/TestCaseReviewer-ROSES-Lite' }
                      ]
                    },
                    { 
                      text: 'LangGPT 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Full' },
                        { text: '精简版', link: '/TestCaseReviewer/LangGPT-version/TestCaseReviewer-LangGPT-Lite' }
                      ]
                    },
                    { 
                      text: 'ICIO 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Full' },
                        { text: '精简版', link: '/TestCaseReviewer/ICIO-version/TestCaseReviewer-ICIO-Lite' }
                      ]
                    },
                    { 
                      text: 'CRISPE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Full' },
                        { text: '精简版', link: '/TestCaseReviewer/CRISPE-version/TestCaseReviewer-CRISPE-Lite' }
                      ]
                    },
                    { 
                      text: 'RISE 框架版本',
                      collapsed: true,
                      items: [
                        { text: '完整版', link: '/TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Full' },
                        { text: '精简版', link: '/TestCaseReviewer/RISE-version/TestCaseReviewer-RISE-Lite' }
                      ]
                    }
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
            // 搜索配置
            _render(src, env, md) {
              const html = md.render(src, env)
              if (env.frontmatter?.search === false) return ''
              return html
            },
            // 中文搜索配置
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
                      navigateText: '切换',
                      closeText: '关闭'
                    },
                    searchBox: {
                      resetButtonTitle: '清除查询',
                      resetButtonAriaLabel: '清除查询',
                      cancelButtonText: '取消',
                      cancelButtonAriaLabel: '取消搜索'
                    }
                  }
                },
                // 搜索索引配置
                miniSearch: {
                  options: {
                    fields: ['title', 'content', 'headings'],
                    storeFields: ['title', 'content', 'headings']
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
          { text: '💝 Sponsor', link: '/en/sponsor' },
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
            // 搜索配置
            _render(src, env, md) {
              const html = md.render(src, env)
              if (env.frontmatter?.search === false) return ''
              return html
            },
            // 英文搜索配置
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
                      navigateText: 'Navigate',
                      closeText: 'Close'
                    },
                    searchBox: {
                      resetButtonTitle: 'Clear query',
                      resetButtonAriaLabel: 'Clear query',
                      cancelButtonText: 'Cancel',
                      cancelButtonAriaLabel: 'Cancel search'
                    }
                  }
                },
                // 搜索索引配置
                miniSearch: {
                  options: {
                    fields: ['title', 'content', 'headings'],
                    storeFields: ['title', 'content', 'headings']
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
  lastUpdated: {
    text: '最后更新',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },
  
  // 清理 URL
  cleanUrls: true,
  
  // Sitemap 配置
  sitemap: {
    hostname: 'https://qaprompt.inaodeng.com',
    // 确保 sitemap 包含 lastmod（需要 lastUpdated 启用）
    // lastmod 会自动从 Git 提交时间获取
    transformItems: (items) => {
      // 可以在这里自定义 sitemap 条目
      return items
    }
  },
  
  // 构建配置 - 确保资源路径正确
  buildEnd: async ({ outDir }) => {
    // 构建完成后的钩子，可以在这里进行额外的处理
    // 例如：检查资源文件、验证路径等
  }
})
