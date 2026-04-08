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
    subtitle: "Building Safety Inspection App",
    description:
      "A Flutter/Android mobile app for Philippine OBO/BPLO building inspectors. Features role-based access (Inspector/Supervisor/Administrator), 11 inspection types, 7 PD 1096-compliant color-coded status tags, offline-first SQLite with defensive schema migrations, GPS-tagged photo documentation, PDF export, and push notifications.",
    tags: [
      "Flutter",
      "Dart",
      "SQLite",
      "Android",
      "PDF Export",
      "GPS",
      "Firebase",
    ],
    github: "https://github.com/Chalknock",
    folder: "bantay-gusali",
    images: [] as string[],
    isCivic: true,
  },
  {
    number: "02",
    title: "Bantay Proyekto",
    subtitle: "Infrastructure Transparency App",
    description:
      "An anti-corruption Flutter/Android app for DPWH/LGU field engineers and COA auditors. Phase 1 complete with a 9-table SQLite schema, 29-item checklist across 6 categories, role-based access for Admin/Inspector/Citizen users, and an automated red flag system triggering on ≥15% contractor vs. inspector progress discrepancy. Grounded in RA 9184, PD 1594, and COA circulars.",
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
    github: "https://github.com/Chalknock",
    folder: "bantay-proyekto",
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
      "A full-stack GIS web application featuring interactive Leaflet maps for visualization and resource tracking of renewable energy assets across geographic regions.",
    tags: ["React.js", "Node.js", "Express", "Leaflet", "GIS", "MySQL"],
    github: "https://github.com/Chalknock",
    folder: "renewable-energy-system",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png"],
  },
  {
    number: "04",
    title: "Post-Earthquake Building Inspection App",
    description:
      "A Flutter mobile app for post-disaster field inspections enabling rapid data collection, real-time reporting, and offline support for building safety inspectors.",
    tags: ["Flutter", "Dart", "SQLite", "Offline-first", "PDF Export", "GPS"],
    github: "https://github.com/Chalknock",
    folder: "post-earthquake-inspection",
    images: [] as string[],
  },
  {
    number: "05",
    title: "Expense Tracker Application",
    description:
      "Full-stack expense tracking with CRUD, category management, and a clean RESTful API built with Django REST Framework and React.js.",
    tags: ["React.js", "Django", "REST API", "Python", "MySQL"],
    github: "https://github.com/Chalknock",
    folder: "expense-tracker",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.jpg"],
  },
  {
    number: "06",
    title: "Automated Aquatic Life Support System",
    description:
      "An IoT system using Raspberry Pi and ESP32 with water quality sensors for real-time automated monitoring and environmental control.",
    tags: ["Raspberry Pi", "ESP32", "IoT", "Python", "MQTT"],
    github: "https://github.com/Chalknock",
    folder: "aquatic-life-support",
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
