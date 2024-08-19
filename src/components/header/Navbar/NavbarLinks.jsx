import React from "react";
import NavbarDropdown from "./NavbarDropdown";
import courses from "../../../objects/courses";
import services from "../../../objects/services";
import { Link } from "react-router-dom";
import SidebarDropdownIcon from "../../svgs/SidebarDropdownSvg";


const NavbarLinks = ({ container }) => {
    return (
        <div className={container}>
            <Link className="navbar-link" to="/">Ana Sayfa</Link>
            <div className="menü-container">
                <div className="sidebar-link-icon-container">
                    <p className="navbar-dropdown-p navbar-link"> Hizmetlerimiz </p>
                    <div className="dropdown-icon">
                     <SidebarDropdownIcon />
                    </div>
                </div>
                <div className="dropdown-component-container">
                    <NavbarDropdown content={services} />
                </div>
            </div>
            <div className="menü-container">
                <div className="sidebar-link-icon-container">
                    <p className="navbar-dropdown-p navbar-link"> Kurslarımız </p>
                    <div className="dropdown-icon">
                     <SidebarDropdownIcon />
                    </div>
                </div>
                <div className="dropdown-component-container">
                    <NavbarDropdown content={courses} />
                </div>
            </div>
            <Link className="navbar-link" to="/contact">İletişim</Link>
        </div>
    )
}

export default NavbarLinks;