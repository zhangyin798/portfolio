export interface CaseStudy {
  title: string
  subtitle: string
  image: string
  // images field removed — using single combined image instead
  overview: string
  sections: { label: string; text: string }[]
  tags: string[]
  date?: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: '个人 SaaS 系统',
    subtitle: '个人 SaaS 管理系统 · 产品设计与全栈开发',
    image: '/personal-flow.png',
    overview: '一个本地优先的个人效率中台。初衷是把散落在各处的工具和能力收拢到一个统一空间里——管理 AI 学习的 Prompt、沉淀公司文档、编排重复性工作流程，让"个人工作台"这件事不再依赖 N 个割裂的 SaaS。',
    sections: [
      { label: '定位', text: '不是又一个笔记软件或任务管理工具。Personal Flow 的定位是"个人 SaaS 管理中枢"——你把不同场景的能力（Excel 处理、Prompt 模板、文档归档、凭证管理）作为模块插进去，按工作/个人双空间隔离，未来可嵌入第三方软件的工作流。' },
      { label: '场景', text: '三个核心场景驱动设计：① AI 学习——分类管理 Prompt 模板，版本化迭代，一键调起不同模型对比输出；② 公司文档——本地加密存储敏感文件，按项目维度组织而非文件夹维度；③ 工作流嵌入——预留插件机制，未来可接入自动化管线（如定时处理 Excel 报表、批量生成周报）。' },
      { label: '设计理念', text: '本地优先，数据主权归用户。所有敏感信息 AES-256 加密，密钥由操作系统级钥匙串管理，不经过任何云端。双空间一键切换（Ctrl+Tab），工作态和个人态互不干扰但能力共享。macOS 原生设计语言，做到"用起来像系统自带工具"。' },
      { label: '当前状态', text: 'MVP 阶段已完成核心框架：双空间架构、加密体系、Excel 解析引擎、Prompt 模板系统。后续迭代方向为插件体系和工作流自动化引擎，目标是让非技术用户也能通过配置（而非写代码）串联起自己的效率管线。' },
    ],
    tags: ['产品设计', '效率工具', '本地优先', '全栈开发'],
    date: '2026.06',
  },
  {
    title: '原力健身 · 小铁 AI 教练',
    subtitle: '小程序 · 产品负责人（0到1）',
    image: '/fitness-combined.jpg',
    overview: '为请不起私教的普通人打造的零社交压力 AI 健身教练。单 Agent + 6 Tool 的 AI 原生架构，基于大模型 Function Calling 实现智能交互。',
    sections: [
      { label: '架构设计', text: '以 LLM 为核心决策层，设计 Tool 注册表模式（新功能加文件不改代码），实现器械知识库、训练计划、动作库与大模型协同。五轮 System Prompt 迭代 + 20 条自动化用例，AI 准确率从 65% → 91%。' },
      { label: '知识库', text: '三层知识库体系：42 个器械知识库（6 大分类）、10 个训练计划模板（3 档经验 × 男女差异化）、67 个动作库（含子区域覆盖算法），JSON 结构化存储 + 模糊匹配。' },
      { label: '智能推荐', text: '双模式计划生成引擎 —— 模板匹配满足标准需求，动态动作池模式满足个性化约束（器械限制、伤病、时间碎片化等），实现"用户说什么就给什么"的灵活规划。' },
      { label: '业务成果', text: '上线后累计 1000+ 用户，82% 首次对话即用核心功能。AI 教练与线下健身房联动，新学员报名私教人数环比增长 28%。' },
    ],
    tags: ['AI Agent', 'Function Calling', '知识库', '小程序'],
    date: '2026.06',
  },
  {
    title: 'K12 AI 解题',
    subtitle: 'Web · 架构设计与产品规划',
    image: '/k12-cover.svg',
    overview: '面向 K12 学生的 AI 学科问答系统。四阶段 RAG 工作流 + LangGraph 编排，服务 3.2 万学生，准确率从 72% → 91.2%。',
    sections: [
      { label: '场景选择', text: '对教育领域 10 个潜在 AI 场景进行多维度评估（用户痛点、技术可行性、数据可获取性、业务价值、战略匹配度），最终选择学科问答作为优先落地场景。' },
      { label: 'RAG 架构', text: '意图识别 → 自适应检索 → LLM 生成 → 质量评估四阶段工作流，基于 LangGraph 有状态图编排。两层渐进式意图分类使延迟降低 85%，Corrective RAG 将有效率从 82% 提升至 94.6%。' },
      { label: '检索策略', text: '8000+ 道题目知识库，覆盖 5 大学科 12 个年级。三级自适应检索（简单 top_k=3 / 中等 5 / 复杂 8），简单问题响应提速 40%，复杂问题准确率提升 18%。' },
      { label: '业务成果', text: '服务 3.2 万学生，82% 用户查看完整解题步骤。作为公司教育 AI 核心技术底座，支撑 3 个省级客户合作洽谈，预估新增合同额 600 万+。' },
    ],
    tags: ['RAG', 'LangGraph', '知识检索', '教育 AI'],
    date: '2025.12',
  },
]

export const focusAreas = [
  'LLM 在垂直场景的落地',
  'AI 产品评估框架',
  '多模态应用的机会',
]
