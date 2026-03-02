import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCog } from "lucide-react";
import itiLogo from "../../data/home logo/iti_logo.png";

export default function ItiNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path || location.pathname === path + "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const linkStyle = (path, exact = false) => ({
    color: isActive(path, exact) ? "#ffffff" : "#bfdbfe",
    textDecoration: "none",
    fontWeight: isActive(path, exact) ? "800" : "600",
    transition: "0.2s ease",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
  });

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* Brand */}
        <Link to="/iti" style={styles.brand} onClick={() => setIsMenuOpen(false)}>
          <img src={itiLogo} alt="ITI Logo" className="logoImage" style={styles.logoImage} />
          <span className="brandText">Ram Udar Singh Private ITI</span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links" style={styles.links}>
          <Link to="/iti" style={linkStyle("/iti", true)}>
            Home
          </Link>

          <Link to="/iti/about" style={linkStyle("/iti/about")}>
            About
          </Link>

          <Link to="/iti/courses" style={linkStyle("/iti/courses")}>
            Courses Offered
          </Link>

          <Link to="/iti/gallery" style={linkStyle("/iti/gallery")}>
            Gallery
          </Link>

          <Link to="/iti/contact" style={linkStyle("/iti/contact")}>
            Contact
          </Link>

          <Link to="/iti/admission" style={linkStyle("/iti/admission")}>
            Admission
          </Link>
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
          <Link to="/iti" style={linkStyle("/iti", true)} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/iti/about" style={linkStyle("/iti/about")} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/iti/courses" style={linkStyle("/iti/courses")} onClick={() => setIsMenuOpen(false)}>Courses Offered</Link>
          <Link to="/iti/gallery" style={linkStyle("/iti/gallery")} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link to="/iti/contact" style={linkStyle("/iti/contact")} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/iti/admission" style={linkStyle("/iti/admission")} onClick={() => setIsMenuOpen(false)}>Admission</Link>
          <Link to="/admin" style={{ ...linkStyle("/admin"), display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsMenuOpen(false)}><UserCog size={18} /> Admin</Link>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    background: "linear-gradient(135deg, rgba(30,58,138,0.75), rgba(37,99,235,0.6))", backdropFilter: "blur(4px)",
    color: "white",
    padding: "1rem 0",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.5rem",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
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
    gap: "1.5rem",
    fontSize: "1rem",
  },
};