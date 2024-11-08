import React from "react";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-all-container">
          <div className="contact-page-content-container">
            <div className="contact-svg-container">
              <div className="contact-info">
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z"
                    fill="#000000"
                  />
                </svg>
                <p className="contact-info-p">+90 507 705 5010</p>
              </div>
              <div className="contact-info">
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z"
                    fill="#000000"
                  />
                  <path
                    d="M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z"
                    fill="#000000"
                  />
                </svg>
                <p className="contact-info-p">
                  Ali Çetinkaya Mah. 3054.Sokak No:9/30
                  <br /> Ayvalık, Balıkesir
                </p>
              </div>
              <div className="contact-info">
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3856 23.789L11.3831 23.7871L11.3769 23.7822L11.355 23.765C11.3362 23.7501 11.3091 23.7287 11.2742 23.7008C11.2046 23.6451 11.1039 23.5637 10.9767 23.4587C10.7224 23.2488 10.3615 22.944 9.92939 22.5599C9.06662 21.793 7.91329 20.7041 6.75671 19.419C5.60303 18.1371 4.42693 16.639 3.53467 15.0528C2.64762 13.4758 2 11.7393 2 10C2 7.34784 3.05357 4.8043 4.92893 2.92893C6.8043 1.05357 9.34784 0 12 0C14.6522 0 17.1957 1.05357 19.0711 2.92893C20.9464 4.8043 22 7.34784 22 10C22 11.7393 21.3524 13.4758 20.4653 15.0528C19.5731 16.639 18.397 18.1371 17.2433 19.419C16.0867 20.7041 14.9334 21.793 14.0706 22.5599C13.6385 22.944 13.2776 23.2488 13.0233 23.4587C12.8961 23.5637 12.7954 23.6451 12.7258 23.7008C12.6909 23.7287 12.6638 23.7501 12.645 23.765L12.6231 23.7822L12.6169 23.7871L12.615 23.7885C12.615 23.7885 12.6139 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789ZM12 23L11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                    fill="#000000"
                  />
                </svg>
                <p className="contact-info-p">info.academyadra@gmail.com</p>
              </div>
            </div>

            <div className="contact-title-p-container">
              <h2 className="contact-title">Bize Ulaşın</h2>
              <p className="contact-p">
                Her türlü soru ve bilgi talepleriniz için bizimle iletişime
                geçin! Size en kısa sürede dönüş yapmaktan mutluluk duyarız.
              </p>
              <div className="contact-btn-container">
                <button
                  className="contact-btn"
                  onClick={() => (window.location.href = "tel:+905077055010")}
                >
                  Bizi Arayın
                </button>
                <button className="contact-btn">
                  <a
                    href="mailto:info@academyadra.gmail.com"
                    className="contact-btn-text"
                    data-initialized="true"
                  >
                    Mail Gönderin
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="contact-page-content-container">
            <iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0037406982574!2d26.711451175957873!3d39.3335007716342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba75f6584f44c9%3A0x3ff06628567ed1a2!2sAcademy%20ADRA!5e0!3m2!1sen!2str!4v1723555360297!5m2!1sen!2str"
              height="330"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
