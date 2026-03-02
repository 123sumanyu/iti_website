import React from "react";
import { Link } from "react-router-dom";
import { Flame, ShieldCheck, Building2, ArrowRight } from "lucide-react";

export default function FireHome() {

  return (
    <div style={styles.container}>

      {/* HERO SECTION */}

      <section style={styles.hero}>

        <div style={styles.overlay} />

        <div style={styles.heroContent}>

          <span style={styles.badge}>
            Industrial Safety Excellence
          </span>

          <h1 style={styles.title}>
            Ram Udar Singh <br />

            <span style={styles.accent}>
              Fire & Safety Institute
            </span>

          </h1>

          <p style={styles.subtitle}>
            Professional diploma programs focused on fire prevention,
            disaster response, industrial risk assessment and workplace
            safety standards.
          </p>


          <div style={styles.buttonGroup}>

            <Link
              to="/fire-safety/admission"
              style={styles.primaryBtn}
            >
              Apply Now
            </Link>

            <Link
              to="/fire-safety/contact"
              style={styles.secondaryBtn}
            >
              Enquire Today
            </Link>

          </div>

        </div>

      </section>


      {/* PROGRAMS SECTION */}

      <section style={styles.section}>

        <div style={styles.sectionHeader}>

          <h2 style={styles.sectionTitle}>
            Our Safety Programs
          </h2>

          <div style={styles.underline} />

        </div>


        <div style={styles.grid}>

          <ProgramCard

            icon={<Flame size={32} color="#dc2626" />}

            title="Diploma in Fire & Safety"

            desc="Comprehensive training in fire prevention,
            rescue operations and emergency response planning."

          />

          <ProgramCard

            icon={<ShieldCheck size={32} color="#dc2626" />}

            title="Industrial Safety Management"

            desc="Learn hazard control, safety audits,
            workplace compliance and accident prevention."

          />

          <ProgramCard

            icon={<Building2 size={32} color="#dc2626" />}

            title="Construction Safety"

            desc="Site inspection, scaffolding safety,
            equipment handling and labour protection training."

          />

        </div>

      </section>



      {/* CTA SECTION */}

      <section style={styles.ctaSection}>

        <h3 style={styles.ctaText}>
          Start Your Career In Industrial Safety Today
        </h3>

        <Link
          to="/fire-safety/admission"
          style={styles.ctaButton}
        >

          Apply For Admission

          <ArrowRight size={18} />

        </Link>

      </section>


    </div>
  );
}


/* ---------- CARD ---------- */

const ProgramCard = ({ icon, title, desc }) => (

  <div style={styles.card}>

    <div style={styles.iconBox}>

      {icon}

    </div>

    <h3 style={styles.cardTitle}>
      {title}
    </h3>

    <p style={styles.cardDesc}>
      {desc}
    </p>

  </div>

);



/* ---------- STYLES ---------- */

const styles = {

  container: {
    background: "transparent",
    fontFamily: '"Plus Jakarta Sans","Inter",sans-serif'
  },



  hero: {
    height: "90vh",
    background: "linear-gradient(135deg, rgba(127,29,29,0.75), rgba(220,38,38,0.6))", backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    position: "relative",
    padding: "0 20px"
  },


  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0.35))"
  },



  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px"
  },



  badge: {
    background: "rgba(255,255,255,.1)",
    padding: "6px 16px",
    borderRadius: "100px",
    fontSize: ".8rem",
    fontWeight: 600
  },



  title: {
    fontSize: "clamp(2.5rem,5vw,4rem)",
    fontWeight: 800,
    margin: "1.5rem 0"
  },



  accent: {
    color: "#fecaca"
  },



  subtitle: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    marginBottom: "2.2rem"
  },



  buttonGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap"
  },



  primaryBtn: {
    background: "#fff",
    color: "#dc2626",
    padding: "1rem 2.2rem",
    borderRadius: "0.8rem",
    textDecoration: "none",
    fontWeight: 600
  },



  secondaryBtn: {
    border: "1px solid white",
    padding: "1rem 2.2rem",
    borderRadius: "0.8rem",
    color: "white",
    textDecoration: "none",
    fontWeight: 600
  },



  section: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "5rem 20px"
  },



  sectionHeader: {
    textAlign: "center",
    marginBottom: "4rem"
  },



  sectionTitle: {
    fontSize: "2.3rem",
    fontWeight: 800,
    color: "#0f172a"
  },



  underline: {
    width: "60px",
    height: "4px",
    background: "#dc2626",
    margin: "1rem auto",
    borderRadius: "2px"
  },



  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(320px,1fr))",
    gap: "2rem"
  },



  card: {
    background: "white",
    padding: "2.5rem 2rem",
    borderRadius: "1.5rem",
    textAlign: "center",
    border: "1px solid #e2e8f0",
    boxShadow:
      "0 10px 20px rgba(0,0,0,.05)"
  },



  iconBox: {
    marginBottom: "1.3rem"
  },



  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#1e293b"
  },



  cardDesc: {
    color: "#64748b",
    lineHeight: 1.6
  },



  ctaSection: {
    textAlign: "center",
    paddingBottom: "6rem"
  },



  ctaText: {
    fontSize: "1.6rem",
    fontWeight: 700,
    marginBottom: "1.5rem",
    color: "#1e293b"
  },



  ctaButton: {
    background: "#dc2626",
    color: "white",
    padding: "1rem 2.5rem",
    borderRadius: ".8rem",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: ".6rem"
  }

};