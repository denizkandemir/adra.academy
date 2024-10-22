
import "./Header.scss";
import headerBackgroundImg from "/new-header-sticker.png"
import Navbar from "./Navbar/navbar";



function Header() {

  return (
    <>
      <div className="header-container">
        <Navbar containerClass={"header-navbar-container"} svgFill={"black"} linkClass={"header-navbar-link"}/>
        <div className="header-content-container">
          <div className="header-p-button-container">
            <h1 className="header-title"> ACADEMY ADRA İLE <br />  HAYAT İÇİN İNGİLİZCE ÖĞREN! </h1>
            <p className="header-p">
              İngilizce, global dünyada başarıya ulaşmanın anahtarıdır. Uzman eğitmenlerimizle, kişiye özel eğitim planlarımız ve esnek ders programlarımızla hedeflerinize ulaşın. Online veya yüz yüze ders seçeneklerimizle öğrenim deneyiminizi kolaylaştırıyoruz.
            </p>
            <button className="header-button"> Aramıza Katılın! </button>
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