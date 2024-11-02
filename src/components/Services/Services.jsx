import React from "react";
import services from "../../objects/services";
import "./Services.scss"
import { Link } from "react-router-dom";
import withFadeInOnScroll from "../../hooks/animation/animationHook";

const Services = () => {

  withFadeInOnScroll();

  return (
    <div className="services-main-container">
      <div className="services-title-container fade-in">
        <p className="services-main-title"> Hizmetlerimiz </p>
        <p className="services-main-text"> Academy Adra olarak, ihtiyaçlarınıza uygun yüksek kaliteli dil eğitimi sunmaya kararlıyız. Çeşitli hizmetlerimiz, akademik başarınızı ve profesyonel gelişiminizi desteklemek amacıyla özenle tasarlanmıştır </p>
      </div>
      <div className="services-container fade-in">
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
                 <Link className="services-link" to={{ pathname: service.path,}} state={service} >
                  <button className="services-button"> 
                  <p className="button-text"> İncele </p> </button>     
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