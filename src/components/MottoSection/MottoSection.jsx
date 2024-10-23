import React from "react";
import "./MottoSection.scss";
import mottoImg from "/adraMotto.jpg"
import InstagramIcon from "../svgs/InstaSvg";
import FacebookSvg from "../svgs/FacebookSvg";
import LinkedInSvg2 from "../svgs/LinkedInSvg2";


const MottoSection = () => {

  return (
    <>
      <div className="motto-container">
        <div className="motto-content-container">
          <div className="title-photo-main-container">
            <div className="title-p-container">
              <h1 className="main-title">  Neden Bizi Seçmelisiniz? </h1>
              <ul className="motto-list-container">
                <li className="title-photo-p">
                  <h3 className="list-title"> Kişiselleştirilmiş Eğitim Programları </h3>
                 <p className="list-title-p">  Öğrencilerimizin seviyelerine ve hedeflerine göre kişiselleştirilmiş programlar sunuyor, başlangıçtan ileri seviyeye kadar en uygun eğitimi sağlıyoruz. </p>    
                </li>
                <li className="title-photo-p">
                  <h3 className="list-title">Esnek ve Çevrimiçi Eğitim Seçenekleri</h3>
                  <p className="list-title-p">  Yüz yüze ve çevrimiçi eğitim seçenekleri sunuyoruz. İster sınıfta ister evinizde kolayca derslere katılabilir, kendi hızınıza göre ilerleyebilirsiniz.      </p>           
                      </li>
                <li className="title-photo-p">
                  <h3 className="list-title">Kapsamlı Destek ve Geri Bildirim</h3>
                  <p className="list-title-p">   Eğitiminizinde size rehberlik edecek danışmanımızın sağladığı düzenli değerlendirme ve geri bildirimlerle gelişiminizi yakından takip ediyor, öğreniminizi kolaylaştırıyoruz.    </p>       
                </li>
              </ul>
              {/* <p className="motto-p"> OKUL İÇİN DEĞİL HAYAT İÇİN ÖĞRENİYORUZ! </p> */}



            </div>
            <div className="photo-container">
              <img className="motto-photo" src={mottoImg} alt="" />
            </div>
          </div>
          <div className="insta-svg-container">
            <p className="social-media-p"> Bizi Sosyal Medyadan Takip Edin </p>
            <div className="social-media-svg-container">
              <a
                href="https://www.facebook.com/p/Academy-Adra-61553271547191/"
                target="_blank"
              >
                <FacebookSvg width={50} height={50} fill={"black"} />
              </a>
              <a
                href="https://www.instagram.com/academyadra/"
                target="_blank"
              >
                <LinkedInSvg2 width={45} height={45} fill={"black"} />
              </a>
              <a
                href="https://www.instagram.com/academyadra/"
                target="_blank"

              >
                <InstagramIcon width={45} height={45} fill={"black"} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default MottoSection;