import React from "react";
import ServicesPageContent from "../components/ServicesPageContent/ServicesPageContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const ServicesPage = () => {
  const location = useLocation();
  const service = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  return (
    <>
      <ServicesPageContent service={service}/>
    </>
  );
};

export default ServicesPage;
