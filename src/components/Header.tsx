"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header style={{
      width: "100%",
      padding: "1.5rem 2rem",
      background: "var(--color-bg)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)"
    }}>
      <h1 style={{ 
        fontSize: "1.5rem", 
        fontWeight: "bold",
        color: "var(--color-primary)",
        margin: 0
      }}>
        Penjy
      </h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        {navLinks.map((link) => (
          <Link 
            key={link.id}
            href={`#${link.id}`}
            style={{
              color: hoveredLink === link.id ? "var(--color-primary)" : "var(--color-fg)",
              textDecoration: "none",
              fontSize: "0.9375rem",
              fontWeight: "var(--font-weight-medium)",
              padding: "var(--space-sm) var(--space-md)",
              borderRadius: "var(--radius-md)", /* radius-md for navigation */
              transition: "all var(--motion-duration-fast) var(--motion-ease-subtle)"
            }}
            onMouseEnter={() => setHoveredLink(link.id)}
            onMouseLeave={() => setHoveredLink(null)}
            onFocus={() => setHoveredLink(link.id)}
            onBlur={() => setHoveredLink(null)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}