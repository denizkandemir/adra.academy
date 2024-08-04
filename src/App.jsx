import { useState } from 'react'
import './App.css'
import Slide from "./components/Slide/Slide"
import Header from './components/Header/header'
import Programs from './components/Programs/Programs'
import MottoSection from './components/MottoSection/MottoSection'

function App() {
  
  return (
   <>
    <Header/>
    <Slide/>
    <Programs/>
    <MottoSection/>
  
   </>
  )
}

export default App;
