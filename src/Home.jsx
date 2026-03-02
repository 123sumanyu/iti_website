import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ArrowRight, GraduationCap, Flame, Stethoscope, Image as ImageIcon } from "lucide-react";

// ✅ ITI Images (matching actual filenames)
import img1 from "./assets/iti/imag (1).jpeg";
import img2 from "./assets/iti/imag (2).jpg";
import img3 from "./assets/iti/imag (3).jpeg";
import img4 from "./assets/iti/imag (4).jpg";
import img5 from "./assets/iti/imag (5).jpeg";
import img6 from "./assets/iti/imag (6).jpg";

// ✅ Logos

import { partners } from "./data/partners";
export default function Home() {
  const sliderImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000); // 2 Seconds
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div style={styles.container}>
      <Navbar hideLinks={true} />

      {/* HERO SECTION - Partial Page Slideshow */}
      <section style={styles.heroWrapper}>
        {sliderImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              ...styles.heroSlide,
              backgroundImage: `url(${img})`,
              opacity: idx === currentSlide ? 1 : 0,
              // Subtle zoom effect removed for maximum clarity, but kept scale(1)
              transform: 'scale(1)',
            }}
          />
        ))}

        {/* Lighter Gradient Overlay - Only enough to make text readable */}
        <div style={styles.heroOverlay} />

        <div style={styles.heroContent}>
          <span style={styles.badge}>Established Excellence</span>
          <h1 style={styles.mainTitle}>
            Ram Udar Singh <br />
            <span style={styles.accentText}>Technical Institute</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Empowering the next generation with industry-ready skills in Technical Education,
            Fire Safety, and Paramedical Sciences.
          </p>
          <div style={styles.heroBtnGroup}>
            <Link to="/admission" style={styles.primaryBtn}>Start Your Journey</Link>
            <Link to="/gallery" style={styles.secondaryBtn}>Explore Campus</Link>
          </div>
        </div>
      </section>

      {/* ADMISSION STRIP */}
      <div style={styles.ctaStripWrapper}>
        <Link to="/admission" style={styles.ctaStrip}>
          <div style={styles.pulseDot} />
          <span>Admission Open for 2025-26 — Apply Now</span>
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* DEPARTMENTS SECTION */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Specialized Wings</h2>
          <div style={styles.titleUnderline} />
        </div>

        {/* LOGO SLIDER */}
        <div style={styles.logoSliderContainer}>
          <div style={styles.logoTrack}>
            {[...partners, ...partners, ...partners].map((partner, index) => (
              partner.logo && (
                <div key={index} style={styles.logoSlide}>
                  <img src={partner.logo} alt={partner.name || "Logo"} style={styles.logoImage} />
                </div>
              )
            ))}
          </div>
        </div>

        <div style={styles.cardGrid}>
          <DeptCard
            to="/iti"
            title="ITI Programs"
            desc="Master Electrician & Fitter trades with hands-on workshop training."
            icon={<GraduationCap size={32} color="#3b82f6" />}
          />
          <DeptCard
            to="/fire-safety"
            title="Fire & Safety"
            desc="Professional diplomas in industrial safety and emergency management."
            icon={<Flame size={32} color="#ef4444" />}
          />
          <DeptCard
            to="/paramedical"
            title="Paramedical"
            desc="Clinical training for healthcare assistants and medical professionals."
            icon={<Stethoscope size={32} color="#10b981" />}
          />
        </div>
      </section>

      <section style={styles.galleryFooter}>
        <Link to="/gallery" style={styles.galleryLink}>
          <ImageIcon size={20} />
          <span>View Full Gallery</span>
        </Link>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 3))} 
        }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
      `}</style>
    </div>
  );
}

const DeptCard = ({ to, title, desc, icon }) => (
  <a href={to} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
      <div style={styles.cardLinkText}>Explore Course <ArrowRight size={16} /></div>
    </div>
  </a>
);

const styles = {
  container: { backgroundColor: "transparent", minHeight: '100vh', fontFamily: '"Plus Jakarta Sans", sans-serif' },

  heroWrapper: {
    height: '85vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', // Fallback vibrant base instead of pure black
    marginTop: '65px'
  },
  heroSlide: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 1.2s ease-in-out', // Smoother transition
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(37, 99, 235, 0.4) 100%)',
    backdropFilter: 'blur(2px)', // Adds a glassmorphism professional touch without hiding sliding imagery
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '900px',
    padding: '0 20px',
    color: 'white',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)' // Added shadow to help text pop against visible images
  },

  mainTitle: { fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.2, margin: '1rem 0' },
  accentText: { color: '#60a5fa' },
  badge: { background: '#2563eb', color: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' },
  heroSubtitle: { fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#f1f5f9', maxWidth: '750px', margin: '0 auto 2rem' },
  heroBtnGroup: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
  primaryBtn: { backgroundColor: '#2563eb', color: 'white', padding: '0.9rem 2.2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' },
  secondaryBtn: { backgroundColor: 'white', color: '#0f172a', padding: '0.9rem 2.2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' },

  ctaStripWrapper: { display: 'flex', justifyContent: 'center', transform: 'translateY(-50%)', padding: '0 20px', zIndex: 10, position: 'relative' },
  ctaStrip: { backgroundColor: '#1e293b', color: 'white', padding: '1.2rem 2rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
  pulseDot: { width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '50%' },

  section: { maxWidth: '1200px', margin: '0 auto', padding: '3rem 20px' },
  sectionHeader: { textAlign: 'center', marginBottom: '2rem' },
  sectionTitle: { fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' },
  titleUnderline: { width: '50px', height: '4px', backgroundColor: '#2563eb', margin: '0.8rem auto' },

  logoSliderContainer: { width: '100%', overflow: 'hidden', padding: '1.5rem 0', marginBottom: '3rem' },
  logoTrack: { display: 'flex', width: 'max-content', animation: 'scroll 15s linear infinite' },
  logoSlide: { width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  logoImage: { maxHeight: '65px', objectFit: 'contain' },

  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' },
  card: { backgroundColor: 'white', padding: '2.5rem 2rem', borderRadius: '1rem', textDecoration: 'none', textAlign: 'center', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' },
  cardIcon: { marginBottom: '1.2rem', padding: '1rem', backgroundColor: "transparent", borderRadius: '1rem', display: 'inline-block' },
  cardTitle: { fontSize: '1.4rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.8rem' },
  cardDesc: { color: '#64748b', fontSize: '0.95rem' },
  cardLinkText: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: 600, marginTop: '1.5rem' },

  galleryFooter: { padding: '4rem 0 6rem', display: 'flex', justifyContent: 'center' },
  galleryLink: { display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 2rem', borderRadius: '0.5rem', backgroundColor: '#fff', color: '#1e293b', textDecoration: 'none', border: '1px solid #cbd5e1', fontWeight: 600 }
};