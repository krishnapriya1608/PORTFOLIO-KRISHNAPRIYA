import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../data";
import { Mail, Github, Linkedin, Phone, MapPin, Send } from "lucide-react";

const contactItems = [
  { icon: Mail, value: data.email, href: `mailto:${data.email}` },
  { icon: Phone, value: data.phone, href: `tel:${data.phone}` },
  { icon: MapPin, value: data.location, href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#e8ddca] px-6 py-24 text-[#292721] sm:px-12 lg:px-20"
    >
      {/* Oversized editorial background text */}
      <div className="pointer-events-none absolute -right-8 top-2 select-none font-sans text-[12rem] font-black leading-none tracking-[-0.15em] text-[#52615b]/15 sm:text-[19rem]">
        TALK
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(75, 61, 44, .3) .65px, transparent .8px)",
          backgroundSize: "7px 7px",
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        className="relative mx-auto max-w-6xl"
      >
        <header className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.3em] text-[#52615b]">
              06. GET IN TOUCH
            </p>
            <div className="mb-5 h-px w-8 bg-[#6e665b]/60" />
            <h2 className="font-serif text-5xl leading-[0.84] tracking-wide sm:text-7xl">
              Let’s make
              <br />
              something.
            </h2>
          </div>

          <p className="max-w-xs border-l border-[#6e665b]/45 pl-4 font-serif text-sm italic leading-relaxed text-[#625b50]">
            For thoughtful products, useful ideas, and the next meaningful
            challenge.
          </p>
        </header>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-5 font-serif text-3xl leading-none">
              Open to a
              <br />
              good conversation.
            </h3>

            <p className="mb-10 max-w-md font-sans text-sm leading-relaxed text-[#655d52]">
              I’m open to software engineering roles, freelance collaborations,
              and interesting ideas worth building. Send a note and let’s see
              where it goes.
            </p>

            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, value, href }) => (
                <div key={value} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#52615b]/35 text-[#52615b]">
                    <Icon size={15} strokeWidth={1.4} />
                  </div>

                  {href ? (
                    <a
                      href={href}
                      className="font-sans text-sm text-[#5d554a] transition-colors hover:text-[#52615b]"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-sans text-sm text-[#5d554a]">
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              {[
                { icon: Github, href: data.github, label: "GitHub" },
                { icon: Linkedin, href: data.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6e665b]/40 text-[#625b50] transition-colors hover:border-[#52615b] hover:bg-[#52615b] hover:text-[#f1e6d6]"
                >
                  <Icon size={17} strokeWidth={1.4} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-[#786d5e]/35 bg-[#eee4d4] p-6 shadow-[10px_12px_0_rgba(62,54,43,.12)] sm:p-8"
          >
            <p className="mb-7 font-sans text-[10px] font-semibold tracking-[0.26em] text-[#52615b]">
              WRITE A NOTE
            </p>

            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.18em] text-[#71675a]">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-[#786d5e]/45 bg-transparent px-0 py-3 font-serif text-base text-[#292721] outline-none placeholder:text-[#998e80] focus:border-[#52615b]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.18em] text-[#71675a]">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full border-b border-[#786d5e]/45 bg-transparent px-0 py-3 font-serif text-base text-[#292721] outline-none placeholder:text-[#998e80] focus:border-[#52615b]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.18em] text-[#71675a]">
                  Message
                </span>
                <textarea
                  rows={4}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none border-b border-[#786d5e]/45 bg-transparent px-0 py-3 font-serif text-base text-[#292721] outline-none placeholder:text-[#998e80] focus:border-[#52615b]"
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 flex w-full items-center justify-center gap-2 bg-[#52615b] px-5 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#f2e8da] transition-colors hover:bg-[#3f4d48]"
              >
                Send message <Send size={15} strokeWidth={1.5} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}