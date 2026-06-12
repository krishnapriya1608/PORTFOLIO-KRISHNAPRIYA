import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { data } from '../data'
import { Award, GraduationCap, BadgeCheck } from 'lucide-react'

export default function CertsEdu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <p className="font-mono text-teal-400 text-sm tracking-widest mb-3">05. GROWTH</p>
        <h2 className="text-4xl font-bold text-white">Certifications & Education</h2>
        <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-violet-500 mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award size={18} className="text-teal-400" />
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider font-mono">Certifications</h3>
          </div>
          <div className="space-y-3">
            {data.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-4 border border-teal-500/10 hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck size={16} className="text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{cert.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{cert.org} · {cert.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} className="text-violet-400" />
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider font-mono">Education</h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-5 border border-violet-500/20 h-fit"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-semibold">{data.education.degree}</h4>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.3 }}
                className="text-xs font-mono bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-full"
              >
                {data.education.cgpa}
              </motion.span>
            </div>
            <p className="text-violet-400 text-sm font-medium mb-1">{data.education.university}</p>
            <p className="text-slate-500 text-xs font-mono mb-4">{data.education.period}</p>
            <div className="border-t border-slate-800 pt-3">
              <p className="text-slate-500 text-xs mb-2 uppercase tracking-wider">Coursework</p>
              <div className="flex flex-wrap gap-1.5">
                {data.education.coursework.map(c => (
                  <span key={c} className="text-xs text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-md">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
