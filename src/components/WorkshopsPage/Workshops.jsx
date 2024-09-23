import React from "react";
import "./Workshops.scss";
import workshop1 from "/workshop-1.jpg";
import workshop2 from "/workshop-2.jpeg";
import workshop3 from "/workshop-3.jpg";
import workshops from "../../objects/workshops";

import { useState } from "react";

const Workshops = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const accordionHandler = (accordion) => {
    if(openAccordion === accordion) {
      setOpenAccordion(""); 
    }
    else {
      setOpenAccordion(accordion); 
    }

  };

  return (
    <>
      <div className="workshops-container">
        <div className="workshops-content-container" id="content1">
         {
          workshops.map((workshop) => (
            <div className={workshop.id % 2 === 1 ? "workshop-wrapper" : "workshop-wrapper reverse-wrapper"} key={workshop.id}>
              <img className="workshop-photo" src={workshop.img} alt="" />
              <div className="workshops-text-container"> 
                 <h2 className="worksop-title">{workshop.title}</h2>
                 {workshop.accordions.map((accordion) => (
                     <div className="workshop-accordion" key={accordion.id}>
                        <div
                             className={
                                  openAccordion === accordion.name
                                  ? "open-accordion"
                                  : "close-accordion"
                                }
                             onClick={() => accordionHandler(accordion.name) }
                        >
                             <h4 className="workshops-title2">{accordion.title}</h4>
                            <div> 
                              <p  className="workshop-accordion-text"> {accordion.text} </p> 
                             </div>
                        </div>
                     </div>
                 ))}
              </div>
            </div>
          ))
         }
         </div>
       </div>          
    </>
  );
};

export default Workshops;
