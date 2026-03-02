import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { supabase } from "./supabase";

export default function Admission() {
    const location = useLocation();
    const path = location.pathname;

    // Determine if we are within a department based on the URL
    const isIti = path.startsWith('/iti');
    const isFireSafety = path.startsWith('/fire-safety');
    const isParamedical = path.startsWith('/paramedical');

    const isDepartmentSpecific = isIti || isFireSafety || isParamedical;

    // Sector and course data
    const SECTORS = [
        { label: "ITI", value: "ITI" },
        { label: "Fire & Safety", value: "FireSafety" },
        { label: "Paramedical", value: "Paramedical" }
    ];

    const COURSES = {
        ITI: ["Any", "Electrician", "Fitter"],
        FireSafety: [
            "Any",
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
        Paramedical: ["Any", "General Duty Assistant (Advanced)", "Many more paramedical courses available"]
    };

    // Pre-select sector if accessed from a department route
    const defaultSector = isIti ? "ITI" : isFireSafety ? "FireSafety" : isParamedical ? "Paramedical" : "";

    // Form state
    const [selectedSector, setSelectedSector] = useState(defaultSector);
    const [course, setCourse] = useState("");

    // New form state
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });

    const sector = isDepartmentSpecific ? defaultSector : selectedSector;
    const setSector = setSelectedSector;

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        const { data, error } = await supabase
            .from('admission_requests')
            .insert([
                {
                    name,
                    mobile,
                    email,
                    dob,
                    sector,
                    course,
                    department: isDepartmentSpecific ? defaultSector : 'Main',
                    status: 'pending' // default status
                }
            ]);

        if (error) {
            console.error("Error inserting data:", error);
            setMessage({ text: "Failed to submit registration. Please try again.", type: "error" });
        } else {
            setMessage({ text: "Registration submitted successfully!", type: "success" });
            // Reset form
            setName("");
            setMobile("");
            setEmail("");
            setDob("");
            if (!isDepartmentSpecific) {
                setSector("");
            }
            setCourse("");
        }
        setLoading(false);
    };

    // Reusable input style object for clean code
    const inputStyle = {
        width: '100%',
        padding: '0.85rem 1rem',
        borderRadius: '0.75rem',
        border: '1px solid #cbd5e1',
        background: 'rgba(255,255,255,0.95)',
        color: '#1e293b',
        fontSize: '1rem',
        boxSizing: 'border-box',
        marginTop: '0.5rem',
        outline: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
    };

    const labelStyle = {
        display: 'block',
        fontWeight: 600,
        color: '#334155',
        fontSize: '0.95rem'
    };

    return (
        <div style={{ backgroundColor: 'transparent', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', width: '100%', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>

            {/* 1. Navbar - only display if it's the main website route to avoid duplicating the layout's navbar */}
            {!isDepartmentSpecific && <Navbar />}

            {/* Spacer only needed if we are rendering the main fixed navbar */}
            {!isDepartmentSpecific && <div style={{ height: '75px', width: '100%' }}></div>}

            {/* 2. Premium Hero Section */}
            <section style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,58,138,0.7) 100%)', backdropFilter: 'blur(4px)', color: 'white', padding: '5rem 1.5rem', textAlign: 'center', width: '100%', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.025em', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                        Admission Registration 2025
                    </h1>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', fontWeight: 300, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto', color: '#e2e8f0', opacity: 0.95 }}>
                        Please fill out the form below to register your interest for admission in {isDepartmentSpecific ? defaultSector : '2025'}.
                    </p>
                </div>
            </section>

            {/* 3. Modern Form Wrapper */}
            <section style={{ padding: '4rem 1.5rem', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <div style={{ width: '100%', maxWidth: '600px', background: 'rgba(255,255,255,0.95)', borderRadius: '1.25rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', padding: '3rem 2.5rem', border: '1px solid #e2e8f0' }}>

                    {message.text && (
                        <div style={{ padding: '1rem', marginBottom: '1.5rem', borderRadius: '0.75rem', backgroundColor: message.type === 'error' ? '#fee2e2' : '#dcfce3', color: message.type === 'error' ? '#991b1b' : '#166534', fontWeight: 600, textAlign: 'center' }}>
                            {message.text}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>Name</label>
                            <input type="text" required placeholder="Enter your full name" style={inputStyle} value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>Mobile No</label>
                            <input type="tel" required placeholder="Enter your mobile number" style={inputStyle} value={mobile} onChange={e => setMobile(e.target.value)} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>Email</label>
                            <input type="email" required placeholder="Enter your email address" style={inputStyle} value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>Date of Birth</label>
                            <input type="date" required style={{ ...inputStyle, color: '#475569' }} value={dob} onChange={e => setDob(e.target.value)} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>Sector</label>
                            <select
                                required
                                value={sector}
                                onChange={e => { setSector(e.target.value); setCourse(""); }}
                                disabled={isDepartmentSpecific}
                                style={{
                                    ...inputStyle,
                                    background: isDepartmentSpecific ? '#f1f5f9' : 'rgba(255,255,255,0.95)',
                                    cursor: isDepartmentSpecific ? 'not-allowed' : 'pointer'
                                }}
                            >
                                <option value="">Select Sector</option>
                                {SECTORS.map(opt => (
                                    <option key={opt.value} value={opt.value} style={{ color: '#1e293b' }}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <label style={labelStyle}>Course</label>
                            <select required value={course} onChange={e => setCourse(e.target.value)} disabled={!sector} style={{ ...inputStyle, background: !sector ? '#f1f5f9' : 'rgba(255,255,255,0.95)', cursor: !sector ? 'not-allowed' : 'pointer' }}>
                                <option value="">{sector ? "Select Course" : "Select Sector First"}</option>
                                {sector && COURSES[sector].map((c, idx) => (
                                    <option key={idx} value={c} style={{ color: '#1e293b' }}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" disabled={loading} style={{ width: '100%', background: loading ? '#94a3b8' : 'linear-gradient(135deg, #ff512f 0%, #2563eb 100%)', color: 'white', padding: '1rem', borderRadius: '0.75rem', fontWeight: 800, fontSize: '1.15rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: loading ? 'none' : '0 4px 12px rgba(37, 99, 235, 0.3)', transition: 'transform 0.2s ease', display: 'block' }} onMouseOver={e => { if (!loading) e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            {loading ? "Submitting..." : "Submit Registration"}
                        </button>
                    </form>

                </div>
            </section>

            {/* 4. Footer */}
            <footer style={{ backgroundColor: 'rgba(15,23,42,0.95)', borderTop: '1px solid #334155', padding: '2rem 1.5rem', textAlign: 'center', color: '#64748b' }}>
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} Ram Udar Singh Technical Institute. All rights reserved.</p>
            </footer>

        </div>
    );
}
