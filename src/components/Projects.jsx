import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../data";
import { ExternalLink, Github, Layers } from "lucide-react";

const colorMap = {
  teal: {
    accent: "bg-[#52615b]",
    text: "text-[#52615b]",
    border: "border-[#52615b]/35",
  },
  violet: {
    accent: "bg-[#776c5d]",
    text: "text-[#776c5d]",
    border: "border-[#776c5d]/35",
  },
  pink: {
    accent: "bg-[#9a6d60]",
    text: "text-[#9a6d60]",
    border: "border-[#9a6d60]/35",
  },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const color = colorMap[project.color] || colorMap.teal;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.65 }}
      whileHover={{ y: -8 }}
      className={`group relative flex min-h-[470px] flex-col overflow-hidden border ${color.border} bg-[#eee4d4] p-5 shadow-[7px_9px_0_rgba(62,54,43,.12)] transition-shadow duration-300 hover:shadow-[11px_15px_0_rgba(62,54,43,.18)]`}
    >
      {/* Card number */}
      <span className="absolute right-5 top-4 font-sans text-[10px] tracking-[0.2em] text-[#746b5e]">
        0{index + 1}
      </span>

      <div className="mb-5 flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border ${color.border} ${color.text}`}
        >
          <Layers size={17} strokeWidth={1.4} />
        </div>

        <div className="flex gap-3 text-[#73695d]">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className="transition-colors hover:text-[#292721]"
              aria-label={`${project.name} GitHub repository`}
            >
              <Github size={17} strokeWidth={1.5} />
            </motion.a>
          )}

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className={`transition-colors hover:${color.text}`}
              aria-label={`View ${project.name} live`}
            >
              <ExternalLink size={17} strokeWidth={1.5} />
            </motion.a>
          )}
        </div>
      </div>

      {project.image && (
        <div className="mb-5 h-48 overflow-hidden bg-[#cdbda8]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover sepia-[0.22] contrast-[0.9] brightness-[0.94] transition duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <div className={`mb-3 h-px w-8 ${color.accent}`} />

        <h3 className="mb-3 font-serif text-3xl leading-[0.95] tracking-wide text-[#292721]">
          {project.name}
        </h3>

        <p className="max-w-sm font-sans text-sm leading-relaxed text-[#655d52]">
          {project.desc}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-[#786d5e]/25 pt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-sans text-[10px] uppercase tracking-[0.13em] text-[#62594e]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#e8ddca] px-6 py-24 text-[#292721] sm:px-12 lg:px-20"
    >
      {/* Oversized background lettering */}
      <div className="pointer-events-none absolute -right-6 top-4 select-none font-sans text-[11rem] font-black leading-none tracking-[-0.14em] text-[#52615b]/15 sm:text-[18rem]">
        WORK
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
        className="relative mx-auto mb-16 flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end"
      >
        <div>
          <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.3em] text-[#52615b]">
            03. SELECTED WORK
          </p>
          <div className="mb-5 h-px w-8 bg-[#6e665b]/60" />
          <h2 className="font-serif text-5xl leading-[0.85] tracking-wide sm:text-7xl">
            Things I’ve
            <br />
            built.
          </h2>
        </div>

        <p className="max-w-xs border-l border-[#6e665b]/45 pl-4 font-serif text-sm italic leading-relaxed text-[#625b50]">
          A collection of digital products, thoughtful interfaces, and systems
          made to solve real problems.
        </p>
      </motion.div>

      <div className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}