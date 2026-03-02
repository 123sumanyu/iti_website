import React from "react";
import { ShieldCheck, Flame, Target, Eye } from "lucide-react";

export default function FireAbout() {
  return (
    <div style={styles.container}>

      {/* HERO HEADER */}
      <section style={styles.hero}>
        <div style={styles.overlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            About <span style={styles.accent}>Fire & Safety</span>
          </h1>
          <p style={styles.subtitle}>
            Building highly trained professionals in industrial safety,
            fire prevention and disaster management since 2017.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={styles.section}>
        <div style={styles.wrapper}>

          <h2 style={styles.sectionTitle}>
            Ram Udar Singh Fire & Safety Institute
          </h2>

          <p style={styles.description}>
            Ram Udar Singh Technical & Management, widely known as
            Ram Udar Singh Fire & Safety, was established in 2017
            to provide professional education in fire prevention,
            industrial safety, occupational health, and emergency response.
            The institute is located near Unaula Railway Station, Gorakhpur,
            offering accessible and quality technical education.
          </p>

          {/* COURSES */}
          <div style={styles.grid}>

            <div style={styles.card}>
              <Flame size={30} color="#dc2626" />
              <h3 style={styles.cardTitle}>Safety Programs</h3>
              <ul style={styles.list}>
                <li>Fire & Industrial Safety</li>
                <li>Occupational Health & Safety</li>
                <li>Disaster Management</li>
                <li>Industrial Risk Assessment</li>
                <li>Fire Prevention Systems</li>
              </ul>
            </div>

            <div style={styles.card}>
              <Target size={30} color="#dc2626" />
              <h3 style={styles.cardTitle}>Our Mission</h3>
              <ul style={styles.list}>
                <li>Create trained safety officers</li>
                <li>Promote workplace safety awareness</li>
                <li>Reduce industrial accidents</li>
                <li>Prepare students for global careers</li>
              </ul>
            </div>

            <div style={styles.card}>
              <Eye size={30} color="#dc2626" />
              <h3 style={styles.cardTitle}>Our Vision</h3>
              <p style={styles.visionText}>
                To become a trusted institute in fire and industrial safety
                education by producing highly trained professionals
                who contribute to safer workplaces across industries.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


/* ================= STYLES ================= */

const styles = {
  container: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    backgroundColor: "transparent",
  },

  hero: {
    height: "50vh",
    background: "linear-gradient(135deg, #7f1d1d, #dc2626)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
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
    maxWidth: "800px",
    padding: "0 20px",
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 800,
    marginBottom: "1rem",
  },

  accent: {
    color: "#fecaca",
  },

  subtitle: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
  },

  section: {
    padding: "5rem 20px",
  },

  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: "1.5rem",
    color: "#1e293b",
  },

  description: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 4rem",
    color: "#475569",
    lineHeight: 1.7,
    fontSize: "1.05rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },

  card: {
    backgroundColor: "white",
    padding: "2.5rem 2rem",
    borderRadius: "1.5rem",
    textAlign: "center",
    border: "1px solid #e2e8f0",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    margin: "1rem 0",
    color: "#1e293b",
  },

  list: {
    listStyle: "none",
    padding: 0,
    color: "#64748b",
    lineHeight: 1.8,
  },

  visionText: {
    color: "#64748b",
    lineHeight: 1.7,
  },
};