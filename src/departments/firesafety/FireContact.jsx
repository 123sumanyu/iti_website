import React from "react";

export default function FireContact() {

return(

<div style={styles.page}>


{/* HERO */}

<section style={styles.hero}>

<div style={styles.overlay}/>

<div style={styles.heroContent}>

<h1 style={styles.title}>
Fire & Safety Contact
</h1>

<p style={styles.subtitle}>

Reach out for admissions,
training enquiries and industrial
safety program details.

</p>

</div>

</section>



{/* CONTACT GRID */}

<section style={styles.section}>


{/* LEFT CONTACT INFO */}

<div style={styles.leftColumn}>


<ContactCard

icon="📍"

title="Institute Address"

desc={

<>
<strong>
Ram Udar Singh Fire & Safety Institute
</strong>

<br/>

Unaula Railway Station,
Gorakhpur — 273152

</>

}

/>


<ContactCard

icon="📞"

title="Phone Number"

desc={

<a
href="tel:7309587523"
style={styles.link}
>

7309587523

</a>

}

/>


<ContactCard

icon="✉️"

title="Email Address"

desc={

<a
href="mailto:ramudarsinghpiti@gmail.com"
style={styles.link}
>

ramudarsinghpiti@gmail.com

</a>

}

/>


</div>



{/* RIGHT MAP */}

<div style={styles.mapCard}>

<a

href="https://maps.app.goo.gl/9XotdxCZGiMHVWyBA"

target="_blank"

rel="noopener noreferrer"

style={{height:"100%",display:"flex",flexDirection:"column"}}

>

<iframe

title="Fire Safety Location"

src="https://www.google.com/maps?q=26.78852097349597,83.47034841457094&hl=en&z=17&output=embed"

style={styles.map}

loading="lazy"

>

</iframe>


<div style={styles.mapLink}>

View On Google Maps →

</div>

</a>

</div>


</section>



{/* FOOTER */}

<footer style={styles.footer}>

© {new Date().getFullYear()}
Ram Udar Singh Fire & Safety Institute

</footer>


</div>

);

}



/* CARD */

const ContactCard=({icon,title,desc})=>(

<div style={styles.card}>

<div style={styles.iconBox}>

{icon}

</div>

<div>

<h3 style={styles.cardTitle}>
{title}
</h3>

<p style={styles.cardDesc}>
{desc}
</p>

</div>

</div>

);



const styles={

page:{
background: "transparent",
fontFamily:'"Plus Jakarta Sans","Inter",sans-serif'
},


hero:{
height:"45vh",
background: "linear-gradient(135deg, rgba(127,29,29,0.75), rgba(220,38,38,0.6))", backdropFilter: "blur(4px)",
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
background:"rgba(0,0,0,.55)"
},

heroContent:{
zIndex:2,
maxWidth:"800px",
padding:"0 20px"
},

title:{
fontSize:"clamp(2.5rem,5vw,3.5rem)",
fontWeight:800
},

subtitle:{
fontSize:"1.1rem",
marginTop:"1rem",
lineHeight:1.6
},

section:{
maxWidth:"1200px",
margin:"auto",
padding:"4rem 20px",
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(320px,1fr))",
gap:"3rem"
},

leftColumn:{
display:"flex",
flexDirection:"column",
gap:"1.5rem"
},

card:{
background:"white",
padding:"2rem",
borderRadius:"1.2rem",
border:"1px solid #e2e8f0",
boxShadow:
"0 10px 25px rgba(0,0,0,.05)",
display:"flex",
gap:"1.3rem",
alignItems:"flex-start"
},

iconBox:{
width:"55px",
height:"55px",
background:"#fee2e2",
borderRadius:"1rem",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"1.6rem",
flexShrink:0
},

cardTitle:{
fontWeight:800,
color:"#0f172a",
marginBottom:"6px"
},

cardDesc:{
color:"#475569",
lineHeight:1.6
},

link:{
color:"#dc2626",
textDecoration:"none",
fontWeight:600
},

mapCard:{
background:"white",
borderRadius:"1.5rem",
padding:"1rem",
border:"1px solid #e2e8f0",
boxShadow:
"0 10px 25px rgba(0,0,0,.05)",
display:"flex",
flexDirection:"column",
minHeight:"420px"
},

map:{
width:"100%",
flexGrow:1,
border:"none",
borderRadius:"1rem"
},

mapLink:{
color:"#dc2626",
textAlign:"center",
fontWeight:700,
marginTop:"1rem"
},

footer:{
background:"#0f172a",
color:"#94a3b8",
textAlign:"center",
padding:"2rem",
marginTop:"3rem"
}

};