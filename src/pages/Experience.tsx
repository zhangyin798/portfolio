import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Timeline from '../components/Timeline'
import { workExperiences } from '../data/experience'
import type { WorkExperience } from '../data/experience'

function DetailModal({ exp, onClose }: { exp: WorkExperience; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-70 flex items-center justify-center p-6 max-md:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#FAFAF8]/85 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-radius-lg shadow-shadow-lg max-w-[700px] w-full max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-radius-full bg-surface hover:bg-divider transition-colors z-10"
        >
          <X size={16} className="text-text-muted" />
        </button>

        <div className="p-10 max-md:p-6">
          {/* header */}
          <div className="mb-8">
            <span className="text-sm text-text-muted">{exp.timePeriod}</span>
            <h2 className="text-2xl font-semibold text-text-primary mt-2">
              {exp.company}
            </h2>
            <p className="text-base text-text-secondary mt-1">{exp.position}</p>
          </div>

          {/* section: core responsibilities */}
          <div className="mb-5">
            <p className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-radius-full bg-accent" />
              核心职责
            </p>
            <div className="bg-surface rounded-radius-lg p-6 max-md:p-5">
              <ul className="space-y-3">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">·</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* section: key achievements */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-radius-full bg-success" />
              核心成果
            </p>
            <div className="bg-surface rounded-radius-lg p-6 max-md:p-5">
              <ul className="space-y-3">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                    <span className="text-success mt-0.5 shrink-0">·</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 bg-tag-bg text-text-secondary rounded-radius-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const [selected, setSelected] = useState<WorkExperience | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex flex-col"
    >
      <h2 className="text-xl font-semibold text-text-primary mb-6">工作经历</h2>
      <Timeline items={workExperiences} onItemClick={setSelected} />

      <AnimatePresence>
        {selected && <DetailModal exp={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </motion.div>
  )
}
