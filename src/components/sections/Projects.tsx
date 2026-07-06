"use strict";
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "CRM Completo",
      year: "2026",
      techs: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
      impact:
        "Sistema completo para gestão de todos os processos internos da empresa. Permite a conexão de forma fácil e visual entre todos os setores e funcionários.",
      link: "#",
      video: "https://xuds2j4eb9uem7yg.public.blob.vercel-storage.com/porfolio-crm.mov", // Insira aqui a URL do Vercel Blob (ex: https://xxx.public.blob.vercel-storage.com/xxx.mp4)
      
      graphic: (
        <svg
          className="w-full h-full text-white/5 group-hover:text-techBlue/10 transition-colors duration-700"
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="100" cy="60" r="35" strokeDasharray="3,3" />
          <circle
            cx="100"
            cy="60"
            r="10"
            stroke="rgba(255,255,255,0.15)"
            fill="rgba(255,255,255,0.01)"
          />
          <line x1="100" y1="10" x2="100" y2="110" />
          <line x1="50" y1="60" x2="150" y2="60" />
          <rect
            x="85"
            y="45"
            width="30"
            height="30"
            rx="4"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path d="M60 25l40 35M140 25L100 60M60 95l40-35M140 95L100 60" />
          <circle cx="60" cy="25" r="3" fill="currentColor" />
          <circle cx="140" cy="25" r="3" fill="currentColor" />
          <circle cx="60" cy="95" r="3" fill="currentColor" />
          <circle cx="140" cy="95" r="3" fill="currentColor" />
          <motion.circle
            cx="100"
            cy="60"
            r="2.5"
            fill="#0072ff"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Chat Omnichannel",
      year: "2025",
      techs: ["Node.js", "WhatsApp API", "Supabase", "Docker"],
      impact:
        "Sistema de integração de mensagens de qualquer plataforma. Permite vários funcionários responder tudo de um só lugar.",
      link: "#",
      video:"https://xuds2j4eb9uem7yg.public.blob.vercel-storage.com/porfolio-chat.mov", // Insira aqui a URL do Vercel Blob
      graphic: (
        <svg
          className="w-full h-full text-white/5 group-hover:text-techBlue/10 transition-colors duration-700"
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <rect
            x="40"
            y="30"
            width="35"
            height="60"
            rx="3"
            strokeWidth="0.75"
          />
          <rect
            x="125"
            y="30"
            width="35"
            height="60"
            rx="3"
            strokeWidth="0.75"
          />
          <line x1="50" y1="45" x2="65" y2="45" />
          <line x1="50" y1="55" x2="65" y2="55" />
          <line x1="50" y1="65" x2="60" y2="65" />
          <line x1="135" y1="45" x2="150" y2="45" />
          <line x1="135" y1="55" x2="148" y2="55" />
          <line x1="135" y1="65" x2="145" y2="65" />
          <path d="M75 60h50" strokeWidth="0.75" />
          <circle
            cx="100"
            cy="60"
            r="8"
            stroke="#0072ff"
            fill="#050505"
            strokeWidth="1"
          />
          <circle cx="100" cy="60" r="2.5" fill="#0072ff" />
          <path d="M100 20v20M100 80v20" strokeDasharray="2,2" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Agente de Atendimento",
      year: "2025",
      techs: ["n8n", "ChatGPT", "WhatsApp API", "Redis"],
      impact:
        "Asssitente virtual que atende o whatsapp, site ou instagram 24 horas por dia. Faz o follow-up do cliente ao longo do tempo de forma automática.",
      link: "#",
      video: "https://xuds2j4eb9uem7yg.public.blob.vercel-storage.com/porfolio-agente.mov", // Insira aqui a URL do Vercel Blob
      graphic: (
        <svg
          className="w-full h-full text-white/5 group-hover:text-techBlue/10 transition-colors duration-700"
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path
            d="M30 30h45a8 8 0 0 1 8 8v44a8 8 0 0 0 8 8h79"
            strokeWidth="0.75"
          />
          <path d="M83 60h45a8 8 0 0 1 8 8v12" />
          <circle cx="30" cy="30" r="4" fill="currentColor" strokeWidth="2" />
          <circle cx="170" cy="90" r="4" fill="currentColor" strokeWidth="2" />
          <circle cx="136" cy="90" r="4" />
          <motion.circle
            cx="30"
            cy="30"
            r="3"
            fill="#0072ff"
            animate={{
              x: [0, 53, 53, 140],
              y: [0, 0, 60, 60],
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Geração de Documentos",
      year: "2026",
      techs: ["Python", "OCR", "Claude", "n8n"],
      impact:
        "Atividade repetitiva que tomava 2 horas do dia do colaborador, agora automatizada. Menos stress pra fazer o trabalho e ainda com menos chance de errar algo.",
      link: "#",
      video: "https://xuds2j4eb9uem7yg.public.blob.vercel-storage.com/porfolio-docs.mov", // Insira aqui a URL do Vercel Blob
      graphic: (
        <svg
          className="w-full h-full text-white/5 group-hover:text-techBlue/10 transition-colors duration-700"
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <rect
            x="35"
            y="20"
            width="130"
            height="80"
            rx="4"
            strokeWidth="0.75"
          />
          <line x1="35" y1="35" x2="165" y2="35" />
          <circle cx="45" cy="27" r="1.5" fill="currentColor" />
          <circle cx="51" cy="27" r="1.5" fill="currentColor" />
          <circle cx="57" cy="27" r="1.5" fill="currentColor" />
          <path d="M50 80l25-30 28 15 42-35" strokeWidth="1" stroke="#0072ff" />
          <circle cx="75" cy="50" r="3" fill="#0072ff" />
          <circle cx="103" cy="65" r="3" fill="#0072ff" />
          <circle cx="145" cy="30" r="3" fill="#0072ff" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projetos" className="relative py-20 bg-darkBg overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute right-[5%] top-1/3 w-[500px] h-[500px] rounded-full bg-techBlue/2 blur-[140px] pointer-events-none" />
      <div className="absolute left-[5%] bottom-1/3 w-[500px] h-[500px] rounded-full bg-techBlue/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section title (Editorial Style) */}
        <div className="mb-32 border-b border-white/[0.04] pb-12 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <Reveal>
            <h2 className="font-mono text-xs tracking-widest text-gray-500 uppercase">
              // Projetos Selecionados
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="font-mono text-xs text-gray-500">
              [ Foco em Inteligência Artificial & Engenharia ]
            </span>
          </Reveal>
        </div>

        {/* Projects List - Full-screen / High-Respiration stack */}
        <div className="flex flex-col gap-40 md:gap-64">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group min-h-[75vh] flex flex-col justify-center border-b border-white/[0.03] pb-24 last:border-0 last:pb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                {/* Information Column (Left) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Number and Year */}
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-display text-4xl sm:text-5xl font-extralight text-white/20 select-none">
                        {project.num}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-techBlue" />
                      <span className="font-mono text-xs text-gray-500">
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <Reveal delay={0.1}>
                      <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        {project.title}
                      </h3>
                    </Reveal>

                    {/* Impact Statement */}
                    <Reveal delay={0.2}>
                      <p className="font-sans text-lg sm:text-xl font-light text-gray-300 leading-relaxed mb-8 tracking-wide">
                        {project.impact}
                      </p>
                    </Reveal>
                  </div>

                  {/* Metadata and Link */}
                  <div>
                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-2.5 mb-10">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1 rounded-full border border-white/[0.04] bg-white/[0.01] text-xs text-gray-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Open action link */}
                    <Reveal delay={0.3}>
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-techBlue transition-colors duration-300 relative py-1 overflow-hidden group/link interactive-cursor"
                      >
                        Abrir projeto
                        <ArrowUpRight
                          size={14}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                        />
                      </a>
                    </Reveal>
                  </div>
                </div>

                {/* Technical Abstract Column (Right) */}
                <div className="lg:col-span-7 flex items-center justify-center bg-white/[0.005] border border-white/[0.02] rounded-2xl h-[300px] sm:h-[400px] md:h-[500px] p-8 sm:p-12 relative overflow-hidden transition-all duration-500 group-hover:bg-white/[0.01] group-hover:border-white/[0.04] interactive-cursor">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Diagram or Video component */}
                  <div className="w-full h-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-700">
                    {project.video ? (
                      <video
                        src={project.video}
                        controls
                        className="w-full h-full object-contain rounded-xl shadow-2xl bg-black/40 border border-white/5"
                      />
                    ) : (
                      project.graphic
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
