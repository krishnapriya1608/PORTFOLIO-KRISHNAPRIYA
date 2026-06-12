import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { data } from '../data'
import { Briefcase, CheckCircle2 } from 'lucide-react'

function ExpCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-start`}
    >
      <div className="flex-1">
        <div className="glass glass-hover rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
              <p className={`font-mono text-sm ${exp.color === 'teal' ? 'text-teal-400' : 'text-violet-400'}`}>
                {exp.company}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-800/60 px-3 py-1 rounded-full whitespace-nowrap ml-4">
              {exp.period}
            </span>
          </div>
          <ul className="space-y-2">
            {exp.points.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="flex items-start gap-3 text-sm text-slate-400"
              >
                <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${exp.color === 'teal' ? 'text-teal-500' : 'text-violet-500'}`} />
                {pt}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="flex flex-col items-center mt-6 shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring' }}
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
            exp.color === 'teal'
              ? 'border-teal-500 bg-teal-500/10 text-teal-400'
              : 'border-violet-500 bg-violet-500/10 text-violet-400'
          }`}
        >
          <Briefcase size={16} />
        </motion.div>
        <div className="w-px flex-1 bg-gradient-to-b from-slate-700 to-transparent mt-2" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <p className="font-mono text-teal-400 text-sm tracking-widest mb-3">02. WHERE I'VE WORKED</p>
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-violet-500 mx-auto mt-4" />
      </motion.div>
      <div className="space-y-8">
        {data.experience.map((exp, i) => (
          <ExpCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
