"use client";
import Header from "../../components/Header";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header />

      <div className="flex min-h-screen flex-col items-center p-24">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              src="/images/katzengasse/2.png"            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/katzengasse/2.png"            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/katzengasse/3.png"            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        </Swiper>
        <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
      </div>
    </main>
  );
}
