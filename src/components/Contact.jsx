import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { data } from '../data'
import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <p className="font-mono text-teal-400 text-sm tracking-widest mb-3">06. GET IN TOUCH</p>
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-violet-500 mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-2xl font-semibold mb-4">Let's work together</h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a chat about tech. My inbox is always open.
          </p>

          <div className="space-y-4">
            {[
              { icon: Mail, text: data.email, href: `mailto:${data.email}` },
              { icon: Phone, text: data.phone, href: `tel:${data.phone}` },
              { icon: MapPin, text: data.location, href: null },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <Icon size={14} className="text-teal-400" />
                </div>
                {href ? (
                  <a href={href} className="hover:text-teal-400 transition-colors">{text}</a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { icon: Github, href: data.github, label: 'GitHub' },
              { icon: Linkedin, href: data.linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 border border-slate-700/50 hover:border-teal-500/40 transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 border border-slate-700/30"
        >
          <div className="space-y-4">
            <div>
              <label className="text-xs font-mono text-slate-500 mb-1.5 block uppercase tracking-wider">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-500 mb-1.5 block uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-500 mb-1.5 block uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(20,184,166,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
            >
              <Send size={14} /> Send message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
