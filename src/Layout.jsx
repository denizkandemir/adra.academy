import Footer from "./components/Footer/Footer"
import Navbar from "./components/Header/Navbar/navbar"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

export function Layout(){

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return(
        <>
        {
            !isHomePage &&  <Navbar containerClass={"navbar-container"} svgFill={"white"} linkClass={"navbar-link"}/>
        }
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}