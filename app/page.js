
'use client'
import Image from "next/image";
import Carousel from "./_components/carousel";
import GoogleMap from "./_components/googleMap";
import useScrollToSection from "./_hooks/scrollToPage";


export default function Home() {
  const scrollToSection = useScrollToSection();


  return (
    <main className="flex h-fit flex-col items-center justify-between overflow-x-hidden" id="top-section">
  <section className="md:h-[90vh] h-fit w-screen xl:px-36 md:px-12 xl:py-24 py-12 p-4 flex flex-col md:flex-row justify-center gap-5">
    <section class="bg-white">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Kuya Wheels Driving School offers driving education that you can count on!</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Since the driving school's founding in 2020, top-notch education and instruction has always been delivered to its students. Everyone goes through the proper process of learning what they need to know.</p>
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
            Get started
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <div class="flex gap-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => scrollToSection('google-map-section')}>Location</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => scrollToSection('description-section')}>Learn more</button>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/assets/proof1.jpg" alt="mockup" />
        </div>                
      </div>
    </section>
  </section>
  <section className="w-screen h-fit sm:h-[100vh] flex flex-col" id="google-map-section">
    <header className="py-4 bg-white text-center r">
      <div class="divider divider-success">
        <h1 className="md:text-3xl text-xl">Where are we located</h1>
      </div>
    </header>
    <div className="flex flex-col sm:flex-row justify-center gap-8 md:p-4 p-4">
      <div class="flex flex-wrap justify-center w-[40vw]">
        <div class="card bg-white lg:w-[30vw] mb-2 md:w-[45vw] w-full">
          <div class="p-4 text-center flex flex-col justify-center items-center h-full">
            <h2 class="lg:text-2xl text-lg mb-3 font-bold">Kuya Wheels Driving School</h2>
            <p class="lg:text-md text-md text-justify mb-10">Head northeast for about 3 miles, then veer slightly northwest for another 2 miles. After that, continue due east for approximately 1.5 miles. Finally, turn southeast and proceed for another 4 miles. Your destination should be on your left.</p>
            <div class="card-actions mt-2 justify-end">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open in Google Maps</button>
            </div>
          </div>
        </div>
        <div class="card card-compact lg:w-[30vw] bg-white md:w-[45vw] w-full">
          <div class="p-4 text-center flex flex-col justify-center items-center h-full">
            <h2 class="lg:text-2xl text-lg mb-3 font-bold">Kuya Wheels Driving School</h2>
            <p class="lg:text-md text-md text-justify mb-10">Head northeast for about 3 miles, then veer slightly northwest for another 2 miles. After that, continue due east for approximately 1.5 miles. Finally, turn southeast and proceed for another 4 miles. Your destination should be on your left.</p>
            <div class="card-actions mt-2 justify-end">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open in Google Maps</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-compact md:w-[45vw] w-full shadow-xl">
        <div className="p-4 text-center flex flex-col justify-center items-center h-full">
          <GoogleMap />
        </div>
      </div>
    </div>
  </section>
  <section className="h-fit sm:h-[100vh] w-screen flex flex-col" id="description-section">
    <header className="py-4 bg-white text-center r">
      <div class="divider divider-success">
        <h1 className="md:text-3xl text-xl">What we do</h1>
      </div>
    </header>
    <div className="flex flex-col sm:flex-row justify-center gap-8 md:p-12 p-4">
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <img class="w-full" src="/assets/proof2.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Education</div>
          <p class="text-gray-700 text-base">
            We orient clients of the Do's and Dont's of the road when it comes to driving, making sure they are knowledgeable about the basic fundamentals of driving with instructions provided and practiced from the Land Transportation Office (LTO)
          </p>
        </div>
      </div>
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <img class="w-full" src="/assets/proof3.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Assessment</div>
          <p class="text-gray-700 text-base">
            Kuya Wheels Driving School seeks to provide clients the knowledge they need in order to be able to legally drive a vehicle, we give our assessment with honesty and fairness to identify if they are ready and capable to drive on their own
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

  );
}
