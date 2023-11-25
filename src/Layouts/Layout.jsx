import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './../Component/Web/Navbar/Navbar';
import Footer from './../Component/Web/Footer/Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
