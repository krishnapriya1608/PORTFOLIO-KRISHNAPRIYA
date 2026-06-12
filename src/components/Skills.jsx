import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { data } from '../data'

const categoryColors = {
  "Languages": "from-teal-500 to-teal-400",
  "Frontend": "from-violet-500 to-violet-400",
  "Backend": "from-pink-500 to-pink-400",
  "Database": "from-amber-500 to-amber-400",
  "Tools": "from-blue-500 to-blue-400",
  "Concepts": "from-emerald-500 to-emerald-400",
}

const categoryBg = {
  "Languages": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Frontend": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Backend": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Database": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Tools": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Concepts": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
}

function SkillGroup({ category, skills, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-2xl p-5"
    >
      <div className={`inline-flex items-center gap-2 text-xs font-mono font-medium px-3 py-1 rounded-full border mb-4 ${categoryBg[category]}`}>
        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${categoryColors[category]}`} />
        {category}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
            whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
            className="text-sm text-slate-300 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50 hover:border-slate-500/50 cursor-default transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <p className="font-mono text-teal-400 text-sm tracking-widest mb-3">04. WHAT I WORK WITH</p>
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-violet-500 mx-auto mt-4" />
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(data.skills).map(([cat, skills], i) => (
          <SkillGroup key={cat} category={cat} skills={skills} index={i} />
        ))}
      </div>
    </section>
  )
}
