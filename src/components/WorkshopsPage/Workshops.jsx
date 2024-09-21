import React from "react";
import "./Workshops.scss";
import workshop1 from "/workshop-1.jpg";
import workshop2 from "/workshop-2.jpeg";

const Workshops = () => {
  return (
    <>
      <div className="workshops-container">
        <div className="workshops-content-container" id="content1">
          <img className="workshop-photo" src={workshop1} alt="" />
          <div className="workshops-text-container">
            <div className="workshops-title">
              <h1>Genel İngilizce Atölye Grupları</h1>
            </div>
            <div className="workshop-accordion">
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Mini</summary>
                  <div className="workshop-accordion-text">
                    {" "}
                    İlkokul öğrencileri için tasarlanmış özgün ve <br />
                    eğlenceli İngilizce eğitimi programımızdır.{" "}
                  </div>
                </details>
              </div>
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Teens</summary>
                  <div className="workshop-accordion-text">
                    {" "}
                    Ortaokul ve lise düzeyinde öğrencilerimizin <br />
                    katılabileceği bu atölyemiz genç öğrencilerin İngilizce{" "}
                    <br />
                    dil becerilerinin geliştirilmesine odaklanan bütüncül <br />
                    bir yaklaşım sunmaktadır.{" "}
                  </div>
                </details>
              </div>
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Adults</summary>
                  <div className="workshop-accordion-text">
                    Yetişkinlere yönelik Genel İngilizce atölyemiz, <br />
                    zengin içeriklerle dört temel dil becerisinin <br />
                    geliştirilmesini hedefler.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        <div className="workshops-content-container" id="content2">
          <div className="workshops-text-container">
            <div className="workshops-title">
              <h1>Odaklı İngilizce Atölye Grupları</h1>
            </div>
            <div className="workshop-accordion">
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Learn</summary>
                  <div className="workshop-accordion-text">
                    Academy Adra’nın en seçkin eğitimlerinden biri olan<br />
                    Öğrenmeyi Öğrenme atölyemiz, katılımcıların öğrenme<br />
                    süreçlerini hızlandırmak ve en etkili hâle getirmek için<br />
                    tasarlanmıştır.
                  </div>
                </details>
              </div>
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Talks</summary>
                  <div className="workshop-accordion-text">
                    Konuşma becerilerinizi mükemmelleştirmek için<br />
                    tasarlanmıştır. Lise öğrencileri ve yetişkinler <br />için ayrı
                    gruplar halinde çalışmalar yapılır.
                  </div>
                </details>
              </div>
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Play</summary>
                  <div className="workshop-accordion-text">
                    İlkokul öğrencileri ve okul öncesi gruplar için eğlenceli<br />
                    oyunlar yoluyla dil edinimi amaçlanır.
                  </div>
                </details>
              </div>
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Sings</summary>
                  <div className="workshop-accordion-text">
                    Ortaokul ve lise öğrencileri için şarkılarla İngilizce<br />
                    telaffuz ve doğal dil kullanımı geliştirmeye odaklanır.
                  </div>
                </details>
              </div>
              <div className="workshop-accordion-item">
                <details>
                  <summary>ADRA Film</summary>
                  <div className="workshop-accordion-text">
                    Yetişkinlere yönelik bu atölye grubumuzda film, dizi ve<br />
                    video gibi dijital içerikler izleyerek dil geliştirmenin<br />
                    keyfini çıkarabilirsiniz.
                  </div>
                </details>
              </div>
            </div>
          </div>
          <img className="workshop-photo" src={workshop2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Workshops;
