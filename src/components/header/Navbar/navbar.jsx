import "./Navbar.scss";
import logo from "/logo.jpg";
import MenuIcon from "../../svgs/MenuIcon";
import { useState } from "react";
import Sidebar from "./Sidebar";
import NavbarLinks from "./NavbarLinks";
import FacebookSvg from "../../svgs/FacebookSvg";
import InstagramIcon from "../../svgs/InstaSvg";
import LinkedInSvg from "../../svgs/LinkedInSvg";

function Navbar({containerClass , svgFill , linkClass}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarOpener = (event) => {
    event.preventDefault();
    setSidebarOpen(true);
  };

  if (isSidebarOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <>
      <div className={isSidebarOpen ? "open-sidebar" : "close-sidebar"}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className={containerClass}>
        <div className="navbar-logo-title-container">
          <img className="navbar-logo" src={logo} alt="" />
          <h1 className="navbar-title"> Academy Adra </h1>
        </div>
        <div className="navbar-center-content">
          <NavbarLinks container={"navbar-links"} linkClass={linkClass} />
        </div>

        <div className="navbar-svg-container">
          <a
            href="https://www.instagram.com/academyadra/"
            className="navbar-svg-link"
            target="_blank"
          >
            <LinkedInSvg width={30} height={30} fill={svgFill} />
          </a>
          <a
            href="https://www.instagram.com/academyadra/"
            className="navbar-svg-link"
            target="_blank"
            style={{ marginTop: '4px' }}
          >
            <InstagramIcon width={30} height={25} fill={svgFill} />
          </a>
          <a
            href="https://www.facebook.com/p/Academy-Adra-61553271547191/"
            className="navbar-svg-link"
            target="_blank"
            style={{ marginTop: '3px' }}
          >
            <FacebookSvg height={30} width={30} fill={svgFill} />
          </a>
          <div onClick={sidebarOpener} className="hamburger-container">
            <MenuIcon fill={svgFill} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
