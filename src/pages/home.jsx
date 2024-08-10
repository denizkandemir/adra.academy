import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Header/navbar";
import Header from "../components/Header/Header";
import Slide from "../components/Slide/Slide";
import Programs from "../components/Programs/Programs";
import MottoSection from "../components/MottoSection/MottoSection";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slide />
      <Programs />
      <MottoSection />
      <ContactUs />
     
    </>
  );
};

export default Home;
