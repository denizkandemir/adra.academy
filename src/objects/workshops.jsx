//import workshop1 from "/adra-mini.png";
import workshop2 from "/adra-group.png";
import workshop1 from "/workshop-11.png";
//import workshop2 from "/workshop-2.jpeg";
import workshop3 from "/workshop-3.jpg";
import topBackground from "/workshops-top-background.png";
import middleBackground from "/workshops-middle-background.png";
import bottomBackground from "/workshops-bottom-background.png";


const workshops = [
    {
        img: workshop1,
        title: "Genel İngilizce Atölye Grupları",
        id: 1,
        background: topBackground,
        backgroundClass:"workshops-top-background",
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
        background: middleBackground,
        backgroundClass:"workshops-middle-background",
        accordions:[
            {
                title: "ADRA Learn",
                id: 1,
                name: "accordion4",
                text: "Academy Adra’nın en seçkin eğitimlerinden biri olan Öğrenmeyi Öğrenme atölyemiz, katılımcıların öğrenme süreçlerini hızlandırmak ve en etkili hâle getirmek için tasarlanmıştır."            
            },
            {
                title: "ADRA Talks",
                id: 2,
                name: "accordion5",
                text: "Konuşma becerilerinizi mükemmelleştirmek için tasarlanmıştır. Lise öğrencileri ve yetişkinler için ayrı gruplar halinde çalışmalar yapılır."
            },
            {
                title: "ADRA Play",
                id: 3,
                name: "accordion6",
                text: "İlkokul öğrencileri ve okul öncesi gruplar için eğlenceli oyunlar yoluyla dil edinimi amaçlanır."
            },
            {
                title: "ADRA Sings",
                id: 4,
                name: "accordion7",
                text: "Ortaokul ve lise öğrencileri için şarkılarla İngilizce telaffuz ve doğal dil kullanımı geliştirmeye odaklanır."
            },
            {
                title: "ADRA Film",
                id: 5,
                name: "accordion8",
                text: "Yetişkinlere yönelik bu atölye grubumuzda film, dizi ve video gibi dijital içerikler izleyerek dil geliştirmenin keyfini çıkarabilirsiniz."
            }
           
        ]
    },
    {
        img: workshop3,
        title: "İngilizce Gelişim Atölyeleri",
        id: 3,
        background: bottomBackground,
        backgroundClass:"workshops-bottom-background",
        accordions:[
            {
                title: "Sınav Hazırlık Atölyeleri",
                id: 1,
                name: "accordion9",
                text: "TOEFL, IELTS, YÖKDİL, YDS, YDT (YKS-DİL) gibi sınavlara yönelik hazırlık atölyelerimiz, sınavlara ilişkin teknik detaylara ve bilgi içeriğine hâkim olmanızı sağlar."            
            },
            {
                title: "Mesleki İngilizce Atölyeleri",
                id: 2,
                name: "accordion10",
                text: "İş dünyasında çağı yakalamak için özel olarak tasarlanmış bu atölyemizde, meslek alanlarınıza yönelik İngilizce terim bilginizi geliştirebilir, sözlü ve yazılı iletişim becerilerinizi geliştirebilirsiniz."
            },
            {
                title: "Akademik İngilizce Atölyeleri",
                id: 3,
                name: "accordion11",
                text: "ADRA Academics atölyesi ile akademik yazım ve sözlü sunum becerilerinizi geliştirebilirsiniz."
            },
            {
                title: "Çeviri Atölyesi",
                id: 4,
                name: "accordion12",
                text: "ADRA Translate, farklı alanlarda çeviri eğitimi sunan üç aşamalı çeviri atölyemiz, çeviri sürecine ilişkin akademik ilkeler, bilgi ve becerilere odaklanır."
            }
        ]
    },
]

export default workshops;