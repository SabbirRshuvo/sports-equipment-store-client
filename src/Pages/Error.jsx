import React from "react";
import errorImg from "../assets/404.gif";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Error = () => {
  return (
    <div>
      <Navbar />
      <img src={errorImg} alt="" />
      <Footer />
    </div>
  );
};

export default Error;
