import Link from "next/link";
import { setHomePageIndex } from "../../../_hooks/pageIndexes";

export default function Booking(){

  setHomePageIndex(1);

    return(
        <>
        <section className="lg:flex lg:h-screen font-poppins md:mt-10 flex flex-col mx-auto">
  <div className="pl-4 xl:pl-2 mb-6 border-l-4 border-blue-500 text-start ms-10">
    <h1 className="mt-2 text-2xl font-black text-gray-700 md:text-4xl">
      Courses
    </h1>
  </div>
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 md:px-7">
    <div className="flex flex-wrap items-center justify-center -mx-4">
      <div className="max-w-2xl px-4 mb-16 lg:mb-0 lg:w-1/2">
        <h2 className="mb-6 text-md font-bold">
          Practical Driving Course (PDC) Restriction 3 - refers to vehicles used for the carriage of goods and having a maximum gross vehicle weight exceeding 3,500kg but not exceeding 12,000kg.
        </h2>
        <p className="mb-6 xl:text-sm text-justify sleading-loose text-gray-500">
          The PDC 3 program (which costs ₱5,000.00) is designed to equip you with advanced driving skills and techniques necessary for operating vehicles such as trucks, buses, or motorcycles. With a comprehensive curriculum comprising both theoretical knowledge and practical training, we ensure you develop the expertise needed to navigate Philippine roads safely and responsibly.

          During the theoretical component of the course, you will delve into essential topics such as traffic rules and regulations, defensive driving strategies, vehicle maintenance, and road safety. The practical training component is where our experienced instructors will guide you through real-life scenarios, both in controlled environments and on actual roads. You will learn advanced driving maneuvers tailored to specific vehicle categories, including handling various road conditions, navigating complex intersections, and mastering vehicle-specific tasks.

          Completing the Practical Driving Course 3 is a mandatory step in the process of obtaining a professional driver's license for your desired vehicle category. Our goal is to ensure that you have the necessary skills and knowledge to operate vehicles safely, not only for your personal well-being but also for the safety of others on the road.
        </p>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
          <div className="p-6 mb-6 text-center bg-white border rounded-md">
            <form action="/page/auth/register">
              <div className="mb-6">
                <h2 className="text-2xl">Book a course now</h2>
              </div>
              <div className="mb-5">
                <p className="my-2">Requirements</p>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc text-left list-inside">
                  <li>Ballpen</li>
                  <li>Notebook</li>
                  <li>1pc 2x2 picture</li>
                  <li className="text-sm">1 Photocopy of Professional Drivers License with RC 2 or 4 for a period of at least one (1) year prior to the application</li>
                </ul>
              </div>
              <button href="/page/auth/register" className="w-full py-4 mb-2 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md hover:rounded-3xl hover:bg-blue-700">
                Sign Up
              </button>
            </form>
            <p className="text-xs text-gray-400">
              <span>Already have an account?</span>
              <a className="text-blue-600 hover:text-blue-400" href="/page/auth/login">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}