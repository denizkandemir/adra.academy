import Footer from "./components/Footer/Footer"
import Navbar from "./components/Header/Navbar/navbar"
import { Outlet } from "react-router-dom"


export function Layout(){
    return(
        <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}