import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductCarousel = ({ images }) => {
  return (
    <>
      <Swiper
        navigation
        modules={[Navigation]}
        className="mySwiper"
        style={{ width: '506px', height: '450px' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Product ${index + 1}`} className="w-full h-auto object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Küçük Resimler */}
      <div className="flex mt-4 space-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-20 h-20 object-cover cursor-pointer border border-gray-300"
            onClick={() => {
              document.querySelectorAll('.swiper-slide')[index].scrollIntoView({
                behavior: 'smooth',
              });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCarousel;
