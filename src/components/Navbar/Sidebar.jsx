import React from "react";
import "./sidebar.scss"
import FacebookSvg from "../svgs/FacebookSvg";
import LinkedInSvg2 from "../svgs/LinkedInSvg2";
import InstagramIcon from "../svgs/InstaSvg";
import Xmark from "../svgs/Xmark";
import { Link } from "react-router-dom";
import courses from "../../objects/courses";
import services from "../../objects/services";
import { useState } from "react";
import ArrowIcon from "../svgs/downArrow";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
 
  const location = useLocation();
  const currentLocation = location.pathname;

  const [openAccordion, setOpenAccordion] = useState("");
  const accordionHandler = (accordion) => {
    if (openAccordion === accordion) {
      setOpenAccordion("");
    }
    else {
      setOpenAccordion(accordion);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  const linkHandler = () => {
    setSidebarOpen(false);
  }

  useEffect(() => {
    setSidebarOpen(false)
  }, [currentLocation]);

  return (
    <div className="sidebar-container">
      <div className="sidebar-links-container">
        <div className="sidebar-links">
          <Link className="navbar-link" to="/">Ana Sayfa</Link>
          <div className="menü-container">
            <div className="sidebar-link-icon-container" onClick={() => accordionHandler("Hizmetlerimiz")}>
              <p className={`navbar-link navbar-dropdown-p`} onClick={() => accordionHandler("Hizmetlerimiz")}>Hizmetlerimiz</p>
              <div className={openAccordion === "Hizmetlerimiz" ? "sidebar-svg-reverse" : "sidebar-svg"}>
                <ArrowIcon width={25} height={22} fill={"white"} />
              </div>
            </div> 
              <div className={
                openAccordion === "Hizmetlerimiz"
                  ? "open-accordion"
                  : "sidebar-smenu close-accordion"
              }>
                {
                  services.map((service) => (
                    <Link to={{ pathname: service.path,}} state={service} key={service.id} className="sidebar-link-text">
                      <p className={"sidebar-accordion-text"} onClick={() => linkHandler()}>
                        {service.title}
                      </p>
                    </Link>
                  ))
                }
              </div>
         
          </div>
          <div className="menü-container">
            <div className="sidebar-link-icon-container" onClick={() => accordionHandler("Kurslarımız")}>
              <p className={`navbar-link navbar-dropdown-p`} onClick={() => accordionHandler("Kurslarımız")}> Kurslarımız </p>
              <div className={openAccordion === "Kurslarımız" ? "sidebar-svg-reverse" : "sidebar-svg"}>
                <ArrowIcon width={25} height={22} fill={"white"} />
              </div>
            </div>
            <div className={
              openAccordion === "Kurslarımız"
                ? "open-accordion"
                : "sidebar-smenu close-accordion"
            }>
              {
                courses.map((course) => (
                  <Link to={{ pathname: course.path,}} state={course} key={course.id} className="sidebar-link-text">
                    <p className={"sidebar-accordion-text"} onClick={() => linkHandler()}>
                      {course.title}
                    </p>
                  </Link>
                ))
              }

            </div>
          </div>
          <Link className="navbar-link" to="/contact">İletişim</Link>
          <div className="sidebar-social-container">
            <InstagramIcon width={30} height={25} fill={"white"} />
            <FacebookSvg width={30} height={30} fill={"white"} />
            <LinkedInSvg2 width={30} height={25} fill={"white"} />
          </div>
        </div>

        <div onClick={() => closeSidebar()} className="sidebar-closer">
          <Xmark />
        </div>
      </div>
      <div className={isSidebarOpen ? "sidebar-blurer" : "sidebar-not-blurer"}></div>
    </div>
  )
}

export default Sidebar;