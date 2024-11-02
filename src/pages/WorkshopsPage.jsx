import React from "react";
import Workshops from "../components/WorkshopsPage/Workshops.jsx";
import { useEffect } from "react";

const WorkshopsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Workshops />
    </>
  );
};

export default WorkshopsPage;
