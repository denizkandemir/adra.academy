import React from "react";
import "./MottoSection.scss";
import mottoImg from "/adraMotto.jpg"
import InstagramIcon from "../svgs/InstaSvg";
import FacebookSvg from "../svgs/FacebookSvg";
import LinkedInSvg2 from "../svgs/LinkedInSvg2";


const MottoSection = () => {

  return (
    <>
      <div className="motto-container">
        <div className="motto-content-container">
          <div className="title-photo-main-container">
            <div className="title-p-container">
              <h1 className="main-title"> ADRA ACADEMY </h1>
              <p className="motto-p"> OKUL İÇİN DEĞİL HAYAT İÇİN ÖĞRENİYORUZ! </p>
              <p className="title-photo-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit.At provident,  <br />eius rerum maiores consequatur reiciendis </p>
              <p className="title-photo-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit.  At provident, <br />eius rerum maiores consequatur reiciendis </p>
              <p className="title-photo-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit.  At provident, <br />eius rerum maiores consequatur reiciendis </p>
            </div>
            <div className="photo-container">
              <img className="motto-photo" src={mottoImg} alt="" />
            </div>
          </div>
          <div className="insta-svg-container">
            <p className="social-media-p"> Bizi Sosyal Medyadan Takip Edin </p>
            <div className="social-media-svg-container">
              <FacebookSvg width={50} height={50} fill={"black"} />
              <LinkedInSvg2 width={45} height={45} fill={"black"} />
              <InstagramIcon width={45} height={45} fill={"black"} />
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default MottoSection;