import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" my-18">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
