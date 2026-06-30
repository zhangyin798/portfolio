import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Layers, Repeat, X, Maximize2 } from 'lucide-react'
import { caseStudies, focusAreas } from '../data/projects'
import type { CaseStudy } from '../data/projects'

const gridItem = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const emojiMap: Record<string, string> = {
  '个人 SaaS 系统': '⚡',
  '原力健身': '🏃',
  'K12 AI 解题': '📚',
}

/* ──────────── Lightbox ──────────── */
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-80 flex items-center justify-center p-8 max-md:p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-radius-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <X size={18} className="text-white" />
      </button>
      <img
        src={src}
        alt=""
        className="max-w-full max-h-full object-contain rounded-radius-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )
}

/* ──────────── Detail Modal ──────────── */
function DetailModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-70 flex items-center justify-center p-6 max-md:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-radius-lg shadow-shadow-lg max-w-[720px] w-full max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-radius-full bg-surface hover:bg-divider transition-colors z-10"
        >
          <X size={16} className="text-text-muted" />
        </button>

        {/* hero image */}
        <div className="aspect-[21/9] bg-gradient-to-br from-accent-light/60 via-accent-light/30 to-surface flex items-center justify-center rounded-t-radius-lg overflow-hidden">
          {study.image ? (
            <img src={study.image} alt={study.title} className="w-full h-full object-contain p-4" />
          ) : (
            <span className="text-7xl">{emojiMap[study.title.split('·')[0].trim()] || '✨'}</span>
          )}
        </div>

        <div className="p-8 max-md:p-6">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-text-muted">{study.date}</span>
              <span className="text-xs text-text-muted">·</span>
              <span className="text-xs text-text-muted">{study.subtitle}</span>
            </div>
            <h2 className="text-xl font-semibold text-text-primary">{study.title}</h2>
            <p className="text-base text-text-secondary leading-relaxed mt-3">{study.overview}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 mb-6">
            {study.sections.map((sec) => (
              <div key={sec.label} className="bg-surface rounded-radius-md p-4">
                <span className="text-xs text-text-muted font-semibold uppercase tracking-wide">{sec.label}</span>
                <p className="text-sm text-text-secondary leading-relaxed mt-2">{sec.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-tag-bg text-text-secondary rounded-radius-full">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ──────────── Page ──────────── */
export default function Learning() {
  const [selected, setSelected] = useState<CaseStudy | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex flex-col"
    >
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-3">学习与探索</h2>
        <p className="text-base text-text-secondary leading-relaxed max-w-[520px]">
          用 Vibe Coding 做产品，在建造中理解模型的能力边界。
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 mb-6">
        {caseStudies.map((study, i) => {
          const emoji = emojiMap[study.title.split('·')[0].trim()] || '✨'
          return (
            <motion.div
              key={study.title}
              custom={i}
              variants={gridItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="group bg-white rounded-radius-lg border border-border/40 overflow-hidden hover:-translate-y-1.5 hover:shadow-shadow-md transition-all duration-300"
            >
              {/* image — click → lightbox */}
              <div
                className="aspect-[16/9] bg-gradient-to-br from-accent-light/60 via-accent-light/30 to-surface flex items-center justify-center relative overflow-hidden"
                onClick={() => study.image && setLightbox(study.image)}
              >
                {study.image ? (
                  <>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] cursor-zoom-in"
                    />
                    <div className="absolute bottom-3 right-3 w-7 h-7 flex items-center justify-center rounded-radius-md bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={13} className="text-text-secondary" />
                    </div>
                  </>
                ) : (
                  <span className="text-6xl transition-transform duration-500 group-hover:scale-110">{emoji}</span>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
              </div>

              {/* text — click → detail modal */}
              <div
                onClick={() => setSelected(study)}
                className="p-5 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">{study.title}</h3>
                    <p className="text-xs text-text-muted mt-1">{study.subtitle}</p>
                  </div>
                  <span className="text-xs text-text-muted shrink-0 pt-1">{study.date}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">{study.overview}</p>
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-tag-bg text-text-secondary rounded-radius-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Principles */}
      <div className="mt-14 pt-10 border-t border-divider">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-6">我的产品原则</p>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <PrincipleCard icon={Lightbulb} title="先验证再建造" desc="动手写代码之前，先用原型和对话确认需求真的有价值。" />
          <PrincipleCard icon={Layers} title="简单优于复杂" desc="能用一个 Agent 解决的不用两个，能用一个 Tool 的不加新模块。" />
          <PrincipleCard icon={Repeat} title="量化迭代" desc="每次优化都有基线、有指标、有对比，用数据说话而非感觉。" />
        </div>
      </div>

      {/* Focus */}
      <div className="mt-12 mb-6">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-4">正在关注</p>
        <div className="flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <span key={area} className="text-sm text-text-secondary px-4 py-2.5 bg-white border border-border/40 rounded-radius-md hover:border-accent/20 hover:bg-accent-light/30 transition-all duration-200">{area}</span>
          ))}
        </div>
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {selected && (
          <DetailModal study={selected} onClose={() => setSelected(null)} />
        )}
        {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </motion.div>
  )
}

function PrincipleCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; desc: string }) {
  return (
    <div className="bg-white border border-border/40 rounded-radius-lg p-5 hover:-translate-y-0.5 hover:shadow-shadow-md transition-all duration-300">
      <div className="w-9 h-9 rounded-radius-md bg-accent-light flex items-center justify-center mb-4">
        <Icon size={18} className="text-accent" />
      </div>
      <h4 className="text-base font-semibold text-text-primary mb-2">{title}</h4>
      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}
