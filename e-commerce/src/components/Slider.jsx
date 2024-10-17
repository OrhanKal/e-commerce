import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full h-[100vh]"
    >
      <SwiperSlide>
        <img src={`https://via.assets.so/game.png?id=${Math.floor(Math.random() * 10)}&q=95&w=1920&h=1080&fit=fill`} alt="Slide 1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`https://via.assets.so/game.png?id=${Math.floor(Math.random() * 20)}&q=95&w=1920&h=1080&fit=fill`} alt="Slide 2" className="w-full h-full object-cover"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={`https://via.assets.so/game.png?id=${Math.floor(Math.random() * 30)}&q=95&w=1920&h=1080&fit=fill`} alt="Slide 3" className="w-full h-full object-cover"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
