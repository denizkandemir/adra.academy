
import "./HomePageHeader.scss";
import headerBackgroundImg from "/new-header-sticker2.png"
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const HomePageHeader = () => {
  return (
    <>
      <div className="header-container">
        <Navbar containerClass={"header-navbar-container"} svgFill={"black"} linkClass={"header-navbar-link"}/>
        <div className="header-content-container">
          <div className="header-p-button-container">
            <h1 className="header-title"> ACADEMY ADRA İLE <br />  HAYAT İÇİN İNGİLİZCE ÖĞREN! </h1>
            <p className="header-p">
            Academy Adra, farklı eğitim ihtiyaçlarına sahip öğrenenleri yüksek kaliteli öğrenme fırsatlarıyla güçlendirmeye adanmış dinamik bir eğitim danışmanlık merkezidir. Geniş yelpazede sunduğumuz  eğitim atölyeleri ile hem akademik başarıyı hem sanatsal yaratıcılığı teşvik ederek bireysel ve profesyonel gelişimi desteklemekteyiz.  </p>
            <div className="header-button-container">
             <Link to="/iletişim"> <button className="header-button"> Aramıza Katılın! </button> </Link> 
            </div>
          </div>
          <div>
            <img className="header-person" src={headerBackgroundImg} alt="" />
          </div>
        </div>
      </div>
  
    </>
  )
}

export default HomePageHeader;