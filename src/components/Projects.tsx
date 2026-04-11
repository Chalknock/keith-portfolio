"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Computer,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";
import { createPortal } from "react-dom";
/* ── DATA ─────────────────────────────────────────────────── */
const civicProjects = [
  {
    number: "01",
    title: "Bantay Gusali",
    subtitle: "Building Safety Inspection Platform · v2",
    description:
      "What started as a post-earthquake rapid inspection tool evolved into a full building safety platform for Philippine OBO/BPLO offices. Bantay Gusali overhauled the entire architecture — adding role-based access for Inspectors, Supervisors, and Administrators, 11 inspection types with PD 1096-compliant color-coded status tags, GPS-tagged photo documentation, offline-first SQLite with defensive schema migrations, Firebase push notifications, and official PDF report generation.",
    tags: [
      "Flutter",
      "Dart",
      "SQLite",
      "Android",
      "PDF Export",
      "GPS",
      "Firebase",
      "PD 1096",
    ],
    github: "https://github.com/Chalknock/bantay_gusali",
    folder: "bantay-gusali",
    url: [] as string[],
    images: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    isCivic: true,
  },
  {
    number: "02",
    title: "Bantay Proyekto",
    subtitle: "Infrastructure Transparency App",
    description:
      "Infrastructure corruption costs the Philippines billions every year. Bantay Proyekto gives DPWH field engineers and COA auditors a tool to fight back — a 29-item checklist across 6 inspection categories, an automated red flag system that triggers when contractor-reported progress deviates ≥15% from inspector findings, and citizen reporting built in. Grounded in RA 9184, PD 1594, and COA circulars.",
    tags: [
      "Flutter",
      "Dart",
      "SQLite",
      "Android",
      "Anti-corruption",
      "DPWH",
      "COA",
      "RA 9184",
    ],
    github: "https://github.com/Chalknock/bantay_proyekto",
    folder: "bantay-proyekto",
    url: [] as string[],
    images: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
    ],
    isCivic: true,
  },
];

const otherProjects = [
  {
    number: "03",
    title: "Renewable Energy Inventory System",
    description:
      "A GIS-powered inventory platform built during my time as a Science Research Analyst at MMSU. Planners and researchers can visualize, filter, and track renewable energy assets across geographic regions through an interactive Leaflet map — replacing spreadsheet chaos with a spatial, queryable database. Built with React, Node.js/Express, and MySQL.",
    tags: ["React.js", "Node.js", "Express", "Leaflet", "GIS", "MySQL"],
    github: "https://github.com/Chalknock",
    folder: "renewable-energy-system",
    url: "https://arec.mmsu.edu.ph/",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png"],
  },
  {
    number: "04",
    title: "Post-Earthquake Building Inspection App",
    description:
      "The predecessor to Bantay Gusali. Originally built for rapid post-disaster structural triage — this was the proof-of-concept that validated the offline-first, GPS-tagged inspection model. Lessons from real-world use drove a full rebuild into what became Bantay Gusali, a production-grade platform now targeting PD 1096 compliance and multi-role government workflows.",
    tags: ["Flutter", "Dart", "SQLite", "Offline-first", "PDF Export", "GPS"],
    github: "https://github.com/Chalknock",
    folder: "post-earthquake-inspection",
    url: [] as string[],
    images: [] as string[],
  },
  {
    number: "05",
    title: "Expense Tracker Application",
    description:
      "A production-grade personal finance dashboard with a premium dark/light theme (obsidian + gold). Built with Django REST Framework and React — featuring recurring expense tracking, JWT authentication with proactive token refresh, and a full financial reporting suite with monthly and annual charts (area, donut, bar, and year-over-year comparison). Powered by MUI DataGrid with server-side pagination, bulk operations, and category filtering. Containerized with Docker and served via Nginx. Every visual — axes, grids, tooltips, gradients — adapts to the active theme from a single source of truth.",
    tags: [
      "React.js",
      "Django",
      "DRF",
      "JWT",
      "MUI",
      "Recharts",
      "Docker",
      "Nginx",
      "PostgreSQL",
    ],
    github: "https://github.com/Chalknock",
    folder: "expense-tracker",
    url: [] as string[],
    images: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ],
  },
  {
    number: "06",
    title: "Automated Aquatic Life Support System",
    description:
      "An end-to-end IoT system that keeps aquatic environments alive — autonomously. Raspberry Pi and ESP32 microcontrollers monitor water quality sensors in real time, with automated control logic responding to temperature, pH, and oxygen readings. Data flows over MQTT for live monitoring, making it hands-free and failure-aware.",
    tags: ["Raspberry Pi", "ESP32", "IoT", "Python", "MQTT"],
    github: "https://github.com/Chalknock",
    folder: "aquatic-life-support",
    url: [] as string[],
    images: [] as string[],
  },
];

/* ── LIGHTBOX ─────────────────────────────────────────────── */
function Lightbox({
  folder,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  folder: string;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <Image
          src={`/images/${folder}/${images[index]}`}
          alt={`Screenshot ${index + 1}`}
          width={1200}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: 8,
          }}
        />
      </div>
      <button className="lightbox-close" onClick={onClose}>
        <X size={18} />
      </button>
      {images.length > 1 && (
        <>
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={onPrev}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={onNext}
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}
      <div className="lightbox-counter">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

/* ── CAROUSEL ─────────────────────────────────────────────── */
function Carousel({
  folder,
  images,
  title,
}: {
  folder: string;
  images: string[];
  title: string;
}) {
  const [cur, setCur] = useState(0);
  const [lb, setLb] = useState(false);
  const total = images.length;

  const prev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCur((c) => (c - 1 + total) % total);
    },
    [total],
  );
  const next = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCur((c) => (c + 1) % total);
    },
    [total],
  );

  if (!total) {
    return (
      <div className="project-no-img">
        <span>📷</span>
        <span>Screenshots coming soon</span>
      </div>
    );
  }

  return (
    <>
      <div className="carousel" onClick={() => setLb(true)}>
        <div className="carousel-track">
          <Image
            src={`/images/${folder}/${images[cur]}`}
            alt={`${title} ${cur + 1}`}
            fill
            className="carousel-img"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {total > 1 && (
          <>
            <button
              className="carousel-btn carousel-btn-left"
              onClick={prev}
              aria-label="Previous"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              className="carousel-btn carousel-btn-right"
              onClick={next}
              aria-label="Next"
            >
              <ChevronRight size={15} />
            </button>
            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === cur ? " active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCur(i);
                  }}
                />
              ))}
            </div>
            <div className="carousel-counter">
              {cur + 1} / {total}
            </div>
          </>
        )}
        <div className="carousel-hint">
          <span className="carousel-hint-badge">🔍 Click to expand</span>
        </div>
      </div>

      {/* {lb && (
        <Lightbox
          folder={folder}
          images={images}
          index={cur}
          onClose={() => setLb(false)}
          onPrev={prev}
          onNext={next}
        />
      )} */}
      {lb &&
        createPortal(
          <Lightbox
            folder={folder}
            images={images}
            index={cur}
            onClose={() => setLb(false)}
            onPrev={prev}
            onNext={next}
          />,
          document.body,
        )}
    </>
  );
}

/* ── PROJECT CARD ─────────────────────────────────────────── */
function ProjectCard({
  p,
  civic = false,
}: {
  p: (typeof otherProjects)[0] & { isCivic?: boolean; subtitle?: string };
  civic?: boolean;
}) {
  const url = Array.isArray(p.url) ? p.url[0] : p.url;
  return (
    <div className={`project-card${civic ? " project-card-civic" : ""}`}>
      <Carousel folder={p.folder} images={p.images} title={p.title} />
      <div className="project-body">
        <div className="project-header">
          <span className="project-num-label">{p.number}</span>
          <div style={{ display: "flex", gap: 6 }}>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
              aria-label="GitHub"
            >
              <Computer size={13} />
            </a>
          </div>
        </div>
        <div>
          <div className="project-title">{p.title}</div>
          {"subtitle" in p && p.subtitle && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-muted)",
                marginBottom: 4,
              }}
            >
              {p.subtitle}
            </div>
          )}
        </div>
        <p className="project-desc">{p.description}</p>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
          >
            Live Demo
            <ExternalLink
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        )}
        <div className="tags" style={{ marginTop: 4 }}>
          {p.tags.map((t) => (
            <span key={t} className={civic ? "tag-civic" : "tag"}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MAIN ─────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        {/* Civic Tech */}
        <div className="projects-civic-label">🇵🇭 Civic Technology</div>
        <div className="projects-civic">
          {civicProjects.map((p) => (
            <ProjectCard key={p.title} p={p} civic />
          ))}
        </div>

        {/* Divider */}
        <div className="projects-divider">Other Projects</div>

        {/* Other */}
        <div className="projects-other">
          {otherProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
