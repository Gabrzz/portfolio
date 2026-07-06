"use strict";

import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-6 h-6" }: TechIconProps) {
  const normName = name.toLowerCase().trim();

  // Simple, elegant, pixel-perfect minimal SVGs
  switch (normName) {
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" className="opacity-20" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        </svg>
      );
    case "gemini":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 4q0 4 4 4q-4 0-4 4q0-4-4-4q4 0 4-4Z" />
          <path d="M17 11q0 2.5 2.5 2.5q-2.5 0-2.5 2.5q0-2.5-2.5-2.5q2.5 0 2.5-2.5Z" className="opacity-60" />
        </svg>
      );
    case "chatgpt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0-9-9c0 1.48.36 2.88 1 4.1L3 21l4.9-1c1.22.6 2.62 1 4.1 1Z" />
          <path d="M12 8v8M8 12h8" className="opacity-30" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "perplexity":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="6" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3Z" />
        </svg>
      );
    case "higgsfield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12a6 6 0 0 1 12 0" />
          <path d="M8 12a4 4 0 0 1 8 0" className="opacity-70" />
          <path d="M10 12a2 2 0 0 1 4 0" className="opacity-40" />
          <path d="M12 4v16" />
          <path d="M4 12h16" />
        </svg>
      );
    case "nano banana":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 4c-2 2.5-4 6-4 10 0 3 2 5 5 5 1 0 2-.5 2.5-1-3 1.5-6 1-8-1C9.5 14.5 9 10 11.5 6 13 4.5 15.5 4 17 4Z" />
          <path d="M17 4c.5-.5 1-1.5 1.5-2" />
          <circle cx="6" cy="18" r="1" fill="currentColor" />
          <circle cx="10" cy="19" r="0.5" fill="currentColor" />
        </svg>
      );
    case "next.js":
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
          <path d="M7.5 16.5V7.5L16 16.5M16.5 7.5v6" />
        </svg>
      );
    case "typescript":
    case "ts":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 8h3v1.5H9.5v5H8v-5Zm4.5 0H16v1.5h-1v5H13.5v-5h-1Z" />
        </svg>
      );
    case "node":
    case "node.js":
    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2Z" />
          <path d="M12 2v20M3.5 7 12 12l8.5-5" className="opacity-30" />
          <path d="M8 9.5v5M16 9.5v5" />
        </svg>
      );
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 2C5.5 2 5 3.5 5 5v3h7V9H5.5C4 9 3 10 3 12.5S4 16 5.5 16H7v-2.5C7 11.5 8.5 11 10.5 11h5c1.5 0 2.5-1 2.5-2.5V5C18 2.5 17 2 14.5 2h-6Z" />
          <path d="M15.5 22c3 0 3.5-1.5 3.5-3v-3h-7v-1h6.5c1.5 0 2.5-1 2.5-3.5S20 9 18.5 9H17v2.5c0 2-1.5 2.5-3.5 2.5h-5c-1.5 0-2.5 1-2.5 2.5V19c0 2.5 1 3 3.5 3h6Z" />
          <circle cx="7.5" cy="5.5" r="0.75" fill="currentColor" />
          <circle cx="16.5" cy="18.5" r="0.75" fill="currentColor" />
        </svg>
      );
    case "openai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.5 2a4.5 4.5 0 0 0-4.2 3.2L12 7.4v.1a1 1 0 0 1-1.3.9l-2.6-1.5A4.5 4.5 0 0 0 2 10.5a4.5 4.5 0 0 0 3.7 4.4L7.9 12v-.2a1 1 0 0 1 1-1.2l3 1.7a4.5 4.5 0 0 0 4.2 7.7 4.5 4.5 0 0 0 4.2-3.2L12 16.6v-.1a1 1 0 0 1 1.3-.9l2.6 1.5A4.5 4.5 0 0 0 22 13.5a4.5 4.5 0 0 0-3.7-4.4L16.1 12v.2a1 1 0 0 1-1 1.2l-3-1.7A4.5 4.5 0 0 0 12.5 2Z" />
        </svg>
      );
    case "claude":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
        </svg>
      );
    case "n8n":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Custom nodes connection visual */}
          <rect x="2" y="9" width="5" height="5" rx="1" />
          <rect x="17" y="3" width="5" height="5" rx="1" />
          <rect x="17" y="15" width="5" height="5" rx="1" />
          <path d="M7 11.5h4.5M11.5 11.5 17 5.5M11.5 11.5 17 17.5" />
          <circle cx="11.5" cy="11.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "docker":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19a4 4 0 0 0 8 0V7H4v12Z" />
          <path d="M12 19a4 4 0 0 0 8 0v-6h-8v6Z" />
          <rect x="6" y="9" width="4" height="4" rx="0.5" />
          <rect x="14" y="5" width="4" height="4" rx="0.5" />
          <path d="M2 13h20" className="opacity-45" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6M9 9l6 6" />
        </svg>
      );
    case "mysql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      );
    case "supabase":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13.2 2H6.6c-.9 0-1.5.8-1.2 1.6l2.3 5.4H3.4c-.9 0-1.5.9-1.1 1.7l6.6 11.3c.5.8 1.6.8 1.9 0l2.3-5.4h4.3c.9 0 1.5-.9 1.1-1.7L15.1 3.6c-.4-.9-1.3-1.6-1.9-1.6Z" />
        </svg>
      );
    case "postgresql":
    case "postgres":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Sleek database server styling representing elephant geometry */}
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" className="opacity-20" />
          <path d="M12 5v14M5 12h14" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "ocr":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Document text extraction scan */}
          <path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" />
          <rect x="7" y="7" width="10" height="10" rx="1" className="opacity-30" />
          <path d="M9 10h6M9 14h4" />
        </svg>
      );
    case "rag":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Retrieval Augmented Generation vector database connector diagram */}
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 6h6M9 6l6 9M6 9v9M15 18H9" />
          <circle cx="6" cy="18" r="3" className="opacity-50" />
          <path d="m15 6 3 3-3 3" className="opacity-70" />
        </svg>
      );
    case "whatsapp api":
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          <path d="m9.5 12 1.5 1.5 3.5-3.5" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
