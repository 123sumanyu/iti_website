import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Zap, Settings, ArrowRight } from "lucide-react";

export default function ITIHome() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.overlay} />
        <div style={styles.heroContent}>
          <span style={styles.badge}>Technical Skill Development</span>

          <h1 style={styles.title}>
            Ram Udar Singh <br />
            <span style={styles.accent}>Industrial Training Institute</span>
          </h1>

          <p style={styles.subtitle}>
            Industry-focused ITI programs designed to build highly skilled
            technicians in electrical, mechanical and workshop trades
            with hands-on practical training.
          </p>

          <div style={styles.buttonGroup}>
            <Link to="/iti/admission" style={styles.primaryBtn}>
              Apply Now
            </Link>
            <Link to="/iti/contact" style={styles.secondaryBtn}>
              Enquire Today
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our ITI Trades</h2>
          <div style={styles.underline} />
        </div>

        <div style={styles.grid}>
          <ProgramCard
            icon={<Zap size={32} color="#2563eb" />}
            title="Electrician Trade"
            desc="Practical training in electrical wiring, motor installation, and industrial power systems."
          />

          <ProgramCard
            icon={<Wrench size={32} color="#16a34a" />}
            title="Fitter Trade"
            desc="Hands-on mechanical fitting, maintenance, tools handling and workshop operations."
          />

          <ProgramCard
            icon={<Settings size={32} color="#f59e0b" />}
            title="Mechanical Technician"
            desc="Machine assembly, industrial repair, fabrication techniques and technical drawing."
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.ctaSection}>
        <Link to="/iti/admission" style={styles.ctaButton}>
          Start Your ITI Career <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

/* ---------- Reusable Card ---------- */

const ProgramCard = ({ icon, title, desc }) => (
  <div style={styles.card}>
    <div style={styles.iconBox}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </div>
);

/* ---------- Styles ---------- */

const styles = {
  container: {
    backgroundColor: "transparent",
    minHeight: "100vh",
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
  },

  hero: {
    height: "85vh",
    background: "linear-gradient(135deg, rgba(30,58,138,0.75), rgba(37,99,235,0.6))", backdropFilter: "blur(4px)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: "0 20px",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0.35))",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
  },

  badge: {
    background: "rgba(255,255,255,0.1)",
    padding: "6px 16px",
    borderRadius: "100px",
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "1px",
  },

  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 800,
    margin: "1.5rem 0",
  },

  accent: {
    color: "#93c5fd",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#f1f5f9",
    marginBottom: "2rem",
    lineHeight: 1.6,
  },

  buttonGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryBtn: {
    backgroundColor: "#ffffff",
    color: "#2563eb",
    padding: "0.9rem 2rem",
    borderRadius: "0.75rem",
    textDecoration: "none",
    fontWeight: 600,
  },

  secondaryBtn: {
    border: "1px solid white",
    padding: "0.9rem 2rem",
    borderRadius: "0.75rem",
    textDecoration: "none",
    color: "white",
    fontWeight: 600,
  },

  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "5rem 20px",
  },

  sectionHeader: {
    textAlign: "center",
    marginBottom: "4rem",
  },

  sectionTitle: {
    fontSize: "2.3rem",
    fontWeight: 800,
    color: "#0f172a",
  },

  underline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#2563eb",
    margin: "1rem auto",
    borderRadius: "2px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },

  card: {
    backgroundColor: "white",
    padding: "2.5rem 2rem",
    borderRadius: "1.5rem",
    textAlign: "center",
    border: "1px solid #e2e8f0",
  },

  iconBox: {
    marginBottom: "1.5rem",
  },

  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#1e293b",
  },

  cardDesc: {
    color: "#64748b",
    lineHeight: 1.6,
  },

  ctaSection: {
    paddingBottom: "5rem",
    textAlign: "center",
  },

  ctaButton: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "1rem 2.5rem",
    borderRadius: "0.75rem",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  },
};