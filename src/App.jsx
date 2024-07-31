import { useState } from 'react'
import './App.css'
import Slide from "./components/Slide/Slide"
import Header from './components/Header/Header'
import Programs from './components/Programs/Programs'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
   <>
    <Header/>
    <Slide/>
    <Programs/>
    <Footer/>
   

   </>
  )
}

export default App;
