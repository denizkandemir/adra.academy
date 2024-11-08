import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import ScrollToTop from "./hooks/scrollTop/scrollTop";
import Navbar from "./components/Header/Navbar/navbar";


export function Layout(){

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return(
        <>
        <ScrollToTop />

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