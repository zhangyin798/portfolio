import { toolStack } from '../data/skills'

export default function SkillSection() {
  return (
    <div className="bg-white rounded-radius-lg border border-border/40 px-6 py-6 max-md:px-4 max-md:py-5">
      <div className="flex flex-wrap gap-2">
        {toolStack.map((tool) => (
          <span
            key={tool}
            className="text-sm text-text-secondary bg-surface px-3 py-1 rounded-radius-md hover:bg-accent-light/50 hover:text-accent transition-colors duration-150"
          >
            {tool}
          </span>
        ))}
      </div>
      <p className="text-sm text-text-muted leading-relaxed mt-5">
        擅长 RAG 架构设计、Agent 工具链搭建。做过健身教练和 K12 解题两个 AI 产品，都是从 0 到 1。
      </p>
    </div>
  )
}
