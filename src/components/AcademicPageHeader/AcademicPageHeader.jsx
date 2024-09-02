import React from "react";
import "./AcademicPageHeader.scss";
import CapSvg from "../svgs/CapSvg";

const AcademicPageHeader = () => {
  return (
    <div className="academic-page-header-container">
      <div className="academic-page-content-container">
        <div className="academic-title-container">
          <div className="svg-title-container">
            {/* <CapSvg /> */}
            {/* <div className="square-div"></div> */}
            <p className="academic-service-title"> Hizmetlerimiz </p>
          </div>
          <h1 className="academic-title">
            Yabancı Dil Ve Akademik Başarı
          </h1>
        </div>
      </div>
    </div>
  )

}

export default AcademicPageHeader;