import React from "react";
import "./ServicesPageContent.scss";

const ServicesPageContent = ({service}) => {
  return (
   <div className="service-page-container"> 
      <div className="service-page-text-container">
        <h2 className="service-page-title"> {service.title}  </h2> 
        <p className="service-page-p"> {service.serviceText} </p>
        <p className="service-page-p"> {service.serviceText2} </p>
      </div>
      <div className="service-page-img-container">
        <img src={service.serviceImg} alt="" className="service-page-img"/>
      </div>
   </div>
  );
};

export default ServicesPageContent;
