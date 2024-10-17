
import "./Header.scss";
import TeacherSvg from "../svgs/teacher";
import headerBackGreen from "/new-header-bg.png"
import headerBackLeft from "/header-back-left.png"
import headerMainImg from "/new-header-sticker.png"

function Header() {

  return (
    <>
      <div className="header-container">
        <div className="header-content-container">
          <div className="header-p-button-container">
            <h1 className="header-title"> ACADEMY ADRA İLE <br />  HAYAT İÇİN İNGİLİZCE ÖĞREN! </h1>
            <p className="header-p">
              İngilizce, global dünyada başarıya ulaşmanın anahtarıdır. Uzman eğitmenlerimizle, kişiye özel eğitim planlarımız ve esnek ders programlarımızla hedeflerinize ulaşın. Online veya yüz yüze ders seçeneklerimizle öğrenim deneyiminizi kolaylaştırıyoruz.
            </p>
            <button className="header-button"> Aramıza Katılın! </button>
          </div>
          <div>
            <img className="header-person" src={headerMainImg} alt="" />
          </div>
        </div>
        <div className="header-logo-container">
          <img className="header-green" src={headerBackGreen} alt="" />
        </div>
      </div>
    </>
  )
}



export default Header;