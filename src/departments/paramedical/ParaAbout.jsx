import React from "react";
import { Link } from "react-router-dom";

import {

    HeartPulse,
    Hospital,
    Microscope,
    ArrowRight

} from "lucide-react";


export default function ParaHome() {

    return (

        <div style={styles.container}>


            {/* HERO */}

            <section style={styles.hero}>

                <div style={styles.overlay} />

                <div style={styles.heroContent}>

                    <span style={styles.badge}>
                        Healthcare Skill Development
                    </span>


                    <h1 style={styles.title}>

                        Ram Udar Singh

                        <br />

                        <span style={styles.accent}>
                            Paramedical Institute
                        </span>

                    </h1>


                    <p style={styles.subtitle}>

                        Professional paramedical training programs
                        focused on patient care, diagnostics,
                        emergency response and hospital support services.

                    </p>



                    <div style={styles.buttonGroup}>

                        <Link
                            to="/paramedical/admission"
                            style={styles.primaryBtn}
                        >

                            Apply Now

                        </Link>


                        <Link
                            to="/paramedical/about"
                            style={styles.secondaryBtn}
                        >

                            Know More

                        </Link>

                    </div>

                </div>

            </section>



            {/* PROGRAMS */}

            <section style={styles.section}>


                <div style={styles.sectionHeader}>

                    <h2 style={styles.sectionTitle}>
                        Healthcare Programs
                    </h2>

                    <div style={styles.underline} />

                </div>



                <div style={styles.grid}>


                    <ProgramCard

                        icon={<Hospital size={34} color="#059669" />}

                        title="General Duty Assistant"

                        desc="Patient care assistance,
ward management and hospital operations."

                    />



                    <ProgramCard

                        icon={<Microscope size={34} color="#059669" />}

                        title="Medical Lab Technician"

                        desc="Diagnostic testing,
sample handling and laboratory procedures."

                    />



                    <ProgramCard

                        icon={<HeartPulse size={34} color="#059669" />}

                        title="Nursing Assistant"

                        desc="Support doctors and nurses
during patient care and treatment."

                    />

                </div>

            </section>




            {/* CTA */}

            <section style={styles.ctaSection}>

                <h3 style={styles.ctaText}>

                    Start Your Healthcare Career Today

                </h3>


                <Link

                    to="/paramedical/admission"

                    style={styles.ctaBtn}

                >

                    Apply For Admission

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

    container: {
        background: "transparent",
        fontFamily: '"Plus Jakarta Sans","Inter",sans-serif'
    },


    hero: {
        height: "90vh",

        background:
            "linear-gradient(135deg,#065f46,#059669)",

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
        background: "rgba(255,255,255,.12)",
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
        color: "#a7f3d0"
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
        color: "#059669",
        padding: "1rem 2.3rem",
        borderRadius: ".8rem",
        textDecoration: "none",
        fontWeight: 600
    },

    secondaryBtn: {
        border: "1px solid white",
        padding: "1rem 2.3rem",
        borderRadius: ".8rem",
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
        background: "#059669",
        margin: "1rem auto"
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
        fontSize: "1.7rem",
        fontWeight: 700,
        marginBottom: "1.5rem",
        color: "#0f172a"
    },

    ctaBtn: {
        background: "#059669",
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