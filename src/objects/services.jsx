import img1 from "/adra-akademik-başarı.jpeg"
import img2 from "/adra-kurumsal.jpg"
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
        gif: academyGif
      },
  
  
      {
        img: img2,
        title: "Kurumsal Çözüm Ortaklığı",
        id: 2,
        text:"Modern dil eğitimi çözümlerimizle, kurumsal ihtiyaçlarınıza özel, etkili ve sürdürülebilir bir ortaklık sunuyoruz.",
        gif: brainGif
      },
  
      {
        img: img3,
        title: "Tercüme ve Çeviri Hizmetleri",
        id: 3,
        text:"Alanında uzman çeviri ve tercüme ekibimizle, yazılı ve sözlü çeviri hizmetlerinizi yüksek kalite standartlarında ve etkin bir şekilde karşılıyoruz.",
        gif:translatorGif
      },
]

export default services;