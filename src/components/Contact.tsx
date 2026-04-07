import { ArrowUpRight, Mail, Link, Computer, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "katumaneng24@gmail.com",
    href: "mailto:katumaneng24@gmail.com",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "keithangelotumaneng",
    href: "https://www.linkedin.com/in/keithangelotumaneng/",
  },
  {
    icon: Computer,
    label: "GitHub",
    value: "Chalknock",
    href: "https://github.com/Chalknock",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Laoag City, Ilocos Norte, Philippines",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section dot-grid">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          <div>
            <h3 className="contact-heading">
              Let&apos;s build something{" "}
              <span className="contact-accent">great</span> together.
            </h3>
            <p className="contact-desc">
              I&apos;m open to new opportunities — full-time roles, freelance
              projects, or just a conversation about interesting tech
              challenges. Don&apos;t hesitate to reach out!
            </p>
            <a href="mailto:katumaneng24@gmail.com" className="btn-primary">
              Say Hello <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="contact-links-list">
            {contactLinks.map(({ icon: Icon, label, value, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contact-link-item"
                >
                  <div className="contact-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="contact-link-label">{label}</div>
                    <div className="contact-link-value">{value}</div>
                  </div>
                  <ArrowUpRight size={14} className="contact-arrow" />
                </a>
              ) : (
                <div key={label} className="contact-link-item">
                  <div className="contact-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="contact-link-label">{label}</div>
                    <div className="contact-link-value">{value}</div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
