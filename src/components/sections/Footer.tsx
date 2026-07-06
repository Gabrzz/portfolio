"use strict";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Gabrzz", icon: <Github size={16} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/gabrzz/", icon: <Linkedin size={16} /> },
    { name: "E-mail", href: "mailto:06gabrielp@gmail.com", icon: <Mail size={16} /> },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.03] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Name and Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="font-display text-sm font-bold tracking-tight text-white flex items-center gap-1">
            Gabriel <span className="w-1 h-1 rounded-full bg-techCyan" />
          </div>
          <p className="text-[11px] text-gray-500 font-mono">
            &copy; {currentYear} Gabriel. Todos os direitos reservados.
          </p>
        </div>

        {/* Social Icons & Names */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-200"
              aria-label={link.name}
            >
              {link.icon}
              <span className="font-mono">{link.name}</span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
