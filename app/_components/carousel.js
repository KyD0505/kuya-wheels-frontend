'use client'
import Head from "next/head";
import { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";
export default function Carousel(){
  
    return(
        <>
        
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={"/4.jpg"} className="w-auto h-fit" ></img> </SwiperSlide>
        <SwiperSlide><img src={"/3.jpg"} ></img></SwiperSlide>
        <SwiperSlide><img src={"/2.jpg"} ></img></SwiperSlide>
        <SwiperSlide><img src={"/1.jpg"} ></img></SwiperSlide>
        
      </Swiper>


  


      </>
    );
}