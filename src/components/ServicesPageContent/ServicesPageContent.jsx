import React from "react";
import "./ServicesPageContent.scss";
import { Link } from "react-router-dom";
import withFadeInOnScroll from "../../hooks/animation/animationHook";

const ServicesPageContent = ({service}) => {

  withFadeInOnScroll();

  return (
   <div className="service-page-container fade-in"> 
      <div className="service-page-text-container">
        <p className="service-page-mini-title"> {service.contentTitle} </p>
        <h2 className="service-page-title"> {service.title}  </h2> 
        <p className="service-page-p"> {service.serviceText} </p>
        <p className="service-page-p"> {service.serviceText2} </p>
        <div className="service-contact-container">
          <p className="service-page-contact-p"> 
            Kurslarımıza Kayıt Olmak ve Daha Detaylı Bilgi Almak İçin Bizimle İletişime Geçin!
          </p>
          <div className="service-page-button-container">
            <Link to={"/contact"}>
             <button className="service-page-button">  
             <p className="button-text">İletişim</p>
             </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="service-page-img-container">
        <img src={service.serviceImg} alt="" className="service-page-img"/>
      </div>
   </div>
  );
};

export default ServicesPageContent;
