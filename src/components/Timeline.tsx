import { motion } from 'framer-motion'
import type { WorkExperience } from '../data/experience'
import Tag from './Tag'

function TimelineItem({ exp, index, onClick }: { exp: WorkExperience; index: number; onClick: () => void }) {
  return (
    <div className="relative pl-5 pb-6 last:pb-0">
      {/* vertical line */}
      <div className="absolute left-[3px] top-0 h-full w-[2px] bg-divider" />

      {/* dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeOut' }}
        className="absolute left-0 top-[6px] w-2 h-2 rounded-radius-full bg-accent border-2 border-surface z-10"
      />

      {/* content card — clickable */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: index * 0.1 + 0.1, duration: 0.35, ease: 'easeOut' }}
        onClick={onClick}
        className="hover:-translate-y-0.5 hover:shadow-shadow-md transition-all duration-200 rounded-radius-md p-4 -ml-1 cursor-pointer bg-white border border-border/40 hover:border-accent/20"
      >
        <span className="text-sm text-text-muted">{exp.timePeriod}</span>
        <h3 className="text-lg font-medium text-text-primary mt-1">
          {exp.company} · {exp.position}
        </h3>
        <p className="text-base text-text-secondary leading-relaxed mt-1">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {exp.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Timeline({ items, onItemClick }: { items: WorkExperience[]; onItemClick: (item: WorkExperience) => void }) {
  return (
    <div>
      {items.map((exp, i) => (
        <TimelineItem key={i} exp={exp} index={i} onClick={() => onItemClick(exp)} />
      ))}
    </div>
  )
}
