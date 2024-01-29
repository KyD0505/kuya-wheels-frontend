'use client'
import Image from "next/image";
import Carousel from "./_components/carousel";
import GoogleMap from "./_components/googleMap";
import useScrollToSection from "./_hooks/scrollToPage";
export default function Home() {
  const scrollToSection = useScrollToSection();

  
  return (
    <main className="flex h-fit flex-col items-center justify-between overflow-x-hidden " id="top-section">
      <section className="md:h-[90vh] h-fit w-screen md:p-12 p-4 flex flex-col md:flex-row justify-center gap-5" >
        <div className="card card-compact w-full md:w-[30vw] shadow-xl mb-5 md:mb-0">
          <div className="p-4 text-center flex flex-col justify-center items-center md:h-full">
            <div className="w-40 h-40 mb-10 rounded-full bg-gray-500"></div>
            <h2 className="text-3xl font-bold">Kuya Wheels Driving School</h2>
            <p className="text-2xl mb-10">We offer driving education you can count on</p>
            <p className="text-justify">Since the driving school's founding in 2020, top-notch education and instruction have been delivered to its students.</p>
            <div className="card-actions mt-3 justify-end">
            <button className="btn btn-active"  onClick={() => scrollToSection('google-map-section')}>Location</button>
            <button className="btn btn-active"  onClick={() => scrollToSection('description-section')}>Learn more</button>
    </div>
          </div>
       
        </div>
        <Carousel />
      </section>
      <section className="w-screen h-fit sm:h-[100vh] flex flex-col py-8" id="google-map-section" >
  <header className="bg-gray-800 text-white py-4 text-center gradient-border">
    <h1 className="md:text-3xl text-xl font-bold">Where are we located</h1>
  </header>
  <div className="flex flex-col sm:flex-row justify-center gap-8 md:p-12 p-4">
    <div className="card card-compact  md:w-[45vw] w-full shadow-xl">
      <div className="p-4 text-center flex flex-col justify-center items-center h-full">
        <div className="w-40 h-40 mb-10 rounded-full bg-gray-500"></div>
        <h2 className="lg:text-3xl text-lg mb-3 font-bold">Kuya Wheels Driving School</h2>
        <p className="lg:text-xl text-md text-justify mb-10">Head northeast for about 3 miles, then veer slightly northwest for another 2 miles. After that, continue due east for approximately 1.5 miles. Finally, turn southeast and proceed for another 4 miles. Your destination should be on your left.</p>
      </div>
    </div>
    <div className="card card-compact   md:w-[45vw] w-full shadow-xl">
      <div className="p-4 text-center flex flex-col justify-center items-center h-full">
        <GoogleMap />
      </div>
    </div>
  </div>
</section>

<section className="h-fit sm:h-[100vh] w-screen flex flex-col" id="description-section">
  <header className="bg-gray-800 text-white py-4 text-center gradient-border">
    <h1 className="md:text-3xl text-xl font-bold">What we do</h1>
  </header>
  <div className="flex flex-col sm:flex-row justify-center gap-8 md:p-12 p-4">
  <div className="card card-compact  md:w-[45vw] w-full shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Education</h2>
    <p>
      We orient clients of the Do's and Dont's of the road when it come to driving, making sure they are knowledgeable about the basic fundamentals of driving with instructions provided and practiced from the Land of Transportation Office (LTO)
    </p>
    
  </div>
</div>
<div className="card card-compact  md:w-[45vw] w-full shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Assessment</h2>
    <p>Kuya Wheels Driving School seeks to provide clients the knowledge they need in order to be able to legally drive a vehicle, we give our assessment with honesty and fairness to identify if they are ready and capable to drive their own.</p>
 
  </div>
</div>
</div>
</section>


     

    </main>
  );
}
