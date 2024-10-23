import React from "react";
import NavbarLinks from "./NavbarLinks";
import "./sidebar.scss"
import Xmark from "../../svgs/Xmark";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-links-container">
        <NavbarLinks container={"sidebar-links"} linkClass={"navbar-link"}/>
        <div onClick={() => closeSidebar()} className="sidebar-closer">
          <Xmark/>
        </div>
      </div>
      <div className={isSidebarOpen ? "sidebar-blurer" : "sidebar-not-blurer"}></div>
    </div>
  )
}

export default Sidebar;