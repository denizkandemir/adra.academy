import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Slide.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft  } from "react-icons/md";
import { Navigation, Pagination} from 'swiper/modules';
import cat1 from "/cat1.jpg";
import cat2 from "/cat2.webp";
import cat3 from "/cat3.jpg";
import cat4 from "/cat4.jpg";
import cat5 from "/cat5.gif";

function Slide() {


 return (
   <div className="slide-page-container">
   <h1 className="slide-title"> Biz Kimiz? </h1>
      <Swiper
    modules={[Navigation,Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    navigation = {{
      nextEl: ".button-next-slide",
      prevEl: ".button-prev-slide"
    }}
    pagination={{ clickable: true }}
    loop={true}
    
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
   
  >
    <SwiperSlide>
    {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    )}
       <div className="slide-container">
          <img className="slide-1" src={cat1} alt="" />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-container">
          <img className="slide-2" src={cat2} alt="" />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-container">
          <img className="slide-3" src={cat3} alt="" />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-container">
          <img className="slide-4" src={cat4} alt="" />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-container">
          <img className="slide-5" src={cat5} alt="" />
       </div>
    </SwiperSlide>
    
    <div className="navigation-buttons">
      <div className="button-next-slide">
        <MdKeyboardArrowRight />
       </div>
     <div className="button-prev-slide">
        <MdKeyboardArrowLeft />
     </div>
    </div>
  </Swiper>
  </div>
 )
}

export default Slide;