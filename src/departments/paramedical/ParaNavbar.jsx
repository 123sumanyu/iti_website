import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCog } from "lucide-react";
import healthCareLogo from "../../data/home logo/heathcare_logo.jpg";

export default function ParaNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path || location.pathname === path + "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const linkStyle = (path, exact = false) => ({
    ...styles.link,
    color: isActive(path, exact) ? "#ffffff" : "#d1fae5",
    fontWeight: isActive(path, exact) ? "800" : "600",
    borderBottom: isActive(path, exact)
      ? "2px solid white"
      : "2px solid transparent",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
  });

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Brand */}
        <Link to="/paramedical" style={styles.brand} onClick={() => setIsMenuOpen(false)}>
          <img src={healthCareLogo} alt="Health Care Logo" className="logoImage" style={styles.logoImage} />
          <span className="brandText">Ram Udar Singh Paramedical</span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links" style={styles.links}>
          <Link to="/paramedical" style={linkStyle("/paramedical", true)}>Home</Link>
          <Link to="/paramedical/about" style={linkStyle("/paramedical/about")}>About</Link>
          <Link to="/paramedical/courses" style={linkStyle("/paramedical/courses")}>Courses Offered</Link>
          <Link to="/paramedical/gallery" style={linkStyle("/paramedical/gallery")}>Gallery</Link>
          <Link to="/paramedical/contact" style={linkStyle("/paramedical/contact")}>Contact</Link>
          <Link to="/paramedical/admission" style={linkStyle("/paramedical/admission")}>Admission</Link>
          <Link to="/admin" title="Admin Login" style={{ display: 'flex', alignItems: 'center', color: 'white', marginLeft: '0.5rem', opacity: 0.9 }}>
            <UserCog size={22} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu-dropdown">
          <Link to="/paramedical" style={linkStyle("/paramedical", true)} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/paramedical/about" style={linkStyle("/paramedical/about")} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/paramedical/courses" style={linkStyle("/paramedical/courses")} onClick={() => setIsMenuOpen(false)}>Courses Offered</Link>
          <Link to="/paramedical/gallery" style={linkStyle("/paramedical/gallery")} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link to="/paramedical/contact" style={linkStyle("/paramedical/contact")} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/paramedical/admission" style={linkStyle("/paramedical/admission")} onClick={() => setIsMenuOpen(false)}>Admission</Link>
          <Link to="/admin" style={{ ...linkStyle("/admin"), display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsMenuOpen(false)}><UserCog size={18} /> Admin</Link>
        </div>
      )}
    </nav>
  );
}



const styles = {

  nav: {
    width: "100%",
    background: "linear-gradient(135deg, rgba(6,95,70,0.75), rgba(16,185,129,0.6))",
    color: "white",
    padding: "1rem 0",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 6px 18px rgba(0,0,0,.15)",
    backdropFilter: "blur(10px)"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.5rem"
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "white",
    textDecoration: "none"
  },
  logoImage: {
    height: "40px",
    width: "40px",
    objectFit: "cover",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    padding: "2px",
  },

  links: {
    display: "flex",
    gap: "1.8rem",
    fontSize: "1rem"
  },

  link: {
    textDecoration: "none",
    paddingBottom: "4px",
    transition: "all .25s ease"
  }

};