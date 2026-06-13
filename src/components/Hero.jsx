import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Code2, Terminal } from 'lucide-react'
import { data } from '../data'
const floatVariants = {
  animate: { y: [0, -12, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
}

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden grid-bg">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-px bg-teal-400" />
              <span className="font-mono text-teal-400 text-sm tracking-widest">HELLO WORLD</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl lg:text-6xl font-bold leading-tight mb-3"
            >
              I'm{' '}
              <span className="text-gradient">{data.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-3 mb-6"
            >
              <Terminal size={18} className="text-violet-400" />
              <span className="font-mono text-violet-300 text-lg">{data.role}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {data.tagline}. Crafting seamless UX from pixel to API. Currently building fintech products at{' '}
              <span className="text-teal-400 font-medium">Airpay</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20,184,166,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                <Code2 size={16} /> View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl glass border border-violet-500/30 text-violet-300 font-medium text-sm hover:bg-violet-500/10 transition-colors"
              >
                Get in touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-5"
            >
              {[
                { icon: Github, href: data.github, label: 'GitHub' },
                { icon: Linkedin, href: data.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${data.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -3, color: '#2dd4bf' }}
                  className="text-slate-500 hover:text-teal-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative"
            >
              {/* Avatar ring */}
              <div className="w-80 h-80 rounded-full p-1 bg-gradient-to-r from-teal-500 via-violet-500 to-pink-500">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900">
                  <img
                    src='/profile.PNG'
                    alt="Krishna Priya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-xs font-mono text-teal-400 border border-teal-500/20"
              >
                React.js ⚛️
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 text-xs font-mono text-violet-400 border border-violet-500/20"
              >
                Node.js 🟢
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-12 glass rounded-2xl px-3 py-2 text-xs font-mono text-pink-400 border border-pink-500/20"
              >
                Python 🐍
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#experience"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-600 hover:text-teal-400 transition-colors"
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
