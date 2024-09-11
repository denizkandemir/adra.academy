import React from "react";
import "./AcademicPageHeader.scss";
import CapSvg from "../svgs/CapSvg";
import studentsImg from "/academic-students.jpg";
import kidsImg from "/academic-kids.jpg";
import bookImg from "/academic-books.jpg";


const AcademicPageHeader = () => {
  return (
    <div className="academic-page-header-container">
      <div className="academic-page-content-container">
        <div className="academic-title-container">
          <h1 className="academic-title">
            Yabancı Dil Ve Akademik Başarı
          </h1>
        </div>
        <div className="academic-imgs-info-container">
          <div className="academic-imgs-container">
            <div className="students-img-div">
              <img className="students-img" src={studentsImg} alt="" />
            </div>
            <div className="imgs-bottom-content-container">
              <div className="img-experience-container">
                <div className="experience-container">
                  <p className="experience-number-p"> +15 </p>
                  <p className="experience-p"> YILLIK EĞİTİM <br /> TECRÜBEMİZ </p>
                </div>
                <img src={kidsImg} className="kids-img" alt="" />
              </div>
              <div className="book-img-container">
                <img src={bookImg} className="book-img" alt="" />
              </div>
            </div>
          </div>
          <div className="academic-info-container">
            <div className="svg-title-container">
              {/* <CapSvg /> */}
              {/* <div className="square-div"></div> */}
              <p className="academic-service-title"> Hizmetlerimiz </p>
            </div>
            <h2 className="academic-header-title">
              Alanında Uzman Eğitmenlerimiz İle <br /> İngilizce Geleceğinizi Şekillendirin!
            </h2>
            <p className="academic-p">
              Academy Adra olarak, yabancı dil eğitiminin akademik başarı üzerindeki önemli etkisinin farkındayız. Yabancı dilde yeterlilik kazanmak, öğrencilerimize sadece dil becerileri kazandırmakla kalmaz, aynı zamanda akademik hayatta da önemli avantajlar sağlar.
            </p>
            <p className="academic-p">
              Yabancı dil öğreniminin yalnızca gramer ve kelime bilgisinden ibaret olmadığını, aynı zamanda eleştirel düşünme, problem çözme ve kültürel farkındalık gibi beceriler kazandırdığını vurguluyoruz. Academy Adra'da öğrenciler, okul için değil, hayat için öğrenerek dil becerilerini geliştirir ve akademik başarılarını ileri taşır.
            </p>
            <p className="academic-bottom-p">
             Academy Adra ile Yabancı Dilde Ustalık, Akademik Başarıda Öncülük.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicPageHeader;