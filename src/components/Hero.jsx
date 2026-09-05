import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import photo from "../assets/Krishna.png";

export default function EditorialBanner() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial state setups
      gsap.set(".gsap-fade", { opacity: 0, y: 20 });
      gsap.set(".gsap-watermark", { opacity: 0, scale: 0.9, x: -30 });
      gsap.set(".gsap-img-container", { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(".gsap-img", { scale: 1.25 });
      gsap.set(".gsap-frame", { opacity: 0, x: -10, y: -10 });

      // Timeline reveal sequence
      tl.to(".gsap-watermark", {
        opacity: 0.35,
        scale: 1,
        x: 0,
        duration: 1.8,
        ease: "power2.out",
      })
        .to(
          ".gsap-header",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=1.2"
        )
        .to(
          ".gsap-title-sub",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .to(
          ".gsap-title",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.6"
        )
        .to(
          ".gsap-specs",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.6"
        )
        // Image Reveal Mask Animation
        .to(
          ".gsap-img-container",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
          },
          "-=1.0"
        )
        .to(
          ".gsap-img",
          {
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
          },
          "-=1.4"
        )
        .to(
          ".gsap-frame",
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .to(
          ".gsap-badge",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          ".gsap-footer",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#e8ddca] text-[#292721] font-serif"
    >
      {/* Fine paper grain texture from the first code */}
      <div
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.2] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(75, 61, 44, .32) .65px, transparent .8px)",
          backgroundSize: "7px 7px",
        }}
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-12 sm:py-12">
        {/* Top Header Grid */}
      

        {/* Main Content Layout */}
        <div className="relative mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[calc(100vh-180px)]">
          {/* Giant Background Typography Watermark */}
          <div className="gsap-watermark pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-sans text-[14rem] sm:text-[22rem] lg:text-[28rem] font-black leading-none tracking-tighter text-[#53615b] z-0">
            MERN
          </div>

          {/* Left Column — Title & Bio Accent */}
          <div className="relative z-10 md:col-span-6 space-y-8">
            <div className="gsap-title-sub gsap-fade inline-block border-b border-[#6e665b]/55 pb-1 font-sans text-[11px] uppercase tracking-[0.35em] text-[#514d46]">
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight text-[#292721]">
              <span className="gsap-title gsap-fade block">Krishnapriya</span>
              <span className="gsap-title gsap-fade block italic font-normal text-[#53615b]">
                C S
              </span>
            </h1>

            <div className="grid grid-cols-2 gap-6 pt-4 font-sans text-xs tracking-wider text-[#514d46]">
              <div className="gsap-specs gsap-fade border-l border-[#7a6e5f]/30 pl-4 space-y-1">
                <p className="font-semibold uppercase text-[10px] text-[#292721]">
                  Core Stack
                </p>
                <p>MongoDB, Express</p>
                <p>React, Node.js</p>
              </div>
              <div className="gsap-specs gsap-fade border-l border-[#7a6e5f]/30 pl-4 space-y-1">
                <p className="font-semibold uppercase text-[10px] text-[#292721]">
                  Specialization
                </p>
                <p>Scalable APIs</p>
                <p>Interactive Interfaces</p>
              </div>
            </div>
          </div>

          {/* Right Column — Off-Center Frame Portrait */}
          <div className="relative z-10 md:col-span-6 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Border Frame Offset */}
              <div className="gsap-frame absolute -inset-4 border border-[#7a6e5f]/30 rounded-none z-0 translate-x-3 translate-y-3" />

              {/* Main Image Container */}
              <div className="gsap-img-container relative z-10 h-[480px] sm:h-[580px] w-full overflow-hidden bg-[#c6b49f] shadow-[14px_18px_36px_rgba(56,45,33,.24)]">
                <img
                  src={photo}
                  alt="Krishnapriya C S"
                  className="gsap-img h-full w-full object-cover object-center filter sepia-[0.3] contrast-[0.9] brightness-[0.93]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#9c7653]/10 mix-blend-multiply" />
              </div>

              {/* Corner Badge Overlay */}
              <div className="gsap-badge gsap-fade absolute -bottom-6 -left-6 z-20 bg-[#292721] text-[#e8ddca] px-6 py-4 font-sans text-[10px] tracking-[0.3em] uppercase">
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="gsap-footer gsap-fade mt-12 flex flex-col md:flex-row items-center justify-between border-t border-[#786d5e]/30 pt-6 font-sans text-[10px] uppercase tracking-[0.25em] text-[#625b50] gap-4">
          <span>Based in India</span>
          <span className="hidden md:inline">•</span>
          <span>Clean Architecture & Responsive Design</span>
          <span className="hidden md:inline">•</span>
          <span>© 2026 Krishnapriya C S</span>
        </footer>
      </section>
    </main>
  );
}