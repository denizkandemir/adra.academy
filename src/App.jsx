import { useState } from 'react'
import './App.css'
import Slide from "./components/Slide/Slide"
import Header from './components/Header/header'
import Programs from './components/Programs/Programs'
import MottoSection from './components/MottoSection/MottoSection'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
   <>
    <Header/>
    <Slide/>
    <Programs/>
    <MottoSection/>
    <Footer/>
   

   </>
  )
}

export default App;
