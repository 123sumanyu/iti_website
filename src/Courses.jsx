import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Courses() {
    const location = useLocation();
    const path = location.pathname;

    const isIti = path.startsWith('/iti');
    const isFireSafety = path.startsWith('/fire-safety');
    const isParamedical = path.startsWith('/paramedical');

    const isDepartmentSpecific = isIti || isFireSafety || isParamedical;

    const COURSES = {
        ITI: ["Electrician", "Fitter"],
        FireSafety: [
            "DIPLOMA IN FIRE & SAFETY METHODS",
            "DIPLOMA IN INDUSTRIAL SAFETY",
            "DIPLOMA IN ELECTRICAL SAFETY",
            "DIPLOMA IN FIRE FIGHTING",
            "DIPLOMA IN ENVIRONMENTAL SAFETY",
            "DIPLOMA IN FIRE & SAFETY ENGINEERING TECHNIQUES (1 & 2 Years)",
            "DIPLOMA IN FIRE ENGINEERING & SAFETY MANAGEMENT (1 & 2 Years)",
            "DIPLOMA IN HEALTH, ENVIRONMENT & SAFETY ENGINEERING",
            "DIPLOMA IN HEALTH, SAFETY & ENVIRONMENT MANAGEMENT",
            "DIPLOMA IN CONSTRUCTION SAFETY MANAGEMENT",
            "DIPLOMA IN OCCUPATIONAL SAFETY & HEALTH",
            "DIPLOMA IN FIRST AID & EMERGENCY CARE",
            "DIPLOMA IN FIRE SAFETY & SECURITY MANAGEMENT",
            "DIPLOMA IN FIRE AND CONSTRUCTION SAFETY MANAGEMENT",
            "DIPLOMA IN INDUSTRIAL ENVIRONMENTAL SAFETY",
            "POST DIPLOMA FIRE & SAFETY ENGINEERING TECHNIQUES",
            "ADVANCED DIPLOMA IN OCCUPATIONAL SAFETY, HEALTH & ENVIRONMENTAL MGMT",
            "POST DIPLOMA IN ENVIRONMENT SAFETY ENGINEERING",
            "ADVANCED DIPLOMA IN FIRE & INDUSTRIAL SAFETY MANAGEMENT",
            "POST DIPLOMA IN FIRE & INDUSTRIAL SAFETY MANAGEMENT",
            "POST DIPLOMA IN PETRO CHEMICAL PROCESS SAFETY & ENGINEERING",
            "ADVANCED DIPLOMA IN INDUSTRIAL SAFETY",
            "POST DIPLOMA IN HAZARD ANALYSIS CRITICAL CONTROL POINT",
            "POST DIPLOMA IN POWER PLANT ENGINEERING, SAFETY & TECHNOLOGY",
            "ADVANCED DIPLOMA IN OCCUPATIONAL HEALTH, SAFETY, ENVIRONMENT & RISK MGMT",
            "ADVANCED DIPLOMA IN OFFSHORE, RIG, OIL AND GAS SAFETY ENGINEERING",
            "ADVANCED DIPLOMA IN OIL & GAS SAFETY ENGINEERING",
            "POST DIPLOMA IN TRANSPORT OF HAZARDOUS AND DANGEROUS GOODS BY ROAD",
            "POST DIPLOMA IN FIRE, INDUSTRIAL & ENVIRONMENT HEALTH SAFETY MGMT",
            "ADVANCED DIPLOMA IN FIRE ENGINEERING & INDUSTRIAL SAFETY MANAGEMENT",
            "ADVANCED DIPLOMA IN CERTIFIED HEALTH SAFETY & ENVIRONMENT"
        ],
        Paramedical: ["General Duty Assistant (Advanced)", "Many more paramedical courses available"]
    };

    const sectionsToRender = [];
    if (isIti) sectionsToRender.push({ title: "ITI Programs", key: "ITI", icon: "🛠️", courses: COURSES.ITI });
    else if (isFireSafety) sectionsToRender.push({ title: "Fire & Safety Programs", key: "FireSafety", icon: "🔥", courses: COURSES.FireSafety });
    else if (isParamedical) sectionsToRender.push({ title: "Paramedical Programs", key: "Paramedical", icon: "🩺", courses: COURSES.Paramedical });
    else {
        sectionsToRender.push({ title: "ITI Programs", key: "ITI", icon: "🛠️", courses: COURSES.ITI });
        sectionsToRender.push({ title: "Fire & Safety Programs", key: "FireSafety", icon: "🔥", courses: COURSES.FireSafety });
        sectionsToRender.push({ title: "Paramedical Programs", key: "Paramedical", icon: "🩺", courses: COURSES.Paramedical });
    }

    return (
        <div style={{ backgroundColor: 'transparent', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', width: '100%', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>

            {!isDepartmentSpecific && <Navbar />}
            {!isDepartmentSpecific && <div style={{ height: '75px', width: '100%' }}></div>}

            <section style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,58,138,0.7) 100%)', backdropFilter: 'blur(4px)', color: 'white', padding: '5rem 1.5rem', textAlign: 'center', width: '100%', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.025em', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                        Courses Offered
                    </h1>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, lineHeight: 1.6, color: '#e2e8f0', opacity: 0.95 }}>
                        Explore our diverse range of technical, safety, and healthcare programs.
                    </p>
                </div>
            </section>

            <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%', flexGrow: 1 }}>
                {sectionsToRender.map((section, idx) => (
                    <div key={idx} style={{ marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <span style={{ fontSize: '2.5rem' }}>{section.icon}</span>
                            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                                {section.title}
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                            {section.courses.map((course, cIdx) => (
                                <div key={cIdx} style={{ background: 'rgba(255,255,255,0.95)', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2563eb', flexShrink: 0 }} />
                                    <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1e293b', lineHeight: 1.4 }}>{course}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <footer style={{ backgroundColor: 'rgba(15,23,42,0.95)', borderTop: '1px solid #334155', padding: '2rem 1.5rem', textAlign: 'center', color: '#64748b' }}>
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} Ram Udar Singh Technical Institute. All rights reserved.</p>
            </footer>
        </div>
    );
}
