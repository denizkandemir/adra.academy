import React from "react";
import "./StudentCoachPage.scss";
import coach from "/coach2.png";
import coach2 from "/coach3.png";
import studentCoaching from "/Adra Coaching2.png";
import { useLocation } from "react-router-dom";

const StudentCoachPage = () => {
  return (
    <>
      <div className="student-coach-container">
        <div className="student-coach-content-container">
          <div className="student-coach-text-container">
            <img src={studentCoaching} alt="" className="student-coach-title" />
            <div className="student-coach-title2">
              <p>Öğrenci Koçluğu</p>
            </div>
            <div className="student-coach-p">
              <p>
                Eğitim alanında günümüzde giderek yaygınlaşan Öğrenci Koçluğu
                hizmeti, örgün eğitim ve yükseköğretim düzeylerinde öğrencilerin
                akademik, kişisel ve kariyer hedeflerini belirlemelerinde ve bu
                hedeflerine ulaşmalarında destek alabilecekleri eğitim uzmanları
                tarafından sunulan profesyonel eğitim danışmanlığıdır.
              </p>
            </div>
          </div>
          <img className="student-coach-sticker" src={coach} alt="" />
        </div>

        <div className="background">
          <div className="student-coach-content-container">
            <div className="student-coach-mid-text">
              <p>
                Adra Öğrenci Koçluğu hizmeti, akademik başarısını 
                arttırmak, etkili bir çalışma düzeni oluşturmak, bireysel 
                özelliklerini keşfetmek, bu doğrultuda hedef oluşturmak
                ve oluşturduğu hedefe ulaşabilmek için yürüyeceği yolu
                belirlemek isteyen öğrencilerin başvurabileceği etkili
                bir 
                bireysel destek, rehberlik ve takip sistemidir.
              </p>
            </div>
          </div>
        </div>

        <div className="student-coach-content-container bottom-content-container">
          <img className="student-coach-sticker" src={coach2} alt="" />
          <div className="student-coach-last-p">
            <p>
              <span className="bold-text">Adra Coaching </span> adını verdiğimiz bu hizmet ile öğrencilerimizin
              kendilerini tanımalarına, gelecekleri için hedef
              belirleyebilmelerine, akademik zorluklarla baş edebilmeyi
              öğrenmelerine, etkili çalışma yöntemlerini deneyimlemelerine,
              zaman
              yönetimi, motivasyon, konsantrasyon, sınav stresi gibi sorunlarını
              aşmalarına yardımcı olmak amacıyla düzenli görüşmeler yaparak
              onları
              süreç boyunca yakından takip etmekte ve yönlendirmekteyiz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCoachPage;
