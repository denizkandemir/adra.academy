import "./ContactUs.scss";
import sticker from "/cu-sticker.jpg";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="cu-sticker-container">
          <img src={sticker} alt="" className="cu-sticker" />
        </div>
        <div className="cu-text-container">
          <h1 className="cu-title">Lorem ipsum</h1>
          <h2 className="cu-mid-title">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="cu-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi{" "}
            <br />
            eveniet, eligendi accusamus excepturi, repudiandae  vero unde
    
            <br /> quibusdam itaque, officia harum delectus dolores nulla
            necessitatibus
            <br /> quaerat? Adipisci, ratione?
          </p>
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
            <p className="button-text">Bize Ulaşın!</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
