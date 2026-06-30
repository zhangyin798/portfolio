import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, LoaderCircle, Check } from 'lucide-react'
import SkillSection from '../components/SkillCard'

const tags = ['AI 产品经理', 'Vibe Coding', '0-1 产品搭建']

const isZh = navigator.language.startsWith('zh')

function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-24 h-24 rounded-radius-full border-2 border-border overflow-hidden max-md:w-20 max-md:h-20"
    >
      <img src="/avatar.jpg" alt="张寅" className="w-full h-full object-cover" />
    </motion.div>
  )
}

type DownloadState = 'idle' | 'loading' | 'done'

function DownloadButton() {
  const [state, setState] = useState<DownloadState>('idle')

  const handleDownload = async () => {
    setState('loading')
    try {
      const resp = await fetch('/resume.pdf')
      const blob = await resp.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'resume.pdf'
      a.click()
      URL.revokeObjectURL(url)
      setState('done')
      setTimeout(() => setState('idle'), 800)
    } catch {
      setState('idle')
    }
  }

  const Icon = state === 'loading' ? LoaderCircle : state === 'done' ? Check : Download
  const label = isZh ? '下载简历' : 'Download Resume'
  const loadingLabel = isZh ? '下载中...' : 'Downloading...'

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={handleDownload}
      className="w-[180px] h-11 bg-accent hover:bg-accent-hover text-white text-base font-medium rounded-radius-md shadow-shadow-sm hover:shadow-shadow-md transition-all duration-200 flex items-center justify-center gap-2 max-md:w-full"
    >
      <Icon size={16} className={state === 'loading' ? 'animate-spin' : ''} />
      {state === 'loading' ? loadingLabel : label}
    </motion.button>
  )
}

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className="flex flex-col items-center"
    >
      {/* Hero — generous breathing room */}
      <div className="flex flex-col items-center pt-16 pb-16 max-md:pt-10 max-md:pb-8">
        <Avatar />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45, ease: 'easeOut' as const }}
          className="text-[34px] leading-[44px] font-semibold text-text-primary text-center max-w-[560px] mt-8 tracking-tight max-md:text-[26px] max-md:leading-[36px]"
        >
          Hi，我是张寅
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45, ease: 'easeOut' as const }}
          className="flex items-center flex-wrap justify-center gap-2.5 mt-7"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="h-7 px-3.5 bg-tag-bg text-sm text-text-secondary rounded-radius-full hover:bg-[#E5E3DD] transition-colors duration-150 flex items-center"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.45, ease: 'easeOut' as const }}
          className="mt-9"
        >
          <DownloadButton />
        </motion.div>
      </div>

      {/* Natural transition — no harsh divider */}
      <div className="w-full pt-4 pb-3">
        <p className="text-center text-sm text-text-muted">
          每天在用的工具 &amp; 思维方式
        </p>
      </div>

      {/* Skills — one unified section */}
      <div className="w-full pb-8">
        <SkillSection />
      </div>
    </motion.div>
  )
}
