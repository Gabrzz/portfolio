"use strict";
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function CTA() {
  return (
    <section id="contato" className="relative py-32 md:py-48 bg-darkBg overflow-hidden">
      {/* Background ambient glows - highly colorful for emotion and connection */}
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-techCyan/25 to-techBlue/25 blur-[140px] pointer-events-none" />
      <div className="absolute left-[-15%] bottom-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-600/15 to-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center min-h-[500px]">
          
          {/* Left Column: Emotion, connection-driven text */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            {/* Label */}
            <Reveal>
              <span className="font-mono text-xs tracking-widest text-techCyan uppercase mb-6 inline-block font-semibold">
                // Conexão e Parceria
              </span>
            </Reveal>

            {/* Title with premium text gradient */}
            <Reveal delay={0.2}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-techCyan via-techBlue to-purple-500">extraordinário</span> juntos?
              </h2>
            </Reveal>

            {/* Connective Subtitle */}
            <Reveal delay={0.3}>
              <p className="font-sans text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
                Acredito que a inteligência artificial é uma ferramenta, e pode ser usada para otimizar qualquer atividade, seja em tempo ou em custo.
              </p>
            </Reveal>

            {/* Action Buttons with high-fidelity styling */}
            <Reveal delay={0.4} yOffset={20}>
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <a
                  href="mailto:gabriel@example.com"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-techCyan via-techBlue to-purple-600 text-white font-bold text-sm hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-all duration-300 gap-2 active:scale-95"
                >
                  Iniciar conversa
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>

            {/* Social Links Row */}
            <Reveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-8 sm:gap-12 border-t border-white/[0.08] pt-8">
                <a
                  href="mailto:gabriel@example.com"
                  className="font-mono text-xs text-gray-400 hover:text-techCyan transition-colors duration-300"
                >
                  06gabrielp@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/gabrzz/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-gray-400 hover:text-techCyan transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Gabrzz"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-gray-400 hover:text-techCyan transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Absolutely positioned photo next to the text on desktop.
              On smaller screens, it becomes an atmospheric colored overlay behind the text.
              Using the original colored avatar.png and displaying only its upper half.
          */}
          <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[45%] opacity-25 lg:opacity-100 pointer-events-none z-10 overflow-hidden">
            {/* Ambient colorful backdrop glow behind the photo to blend it beautifully */}
            <div className="absolute right-[-10%] top-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-techCyan/40 via-techBlue/30 to-purple-600/30 blur-[90px] opacity-75" />
            
            <div className="relative w-full h-full">
              {/* Image element cropped to its upper half (height 200%, object-top, object-cover) */}
              <img
                src="/avatar.png"
                alt="Gabriel"
                className="absolute top-0 right-0 w-full lg:w-[85%] h-[200%] object-cover object-top mix-blend-lighten lg:mix-blend-normal opacity-40 lg:opacity-90 transition-transform duration-700"
              />
              
              {/* Left side fade to black for text contrast (stronger on mobile, softer on desktop) */}
              <div className="absolute inset-y-0 left-0 w-full lg:w-48 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-transparent z-20" />
              
              {/* Bottom fade to black to ground the image */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
