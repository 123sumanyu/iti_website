import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import GlobalGallery from "./GlobalGallery";
import Contact from "./Contact";
import Admission from "./Admission";
import Courses from "./Courses";
import Admin from "./Admin";

/* ========= ITI ========= */

import ItiLayout from "./departments/iti/ItiLayout";
import ItiHome from "./departments/iti/ItiHome";
import ItiAbout from "./departments/iti/ItiAbout";
import ItiGallery from "./departments/iti/ItiGallery";
import ItiContact from "./departments/iti/ItiContact";


/* ========= FIRE SAFETY ========= */

import FireLayout from "./departments/firesafety/FireLayout";
import FireHome from "./departments/firesafety/FireHome";
import FireAbout from "./departments/firesafety/FireAbout";
import FireGallery from "./departments/firesafety/FireGallery";
import FireContact from "./departments/firesafety/FireContact";


/* ========= PARAMEDICAL ========= */

import ParaLayout from "./departments/paramedical/ParaLayout";
import ParaHome from "./departments/paramedical/ParaHome";
import ParaAbout from "./departments/paramedical/ParaAbout";
import ParaGallery from "./departments/paramedical/ParaGallery";
import ParaContact from "./departments/paramedical/Paracontact";



function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* MAIN WEBSITE */}

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<GlobalGallery />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/admin" element={<Admin />} />


                {/* ================= ITI ================= */}

                <Route path="/iti" element={<ItiLayout />}>

                    <Route index element={<ItiHome />} />

                    <Route path="about" element={<ItiAbout />} />

                    <Route path="courses" element={<Courses />} />

                    <Route path="gallery" element={<ItiGallery />} />

                    <Route path="contact" element={<ItiContact />} />

                    <Route path="admission" element={<Admission />} />

                </Route>



                {/* ================= FIRE SAFETY ================= */}

                <Route path="/fire-safety" element={<FireLayout />}>

                    <Route index element={<FireHome />} />

                    <Route path="about" element={<FireAbout />} />

                    <Route path="courses" element={<Courses />} />

                    <Route path="gallery" element={<FireGallery />} />

                    <Route path="contact" element={<FireContact />} />

                    <Route path="admission" element={<Admission />} />

                </Route>



                {/* ================= PARAMEDICAL ================= */}

                <Route path="/paramedical" element={<ParaLayout />}>

                    <Route index element={<ParaHome />} />

                    <Route path="about" element={<ParaAbout />} />

                    <Route path="courses" element={<Courses />} />

                    <Route path="gallery" element={<ParaGallery />} />

                    <Route path="contact" element={<ParaContact />} />

                    <Route path="admission" element={<Admission />} />

                </Route>


            </Routes>

        </BrowserRouter>

    );

}

export default App;
