import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCog } from "lucide-react";
import itiLogo from "../data/home logo/iti_logo.png";
import logoHealth1 from "../data/home logo/heathcare_logo.jpg";
import logoHealth2 from "../data/home logo/fireSafety_logo.jpg";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        ...styles.nav,
        backgroundColor: scrolled
          ? "rgba(15,23,42,0.95)"
          : "rgba(13,110,253,0.95)",
        padding: scrolled ? "0.6rem 0" : "0.9rem 0",
        boxShadow: scrolled
          ? "0 10px 30px -10px rgba(0,0,0,0.3)"
          : "none",
      }}
    >
      <div style={styles.container}>
        {/* BRANDING */}
        <div style={styles.brandWrapper} onClick={() => setIsMobileMenuOpen(false)}>
          <div className="logoContainer" style={styles.logoContainer}>
            <Link to="/iti"><img className="logoImage" src={itiLogo} alt="ITI" style={styles.logoImage} /></Link>
            <Link to="/paramedical"><img src={logoHealth1} alt="HealthCare" style={styles.logoImage} /></Link>
            <Link to="/fire-safety"><img src={logoHealth2} alt="FireSafety" style={styles.logoImage} /></Link>
          </div>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="brandText" style={styles.brandText}>
              Ram Udar Singh Technical Institute
            </span>
          </Link>
        </div>

        {/* NAV LINKS DESKTOP */}
        <div className="desktop-links" style={styles.navLinks}>
          <NavLink to="/" label="Home" active={location.pathname === "/"} />
          <NavLink to="/about" label="About" active={location.pathname === "/about"} />
          <NavLink to="/courses" label="Courses Offered" active={location.pathname === "/courses"} />
          <NavLink to="/admission" label="Admission" active={location.pathname === "/admission"} highlight />
          <NavLink to="/gallery" label="Gallery" active={location.pathname === "/gallery"} />
          <NavLink to="/contact" label="Contact" active={location.pathname === "/contact"} />
          <Link to="/admin" title="Admin Login" style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem', color: 'white', opacity: 0.9 }}>
            <UserCog size={22} />
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <Link to="/" style={{ ...styles.link, color: location.pathname === "/" ? "#60a5fa" : "white" }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" style={{ ...styles.link, color: location.pathname === "/about" ? "#60a5fa" : "white" }} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/courses" style={{ ...styles.link, color: location.pathname === "/courses" ? "#60a5fa" : "white" }} onClick={() => setIsMobileMenuOpen(false)}>Courses Offered</Link>
          <Link to="/admission" style={{ ...styles.link, color: location.pathname === "/admission" ? "#bfdbfe" : "white", backgroundColor: location.pathname === "/admission" ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.15)", padding: "0.5rem 1.2rem", borderRadius: "8px" }} onClick={() => setIsMobileMenuOpen(false)}>Admission</Link>
          <Link to="/gallery" style={{ ...styles.link, color: location.pathname === "/gallery" ? "#60a5fa" : "white" }} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" style={{ ...styles.link, color: location.pathname === "/contact" ? "#60a5fa" : "white" }} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/admin" style={{ ...styles.link, color: location.pathname === "/admin" ? "#60a5fa" : "white", display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsMobileMenuOpen(false)}><UserCog size={18} /> Admin</Link>
        </div>
      )}
    </nav>
  );
}

/* ---------- Link Component ---------- */

const NavLink = ({ to, label, active, highlight }) => (
  <Link
    to={to}
    style={{
      ...styles.link,
      color: active ? "#60a5fa" : "white",
      backgroundColor: highlight
        ? "rgba(255,255,255,0.15)"
        : "transparent",
      padding: highlight ? "0.5rem 1.2rem" : "0.5rem 0",
      borderRadius: highlight ? "8px" : "0",
      borderBottom:
        active && !highlight
          ? "2px solid #60a5fa"
          : "2px solid transparent",
    }}
  >
    {label}
  </Link>
);

/* ---------- Styles ---------- */

const styles = {
  nav: {
    width: "100%",
    backdropFilter: "blur(12px)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: "all .4s ease",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
  },

  brandWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    textDecoration: "none",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoImage: {
    height: "48px",
    width: "48px",
    objectFit: "cover",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    padding: "4px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },

  brandText: {
    fontWeight: "800",
    fontSize: "1.15rem",
    letterSpacing: "-0.02em",
    color: "#fff",
    whiteSpace: "nowrap",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },

  link: {
    textDecoration: "none",
    fontSize: ".95rem",
    fontWeight: "600",
    transition: "all .3s ease",
    textTransform: "uppercase",
    letterSpacing: ".05em",
  },
};