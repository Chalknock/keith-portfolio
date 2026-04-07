const groups = [
  {
    cat: "Languages",
    icon: "{ }",
    skills: ["JavaScript", "Python", "Dart", "TypeScript"],
  },
  {
    cat: "Frameworks",
    icon: "⚡",
    skills: ["Django", "React.js", "Node.js", "Flutter", "Next.js"],
  },
  {
    cat: "Databases",
    icon: "🗄",
    skills: ["MySQL", "MongoDB", "MSSQL", "SQLite", "Firebase"],
  },
  {
    cat: "DevOps & Cloud",
    icon: "☁",
    skills: ["Docker", "Kubernetes", "Linux", "Nginx", "GCP", "AWS IAM"],
  },
  {
    cat: "Networking",
    icon: "🔗",
    skills: ["MQTT", "SAML SSO", "REST APIs", "SFTP", "Tailscale"],
  },
  {
    cat: "Tools & Other",
    icon: "🛠",
    skills: ["Git", "VS Code", "Leaflet/GIS", "Raspberry Pi", "ESP32"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.cat} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">{g.icon}</div>
                <span className="skill-category">{g.cat}</span>
              </div>
              <div className="skill-pills">
                {g.skills.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
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
