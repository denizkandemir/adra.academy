import React from "react";
import "./Workshops.scss";
import workshops from "../../objects/workshops";
import { useState } from "react";
import ArrowIcon from "../svgs/downArrow";
import { Link } from "react-router-dom";
import withFadeInOnScroll from "../animation/animationHook";



const Workshops = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const accordionHandler = (accordion) => {
    if (openAccordion === accordion) {
      setOpenAccordion("");
    }
    else {
      setOpenAccordion(accordion);
    }
  };

  withFadeInOnScroll();

  return (
    <>
      <div className="workshops-container">
        <div className="workshops-main-container">
          <div className="workshops-content-container">
            {
              workshops.map((workshop) => (
                <div className="workshop-main-backgrounds-container" key={workshop.id}>
                  <div className={`${workshop.id % 2 === 1 ? "workshop-wrapper" : "workshop-wrapper reverse-wrapper"} ${workshop.id === 1 ? "workshop-wrapper less-gap" : "workshop-wrapper"}`}>
                    <div>
                      <h2 className={workshop.id === 1 ? "workshops-main-title" : "non-title"}> Yabancı Dil Atölyeleri </h2>
                      <img className={workshop.id !== 1 ?"workshop-photo" : "workshop-photo-with-gif"} src={workshop.img} alt="" />
                    </div>
                    <div className="workshops-text-container fade-in">
                      <p className={"workshops-mini-text"}> Kurslarımız </p>
                      <h2 className={"workshops-title"}>{workshop.title}</h2>
                      {workshop.accordions.map((accordion) => (
                        <div className={"workshop-accordion"} onClick={() => accordionHandler(accordion.name)} key={accordion.id}>
                          <div className="workshop-accordion-texts" >
                            <div className="workshops-title-svg-container">
                              <h4 className={"workshops-title2"}>{accordion.title}</h4>
                              <div className={openAccordion === accordion.name ? "workshop-svg-reverse" : "workshop-svg"}>
                                <ArrowIcon width={25} height={22} fill={"black"} />
                              </div>
                            </div>
                            <div className={
                              openAccordion === accordion.name
                                ? "open-accordion"
                                : "workshop-smenu close-accordion"
                            }>
                              <p className={"workshop-accordion-text"}> {accordion.text} </p>
                            </div>
                          </div>
                        </div>

                      ))}
                      <Link to="/contact">
                        <button className={"workshops-contact-buttton"}> Bilgi Al </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
