import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.span
          className="font-mono text-teal-400 font-medium tracking-wider text-sm"
          whileHover={{ scale: 1.05 }}
        >
          &lt;Krishnapriya /&gt;
        </motion.span>
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-teal-400 ${
                  active === link ? 'text-teal-400' : 'text-slate-400'
                }`}
              >
                <span className="text-teal-500 font-mono mr-1 text-xs">0{i + 1}.</span>{link}
              </a>
            </motion.li>
          ))}
        </ul>
       
      </div>
    </motion.nav>
  )
}
