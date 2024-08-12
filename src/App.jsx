import { useState } from 'react'
import './App.css'
import Slide from "./components/Slide/Slide"
import Header from './components/Header/header'
import Programs from './components/Programs/Programs'
import MottoSection from './components/MottoSection/MottoSection'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'


function App() {
  
  return (
   <>
    <Header/>
    <Slide/>
    <Programs containerClass={"programs-container"}/>
    <ContactUs/>
    <MottoSection/>
    <Footer/>
   

   </>
  )
}

export default App;
