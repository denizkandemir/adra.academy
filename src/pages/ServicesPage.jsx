import React from "react";
import ServicesPageContent from "../components/ServicesPageContent/ServicesPageContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const ServicesPage = () => {
  const location = useLocation();
  const services = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  return (
    <>
      <ServicesPageContent services={services}/>
    </>
  );
};

export default ServicesPage;
