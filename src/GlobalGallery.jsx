import React, { useState } from "react";
import { X, ZoomIn, Info } from "lucide-react";
import { allImagesList } from "./data/allImages";
import Navbar from "./components/Navbar";

export default function GlobalGallery() {
    const [selectedImage, setSelectedImage] = useState(null);



    const openLightbox = (img) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

    return (
        <div style={styles.pageContainer}>
            <Navbar />

            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Campus <span style={styles.accentText}>Gallery</span></h1>
                    <p style={styles.heroSubtitle}>Explore life, training, and state-of-the-art facilities across all our departments.</p>
                </div>
            </section>

            {/* Main Content */}
            <div style={styles.contentContainer}>
                <div style={styles.grid}>
                    {allImagesList.map((img, idx) => (
                        <div key={idx} style={styles.card} onClick={() => openLightbox(img)}>
                            <div style={styles.imageWrapper}>
                                <img src={img.src} alt={img.alt} style={styles.image} loading="lazy" />
                                <div style={styles.imageOverlay}>
                                    <ZoomIn color="white" size={32} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div style={styles.lightbox} onClick={closeLightbox}>
                    <button style={styles.closeBtn} onClick={closeLightbox}>
                        <X size={32} color="white" />
                    </button>

                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        style={styles.lightboxImage}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

const styles = {
    pageContainer: {
        minHeight: "100vh",
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        backgroundColor: "transparent",
    },
    heroSection: {
        height: "50vh",
        minHeight: "400px",
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', // Vibrant base
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '65px',
        textAlign: "center",
    },
    heroOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(37, 99, 235, 0.4) 100%)',
        backdropFilter: 'blur(2px)',
        zIndex: 1,
    },
    heroContent: {
        position: 'relative',
        zIndex: 2,
        color: 'white',
        padding: '0 20px',
    },
    heroTitle: {
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 800,
        marginBottom: "1rem",
    },
    accentText: { color: '#60a5fa' },
    heroSubtitle: {
        fontSize: "1.2rem",
        maxWidth: "600px",
        margin: "0 auto",
        color: "#e2e8f0",
    },
    contentContainer: {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "4rem 20px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2rem",
    },
    card: {
        cursor: "pointer",
        borderRadius: "1rem",
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, boxShadow 0.3s ease",
    },
    imageWrapper: {
        position: "relative",
        paddingTop: "75%", /* 4:3 Aspect Ratio */
        overflow: "hidden",
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease",
    },
    imageOverlay: {
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(37, 99, 235, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "opacity 0.3s ease",
    },
    // Lightbox
    lightbox: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
    },
    closeBtn: {
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        zIndex: 10000,
    },
    lightboxImage: {
        maxWidth: "90%",
        maxHeight: "90vh",
        objectFit: "contain",
        borderRadius: "8px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    }
};
