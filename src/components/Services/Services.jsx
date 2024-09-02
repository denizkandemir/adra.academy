import React from "react";
import services from "../../objects/services";
import logo from "/logo.jpg"
import "./Services.scss"

const Services = () => {
  return (
    <div className="services-main-container">
      <div className="services-title-container">
        <p className="services-title"> Hizmetlerimiz </p>
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
                <button className="services-button"> İncele </button>               
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )

}

export default Services;