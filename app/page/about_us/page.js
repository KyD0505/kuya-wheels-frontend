'use client'
import Carousel from "@/app/_components/carousel";
import useScrollToSection from "@/app/_hooks/scrollToPage";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function About(){
    const scrollToSection = useScrollToSection();
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
      // Define certification data locally
      const localCertifications = [
        { title: 'Certification Title 1', description: 'Description for Certification 1.' },
        { title: 'Certification Title 2', description: 'Description for Certification 2.' },
        { title: 'Certification Title 2', description: 'Description for Certification 2.' },
        { title: 'Certification Title 2', description: 'Description for Certification 2.' },
        { title: 'Certification Title 2', description: 'Description for Certification 2.' },
        // Add more certifications as needed
      ];
      setCertifications(localCertifications);
    }, []);
    return(
        <>
      <section className="items-center lg:flex lg:h-screen font-poppins md:mt-10 flex flex-col mx-auto dark:bg-gray-800">
  <div className="lg:mt-24 flex flex-col flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
    <div className="flex flex-wrap ">
      <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
        <div className="relative lg:max-w-md">
          <img src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg" alt="aboutimage" className="relative z-10 object-cover w-full rounded h-96" />
        </div>
      </div>
      <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
        <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
          <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
            About Us
          </h1>
        </div>
        <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.
        </p>
      
      </div>
    </div>
  </div>
</section>


<hr
  class="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
<section className="items-center lg:flex lg:h-screen font-poppins md:mt-10 flex flex-col mx-auto dark:bg-gray-800">
<div className="relative text-center px-10 lg:px-24">
  <h6 className="text-2xl md:text-3xl font-bold my-10  ">Our Certificates and Accreditations</h6>
  <span className="text-gray-600">
    Throughout the course of his career, Mr. Balagbis obtained his knowledge by taking the appropriate TESDA courses passing every one of them with flying colors. His ever-expanding arsenal of national certificates are proof of his dedication to his craft.
  </span>
  
</div>

  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    {/* <div className="pt-4 bg-white rounded shadow dark:bg-gray-900"> */}
      {/* <div className="flex px-6 pb-4 border-b dark:border-gray-700">
        <h2 className="text-xl font-bold dark:text-gray-400">Certifications</h2>
      </div> */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((certification, index) => (
          <div key={index} className="bg-gray-100 border-b-4 border-green-400 dark:bg-gray-800 p-6 rounded shadow">
         
            <h3 className="text-lg font-bold mb-2 dark:text-gray-400">{certification.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{certification.description}</p>
            {/* Add more details or actions here if needed */}
          </div>
        ))}
      {/* </div> */}
    </div>
  </div>
</section>

        </>
    );
} 

  