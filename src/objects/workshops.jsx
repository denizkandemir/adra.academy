import workshop1 from "/workshop-1.jpg";
import workshop2 from "/workshop-2.jpeg";
import workshop3 from "/workshop-3.jpg";

const workshops = [
    {
        img: workshop1,
        title: "Genel İngilizce Atölye Grupları",
        id: 1,
        accordions:[
            {
                title: "ADRA Mini",
                id: 1,
                name: "accordion1",
                text: "İlkokul öğrencileri için tasarlanmış özgün ve eğlenceli İngilizce eğitimi programımızdır."
            },
            {
                title: "ADRA Teens",
                id: 2,
                name: "accordion2",
                text: "Ortaokul ve lise düzeyinde öğrencilerimizin katılabileceği bu atölyemiz genç öğrencilerin İngilizce dil becerilerinin geliştirilmesine odaklanan bütüncül bir yaklaşım sunmaktadır."
            },
            {
                title: "ADRA Adults",
                id: 3,
                name: "accordion3",
                text: "Yetişkinlere yönelik Genel İngilizce atölyemiz, zengin içeriklerle dört temel dil becerisinin geliştirilmesini hedefler."
            }
        ]
    },
  
  
    {
        img: workshop2,
        title: "Odaklı İngilizce Atölye Grupları",
        id: 2,
        accordions:[
            {
                title: "ADRA Learn",
                id: 1,
                name: "accordion4",
                text: "Academy Adra’nın en seçkin eğitimlerinden biri olan Öğrenmeyi Öğrenme atölyemiz, katılımcıların öğrenme süreçlerini hızlandırmak ve en etkili hâle getirmek için tasarlanmıştır."            
            },
            {
                title: "ADRA Play",
                id: 2,
                name: "accordion5",
                text: "İlkokul öğrencileri ve okul öncesi gruplar için eğlenceli oyunlar yoluyla dil edinimi amaçlanır."
            },
            {
                title: "ADRA Sings",
                id: 3,
                name: "accordion6",
                text: "Ortaokul ve lise öğrencileri için şarkılarla İngilizce telaffuz ve doğal dil kullanımı geliştirmeye odaklanır."
            },
            {
                title: "ADRA Film",
                id: 3,
                name: "accordion7",
                text: "Yetişkinlere yönelik bu atölye grubumuzda film, dizi ve video gibi dijital içerikler izleyerek dil geliştirmenin keyfini çıkarabilirsiniz."
            }
        ]
    },
    {
        img: workshop3,
        title: "İngilizce Gelişim Atölyeleri",
        id: 3,
        accordions:[
            {
                title: "Sınav Hazırlık Atölyeleri",
                id: 1,
                name: "accordion8",
                text: "TOEFL, IELTS, YÖKDİL, YDS, YDT (YKS-DİL) gibi sınavlara yönelik hazırlık atölyelerimiz, sınavlara ilişkin teknik detaylara ve bilgi içeriğine hâkim olmanızı sağlar."            
            },
            {
                title: "Mesleki İngilizce Atölyeleri",
                id: 2,
                name: "accordion9",
                text: "İş dünyasında çağı yakalamak için özel olarak tasarlanmış bu atölyemizde, meslek alanlarınıza yönelik İngilizce terim bilginizi geliştirebilir, sözlü ve yazılı iletişim becerilerinizi geliştirebilirsiniz."
            },
            {
                title: "Akademik İngilizce Atölyeleri",
                id: 3,
                name: "accordion10",
                text: "ADRA Academics atölyesi ile akademik yazım ve sözlü sunum becerilerinizi geliştirebilirsiniz."
            },
            {
                title: "Çeviri Atölyesi",
                id: 3,
                name: "accordion11",
                text: "ADRA Translate, farklı alanlarda çeviri eğitimi sunan üç aşamalı çeviri atölyemiz, çeviri sürecine ilişkin akademik ilkeler, bilgi ve becerilere odaklanır."
            }
        ]
    },
]

export default workshops;