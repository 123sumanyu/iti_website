import React from "react";
import Navbar from "./components/Navbar";
import { Wrench, Flame, HeartPulse, Target, Eye, MapPin } from "lucide-react";

export default function About() {
    return (
        <div style={styles.container}>
            <Navbar />
            <div style={{ height: "75px" }} /> {/* Spacer since Home navbar is fixed */}

            {/* HERO SECTION */}
            <section style={styles.hero}>
                <div style={styles.overlay} />
                <div style={styles.heroContent}>
                    <span style={styles.badge}>Discover Our Legacy</span>
                    <h1 style={styles.title}>
                        About <span style={styles.accent}>Our Institute</span>
                    </h1>
                    <p style={styles.subtitle}>
                        Ram Udar Singh Technical Institute has been a beacon of skill-based
                        learning since 2017, uniting technical, safety, and healthcare education
                        under one prestigious umbrella.
                    </p>
                </div>
            </section>

            {/* INSTITUTE STORY */}
            <section style={styles.storySection}>
                <div style={styles.wrapper}>
                    <div style={styles.storyGrid}>
                        <div style={styles.textContent}>
                            <h2 style={styles.sectionTitle}>A Tradition of Excellence</h2>
                            <div style={styles.underlineLeft} />
                            <p style={styles.paragraph}>
                                Founded in 2017, <strong>Ram Udar Singh Technical Institute</strong> was
                                established with a profound mission to empower youth through industry-ready,
                                skill-based education. Located near Unaula Railway Station, Gorakhpur,
                                Uttar Pradesh, our campus provides accessible and transformative learning
                                experiences.
                            </p>
                            <p style={styles.paragraph}>
                                We recognized the growing demand for highly skilled professionals across
                                diverse industries. To meet this need, we expanding our expertise into three
                                specialized branches: Private ITI, Fire & Safety, and Paramedical Health Care.
                                Today, we stand as a leading multidisciplinary institution dedicated to shaping
                                confident and technically robust graduates.
                            </p>
                            <div style={styles.locationBox}>
                                <MapPin size={24} color="#2563eb" />
                                <span style={styles.locationText}>
                                    Near Unaula Railway Station, Gorakhpur, Uttar Pradesh
                                </span>
                            </div>
                        </div>

                        <div style={styles.visionMission}>
                            <div style={styles.infoCard}>
                                <div style={styles.cardHeader}>
                                    <Target size={28} color="#2563eb" />
                                    <h3 style={styles.infoTitle}>Our Unified Mission</h3>
                                </div>
                                <ul style={styles.list}>
                                    <li>Deliver uncompromising quality in technical and healthcare education.</li>
                                    <li>Promote youth skill development and rural empowerment.</li>
                                    <li>Create vast employment paths and support global safety initiatives.</li>
                                    <li>Bridge the gap between academic learning and industry demands.</li>
                                </ul>
                            </div>

                            <div style={styles.infoCard}>
                                <div style={styles.cardHeader}>
                                    <Eye size={28} color="#16a34a" />
                                    <h3 style={styles.infoTitle}>Our Global Vision</h3>
                                </div>
                                <p style={styles.infoText}>
                                    To be rapidly recognized as the premier multidisciplinary training
                                    institution in Eastern Uttar Pradesh, fostering responsible professionals
                                    who elevate standards in industrial safety, mechanical engineering, and
                                    patient care worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR DEPARTMENTS */}
            <section style={styles.departmentsSection}>
                <div style={styles.wrapper}>
                    <div style={styles.centerHeader}>
                        <h2 style={styles.sectionTitle}>Our Three Pillars of Education</h2>
                        <div style={styles.underlineCenter} />
                        <p style={styles.sectionSubtitle}>
                            Specialized departments tailored for modern industry needs.
                        </p>
                    </div>

                    <div style={styles.deptGrid}>
                        <div style={styles.deptCard}>
                            <div style={styles.iconCircleBlue}>
                                <Wrench size={32} color="#2563eb" />
                            </div>
                            <h3 style={styles.deptTitle}>Private ITI</h3>
                            <p style={styles.deptDesc}>
                                Empowering students with hands-on mechanical, electrical, and workshop
                                certifications. We mold students into technically strong fitters and
                                electricians prepared for complex industrial challenges.
                            </p>
                        </div>

                        <div style={styles.deptCard}>
                            <div style={styles.iconCircleRed}>
                                <Flame size={32} color="#dc2626" />
                            </div>
                            <h3 style={styles.deptTitle}>Fire & Safety</h3>
                            <p style={styles.deptDesc}>
                                Dedicated to cultivating rigorous safety standards. We train the next
                                generation of safety officers to evaluate risks, manage disasters, and
                                enforce occupational health regulations in high-stakes environments.
                            </p>
                        </div>

                        <div style={styles.deptCard}>
                            <div style={styles.iconCircleGreen}>
                                <HeartPulse size={32} color="#059669" />
                            </div>
                            <h3 style={styles.deptTitle}>Paramedical Institute</h3>
                            <p style={styles.deptDesc}>
                                Focused on saving lives and supporting medical infrastructure. We
                                provide comprehensive training for medical lab technicians, nursing
                                assistants, and general duty healthcare professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={styles.footer}>
                <p style={{ margin: 0 }}>
                    © {new Date().getFullYear()} Ram Udar Singh Technical Institute. All rights
                    reserved.
                </p>
            </footer>
        </div>
    );
}

/* ================= STYLES ================= */

const styles = {
    container: {
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        backgroundColor: "transparent",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    hero: {
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,58,138,0.85))",
        backdropFilter: "blur(4px)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
    overlay: {
        position: "absolute",
        inset: 0,
        background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05), rgba(0,0,0,0.2))",
    },
    heroContent: {
        position: "relative",
        zIndex: 2,
        maxWidth: "800px",
    },
    badge: {
        background: "rgba(255,255,255,0.15)",
        padding: "0.5rem 1rem",
        borderRadius: "100px",
        fontSize: "0.85rem",
        fontWeight: 600,
        letterSpacing: "1px",
        textTransform: "uppercase",
    },
    title: {
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 800,
        margin: "1.5rem 0 1rem",
        lineHeight: 1.2,
    },
    accent: {
        color: "#60a5fa",
    },
    subtitle: {
        fontSize: "1.15rem",
        lineHeight: 1.6,
        color: "#e2e8f0",
    },
    wrapper: {
        maxWidth: "1200px",
        margin: "0 auto",
    },
    storySection: {
        padding: "5rem 2rem",
        backgroundColor: "rgba(255,255,255,0.95)",
    },
    storyGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "4rem",
        alignItems: "center",
    },
    textContent: {
        color: "#1e293b",
    },
    sectionTitle: {
        fontSize: "2.2rem",
        fontWeight: 800,
        marginBottom: "0.5rem",
        color: "#0f172a",
    },
    underlineLeft: {
        width: "60px",
        height: "4px",
        backgroundColor: "#2563eb",
        borderRadius: "2px",
        marginBottom: "2rem",
    },
    paragraph: {
        fontSize: "1.05rem",
        lineHeight: 1.8,
        color: "#475569",
        marginBottom: "1.5rem",
    },
    locationBox: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "#f1f5f9",
        padding: "1rem 1.5rem",
        borderRadius: "0.75rem",
        marginTop: "2rem",
        border: "1px solid #e2e8f0",
    },
    locationText: {
        fontSize: "1rem",
        fontWeight: 600,
        color: "#334155",
    },
    visionMission: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
    },
    infoCard: {
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        border: "1px solid #f1f5f9",
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
    },
    infoTitle: {
        fontSize: "1.3rem",
        fontWeight: 700,
        margin: 0,
        color: "#0f172a",
    },
    list: {
        margin: 0,
        paddingLeft: "1.2rem",
        color: "#475569",
        lineHeight: 1.7,
    },
    infoText: {
        margin: 0,
        color: "#475569",
        lineHeight: 1.7,
    },
    departmentsSection: {
        padding: "5rem 2rem",
        background: "rgba(241,245,249,0.9)", // slight off-white for contrast
    },
    centerHeader: {
        textAlign: "center",
        marginBottom: "4rem",
    },
    underlineCenter: {
        width: "60px",
        height: "4px",
        backgroundColor: "#2563eb",
        borderRadius: "2px",
        margin: "1rem auto",
    },
    sectionSubtitle: {
        fontSize: "1.1rem",
        color: "#64748b",
    },
    deptGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
    },
    deptCard: {
        backgroundColor: "#ffffff",
        padding: "2.5rem 2rem",
        borderRadius: "1rem",
        textAlign: "center",
        boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
        border: "1px solid #e2e8f0",
        transition: "transform 0.3s ease",
    },
    iconCircleBlue: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#eff6ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1.5rem",
    },
    iconCircleRed: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#fef2f2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1.5rem",
    },
    iconCircleGreen: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#ecfdf5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1.5rem",
    },
    deptTitle: {
        fontSize: "1.4rem",
        fontWeight: 800,
        color: "#1e293b",
        marginBottom: "1rem",
    },
    deptDesc: {
        color: "#475569",
        lineHeight: 1.6,
    },
    footer: {
        backgroundColor: "rgba(15,23,42,0.95)",
        padding: "2rem",
        textAlign: "center",
        color: "#94a3b8",
        marginTop: "auto",
    },
};
