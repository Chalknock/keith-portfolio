export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a Computer Engineer and backend-focused Full-Stack
              Developer based in the Philippines, specializing in building
              scalable web and IoT systems for real-world applications.
            </p>
            <p>
              At <strong>Komunidad</strong>, I develop and maintain
              production-grade web applications using Django, implement secure
              enterprise authentication (SAML SSO), and architect real-time
              services using MQTT across Linux-based cloud and on-premise
              environments.
            </p>
            <p>
              Previously as a Science Research Analyst at <strong>MMSU</strong>,
              I built GIS-enabled data platforms and deployed containerized
              applications using Docker and Kubernetes to support research and
              data analysis workflows.
            </p>
            <p>
              On the side, I build civic technology tools —{" "}
              <strong>Bantay Gusali</strong> and{" "}
              <strong>Bantay Proyekto</strong> — Flutter apps designed to
              improve government accountability and infrastructure transparency
              in the Philippines.
            </p>
          </div>
          <div>
            <div className="stats-grid">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "6+", label: "Projects Shipped" },
                { value: "10+", label: "Technologies" },
                { value: "2", label: "Civic Tech Apps" },
              ].map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="status-badge">
              <div className="status-dot" />
              <span className="status-text">
                Currently @ Komunidad · Taguig City, PH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
