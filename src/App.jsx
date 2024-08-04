import { useState } from 'react'
import './App.css'
import Slide from "./components/Slide/Slide"
import Header from './components/Header/header'
import Programs from './components/Programs/Programs'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'


function App() {
  
  return (
   <>
    <Header/>
    <Slide/>
    <Programs/>
    <ContactUs/>
    <Footer/>
   

   </>
  )
}

export default App;
