import React from "react";
import "./StudentCoachPage.scss";
import coach from "/coach2.png";
import coach2 from "/coach3.png";
import studentCoaching from "/Adra Coaching2.png";

const StudentCoachPage = () => {
  return (
    <>
      <div className="student-coach-container">
        <div className="student-coach-content-container">
          <div className="student-coach-text-container">
            {/* <div className="student-coach-title">
              <h1>Adra Coaching</h1>
            </div> */}
            <img src={studentCoaching} alt="" className="student-coach-title" />
            <div className="student-coach-title2">
              <p>Öğrenci Koçluğu</p>
            </div>
            <div className="student-coach-p">
              <p>
                Eğitim alanında günümüzde giderek yaygınlaşan Öğrenci Koçluğu{" "}
                <br />
                hizmeti, örgün eğitim ve yükseköğretim düzeylerinde öğrencilerin{" "}
                <br />
                akademik, kişisel ve kariyer hedeflerini belirlemelerinde ve bu{" "}
                <br />
                hedeflerine ulaşmalarında destek alabilecekleri eğitim uzmanları{" "}
                <br />
                tarafından sunulan profesyonel eğitim danışmanlığıdır.{" "}
              </p>
            </div>
          </div>
          <img className="student-coach-sticker" src={coach} alt="" />
        </div>

        <div className="background">
          <div className="student-coach-content-container">
            <div className="student-coach-mid-text">
              <p>
                Adra Öğrenci Koçluğu hizmeti, akademik başarısını <br />
                arttırmak, etkili bir çalışma düzeni oluşturmak, bireysel <br />
                özelliklerini keşfetmek, bu doğrultuda hedef oluşturmak <br />
                ve oluşturduğu hedefe ulaşabilmek için yürüyeceği yolu
                <br /> belirlemek isteyen öğrencilerin başvurabileceği etkili
                bir <br />
                bireysel destek, rehberlik ve takip sistemidir.
              </p>
            </div>
          </div>
        </div>

        <div className="student-coach-content-container">
          <img className="student-coach-sticker" src={coach2} alt="" />

          <div className="student-coach-last-p">
            <p>
              <span className="bold-text">Adra Coaching </span>adını verdiğimiz bu hizmet ile öğrencilerimizin{" "}
              <br />
              kendilerini tanımalarına, gelecekleri için hedef
              <br />
              belirleyebilmelerine, akademik zorluklarla baş edebilmeyi
              <br />
              öğrenmelerine, etkili çalışma yöntemlerini deneyimlemelerine,
              zaman
              <br />
              yönetimi, motivasyon, konsantrasyon, sınav stresi gibi sorunlarını
              <br />
              aşmalarına yardımcı olmak amacıyla düzenli görüşmeler yaparak
              onları
              <br />
              süreç boyunca yakından takip etmekte ve yönlendirmekteyiz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCoachPage;
