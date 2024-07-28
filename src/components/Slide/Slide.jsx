import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slide.scss";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  EffectCards,
} from "swiper/modules";
import slide1 from "/slide1.jpg";
import slide2 from "/slide2.jpg";
import slide3 from "/slide3.jpg";
import slide4 from "/slide4.jpg";
import slide5 from "/slide5.jpg";

function Slide() {
  return (
    <>
      

      <div className="slide-page-container">
      <h1 className="slide-title"> Biz Kimiz? </h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, EffectCards]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          pagination={{ clickable: true }}
          loop={false}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          keyboard={{ enabled: true }}
          rewind={true}
          effect="cards"
          cardsEffect={{ slideShadows: false, perSlideRotate: 2 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div>Current slide is {isActive ? "active" : "not active"}</div>
            )}
            <div className="slide-container">
              <img className="slide-1" src={slide1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <img className="slide-2" src={slide2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <img className="slide-3" src={slide3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <img className="slide-4" src={slide4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <img className="slide-5" src={slide5} alt="" />
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
    </>
  );
}

export default Slide;
