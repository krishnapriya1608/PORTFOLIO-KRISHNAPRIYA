import React from "react";
import photo from "../assets/Krishna.png"

const Rule = () => <div className="h-px w-8 bg-[#6e665b]/55" />;

export default function EditorialBanner() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e8ddca] font-serif text-[#292721]">
      {/* Fine paper grain */}
      <div
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.2] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(75, 61, 44, .32) .65px, transparent .8px)",
          backgroundSize: "7px 7px",
        }}
      />

      <section className="relative min-h-screen overflow-hidden px-7 py-8 sm:px-12 sm:py-12 lg:px-20">
        {/* Giant cropped background letters */}
        <div className="pointer-events-none absolute -right-10 top-[10%] select-none font-sans text-[12rem] font-black leading-[0.72] tracking-[-0.16em] text-[#53615b] sm:text-[20rem] lg:text-[27rem]">
          S E
        </div>

        <div className="pointer-events-none absolute -bottom-16 -left-8 select-none font-sans text-[12rem] font-black leading-none tracking-[-0.16em] text-[#53615b] sm:text-[16rem] lg:text-[24rem]">
          CODE
        </div>

        <div className="relative z-10 grid min-h-[calc(100vh-64px)] grid-cols-1 md:grid-cols-12">
          {/* Left editorial column */}
          <aside className="flex flex-col justify-between pb-10 md:col-span-4 md:pb-0">
            <div className="space-y-4">
              <p className="font-sans text-xl font-light text-[#5d584f]">+</p>
              <Rule />

              <p className="font-sans text-[20px] font-semibold leading-relaxed tracking-[0.28em] text-[#514d46]">
                Full Stack
                <br />
                Developer
              </p>

              <Rule />

              <p className="font-sans text-[25px] font-semibold leading-relaxed tracking-[0.28em] text-[#514d46]">
                
                Krishnapriya c s
              </p>

            

              <p className="text-sm tracking-[0.16em] text-[#514d46]">2026</p>
            </div>

            <div className="hidden space-y-3 md:block">
              <Rule />
              <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#625b50]">
              
              </p>
            </div>
          </aside>

          {/* Portrait */}
          <div className="relative flex min-h-[500px] items-end justify-center md:col-span-8 md:min-h-0">
            <div className="relative z-10 h-[510px] w-[78%] max-w-md overflow-hidden border border-[#7a6e5f]/25 bg-[#c6b49f] shadow-[14px_18px_36px_rgba(56,45,33,.24)] sm:h-[620px]">
              <img
                alt="Editorial portrait outdoors"
                className="h-full w-full object-cover object-center sepia-[0.3] contrast-[0.9] brightness-[0.93]"
                src={photo}
              />
              <div className="pointer-events-none absolute inset-0 bg-[#9c7653]/10 mix-blend-multiply" />
            </div>

            <div className="absolute bottom-8 right-[4%] hidden h-28 w-28 border border-[#eadfce]/75 md:block" />
          </div>
        </div>

        {/* Footer details */}
        <footer className="relative z-10 mt-8 flex items-center justify-between border-t border-[#786d5e]/30 pt-4 font-sans text-[9px] uppercase tracking-[0.2em] text-[#625b50]">
          <span>Code</span>
          <span>Mern Stack Developer</span>
        </footer>
      </section>
    </main>
  );
}