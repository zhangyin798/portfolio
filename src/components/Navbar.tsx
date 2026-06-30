import { useState } from 'react'
import { NavLink } from 'react-router'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const JikeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5h-9v-1h9v1zm0-3h-9v-1h9v1zm0-3h-9v-1h9v1zm0-3h-9v-1h9v1z"/>
  </svg>
)

const tabs = [
  { path: '/', label: '关于我' },
  { path: '/experience', label: '工作经历' },
  { path: '/learning', label: '学习与探索' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 backdrop-blur-lg" style={{ background: 'rgba(250,250,248,0.82)' }}>
        <div className="max-w-[880px] mx-auto h-full px-6 max-md:px-4 flex items-center justify-between">
          {/* Logo */}
          <span className="text-lg font-bold text-text-primary">张寅</span>

          {/* Desktop tabs */}
          <div className="hidden md:flex items-center gap-6">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `relative py-1 text-base transition-colors duration-150 ${
                    isActive
                      ? 'text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-accent"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Social icons (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-text-muted hover:text-text-secondary transition-colors duration-150">
              <GithubIcon size={16} />
            </a>
            <a href="#" className="text-text-muted hover:text-text-secondary transition-colors duration-150">
              <JikeIcon size={16} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-surface-card flex flex-col items-center pt-20">
          <button
            className="absolute top-4 right-4 text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-text-primary font-medium border-l-[3px] border-accent pl-3'
                      : 'text-text-secondary'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
