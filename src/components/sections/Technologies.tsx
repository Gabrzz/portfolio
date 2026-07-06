"use strict";
"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import TechIcon from "../TechIcon";

export default function Technologies() {
  const techs = [
    "Gemini",
    "Claude",
    "ChatGPT",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "OpenAI",
    "n8n",
    "Docker",
    "Git",
    "PostgreSQL",
    "MySQL",
    "OCR",
    "RAG",
    "Higgsfield",
    "Perplexity",
    "Nano Banana"
  ];

  return (
    <section id="tecnologias" className="relative py-32 overflow-hidden bg-darkBg">
      {/* Background glow accent */}
      <div className="absolute right-[5%] bottom-[10%] w-[450px] h-[450px] rounded-full bg-techBlue/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="mb-24 border-b border-white/[0.04] pb-12 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <Reveal>
            <h2 className="font-mono text-xs tracking-widest text-gray-500 uppercase">
              // Tecnologias
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="font-mono text-xs text-gray-500">
              [ Lista de um pouco das coisas que eu tenho domínio. ]
            </span>
          </Reveal>
        </div>

        {/* Minimal grid of logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-center">
          {techs.map((name, idx) => (
            <Reveal key={name} delay={0.03 * idx} yOffset={20}>
              <motion.div 
                className="flex flex-col items-center justify-center p-8 rounded-xl border border-white/[0.02] bg-white/[0.005] hover:border-white/10 hover:bg-white/[0.015] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 group relative select-none"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Subtle blue accent lighting overlay on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-techBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Tech Icon wrapper */}
                <div className="w-12 h-12 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors duration-500 mb-4 relative z-10">
                  <TechIcon name={name} className="w-8 h-8" />
                </div>

                {/* Tech Name */}
                <span className="font-display text-sm font-light tracking-wide text-gray-400 group-hover:text-white transition-colors duration-500 relative z-10">
                  {name}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
