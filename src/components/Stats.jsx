import { data } from "../data";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#e8ddca] px-6 py-16 sm:px-12 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(75, 61, 44, .3) .65px, transparent .8px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-sans text-xl font-light text-[#52615b]">+</span>
          <div className="h-px w-8 bg-[#6e665b]/55" />
          <p className="font-sans text-[10px] font-semibold tracking-[0.25em] text-[#52615b]">
            IN NUMBERS
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-[#786d5e]/35 md:grid-cols-4">
          {data.stats.map((stat, index) => (
            <article
              key={stat.label}
              className="group min-h-40 border-b border-r border-[#786d5e]/35 bg-[#eee4d4]/70 p-5 transition-colors hover:bg-[#ded3c1] sm:p-7"
            >
              <p className="mb-6 font-sans text-[10px] tracking-[0.2em] text-[#8a7e6e]">
                0{index + 1}
              </p>

              <h3 className="font-serif text-4xl leading-none tracking-tight text-[#52615b] sm:text-5xl">
                {stat.number}
              </h3>

              <div className="my-4 h-px w-7 bg-[#786d5e]/45 transition-all duration-300 group-hover:w-12" />

              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#625b50]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}