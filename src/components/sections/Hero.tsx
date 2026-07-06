"use strict";
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-darkBg">
      {/* 
        AJUSTE MANUAL DA IMAGEM DE FUNDO DO HERO:
        - Para alterar a largura da imagem no PC: modifique a classe 'lg:w-[50%]' (ex: 'lg:w-[45%]' ou 'lg:w-[60%]')
        - Para mudar o alinhamento da seção inteira: 'right-0' posiciona na direita, 'left-0' posiciona na esquerda.
      */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-full z-0 overflow-hidden select-none pointer-events-none">
        {/* Iluminação azul sutil por trás da foto */}
        <div className="absolute inset-0 bg-radial-gradient from-techBlue/10 via-transparent to-transparent opacity-60" />
        
        <motion.div
          className="w-full h-full relative"
          /* 
            AJUSTE MANUAL DO ZOOM (Framer Motion):
            - scale: 1.20 (zoom inicial na animação de entrada = 120%)
            - scale: 1.15 (zoom final estático da imagem = 115%)
          */
          initial={{ scale: 1.20, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/avatar.png"
            alt="Gabriel"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            /* 
              AJUSTE MANUAL DO ENQUADRAMENTO E EFEITOS DA FOTO:
              - 'object-[center_15%]': foca no ponto ideal verticalmente (15%).
              - 'brightness-[0.75]': brilho no mobile (75%). 'lg:brightness-95': brilho no PC (95%).
              - 'contrast-[1.05]': contraste de 105%.
            */
            className="object-cover object-[center_15%] brightness-[0.75] lg:brightness-95 contrast-[1.05]"
          />
        </motion.div>
        
        {/* Gradiente escuro no mobile para garantir legibilidade dos textos sobrepostos */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/45 via-[#050505]/80 to-[#050505] lg:hidden z-10" />
        
        {/* 
          AJUSTE MANUAL DAS TRANSIÇÕES/FADES NO PC (DESKTOP):
          - Gradiente lateral esquerdo (w-48): suaviza a transição da foto para o fundo preto da esquerda.
          - Gradiente inferior (h-32): suaviza a transição da foto para o rodapé/base do hero.
        */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent hidden lg:block z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Copywriting (Gabriel, Short Phrase, 2 Buttons) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Name */}
          <Reveal delay={0.1} yOffset={25}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-techCyan to-techBlue">
              Gabriel
            </h1>
          </Reveal>

          {/* Headline - short, powerful, no paragraphs */}
          <Reveal delay={0.2} yOffset={25}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 leading-tight mb-12 tracking-wide">
              Especialista em I.A <br />
              Automação, Otimização<br />
              <span className="text-white font-medium">Diagnóstico de Processos.</span>
            </h2>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.3} yOffset={20}>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#projetos"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-techCyan to-techBlue text-white font-semibold text-sm hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center gap-2"
              >
                Ver projetos
                <ArrowDown size={16} />
              </a>
              <a
                href="#contato"
                className="px-8 py-4 rounded-full border border-white/[0.08] bg-white/[0.02] text-white font-semibold text-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-2"
              >
                Entrar em contato
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Empty spacer in grid for desktop to let the absolute image shine */}
        <div className="hidden lg:block lg:col-span-6 h-full min-h-[500px]" />

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-6 md:left-12 z-10 flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">Rolagem</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={12} className="text-white" />
        </motion.div>
      </div>
    </section>
  );
}
