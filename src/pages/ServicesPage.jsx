import React from "react";
import ServicesPageContent from "../components/ServicesPageContent/ServicesPageContent";
import { useLocation } from "react-router-dom";

const ServicesPage = () => {
  const location = useLocation();
  const service = location.state || {};
 
  return (
    <>
      <ServicesPageContent service={service}/>
    </>
  );
};

export default ServicesPage;
