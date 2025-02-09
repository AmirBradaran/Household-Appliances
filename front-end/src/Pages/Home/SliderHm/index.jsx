import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './index.css';

export default function SliderHm() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        style={{
          width: '50%',
          height: '40vh',
          border: '1px solid black',
          borderRadius: 10,
          border:"none"
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
