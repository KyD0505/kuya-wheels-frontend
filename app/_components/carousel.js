'use client'
import Head from "next/head";
import { useState, useEffect } from 'react';
export default function Carousel(){
  
    return(
        <>
        
        <div class="carousel w-full md:w-[50vw] rounded-lg h-[25vh] md:h-full">
    <div id="slide1" class="carousel-item relative w-full">
        <div class="image-overlay"></div> 
        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full md:h-auto" />
    </div>
  
    <div id="slide2" class="carousel-item relative w-full">
        <div class="image-overlay"></div> 
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full md:h-auto" />
    </div>
   
    <div id="slide3" class="carousel-item relative w-full">
        <div class="image-overlay"></div>
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full md:h-auto" />
    </div>
 
    <div id="slide4" class="carousel-item relative w-full">
        <div class="image-overlay"></div> 
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full md:h-auto" />
    </div>
</div>

  


      </>
    );
}