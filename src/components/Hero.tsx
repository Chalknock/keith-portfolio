"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section dot-grid">
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />

      <div className="container">
        <div className="hero-grid">
          {/* ── Text column ── */}
          <div>
            <span className="hero-label animate delay-1">
              &gt; Hello, world! I&apos;m
            </span>

            <h1 className="hero-name animate delay-2">
              Keith Angelo
              <br />
              <span className="name-accent">Tumaneng</span>
            </h1>

            <div className="hero-subtitle-row animate delay-3">
              <div className="hero-subtitle-line" />
              <p className="hero-subtitle-text">
                Backend-Focused Full-Stack Developer
              </p>
            </div>

            <p className="hero-desc animate delay-3">
              I design and build scalable backend systems, real-time services,
              and IoT-integrated applications using <strong>Django</strong>,{" "}
              <strong>React</strong>, and <strong>Node.js</strong>. Experienced
              in SAML SSO, MQTT architectures, and deploying reliable production
              systems on Linux-based infrastructure.
            </p>

            <div className="hero-actions animate delay-4">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowDown size={14} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            <div className="hero-socials animate delay-5">
              <a
                href="https://github.com/Chalknock"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/keithangelotumaneng/"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:katumaneng24@gmail.com"
                className="hero-social-link"
              >
                Email ↗
              </a>
              <div className="hero-social-divider" />
              <span className="hero-location">Laoag City, Philippines</span>
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="hero-image-wrap animate delay-2">
            <div className="hero-image-ring">
              <div className="hero-image-inner">
                <Image
                  src="/images/profile.jpg"
                  alt="Keith Angelo Tumaneng"
                  width={320}
                  height={320}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="hero-image-badge">
              <div className="hero-image-badge-dot" />
              <span className="hero-image-badge-text">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
