const experiences = [
  {
    company: "Komunidad",
    role: "Software Engineer",
    period: "April 2024 — Present",
    location: "Bonifacio Global City, Taguig City, Philippines",
    bullets: [
      "Developed and maintained full-stack web applications using Django, improving backend reliability and optimizing API performance.",
      "Implemented SAML SSO authentication across multiple applications; configured AWS IAM Identity Center for local/staging testing.",
      "Developed systemd-managed services for MQTT and SFTP integrated with Django for real-time data processing and persistent background services.",
      "Provisioned and managed Linux VMs; collaborated in Agile cycles contributing to sprint planning and feature delivery.",
    ],
    tags: [
      "Django",
      "Python",
      "SAML SSO",
      "MQTT",
      "Linux",
      "AWS IAM",
      "SFTP",
      "Git",
    ],
  },
  {
    company: "Mariano Marcos State University (MMSU)",
    role: "Science Research Analyst",
    period: "January 2023 — December 2023",
    location: "Batac City, Ilocos Norte, Philippines",
    bullets: [
      "Developed full-stack web applications with Django (backend) and React.js (frontend), improving data accessibility for research workflows.",
      "Designed and implemented a GIS-based web application using Node.js/Express and React.js with Leaflet for interactive geospatial mapping.",
      "Managed server deployment using Git, Docker, Kubernetes, and Linux on on-premise infrastructure.",
    ],
    tags: [
      "Django",
      "React.js",
      "Node.js",
      "GIS/Leaflet",
      "Docker",
      "Kubernetes",
      "Linux",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.company} className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-location">{exp.location}</div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>
                    <span className="bullet-dot" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="tags">
                {exp.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
