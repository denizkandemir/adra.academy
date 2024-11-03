import React from "react";
import { useEffect } from "react";
import ContactPage from "../components/ContactPage/ContactPage";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <>
       <ContactPage />
       </>
    )
}

export default Contact;
