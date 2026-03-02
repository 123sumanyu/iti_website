import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";


// 🔥 FIRE SAFETY ASSETS

import f1 from "../../assets/firesafety/firesafety1.jpg";
import f2 from "../../assets/firesafety/firesafety2.jpg";
import f3 from "../../assets/firesafety/firesafety3.jpg";



const images = [f1, f2, f3];



export default function FireGallery() {

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
                        Fire Training Moments
                    </span>

                    <h1 style={styles.title}>
                        Fire Safety Gallery
                    </h1>

                    <div style={styles.underline} />

                    <p>
                        Practical drills, industrial training,
                        and emergency response sessions.
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

                                alt="firesafety"

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
        background: "linear-gradient(135deg, rgba(127,29,29,0.75), rgba(220,38,38,0.6))", backdropFilter: "blur(4px)",
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
        background:
            "rgba(0,0,0,.55)"
    },

    heroCard: {
        zIndex: 2,
        background:
            "rgba(255,255,255,.08)",
        backdropFilter: "blur(12px)",
        padding: "2.5rem",
        borderRadius: "1.5rem",
        border: "1px solid rgba(255,255,255,.2)"
    },

    badge: {
        letterSpacing: "2px",
        fontSize: ".8rem",
        color: "#fecaca"
    },

    title: {
        fontSize: "3rem",
        fontWeight: 800
    },

    underline: {
        width: "60px",
        height: "4px",
        background: "#fecaca",
        margin: "1rem auto"
    },

    section: {
        maxWidth: "1300px",
        margin: "auto",
        padding: "4rem 20px"
    },

    grid: {
        columns: "3",
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
        background: "rgba(220,38,38,.45)",
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
        left: "-70px",
        top: "50%",
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer"
    },

    right: {
        position: "absolute",
        right: "-70px",
        top: "50%",
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer"
    }

};