import React from "react";
import { Outlet } from "react-router-dom";
import ItiNavbar from "./ItiNavbar";

export default function ItiLayout() {
  return (
    <>
      <ItiNavbar />
      <div style={{ paddingTop: "90px" }}>
        <Outlet />
      </div>
    </>
  );
}