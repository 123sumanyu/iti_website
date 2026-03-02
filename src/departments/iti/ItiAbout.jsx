import React from "react";
import { Zap, Wrench, Target, Eye } from "lucide-react";

export default function ItiAbout(){

return(

<div style={styles.container}>


{/* HERO */}

<section style={styles.hero}>

<div style={styles.overlay}/>

<div style={styles.heroContent}>

<h1 style={styles.title}>

Welcome To

<br/>

<span style={styles.accent}>
Ram Udar Singh Private ITI
</span>

</h1>

<p style={styles.subtitle}>

Empowering youth through skill-based
technical education and industry-ready training.

</p>

</div>

</section>



{/* DESCRIPTION */}

<section style={styles.section}>

<p style={styles.description}>

Ram Udar Singh Private ITI is a dedicated
technical training institute established in 2017
with the mission of empowering youth through
skill-based education.

Located near Unaula Railway Station,
Gorakhpur, Uttar Pradesh,
the institute focuses on providing
high-quality vocational training aligned
with industry standards.

Our goal is to create skilled professionals
who are job-ready, confident and technically strong.

</p>



{/* GRID */}

<div style={styles.grid}>


{/* COURSES */}

<div style={styles.card}>

<Zap size={34} color="#2563eb"/>

<h3 style={styles.cardTitle}>
Technical Programs
</h3>

<ul style={styles.list}>

<li>
Electrician — Installation, wiring and industrial electrical applications.
</li>

<li>
Fitter — Fabrication, mechanical assembly and workshop practices.
</li>

</ul>

</div>



{/* MISSION */}

<div style={styles.card}>

<Target size={34} color="#2563eb"/>

<h3 style={styles.cardTitle}>
Our Mission
</h3>

<ul style={styles.list}>

<li>Provide quality technical education.</li>

<li>Promote rural youth skill development.</li>

<li>Create employment opportunities.</li>

<li>Support Skill India initiatives.</li>

</ul>

</div>



{/* VISION */}

<div style={styles.card}>

<Eye size={34} color="#2563eb"/>

<h3 style={styles.cardTitle}>
Our Vision
</h3>

<p style={styles.vision}>

To become a leading technical training
institute in Eastern Uttar Pradesh
by producing skilled, responsible and
industry-ready professionals.

</p>

</div>


</div>

</section>

</div>

);

}



/* ===== STYLE ===== */

const styles={

container:{
background: "transparent",
fontFamily:'"Plus Jakarta Sans","Inter",sans-serif'
},

hero:{
height:"50vh",
background:
"linear-gradient(135deg,#1e3a8a,#2563eb)",
display:"flex",
alignItems:"center",
justifyContent:"center",
textAlign:"center",
color:"white",
position:"relative"
},

overlay:{
position:"absolute",
inset:0,
background:"rgba(0,0,0,.45)"
},

heroContent:{
zIndex:2,
maxWidth:"850px",
padding:"0 20px"
},

title:{
fontSize:"clamp(2.4rem,5vw,3.6rem)",
fontWeight:800
},

accent:{
color:"#bfdbfe"
},

subtitle:{
marginTop:"1rem",
fontSize:"1.1rem",
lineHeight:1.6
},

section:{
maxWidth:"1200px",
margin:"auto",
padding:"5rem 20px"
},

description:{
textAlign:"center",
maxWidth:"900px",
margin:"auto",
marginBottom:"4rem",
lineHeight:1.7,
color:"#475569"
},

grid:{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",
gap:"2rem"
},

card:{
background:"white",
padding:"2.5rem 2rem",
borderRadius:"1.5rem",
border:"1px solid #e2e8f0",
textAlign:"center",
boxShadow:"0 10px 20px rgba(0,0,0,.05)"
},

cardTitle:{
fontSize:"1.3rem",
fontWeight:700,
margin:"1rem 0",
color:"#0f172a"
},

list:{
listStyle:"none",
padding:0,
lineHeight:1.8,
color:"#64748b"
},

vision:{
lineHeight:1.7,
color:"#64748b"
}

};