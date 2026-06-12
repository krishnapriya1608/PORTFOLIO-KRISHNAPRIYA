import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { data } from '../data'
import { ExternalLink, Github, Layers } from 'lucide-react'

const colorMap = {
  teal: { border: 'border-teal-500/30', glow: 'hover:shadow-teal-500/20', badge: 'bg-teal-500/10 text-teal-400', icon: 'text-teal-400', dot: 'bg-teal-500' },
  violet: { border: 'border-violet-500/30', glow: 'hover:shadow-violet-500/20', badge: 'bg-violet-500/10 text-violet-400', icon: 'text-violet-400', dot: 'bg-violet-500' },
  pink: { border: 'border-pink-500/30', glow: 'hover:shadow-pink-500/20', badge: 'bg-pink-500/10 text-pink-400', icon: 'text-pink-400', dot: 'bg-pink-500' },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = colorMap[project.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`glass rounded-2xl border ${c.border} p-6 flex flex-col gap-4 hover:shadow-xl ${c.glow} transition-all duration-300 cursor-default`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-xl ${c.badge} flex items-center justify-center`}>
          <Layers size={18} className={c.icon} />
        </div>
        <div className="flex gap-3">
          {project.github && (
            <motion.a href={project.github} whileHover={{ scale: 1.2, color: '#fff' }} className="text-slate-500 hover:text-white transition-colors">
              <Github size={16} />
            </motion.a>
          )}
          {project.live && (
            <motion.a href={project.live} whileHover={{ scale: 1.2, color: '#2dd4bf' }} className="text-slate-500 hover:text-teal-400 transition-colors">
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      <div>
        <>
          {project.image && (
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}

          <div>
            <h3 className="text-white font-semibold text-base mb-2">
              {project.name}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              {project.desc}
            </p>
          </div>
        </>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.stack.map(tech => (
          <span key={tech} className={`text-xs font-mono px-2.5 py-1 rounded-lg ${c.badge}`}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <p className="font-mono text-teal-400 text-sm tracking-widest mb-3">03. WHAT I'VE BUILT</p>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-violet-500 mx-auto mt-4" />
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
