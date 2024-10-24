import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Header/Navbar/navbar";
import Header from "../components/Header/Headerr";
import Slide from "../components/Slide/Slide";
import Programs from "../components/Programs/Programs";
import MottoSection from "../components/MottoSection/MottoSection";
import ContactUs from "../components/ContactUs/ContactUs";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Slide />
      <Services/>
      <MottoSection />
      <Programs/>
      <ContactUs />
    </>
  );
};

export default Home;
