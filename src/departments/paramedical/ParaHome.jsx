import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope, HeartPulse, Syringe, ArrowRight } from "lucide-react";

export default function ParaHome() {

  return (

    <div style={styles.container}>

      {/* HERO SECTION */}

      <section style={styles.hero}>

        <div style={styles.overlay} />

        <div style={styles.heroContent}>

          <span style={styles.badge}>
            Healthcare Training Excellence
          </span>

          <h1 style={styles.title}>
            Ram Udar Singh <br />
            <span style={styles.accent}>
              Paramedical Institute
            </span>
          </h1>

          <p style={styles.subtitle}>
            Professional paramedical diploma programs focused on
            clinical training, patient care assistance and
            healthcare support services.
          </p>

          <div style={styles.buttonGroup}>
            <Link to="/paramedical/admission" style={styles.primaryBtn}>
              Apply Now
            </Link>

            <Link to="/paramedical/contact" style={styles.secondaryBtn}>
              Enquire Today
            </Link>
          </div>

        </div>
      </section>



      {/* PROGRAM SECTION */}

      <section style={styles.section}>

        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Our Paramedical Programs
          </h2>
          <div style={styles.underline} />
        </div>

        <div style={styles.grid}>

          <ProgramCard
            icon={<Stethoscope size={32} color="#059669" />}
            title="Medical Lab Technology"
            desc="Training in laboratory testing, diagnostics and pathology procedures."
          />

          <ProgramCard
            icon={<HeartPulse size={32} color="#059669" />}
            title="Operation Theatre Assistant"
            desc="Clinical exposure for assisting surgeons and managing OT environments."
          />

          <ProgramCard
            icon={<Syringe size={32} color="#059669" />}
            title="Nursing Assistant"
            desc="Patient care support training including hospital assistance skills."
          />

        </div>

      </section>



      {/* CTA */}

      <section style={styles.ctaSection}>
        <Link to="/paramedical/admission" style={styles.ctaButton}>
          Start Your Healthcare Career
          <ArrowRight size={18} />
        </Link>
      </section>

    </div>

  );
}



/* CARD */

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



/* STYLES */

const styles = {

  container:{
    background: "transparent",
    minHeight:"100vh",
    fontFamily:'"Plus Jakarta Sans","Inter",sans-serif'
  },

  hero:{
    height:"85vh",
    background: "linear-gradient(135deg, rgba(6,95,70,0.75), rgba(16,185,129,0.6))", backdropFilter: "blur(4px)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    color:"white",
    padding:"0 20px"
  },

  overlay:{
    position:"absolute",
    inset:0,
    background:"rgba(0,0,0,.45)"
  },

  heroContent:{
    position:"relative",
    zIndex:2,
    maxWidth:"900px"
  },

  badge:{
    background:"rgba(255,255,255,.15)",
    padding:"6px 16px",
    borderRadius:"100px",
    fontSize:".8rem",
    fontWeight:600
  },

  title:{
    fontSize:"clamp(2.5rem,5vw,4rem)",
    fontWeight:800,
    margin:"1.5rem 0"
  },

  accent:{
    color:"#a7f3d0"
  },

  subtitle:{
    fontSize:"1.1rem",
    marginBottom:"2rem",
    lineHeight:1.6
  },

  buttonGroup:{
    display:"flex",
    gap:"1rem",
    justifyContent:"center",
    flexWrap:"wrap"
  },

  primaryBtn:{
    background:"#ffffff",
    color:"#059669",
    padding:"1rem 2rem",
    borderRadius:".8rem",
    textDecoration:"none",
    fontWeight:600
  },

  secondaryBtn:{
    border:"1px solid white",
    padding:"1rem 2rem",
    borderRadius:".8rem",
    color:"white",
    textDecoration:"none",
    fontWeight:600
  },

  section:{
    maxWidth:"1200px",
    margin:"0 auto",
    padding:"5rem 20px"
  },

  sectionHeader:{
    textAlign:"center",
    marginBottom:"4rem"
  },

  sectionTitle:{
    fontSize:"2.3rem",
    fontWeight:800,
    color:"#0f172a"
  },

  underline:{
    width:"60px",
    height:"4px",
    background:"#10b981",
    margin:"1rem auto"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
    gap:"2rem"
  },

  card:{
    background:"white",
    padding:"2.5rem 2rem",
    borderRadius:"1.5rem",
    border:"1px solid #e2e8f0",
    textAlign:"center"
  },

  iconBox:{
    marginBottom:"1.5rem"
  },

  cardTitle:{
    fontSize:"1.3rem",
    fontWeight:700,
    marginBottom:"1rem",
    color:"#1e293b"
  },

  cardDesc:{
    color:"#64748b",
    lineHeight:1.6
  },

  ctaSection:{
    textAlign:"center",
    paddingBottom:"5rem"
  },

  ctaButton:{
    background:"#10b981",
    color:"white",
    padding:"1rem 2.5rem",
    borderRadius:".8rem",
    textDecoration:"none",
    fontWeight:600,
    display:"inline-flex",
    alignItems:"center",
    gap:".6rem"
  }

};