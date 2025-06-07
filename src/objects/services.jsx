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
        path: "/akademikBaşarı",
        serviceText:"",
        serviceText2:"", 
        serviceImg:"",
        contentTitle: "Hizmetlerimiz",
        routeId:1
      },
  
  
      {
        img: img2,
        title: "Kurumsal Çözüm Ortaklığı",
        id: 2,
        text:"Modern dil eğitimi çözümlerimizle, kurumsal ihtiyaçlarınıza özel, etkili ve sürdürülebilir bir ortaklık sunuyoruz.",
        gif: brainGif,
        path: "/kurumsalÇözümOrtaklığı",
        serviceText:"Global ölçekte faaliyet yürüten, uluslararası bağlantılarla çalışan, ya da ölçeğini genişletmeyi hedefleyen kurumsal oluşumların dil eğitimine yönelik ihtiyaçlarının belirlenmesi ve giderilmesi için kurumsal çözüm ortağınız olarak hizmet vermekteyiz.",
        serviceText2:"Academy Adra olarak, işletmenizin uluslararası arenada rekabet gücünü artırmak için özel olarak tasarlanmış kurumsal çözüm ortaklığı hizmetleri sunmaktayız. Şirket içi eğitimlerden, bireysel çalışan eğitimine kadar geniş bir yelpazede dil eğitimi çözümleri sağlıyoruz.", 
        serviceImg: serviceImg1,
        contentTitle: "Hizmetlerimiz",
        routeId:2,
      },
  
      {
        img: img3,
        title: "Çeviri Hizmetleri",
        id: 3,
        text:"Alanında uzman çeviri ekibimizle, yazılı ve sözlü çeviri hizmetlerinizi yüksek kalite standartlarında ve etkin bir şekilde karşılıyoruz.",
        gif:translatorGif,
        path: "/tercümeHizmetleri",
        serviceText:"Akademimizde yalnızca dil eğitimi vermekle kalmıyor, aynı zamanda profesyonel çeviri hizmetleri de sunuyoruz. Deneyimli çeviri ekibimiz, çeşitli dillerde yazılı ve sözlü çeviri hizmetleri ile akademik, iş yerinde profesyonel ve kişisel ihtiyaçlarınıza yönelik çözümler sunar.",
        serviceText2:"Her alanda uzman çevirmenlerimiz, metinlerinizin amacına uygun bir şekilde çevrilmesini sağlar. İhtiyaçlarınıza göre hızlı ve güvenilir çözümler sunarak, dünya ile iletişiminizi güçlendirmeyi hedefliyoruz. Çeviri ihtiyaçlarınız için bize ulaşın ve dünya ile dil engeli olmadan iletişim kurun.", 
        serviceImg:serviceImg2,
        contentTitle: "Hizmetlerimiz",
        routeId:3,
      },
]

export default services;