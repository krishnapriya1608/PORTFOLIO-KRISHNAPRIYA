import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Sparkles, ArrowUpRight } from "lucide-react";
import { data } from "../data";

const details = [
  {
    icon: Code2,
    title: "What I do",
    text: "I design and build clean, reliable web applications with a focus on useful experiences and thoughtful details.",
  },
  {
    icon: Sparkles,
    title: "How I work",
    text: "I enjoy turning complex ideas into simple interfaces, writing maintainable code, and learning through every project.",
  },
  {
    icon: Coffee,
    title: "Beyond code",
    text: "I’m curious by nature, always exploring better ways to create, solve problems, and make technology feel more human.",
  },
];

const linkClass =
  "inline-flex items-center gap-1.5 border border-[#786d5e]/45 px-4 py-2 font-sans text-xs font-semibold text-[#292721] transition hover:bg-[#292721] hover:text-[#e8ddca]";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e8ddca] px-6 py-24 text-[#292721] sm:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute -right-8 top-0 select-none font-sans text-[11rem] font-black leading-none tracking-[-0.15em] text-[#52615b]/15 sm:text-[18rem]">
        ME
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
              01. ABOUT ME
            </p>
            <div className="mb-5 h-px w-8 bg-[#6e665b]/60" />
            <h2 className="font-serif text-5xl leading-[0.84] tracking-wide sm:text-7xl">
              More than
              <br />
              the code.
            </h2>
          </div>

          <p className="max-w-xs border-l border-[#6e665b]/45 pl-4 font-serif text-sm italic leading-relaxed text-[#625b50]">
            A software engineer who cares about the people behind every
            interface.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 font-serif text-3xl leading-[1.15] text-[#292721] sm:text-4xl">
              I’m {data.name.trim()}, a software engineer who enjoys building
              digital products that are clear, useful, and enjoyable to use.
            </p>

            <p className="max-w-xl font-sans text-sm leading-7 text-[#625b50]">
              I combine technical curiosity with an eye for detail to create
              web experiences that feel considered from the first interaction
              to the last. Whether I’m working on a feature, an interface, or
              a larger system, I care about writing code that lasts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-4">
            {details.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className="border border-[#786d5e]/35 bg-[#eee4d4] p-5 shadow-[6px_8px_0_rgba(62,54,43,.1)]"
              >
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#52615b]/35 text-[#52615b]">
                    <Icon size={16} strokeWidth={1.4} />
                  </div>

                  <div>
                    <h3 className="mb-2 font-serif text-xl text-[#292721]">
                      {title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-[#625b50]">
                      {text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
