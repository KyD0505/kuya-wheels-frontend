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
        { title: 'NC II in DRIVING', description: 'National Certificate Level II in Driving.' },
        { title: 'NC III in DRIVING (PASSENGER BUS/ STRAIGHT TRUCK)', description: 'National Certificate Level III in Driving for Passenger Bus/Straight Truck.' },
        { title: 'NC III in DRIVING (ARTICULATED VEHICLE)', description: 'National Certificate Level III in Driving for Articulated Vehicle.' },
        { title: 'NC III in AUTOMOTIVE SERVICING', description: 'National Certificate Level III in Automotive Servicing.' },
        { title: 'NC II in AUTOMOTIVE SERVICING (CHASSIS REPAIR)', description: 'National Certificate Level II in Automotive Servicing for Chassis Repair.' },
        { title: 'NC II in AUTOMOTIVE SERVICING (ELECTRICAL REPAIR)', description: 'National Certificate Level II in Automotive Servicing for Electrical Repair.' },
        { title: 'NC II in AUTOMOTIVE SERVICING (ENGINE REPAIR)', description: 'National Certificate Level II in Automotive Servicing for Engine Repair.' },
        { title: 'NATIONAL TVET TRAINER CERTIFICATE Level I in DRIVING NC II', description: 'National TVET Trainer Certificate Level I in Driving NC II.' },
        { title: 'NATIONAL TVET TRAINER CERTIFICATE Level I in DRIVING (PASSENGER BUS/STRAIGHT TRUCK) NC II', description: 'National TVET Trainer Certificate Level I in Driving for Passenger Bus/Straight Truck NC II.' },
        { title: 'NATIONAL TVET TRAINER CERTIFICATE Level I in AUTOMOTIVE SERVICING (CHASSIS REPAIR) NC II', description: 'National TVET Trainer Certificate Level I in Automotive Servicing for Chassis Repair NC II.' },
        { title: 'NATIONAL TVET TRAINER CERTIFICATE Level I in AUTOMOTIVE SERVICING (ENGINE REPAIR) NC II', description: 'National TVET Trainer Certificate Level I in Automotive Servicing for Engine Repair NC II.' },
        { title: 'NATIONAL TVET TRAINER CERTIFICATE Level I in AUTOMOTIVE SERVICING (ENGINE REPAIR) NC II', description: 'National TVET Trainer Certificate Level I in Automotive Servicing for Engine Repair NC II.' },
        { title: 'TRAINERS METHODOLOGY CERTIFICATE I', description: 'Trainers Methodology Certificate I.' }
        // Add more certifications as needed
      ];
      setCertifications(localCertifications);
    }, []);
    return(
        <>
    <section className="bg-gray-700 items-center lg:flex lg:h-screen font-poppins md:mt-10 flex flex-col mx-auto">
      <div className="lg:mt-24 flex flex-col flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative lg:max-w-md">
              <img src="/assets/proof1.jpg" alt="aboutimage" className="relative z-10 object-cover w-full rounded h-96" />
            </div>
          </div>
          <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0">
            <div className="pl-4 mb-6 border-l-4 border-blue-500">
              <span className="text-sm text-gray-300 uppercase">Who we are?</span>
              <h1 className="mt-2 text-3xl font-black text-gray-100 md:text-5xl">About Us</h1>
            </div>
            <p className="mb-6 text-base leading-7 text-gray-300 text-justify">
              The owner and driving instructor of Kuya Wheels Driving School is Joselito A. Balagbis, commonly referred to by friends as "Kuya Joey". His career in the automotive industry started in 1994 when he became a Stencil Boy for one of the branches of the Land Transportation Office of the Philippines and worked his way up to finally become an Admin Officer for a private firm proponent under the LTO. Mr. Balagbis established Kuya Wheels driving school in December 8, 2020 because of his desire to properly teach aspiring drivers the necessary information they need before getting on the road.
            </p>
          </div>
        </div>
      </div>
    </section>

<hr class="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />

<section className="items-center lg:flex lg:h-screen font-poppins md:mt-10 flex flex-col mx-auto">
  <div className="relative text-center px-10 lg:px-24">
    <h6 className="text-gray-700 text-2xl md:text-3xl font-bold my-10">Our Certificates and Accreditations</h6>
    <span className="text-gray-500 text-justify md:text-normal">
      Throughout the course of his career, Mr. Balagbis obtained his knowledge by taking the appropriate TESDA courses passing every one of them with flying colors. His ever-expanding arsenal of national certificates are proof of his dedication to his craft.
    </span>
  </div>
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 mb-10 overflow-auto">
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {certifications.map((certification, index) => (
        <div key={index} className="bg-gray-700 border-b-4 border-green-400 p-4 rounded shadow">
          <h3 className="text-md mb-2">{certification.title}</h3>
          {/* Add more details or actions here if needed */}
        </div>
      ))}
    </div>
  </div>
</section>
<hr class="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
        </>
    );
} 

  