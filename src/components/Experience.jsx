import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../data";
import { Briefcase, ArrowDownRight } from "lucide-react";

function ExpCard({ exp, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="relative grid gap-6 pb-12 md:grid-cols-[120px_1fr]"
    >
      {/* Date / index */}
      <div className="flex items-start gap-4 md:block">
        <span className="font-sans text-[10px] font-semibold tracking-[0.22em] text-[#52615b]">
          0{index + 1}
        </span>
        <p className="mt-0 font-sans text-[10px] uppercase tracking-[0.14em] text-[#756b5d] md:mt-3">
          {exp.period}
        </p>
      </div>

      {/* Timeline */}
      <div className="absolute bottom-0 left-[4px] top-7 hidden w-px bg-[#786d5e]/35 md:block" />
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.2, type: "spring" }}
        className="absolute left-0 top-0 z-10 hidden h-9 w-9 items-center justify-center rounded-full border border-[#52615b]/50 bg-[#e8ddca] text-[#52615b] md:flex"
      >
        <Briefcase size={15} strokeWidth={1.4} />
      </motion.div>

      {/* Experience card */}
      <div className="border border-[#786d5e]/35 bg-[#eee4d4] p-6 shadow-[8px_10px_0_rgba(62,54,43,.11)] sm:p-8">
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#786d5e]/25 pb-5 sm:flex-row sm:items-start">
          <div>
            <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#52615b]">
              {exp.company}
            </p>
            <h3 className="font-serif text-3xl leading-none tracking-wide text-[#292721]">
              {exp.role}
            </h3>
          </div>

          <span className="w-fit border border-[#786d5e]/35 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.16em] text-[#655d52]">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-4">
          {exp.points.map((point, pointIndex) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 + pointIndex * 0.1 }}
              className="flex gap-3 font-sans text-sm leading-relaxed text-[#625b50]"
            >
              <ArrowDownRight
                size={16}
                strokeWidth={1.4}
                className="mt-0.5 shrink-0 text-[#52615b]"
              />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {!isLast && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#786d5e]/15 md:hidden" />
      )}
    </motion.article>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#e8ddca] px-6 py-24 text-[#292721] sm:px-12 lg:px-20"
    >
      {/* Background typography */}
      <div className="pointer-events-none absolute -right-10 top-4 select-none font-sans text-[10rem] font-black leading-none tracking-[-0.15em] text-[#52615b]/15 sm:text-[17rem]">
        PATH
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
              02. EXPERIENCE
            </p>
            <div className="mb-5 h-px w-8 bg-[#6e665b]/60" />
            <h2 className="font-serif text-5xl leading-[0.84] tracking-wide sm:text-7xl">
              The work
              <br />
              so far.
            </h2>
          </div>

          <p className="max-w-xs border-l border-[#6e665b]/45 pl-4 font-serif text-sm italic leading-relaxed text-[#625b50]">
            A growing record of building products, solving problems, and
            learning through real work.
          </p>
        </header>

        <div className="relative space-y-4 md:pl-14">
          {data.experience.map((exp, index) => (
            <ExpCard
              key={`${exp.company}-${exp.role}`}
              exp={exp}
              index={index}
              isLast={index === data.experience.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}