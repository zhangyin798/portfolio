export interface WorkExperience {
  timePeriod: string
  company: string
  position: string
  description: string
  responsibilities: string[]
  achievements: string[]
  tags: string[]
}

export const workExperiences: WorkExperience[] = [
  {
    timePeriod: '2022.08 - 2025.11',
    company: '深圳市紫金支点股份有限公司',
    position: 'AI 产品经理',
    description: '负责教育 AI 产品线规划与落地。主导 K12 解题项目 RAG 架构设计，服务 3.2 万学生用户，回答准确率从 72% 优化至 91.2%。',
    responsibilities: [
      '对教育领域 10 个潜在 AI 场景进行多维度评估（用户痛点、技术可行性、数据可获取性、业务价值、战略匹配），选择学科问答作为优先落地场景',
      '设计意图识别 → 自适应检索 → LLM 生成 → 质量评估四阶段 RAG 工作流，基于 LangGraph 实现端到端编排',
      '规划 5 大学科 12 个年级的知识体系，精选 8000+ 道题目构建专业知识库，设计三级自适应检索策略',
      '集成 RAGAS 离线评估框架，建立 Faithfulness / Answer Relevancy / Context Precision / Context Recall 四维自动化评估体系',
      '构建"题型-年级-错误类型"三维 Badcase 分类体系，驱动产品持续优化迭代',
    ],
    achievements: [
      '系统回答准确率从 72% 优化至 91.2%，答案相关性达 87.5%',
      '服务 3.2 万学生用户，82% 用户会查看完整解题步骤，多轮对话率 45%',
      '两层渐进式意图分类使延迟降低 85%，Corrective RAG 将有效率从 82% 提升至 94.6%',
      '该方案作为公司教育 AI 核心技术底座，支撑 3 个省级客户合作洽谈，预估新增合同额 600 万+',
    ],
    tags: ['RAG', '教育 AI', '产品规划'],
  },
  {
    timePeriod: '2026.03 - 2026.06',
    company: '个人项目',
    position: '全栈产品负责人',
    description: '从 0 到 1 主导 AI 健身教练小程序的产品规划与落地。设计单 Agent + 6 Tool 的 AI 原生架构，五轮迭代将准确率从 65% 提升至 91%。',
    responsibilities: [
      '从 0 到 1 主导产品规划、架构设计与落地交付，定位为"为请不起私教的普通人提供零社交压力的 AI 健身教练"',
      '独立完成 AI Agent 架构设计，以 LLM 为核心决策层，设计 Tool 注册表模式（新功能加文件不改代码），实现器械知识库、训练计划、动作库与大模型协同',
      '构建三层知识库体系：42 个器械知识库（6 大分类）、10 个训练计划模板（3 档经验 × 男女差异化）、67 个动作库（含子区域覆盖算法）',
      '设计双模式计划生成引擎 —— 模板匹配满足标准需求，动态动作池模式满足个性化约束（器械限制、伤病、时间碎片化等）',
      '通过 System Prompt 五轮迭代 + 20 条自动化测试用例，建立数据驱动的 AI 质量优化闭环',
    ],
    achievements: [
      'AI 回复准确率从 V1 基线 65% 持续优化至 V5 的 91%，覆盖四大核心场景',
      '训练计划个性化匹配率（含器械/伤病/时间等约束）达 85% 以上',
      '上线后累计服务 1000+ 用户，82% 首次对话即使用核心功能，多轮对话率 40%，用户满意度 88%+',
      'AI 与线下健身房教练联动，新学员报名私教人数环比增长 28%，验证了 AI 教练作为获客引流工具的商业价值',
      '输出完整 AI Agent 架构设计文档，建立可复用的 System Prompt 迭代方法论，后续新功能开发周期从 3 天缩短至 1 天',
    ],
    tags: ['AI Agent', '0-1 产品', '小程序'],
  },
]
