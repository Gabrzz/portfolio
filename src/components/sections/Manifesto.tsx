"use strict";
"use client";

import Reveal from "../Reveal";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-48 overflow-hidden bg-darkBg">
      {/* Subtle background flow highlight */}
      <div className="absolute left-[5%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-techBlue/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Section title */}
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <Reveal>
              <h2 className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                // Manifesto
              </h2>
            </Reveal>
          </div>

          {/* Manifesto Text Column */}
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 leading-relaxed max-w-3xl tracking-wide">
                A tecnologia só faz sentido quando deixa de exigir atenção.
                <br />
                <br />
                O intelecto humano não deveria ser consumido por tarefas repetitivas. Construo sistemas que eliminam etapas, automatizam decisões e transformam operações complexas em fluxos simples, eficientes e quase invisíveis.
                <br />
                <br />
                <span className="text-white font-medium">Porque pessoas devem pensar. Máquinas devem executar.</span>
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

