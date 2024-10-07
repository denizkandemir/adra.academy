import React from "react";
import "./Workshops.scss";
import workshops from "../../objects/workshops";
import { useState } from "react";
import ArrowIcon from "../svgs/downArrow";


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

  return (
    <>
      <div className="workshops-container">
        <div className="workshops-main-container">
          <div className="workshops-content-container">
            {
              workshops.map((workshop) => (
                <div className={workshop.id % 2 === 1 ? "workshop-wrapper" : "workshop-wrapper reverse-wrapper"} key={workshop.id}>
                  <div>
                    <h2 className={workshop.id === 1 ? "workshops-main-title" : "non-title"}> Yabancı Dil Atölyeleri </h2>
                    <img className="workshop-photo" src={workshop.img} alt="" />
                  </div>
                  <div className="workshops-text-container">
                    <p className={workshop.id % 2 === 1 ? "workshops-mini-text" : "workshops-mini-text white-mini-p"}> Kurslarımız </p>
                    <h2 className={workshop.id % 2 === 1 ? "workshops-title" : "workshops-title white-text"}>{workshop.title}</h2>
                    {workshop.accordions.map((accordion) => (
                      <div className={workshop.id % 2 === 1 ? "workshop-accordion" : "workshop-accordion white-accordion"} key={accordion.id}>
                        <div className="workshop-accordion-texts" onClick={() => accordionHandler(accordion.name)}>
                          <div className="workshops-title-svg-container">
                            <h4 className={workshop.id % 2 === 1 ? "workshops-title2" : "workshops-title2 white-text"}>{accordion.title}</h4>
                            <div className={openAccordion === accordion.name ? "workshop-svg-reverse" : "workshop-svg"}>
                              <ArrowIcon width={25} height={22} fill={workshop.id % 2 === 1 ? "black" : "white"} />
                            </div>
                          </div>
                          <div className={
                            openAccordion === accordion.name
                              ? "open-accordion"
                              : "workshop-smenu close-accordion"
                          }>
                            <p className={workshop.id % 2 === 1 ? "workshop-accordion-text" : "workshop-accordion-text white-text"}> {accordion.text} </p>
                          </div>

                        </div>
                      </div>
                    ))}
                    <a
                      href="tel:+905077055010"
                      data-initialized="true"
                    >
                      <button className={workshop.id % 2 === 1 ? "workshops-contact-buttton" : "workshops-contact-buttton color-button"}> Bilgi Al </button>
                    </a>
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
