import React from "react";
import Navbar from "./components/Navbar"; // <-- Path check kar lena

export default function Contact() {
    return (
        <div style={{ backgroundColor: 'transparent', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', width: '100%', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>

            {/* 1. Navbar */}
            <Navbar />

            {/* Spacer */}
            <div style={{ height: '75px', width: '100%' }}></div>

            {/* 2. Premium Hero Section */}
            <section style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,58,138,0.7) 100%)', backdropFilter: 'blur(4px)', color: 'white', padding: '5rem 1.5rem', textAlign: 'center', width: '100%', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.025em', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Contact Us
                    </h1>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, lineHeight: 1.6, color: '#e2e8f0', opacity: 0.95 }}>
                        We would love to hear from you. Feel free to reach out to us using the details below or visit our campus.
                    </p>
                </div>
            </section>

            {/* 3. Main Content Grid (Contact Info + Map) */}
            <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%', flexGrow: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>

                {/* Left Column: Contact Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Address Card */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '2rem', borderRadius: '1.25rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                        <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
                            📍
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Institute Address</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, fontSize: '1.05rem' }}>
                                <strong style={{ color: '#1e293b' }}>Ram Udar Singh Technical Institute</strong><br />
                                Unaula Railway Station, Gorakhpur, Pin 273152
                            </p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '2rem', borderRadius: '1.25rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                        <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
                            📞
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Phone Number</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, fontSize: '1.05rem' }}>
                                <a href="tel:7309587523" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>7309587523</a>
                            </p>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '2rem', borderRadius: '1.25rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                        <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
                            ✉️
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Email Address</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, fontSize: '1.05rem', wordBreak: 'break-word' }}>
                                <a href="mailto:ramudarsinghpiti@gmail.com" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>ramudarsinghpiti@gmail.com</a>
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Column: Google Map */}
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '1rem', borderRadius: '1.5rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px' }}>
                    <a href="https://maps.app.goo.gl/9XotdxCZGiMHVWyBA" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <iframe
                            title="Ram Udar Singh Technical Institute Map"
                            src="https://www.google.com/maps?q=26.78852097349597,83.47034841457094&hl=en&z=17&output=embed"
                            style={{ width: '100%', flexGrow: 1, border: 'none', borderRadius: '1rem', backgroundColor: '#cbd5e1' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div style={{ color: '#2563eb', fontSize: '1.15rem', marginTop: '1.25rem', textAlign: 'center', fontWeight: 700, paddingBottom: '0.5rem' }}>
                            View on Google Maps →
                        </div>
                    </a>
                </div>

            </section>

            {/* 4. Footer */}
            <footer style={{ backgroundColor: 'rgba(15,23,42,0.95)', borderTop: '1px solid #334155', padding: '2rem 1.5rem', textAlign: 'center', color: '#64748b' }}>
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} Ram Udar Singh Technical Institute. All rights reserved.</p>
            </footer>

        </div>
    );
}
