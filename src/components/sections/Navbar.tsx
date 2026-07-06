"use strict";
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Manifesto", href: "#manifesto" },
    { name: "Projetos", href: "#projetos" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "py-4 glassmorphism border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold tracking-tight text-white group flex items-center gap-1.5">
            <span>Gabriel</span>
            <span className="w-1.5 h-1.5 rounded-full bg-techCyan animate-pulse" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-techCyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-white hover:border-techCyan/50 hover:bg-techCyan/5 transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">Conectar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-techCyan/10 to-techBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#050505]/95 backdrop-blur-lg border-b border-white/[0.04] md:hidden px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl text-gray-400 hover:text-white transition-colors py-2 border-b border-white/[0.02]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-4 text-center rounded-lg border border-techCyan/30 bg-techCyan/5 text-sm font-semibold text-techCyan hover:bg-techCyan/10 transition-colors"
            >
              Iniciar Conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
