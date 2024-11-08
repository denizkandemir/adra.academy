import React from "react";
import Slide from "../components/Slide/Slide";
import Programs from "../components/Programs/Programs";
import MottoSection from "../components/MottoSection/MottoSection";
import ContactUs from "../components/ContactUs/ContactUs";
import Services from "../components/Services/Services";
import { useEffect } from "react";
import Header from "../components/Header/Header";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default HomePage;
