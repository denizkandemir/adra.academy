import "./Footer.scss";
import logo from "/logo2.jpg";

function Footer() {
  return (
    <>
      <div className="footer-container">
      <img className="footer-logo" src={logo} alt="" />
        <div className="footer-content-container">
          <div className="footer-phoneNo">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                fill="white"
              />
            </svg>
            <p>+90 507 705 5010</p>
          </div>
          <div className="footer-address">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              fill="#fff"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M456.8 994.4c27.2 30.4 72.8 30.4 100-0.8 2.4-2.4 7.2-8 14.4-16 12-12.8 24.8-28 38.4-44.8 40-47.2 80-98.4 117.6-150.4s70.4-103.2 96.8-151.2c49.6-88.8 76.8-165.6 76.8-228.8 0.8-222.4-176-402.4-394.4-402.4S112 180 112 402.4c0 63.2 27.2 140.8 76.8 229.6 27.2 48 60 99.2 96.8 151.2 37.6 52 77.6 103.2 117.6 150.4 14.4 16.8 27.2 32 38.4 44.8 8 8 12.8 13.6 15.2 16z m35.2-32.8c-2.4-2.4-7.2-8-14.4-16-11.2-12.8-24-28-37.6-44-39.2-46.4-78.4-96.8-115.2-147.2C288 703.2 256 654.4 230.4 608 184.8 525.6 160 455.2 160 402.4 160 207.2 315.2 48.8 506.4 48.8s347.2 158.4 347.2 353.6c0 52.8-24.8 123.2-70.4 204.8-25.6 46.4-57.6 96-94.4 146.4-36.8 51.2-76 100.8-115.2 147.2-13.6 16-26.4 31.2-37.6 44-7.2 8-12 12.8-14.4 16-8.8 9.6-20.8 10.4-29.6 0.8z"
                fill=""
              />
              <path
                d="M506.4 578.4c-108 0-196-88-196-196s88-196 196-196 196 88 196 196-88 196-196 196z m0-344c-81.6 0-148 66.4-148 148s66.4 148 148 148S654.4 464 654.4 382.4s-66.4-148-148-148z"
                fill=""
              />
            </svg>
            <p>
              Ali Çetinkaya Mah. 3054.Sokak No:9/30
              <br /> Ayvalık, Balıkesir
            </p>
          </div>
          <div className="footer-email">
            <svg
              height="20px"
              width="20px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
            >
              <style type="text/css">{`.st0{fill:#fff;}`}</style>
              <g>
                <path
                  className="st0"
                  d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
      c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
      c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
      c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
      c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
      c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
      c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
      c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
      c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
      l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
      c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
      c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
      c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
                />
              </g>
            </svg>
            <p>info.academyadra@gmail.com</p>
          </div>
          <div className="footer-social-container">
            <div className="footer-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 30 30"
                style={{ fill: "#FFFFFF" }}
              >
                <path
                  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 
    c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 
    C26,4.895,25.104,4,24,4z"
                ></path>
              </svg>
            </div>
            <div className="footer-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0,0,300,150"
                style={{ fill: "#FFFFFF" }}
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="translate(0, -25) scale(8.53333,8.53333)">
                    <path d="M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="footer-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0,0,300,150"
                style={{ fill: "#FFFFFF" }}
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="translate(0, -70) scale(4,4)">
                    <path d="M31.82031,12c-18.382,0 -19.82031,1.43931 -19.82031,19.82031v0.35938c0,18.381 1.43831,19.82031 19.82031,19.82031h0.35938c18.382,0 19.82031,-1.43931 19.82031,-19.82031v-0.17969c0,-18.548 -1.452,-20 -20,-20zM43.99414,18c1.105,-0.003 2.00286,0.88914 2.00586,1.99414c0.003,1.105 -0.88914,2.00286 -1.99414,2.00586c-1.105,0.003 -2.00286,-0.88914 -2.00586,-1.99414c-0.003,-1.105 0.88914,-2.00286 1.99414,-2.00586zM31.97656,22c5.522,-0.013 10.01044,4.45456 10.02344,9.97656c0.013,5.522 -4.45456,10.01044 -9.97656,10.02344c-5.522,0.013 -10.01044,-4.45456 -10.02344,-9.97656c-0.013,-5.522 4.45456,-10.01044 9.97656,-10.02344zM31.98633,26c-3.314,0.008 -5.99433,2.70163 -5.98633,6.01563c0.008,3.313 2.70067,5.99238 6.01367,5.98438c3.314,-0.008 5.99433,-2.70067 5.98633,-6.01367c-0.008,-3.314 -2.70067,-5.99433 -6.01367,-5.98633z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="footer-content-container">
          <div className="footer-courses-services-container">
            <div className="footer-services-container">
            <div className="footer-courses-services-title">
              <p>Hizmetlerimiz</p>
            </div>
            <div className="footer-courses-services-index">
              <p>Yabancı Dil ve Akademik Başarı</p>
              <p>Kurumsal Çözüm Ortaklığı</p>
              <p>Tercüme Hizmetleri</p>
            </div>
            </div>
            <div className="footer-courses-container">
              <div className="footer-courses-services-title">
                <p>Kurslarımız</p>
              </div>
              <div className="footer-courses-services-index">
                <p>Yabancı Dil Atölyeleri</p>
                <p>Akademik Destek</p>
                <p>Öğrenci Koçluğu</p>
                <p>Yabancı Dil Koçluğu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content-container">
          
        </div>
      </div>
    </>
  );
}

export default Footer;
