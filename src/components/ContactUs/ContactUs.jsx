import "./ContactUs.scss";
import sticker from "/cu-sticker.jpg";
import { Link } from "react-router-dom";
import withFadeInOnScroll from "../../hooks/animation/animationHook";

const ContactUs = () => {


  withFadeInOnScroll();

  return (
    <>
      <div className="contact-us-container">
        <div className="contact-content-container">
          <div className="cu-sticker-container fade-in">
            <img src={sticker} alt="" className="cu-sticker" />
          </div>
          <div className="cu-text-container fade-in">
            <h1 className="cu-title"> Bize Ulaşın! </h1>
            <h2 className="cu-mid-title">
              Detaylı bilgi almak için bizimle iletişime geçin.
            </h2>
            <p className="cu-text">
            Eğitimlerimiz ve sunduğumuz hizmetler hakkında detaylı bilgi almak, kayıt işlemleriyle ilgili destek sağlamak ya da merak ettiğiniz herhangi bir konuda yardım almak için bizimle dilediğiniz zaman iletişime geçebilirsiniz! Size en iyi şekilde rehberlik etmek ve sorularınıza çözüm sunmak için buradayız.
            </p>
            <Link to="/iletişim" className="button-text">
              <button className="cu-button-container">
                <div className="button-arrow">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "block", margin: "auto" }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p className="button-text">İletişim</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
