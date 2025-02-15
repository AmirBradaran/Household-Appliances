import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./index.css";

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
          width: "900px",
          height: "40vh",
          border: "1px solid black",
          borderRadius: 10,
          border: "none",
          boxShadow: "1px 1px 10px 2px black",
        }}
      >
        <SwiperSlide>
          <img
            src="./C.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./D.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./G.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./GG.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Jd.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./PP.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Sn.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Sn.jpeg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Sp.jpg"
            alt=""
            style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
