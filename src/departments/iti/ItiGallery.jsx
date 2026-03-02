import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";


// ⚡ ITI WORKSHOP ASSETS

import i1 from "../../assets/iti/imag (1).jpeg";
import i2 from "../../assets/iti/imag (2).jpg";
import i3 from "../../assets/iti/imag (3).jpeg";
import i4 from "../../assets/iti/imag (4).jpeg";
import i5 from "../../assets/iti/imag (4).jpg";
import i6 from "../../assets/iti/imag (5).jpeg";

import i7 from "../../assets/iti/imag (5).jpg";
import i8 from "../../assets/iti/imag (6).jpg";
import i9 from "../../assets/iti/imag (7).jpg";

import i10 from "../../assets/iti/imag (8).jpg";
import i11 from "../../assets/iti/imag (9).jpeg";



const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11];



export default function ItiGallery() {

    const [openIndex, setOpenIndex] = useState(null);

    const [hover, setHover] = useState(null);


    const close = useCallback(() => setOpenIndex(null), []);


    const next = useCallback((e) => {

        e?.stopPropagation();

        setOpenIndex(i =>

            (i === null ? 0 : (i + 1) % images.length)

        );

    }, []);



    const prev = useCallback((e) => {

        e?.stopPropagation();

        setOpenIndex(i =>

            (i === null ? 0 : (i - 1 + images.length) % images.length)

        );

    }, []);



    useEffect(() => {

        const handler = (e) => {

            if (openIndex === null) return;

            if (e.key === "Escape") close();

            if (e.key === "ArrowRight") next();

            if (e.key === "ArrowLeft") prev();

        };

        window.addEventListener("keydown", handler);

        return () => window.removeEventListener("keydown", handler);

    }, [openIndex, close, next, prev]);



    return (

        <div style={styles.page}>


            {/* HERO */}

            <section style={styles.hero}>

                <div style={styles.overlay} />

                <div style={styles.heroCard}>

                    <span style={styles.badge}>
                        Technical Training Moments
                    </span>

                    <h1 style={styles.title}>
                        ITI Workshop Gallery
                    </h1>

                    <div style={styles.underline} />

                    <p>
                        Hands-on electrician and fitter
                        workshop training sessions.
                    </p>

                </div>

            </section>



            {/* GALLERY */}

            <section style={styles.section}>


                <div style={styles.grid}>


                    {images.map((img, index) => (

                        <div

                            key={index}

                            style={styles.wrapper}

                            onMouseEnter={() => setHover(index)}

                            onMouseLeave={() => setHover(null)}

                            onClick={() => setOpenIndex(index)}

                        >

                            <img

                                src={img}

                                alt="ITI Training"

                                style={{

                                    ...styles.image,

                                    transform:
                                        hover === index ?
                                            "scale(1.07)"
                                            : "scale(1)"

                                }}

                            />


                            <div

                                style={{

                                    ...styles.overlayHover,

                                    opacity:
                                        hover === index ? 1 : 0

                                }}

                            >

                                <Maximize2 color="white" />

                            </div>

                        </div>

                    ))}


                </div>

            </section>



            {/* LIGHTBOX */}

            {openIndex !== null && (

                <div
                    onClick={close}
                    style={styles.lightbox}
                >

                    <div
                        style={styles.lightContent}

                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            onClick={close}
                            style={styles.close}
                        >

                            <X />

                        </button>



                        <button
                            onClick={prev}
                            style={styles.left}
                        >

                            <ChevronLeft size={40} />

                        </button>



                        <img
                            src={images[openIndex]}
                            alt="Expanded ITI Training"
                            style={styles.bigImg}
                        />



                        <button
                            onClick={next}
                            style={styles.right}
                        >

                            <ChevronRight size={40} />

                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}



const styles = {

    page: {
        background: "transparent"
    },

    hero: {
        height: "55vh",
        background:
            "linear-gradient(135deg,#1e3a8a,#2563eb)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative"
    },

    overlay: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,.55)"
    },

    heroCard: {
        zIndex: 2,
        background: "rgba(255,255,255,.08)",
        backdropFilter: "blur(12px)",
        padding: "2.5rem",
        borderRadius: "1.5rem",
        border: "1px solid rgba(255,255,255,.2)"
    },

    badge: {
        letterSpacing: "2px",
        fontSize: ".8rem",
        color: "#bfdbfe"
    },

    title: {
        fontSize: "3rem",
        fontWeight: 800
    },

    underline: {
        width: "60px",
        height: "4px",
        background: "#bfdbfe",
        margin: "1rem auto"
    },

    section: {
        maxWidth: "1300px",
        margin: "auto",
        padding: "4rem 20px"
    },

    grid: {
        columnCount: 3,
        columnGap: "1.5rem"
    },

    wrapper: {
        marginBottom: "1.5rem",
        borderRadius: "1rem",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative"
    },

    image: {
        width: "100%",
        display: "block",
        transition: "0.4s"
    },

    overlayHover: {
        position: "absolute",
        inset: 0,
        background: "rgba(37,99,235,.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s"
    },

    lightbox: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.95)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
    },

    lightContent: {
        position: "relative",
        width: "90%"
    },

    bigImg: {
        width: "100%",
        maxHeight: "85vh",
        objectFit: "contain",
        borderRadius: "1rem"
    },

    close: {
        position: "absolute",
        top: "-50px",
        right: "0",
        background: "white",
        border: "none",
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer"
    },

    left: {
        position: "absolute",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer"
    },

    right: {
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer"
    }

};