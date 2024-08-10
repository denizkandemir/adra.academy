import { useState } from "react";
import "./App.css";
import Slide from "./components/Slide/Slide";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";
import MottoSection from "./components/MottoSection/MottoSection";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/home";
import Page2 from "./pages/Page2";
import { Layout } from "./Layout";

function App() {
  return (
    /*<>

   
    <Header/>
    <Slide/>
    <Programs/>
    <MottoSection/>
    <ContactUs/>
    <Footer/>
   

   </>*/

    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
