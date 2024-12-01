import React from "react";
import "./ServicesPageContent.scss";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import services from "../../objects/services";
import courses from "../../objects/courses";

const ServicesPageContent = () => {

  const { routeId } = useParams();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  let service = null;
  if (name === "service") {
    service = services.find((service) => service.routeId === parseInt(routeId));
  }
  else if (name === "course") {
    service = courses.find((service) => service.routeId === parseInt(routeId));
  }

  return (
    <>
      {service ? (
        <div className="service-page-container ">
          <div className="service-page-text-container">
            <p className="service-page-mini-title"> {service.contentTitle} </p>
            <h2 className="service-page-title"> {service.title}  </h2>
            <p className="service-page-p"> {service.serviceText} </p>
            <p className="service-page-p"> {service.serviceText2} </p>
            <div className="service-contact-container">
              <p className="service-page-contact-p">
                Detaylı Bilgi Almak İçin Bizimle İletişime Geçin!
              </p>
              <div className="service-page-button-container">
                <Link to={"/iletişim"} className="service-link-button">
                  <button className="service-page-button">
                    <p className="button-text">İletişim</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="service-page-img-container">
            <img src={service.serviceImg} alt="" className="service-page-img" />
          </div>
        </div>
      ) : (
        <p className="service-page-p"> Sayfa Bilgisi Bulunamadı </p>
      )}
    </>
  );
};

export default ServicesPageContent;
