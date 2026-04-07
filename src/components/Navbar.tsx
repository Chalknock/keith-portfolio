"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <a href="#hero" className="navbar-logo">
            <span className="logo-accent">K</span>AT
          </a>
          <ul className="navbar-links">
            {links.map((l, i) => (
              <li key={l.href}>
                <a href={l.href}>
                  <span className="nav-index">0{i + 1}.</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <ThemeToggle />
            <button
              className="mobile-menu-btn"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>
      <nav className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span className="nav-index">0{i + 1}.</span> {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
