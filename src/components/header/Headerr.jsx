
import "./Header.scss";
import headerBackgroundImg from "/new-header-sticker.png"
import Navbar from "./Navbar/navbar";
import { Link } from "react-router-dom";



function Header() {

  return (
    <>
      <div className="header-container">
        <Navbar containerClass={"header-navbar-container"} svgFill={"black"} linkClass={"header-navbar-link"}/>
        <div className="header-content-container">
          <div className="header-p-button-container">
            <h1 className="header-title"> ACADEMY ADRA İLE <br />  HAYAT İÇİN İNGİLİZCE ÖĞREN! </h1>
            <p className="header-p">
              İngilizce, global dünyada başarıya ulaşmanın anahtarıdır. Uzman eğitmenlerimiz, kişiye özel eğitim planlarımız ve esnek ders programlarımız ile hedeflerinize ulaşın. Online veya yüz yüze ders seçeneklerimiz ile öğrenim deneyiminizi kolaylaştırıyoruz.
            </p>
            <div className="header-button-container">
             <Link to="/contact"> <button className="header-button"> Aramıza Katılın! </button> </Link> 
            </div>
          </div>
          <div>
            <img className="header-person" src={headerBackgroundImg} alt="" />
          </div>
        </div>
        <div className="header-logo-container">
          {/* <img className="header-green" src={headerBackGreen} alt="" /> */}
        </div>
      </div>
    </>
  )
}



export default Header;