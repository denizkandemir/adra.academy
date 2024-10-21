import React from "react";
import services from "../../objects/services";
import "./Services.scss"
import background from "/cards-background.png"
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-main-container">
      <div className="services-background-container">
        <img src={background} className="services-background-img" alt="" />
      </div>
      <div className="services-title-container">
        <p className="services-main-title"> Hizmetlerimiz </p>
        <p className="services-main-text"> Dil Öğreniminde <br /> Profesyonel Çözümler! </p>
      </div>
      <div className="services-container">
        {
          services.map((service) => (
            <div key={service.id} className="services-wrapper">
              <div className="services-img-container">
                <img src={service.img} className="services-img" alt="" />
              </div>
              <div className="services-text-container">
                <p className="services-p"> {service.title} </p>
                <p className="services-text"> {service.text} </p>
              </div>
              <div className="services-button-container">
                <img className="services-logo" src={service.gif} alt="" />
                 <Link className="services-link" to={service.path}>
                  <button className="services-button"> İncele </button>     
                 </Link>          
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services;