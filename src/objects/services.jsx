import img1 from "/adra-akademik-başarı.jpeg"
import img2 from "/adra-business.png"
import serviceImg1 from "/adra-business-page.png"
import serviceImg2 from "/adra-translate.png"
import img3 from "/adra-tercüme.jpeg"
import academyGif from "/success.gif"
import brainGif from "/brainstorming.gif"
import translatorGif from "/translator.gif"

const services = [
    {
        img: img1,
        title: "Yabancı Dil ve Akademik Başarı",
        id: 1,
        text: "Yabancı dil alanında her yaş grubu ve eğitim ihtiyacına uygun atölyeler, öğrenci koçluğu ve birebir akademik destek programlarımızı keşfedin.",
        gif: academyGif,
        path: "/academicPage",
        serviceText:"",
        serviceText2:"", 
        serviceImg:"",
      },
  
  
      {
        img: img2,
        title: "Kurumsal Çözüm Ortaklığı",
        id: 2,
        text:"Modern dil eğitimi çözümlerimizle, kurumsal ihtiyaçlarınıza özel, etkili ve sürdürülebilir bir ortaklık sunuyoruz.",
        gif: brainGif,
        path: "/hizmetlerimiz",
        serviceText:"",
        serviceText2:"", 
        serviceImg: serviceImg1,
      },
  
      {
        img: img3,
        title: "Tercüme ve Çeviri Hizmetleri",
        id: 3,
        text:"Alanında uzman çeviri ve tercüme ekibimizle, yazılı ve sözlü çeviri hizmetlerinizi yüksek kalite standartlarında ve etkin bir şekilde karşılıyoruz.",
        gif:translatorGif,
        path: "/hizmetlerimiz",
        serviceText:"",
        serviceText2:"", 
        serviceImg:serviceImg2,
      },
]

export default services;