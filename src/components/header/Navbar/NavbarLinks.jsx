import React from "react";
import NavbarDropdown from "./NavbarDropdown";
import courses from "../../../objects/courses";
import services from "../../../objects/services";
import { Link } from "react-router-dom";
import SidebarDropdownIcon from "../../svgs/SidebarDropdownSvg";
import FacebookSvg from "../../svgs/FacebookSvg";
import InstagramIcon from "../../svgs/InstaSvg";
import LinkedInSvg2 from "../../svgs/LinkedInSvg2";

const NavbarLinks = ({ container, linkClass }) => {
    return (
        <div className={container}>
            <Link className={linkClass} to="/">Ana Sayfa</Link>
            <div className="menü-container">
                <div className="sidebar-link-icon-container">
                <p className={`${linkClass} navbar-dropdown-p`}>Hizmetlerimiz</p>
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
                    <p className={`${linkClass} navbar-dropdown-p`}> Kurslarımız </p>
                    <div className="dropdown-icon">
                     <SidebarDropdownIcon />
                    </div>
                </div>
                <div className="dropdown-component-container">
                    <NavbarDropdown content={courses} />
                </div>
            </div>
            <Link className={linkClass} to="/contact">İletişim</Link>
            <div className="sidebar-social-container">
               <InstagramIcon width={30} height={25}  fill={"white"}/>
               <FacebookSvg width={30} height={30}  fill={"white"} />
               <LinkedInSvg2 width={30} height={25} fill={"white"}/>
            </div>
        </div>
    )
}

export default NavbarLinks;