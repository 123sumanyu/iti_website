import React from "react";
import { Outlet } from "react-router-dom";
import ParaNavbar from "./ParaNavbar";

export default function ParaLayout() {

  return (

    <div style={styles.wrapper}>

      {/* Department Navbar */}

      <ParaNavbar />



      {/* Page Content */}

      <main style={styles.content}>

        <Outlet />

      </main>


    </div>

  );

}



const styles={

wrapper:{

minHeight:"100vh",

background: "transparent",

fontFamily:
'"Plus Jakarta Sans","Inter",sans-serif',

display:"flex",

flexDirection:"column"

},



content:{

paddingTop:"90px", // navbar height safe spacing

flexGrow:1

}

};