import React from "react";
import { Outlet } from "react-router-dom";
import FireNavbar from "./FireNavbar";

export default function FireLayout() {
  return (
    <div style={styles.wrapper}>

      {/* Department Navbar */}
      <FireNavbar />

      {/* Department Content */}
      <main style={styles.content}>
        <Outlet />
      </main>

    </div>
  );
}


const styles = {

  wrapper: {
    minHeight: "100vh",
    backgroundColor: "transparent",
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
  },

  content: {
    paddingTop: "80px", // space for fixed FireNavbar
  },

};