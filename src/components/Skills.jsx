import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../data";

const categoryStyles = {
  Languages: {
    number: "01",
    accent: "bg-[#52615b]",
    text: "text-[#52615b]",
    border: "border-[#52615b]/35",
  },
  Frontend: {
    number: "02",
    accent: "bg-[#796e5f]",
    text: "text-[#796e5f]",
    border: "border-[#796e5f]/35",
  },
  Backend: {
    number: "03",
    accent: "bg-[#95685c]",
    text: "text-[#95685c]",
    border: "border-[#95685c]/35",
  },
  Database: {
    number: "04",
    accent: "bg-[#96794f]",
    text: "text-[#96794f]",
    border: "border-[#96794f]/35",
  },
  Tools: {
    number: "05",
    accent: "bg-[#5d7278]",
    text: "text-[#5d7278]",
    border: "border-[#5d7278]/35",
  },
  Concepts: {
    number: "06",
    accent: "bg-[#68745b]",
    text: "text-[#68745b]",
    border: "border-[#68745b]/35",
  },
};

function SkillGroup({ category, skills, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const style = categoryStyles[category] || categoryStyles.Languages;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className={`group relative min-h-56 border ${style.border} bg-[#eee4d4] p-6 shadow-[6px_8px_0_rgba(62,54,43,.1)] transition-shadow hover:shadow-[10px_12px_0_rgba(62,54,43,.16)]`}
    >
      <span className="absolute right-5 top-5 font-sans text-[10px] tracking-[0.2em] text-[#8a7e6e]">
        {style.number}
      </span>

      <div className={`mb-5 h-px w-8 ${style.accent}`} />

      <h3 className="mb-6 font-serif text-3xl leading-none tracking-wide text-[#292721]">
        {category}
      </h3>

      <div className="flex flex-wrap gap-x-3 gap-y-3 border-t border-[#786d5e]/25 pt-5">
        {skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: index * 0.1 + skillIndex * 0.05 + 0.2,
              duration: 0.35,
            }}
            whileHover={{ y: -2 }}
            className={`cursor-default border-b ${style.border} pb-1 font-sans text-xs tracking-[0.04em] text-[#625b50] transition-colors hover:${style.text}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#e8ddca] px-6 py-24 text-[#292721] sm:px-12 lg:px-20"
    >
      {/* Decorative background lettering */}
      <div className="pointer-events-none absolute -right-5 top-0 select-none font-sans text-[10rem] font-black leading-none tracking-[-0.15em] text-[#52615b]/15 sm:text-[17rem]">
        TOOLS
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
        className="relative mx-auto max-w-5xl"
      >
        <header className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.3em] text-[#52615b]">
              04. WHAT I WORK WITH
            </p>
            <div className="mb-5 h-px w-8 bg-[#6e665b]/60" />
            <h2 className="font-serif text-5xl leading-[0.84] tracking-wide sm:text-7xl">
              Tools of
              <br />
              the trade.
            </h2>
          </div>

          <p className="max-w-xs border-l border-[#6e665b]/45 pl-4 font-serif text-sm italic leading-relaxed text-[#625b50]">
            A practical toolkit for shaping reliable software and thoughtful
            digital experiences.
          </p>
        </header>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(data.skills).map(([category, skills], index) => (
            <SkillGroup
              key={category}
              category={category}
              skills={skills}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}