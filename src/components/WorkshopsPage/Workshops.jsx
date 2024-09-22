import React from "react";
import "./Workshops.scss";
import workshop1 from "/workshop-1.jpg";
import workshop2 from "/workshop-2.jpeg";
import workshop3 from "/workshop-3.jpg";

import { useEffect, useState } from "react";

const Workshops = () => {
  //   useEffect(() => {
  //     const div = document.querySelectorAll(".workshop-accordion div");

  //     div.forEach((d, index) => {
  //       d.onclick = () => {
  //         div.forEach((c, i) => {
  //           if (index !== i) c.removeAttribute("open");
  //         });
  //       };
  //     });
  //   }, []);

  const [openAccordion, setOpenAccordion] = useState("");

  const accordionHandler = (accordion) => {
    setOpenAccordion(accordion);
  };

  return (
    <>
      <div className="workshops-container">
        <div className="workshops-content-container" id="content1">
          <img className="workshop-photo" src={workshop1} alt="" />
          <div className="workshops-text-container">
            <div className="workshops-title">
              <h2 className="worksop-title">Genel İngilizce Atölye Grupları</h2>
            </div>
            <div className="workshop-accordion">
              <div
                className={
                  openAccordion === "accordion1"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion1") }
              >
                <h4 className="workshops-title2">ADRA Mini</h4>
                <div className="workshop-accordion-text">
                  İlkokul öğrencileri için tasarlanmış özgün ve eğlenceli
                  İngilizce eğitimi programımızdır.
                </div>
              </div>

              <div
                className={
                  openAccordion === "accordion2"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion2")}
              >
                <h4 className="workshops-title2">ADRA Teens</h4>
                <div className="workshop-accordion-text">
                  {" "}
                  Ortaokul ve lise düzeyinde öğrencilerimizin katılabileceği bu
                  atölyemiz genç öğrencilerin İngilizce dil becerilerinin
                  geliştirilmesine odaklanan bütüncül bir yaklaşım sunmaktadır.{" "}
                </div>
              </div>

              <div
                className={
                  openAccordion === "accordion3"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion3")}
              >
                <h4 className="workshops-title2">ADRA Adults</h4>
                <div className="workshop-accordion-text">
                  Yetişkinlere yönelik Genel İngilizce atölyemiz, zengin
                  içeriklerle dört temel dil becerisinin geliştirilmesini
                  hedefler.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="workshops-content-container" id="content2">
          <div className="workshops-text-container">
            <div className="workshops-title">
              <h2 className="worksop-title"> Odaklı İngilizce Atölye Grupları</h2>
            </div>
            <div className="workshop-accordion">
              <div
                className={
                  openAccordion === "accordion4"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion4")}
              >
                <h4 className="workshops-title2">ADRA Learn</h4>
                <div className="workshop-accordion-text">
                  Academy Adra’nın en seçkin eğitimlerinden biri olan Öğrenmeyi
                  Öğrenme atölyemiz, katılımcıların öğrenme süreçlerini
                  hızlandırmak ve en etkili hâle getirmek için tasarlanmıştır.
                </div>
              </div>

              <div
                className={
                  openAccordion === "accordion5"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion5")}
              >
                <h4 className="workshops-title2">ADRA Talks</h4>
                <div className="workshop-accordion-text">
                  Konuşma becerilerinizi mükemmelleştirmek için tasarlanmıştır.
                  Lise öğrencileri ve yetişkinler için ayrı gruplar halinde
                  çalışmalar yapılır.
                </div>
              </div>

              <div
                className={
                  openAccordion === "accordion6"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion6")}
              >
                <h4 className="workshops-title2">ADRA Play</h4>
                <div className="workshop-accordion-text">
                  İlkokul öğrencileri ve okul öncesi gruplar için eğlenceli
                  oyunlar yoluyla dil edinimi amaçlanır.
                </div>
              </div>

              <div
                className={
                  openAccordion === "accordion7"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion7")}
              >
                <h4 className="workshops-title2">ADRA Sings</h4>
                <div className="workshop-accordion-text">
                  Ortaokul ve lise öğrencileri için şarkılarla İngilizce
                  telaffuz ve doğal dil kullanımı geliştirmeye odaklanır.
                </div>
              </div>

              <div
                className={
                  openAccordion === "accordion8"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion8")}
              >
                <h4 className="workshops-title2">ADRA Film</h4>
                <div className="workshop-accordion-text">
                  Yetişkinlere yönelik bu atölye grubumuzda film, dizi ve video
                  gibi dijital içerikler izleyerek dil geliştirmenin keyfini
                  çıkarabilirsiniz.
                </div>
              </div>
            </div>
          </div>
          <img className="workshop-photo" src={workshop2} alt="" />
        </div>

        <div className="workshops-content-container" id="content3">
          <img className="workshop-photo" src={workshop3} alt="" />

          <div className="workshops-text-container">
            <div className="workshops-title">
              <h2 className="worksop-title">İngilizce Gelişim Atölyeleri</h2>
            </div>
            <div className="workshop-accordion">
              <div
                className={
                  openAccordion === "accordion9"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion9")}
              >
                <h4 className="workshops-title2">Sınav Hazırlık Atölyeleri</h4>
                <div className="workshop-accordion-text">
                  TOEFL, IELTS, YÖKDİL, YDS, YDT (YKS-DİL) gibi sınavlara
                  yönelik hazırlık atölyelerimiz, sınavlara ilişkin teknik
                  detaylara ve bilgi içeriğine hâkim olmanızı sağlar.
                </div>
              </div>
              <div
                className={
                  openAccordion === "accordion10"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion10")}
              >
                <h4 className="workshops-title2">
                  Mesleki İngilizce Atölyeleri
                </h4>
                <div className="workshop-accordion-text">
                  İş dünyasında çağı yakalamak için özel olarak tasarlanmış bu
                  atölyemizde, meslek alanlarınıza yönelik İngilizce terim
                  bilginizi geliştirebilir, sözlü ve yazılı iletişim
                  becerilerinizi geliştirebilirsiniz.
                </div>
              </div>
              <div
                className={
                  openAccordion === "accordion11"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion11")}
              >
                <h4 className="workshops-title2">
                  Akademik İngilizce Atölyeleri
                </h4>
                <div className="workshop-accordion-text">
                  ADRA Academics atölyesi ile akademik yazım ve sözlü sunum
                  becerilerinizi geliştirebilirsiniz.
                </div>
              </div>
              <div
                className={
                  openAccordion === "accordion12"
                    ? "open-accordion"
                    : "close-accordion"
                }
                onClick={() => accordionHandler("accordion12")}
              >
                <h4 className="workshops-title2">Çeviri Atölyesi</h4>
                <div className="workshop-accordion-text">
                  ADRA Translate, farklı alanlarda çeviri eğitimi sunan üç
                  aşamalı çeviri atölyemiz, çeviri sürecine ilişkin akademik
                  ilkeler, bilgi ve becerilere odaklanır.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
