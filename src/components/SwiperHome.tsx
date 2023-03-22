import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}} ></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#E2E2EA", margin:10, width:400,height:460,}}></SwiperSlide>
      </Swiper>
    </>
  );
}