import React from "react";
import AcademicPageHeader from "../components/AcademicPageHeader/AcademicPageHeader";
import AcademicPageCourses from "../components/AcademicPageCourses/AcademicPageCourses";
import { useEffect } from "react";

const AcademicPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AcademicPageHeader/>
      <AcademicPageCourses/>
    </>
  
  )

}

export default AcademicPage;