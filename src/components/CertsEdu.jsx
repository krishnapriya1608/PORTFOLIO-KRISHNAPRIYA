import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../data";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";

export default function CertsEdu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#e8ddca] px-6 py-24 text-[#292721] sm:px-12 lg:px-20"
    >
      {/* Editorial background type */}
      <div className="pointer-events-none absolute -right-6 top-0 select-none font-sans text-[9rem] font-black leading-none tracking-[-0.15em] text-[#52615b]/15 sm:text-[16rem]">
        GROW
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
              05. GROWTH
            </p>
            <div className="mb-5 h-px w-8 bg-[#6e665b]/60" />
            <h2 className="font-serif text-5xl leading-[0.84] tracking-wide sm:text-7xl">
              Learning
              <br />
              in progress.
            </h2>
          </div>

          <p className="max-w-xs border-l border-[#6e665b]/45 pl-4 font-serif text-sm italic leading-relaxed text-[#625b50]">
            The studies, certifications, and foundations behind the work.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Certifications */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#52615b]/35 text-[#52615b]">
                <Award size={17} strokeWidth={1.4} />
              </div>
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-[0.22em] text-[#52615b]">
                  01
                </p>
                <h3 className="font-serif text-2xl leading-none">Certifications</h3>
              </div>
            </div>

            <div className="space-y-4">
              {data.certifications.map((cert, index) => (
                <motion.article
                  key={`${cert.name}-${cert.org}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="group border border-[#786d5e]/35 bg-[#eee4d4] p-5 shadow-[5px_7px_0_rgba(62,54,43,.1)] transition-shadow hover:shadow-[8px_10px_0_rgba(62,54,43,.15)]"
                >
                  <div className="flex gap-4">
                    <BadgeCheck
                      size={18}
                      strokeWidth={1.4}
                      className="mt-0.5 shrink-0 text-[#52615b]"
                    />

                    <div>
                      <p className="mb-1 font-serif text-xl leading-tight text-[#292721]">
                        {cert.name}
                      </p>
                      <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-[#71675a]">
                        {cert.org} · {cert.period}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#796e5f]/40 text-[#796e5f]">
                <GraduationCap size={18} strokeWidth={1.4} />
              </div>
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-[0.22em] text-[#796e5f]">
                  02
                </p>
                <h3 className="font-serif text-2xl leading-none">Education</h3>
              </div>
            </div>

            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="border border-[#786d5e]/35 bg-[#eee4d4] p-6 shadow-[8px_10px_0_rgba(62,54,43,.12)] sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#786d5e]/25 pb-5">
                <div>
                  <p className="mb-2 font-sans text-[10px] font-semibold tracking-[0.22em] text-[#796e5f]">
                    ACADEMIC RECORD
                  </p>
                  <h4 className="font-serif text-3xl leading-[0.95] text-[#292721]">
                    {data.education.degree}
                  </h4>
                </div>

                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3 }}
                  className="shrink-0 border border-[#796e5f]/35 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.16em] text-[#796e5f]"
                >
                  {data.education.cgpa}
                </motion.span>
              </div>

              <p className="mb-2 font-serif text-lg text-[#4f5d57]">
                {data.education.university}
              </p>
              <p className="mb-7 font-sans text-[10px] uppercase tracking-[0.16em] text-[#71675a]">
                {data.education.period}
              </p>

              <div className="border-t border-[#786d5e]/25 pt-5">
                <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.2em] text-[#71675a]">
                  Coursework
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {data.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="border-b border-[#796e5f]/35 pb-1 font-sans text-xs text-[#625b50]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </motion.div>
    </section>
  );
}