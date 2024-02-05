export default function Booking(){
    return(
        <>
          <section className=" lg:flex lg:h-screen font-poppins md:mt-10 flex flex-col mx-auto dark:bg-gray-800">
          <div className="pl-4 xl:pl-2 mb-6 border-l-4 border-blue-500 text-start ms-10">
         
          <h1 className="mt-2 text-2xl font-black text-gray-700 md:text-4xl dark:text-gray-300">
            Courses
          </h1>
        </div>
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 md:px-7">
            <div class="flex flex-wrap items-center justify-center -mx-4">
                <div class="max-w-2xl px-4 mb-16 lg:mb-0 lg:w-1/2">
                    <h2 class="mb-6 text-md font-bold  dark:text-gray-300">
                    Practical Driving Course (PDC) Restriction 3 - refers to vehicles used for the carriage of goods and having a maximum gross vehicle weight exceeding 3,500kg but not exceeding 12,000kg.
                    </h2>
                    <p class="mb-6 xl:text-sm text-justify sleading-loose text-gray-500 dark:text-gray-400">
                    The PDC 3 program (which costs ₱5,000.00) is designed to equip you with advanced driving skills and techniques necessary for operating vehicles such as trucks, buses, or motorcycles. With a comprehensive curriculum comprising both theoretical knowledge and practical training, we ensure you develop the expertise needed to navigate Philippine roads safely and responsibly.

                    During the theoretical component of the course, you will delve into essential topics such as traffic rules and regulations, defensive driving strategies, vehicle maintenance, and road safety. The practical training component is where our experienced instructors will guide you through real-life scenarios, both in controlled environments and on actual roads. You will learn advanced driving maneuvers tailored to specific vehicle categories, including handling various road conditions, navigating complex intersections, and mastering vehicle-specific tasks.

                    Completing the Practical Driving Course 3 is a mandatory step in the process of obtaining a professional driver's license for your desired vehicle category. Our goal is to ensure that you have the necessary skills and knowledge to operate vehicles safely, not only for your personal well-being but also for the safety of others on the road.
                    </p>
                 
                </div>
                <div class="w-full px-4 lg:w-1/2">
                    <div class="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                        <div
                            class="p-6 mb-6 text-center bg-white border rounded-md dark:border-gray-800 dark:bg-gray-800">
                            <form action="">
                                <div class="mb-6">
                                    <span class="text-sm text-blue-400 dark:text-blue-300">Sign Up</span>
                                    <h2 class="text-2xl dark:text-gray-400">Create an account</h2>
                                </div>
                                <div class="flex flex-wrap mb-4 -mx-2">
                                    <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                                        <input
                                            class="w-full px-3 py-2 leading-loose bg-gray-100 border rounded-md dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                                            type="text" placeholder="First Name.."/>
                                    </div>
                                    <div class="w-full px-2 lg:w-1/2">
                                        <input
                                            class="w-full px-3 py-2 leading-loose bg-gray-100 border rounded-md dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                                            type="text" placeholder="Last Name.."/>
                                    </div>
                                </div>
                                <input
                                    class="w-full px-3 py-2 mb-4 leading-loose bg-gray-100 border rounded-md dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                                    type="email" placeholder="abc@gmail.com" />
                                <input
                                    class="w-full px-3 py-2 mb-4 leading-loose bg-gray-100 border rounded-md dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                                    type="password" placeholder="Enter your password.." />
                                <button
                                    class="w-full py-4 mb-2 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md hover:rounded-3xl hover:bg-blue-700">
                                    Sign Up
                                </button>
                            </form>
                            <p class="text-xs text-gray-400">
                                <span>Already have an account?</span>
                                <a class="text-blue-600 hover:text-blue-400 dark:text-blue-300" href="#">Sign In</a>
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