'use client'
import useScrollToSection from "../../_hooks/scrollToPage";
import { useState } from 'react';
import CourseSection from '../../_components/courseSection';

export default function Courses(){
    // const [selectedCourse, setSelectedCourse] = useState(""); // State to hold the selected course
    // const scrollToSection = useScrollToSection();

    // // Function to handle when the "Take course" button is clicked
    // const handleTakeCourse = (courseName) => {
    //     setSelectedCourse(courseName); // Update the selected course state
    //     scrollToSection('book-course-section'); // Scroll to the booking section
    // };

    // // Function to calculate the total amount based on the selected course
    // const calculateTotalAmount = () => {
    //     if (selectedCourse === "Practical Driving Course 3") {
    //         return 5000; // Total amount for Practical Driving Course 3
    //     } else {
    //         return 0; // Default value if no course is selected
    //     }
    // };
    const [selectedCourse, setSelectedCourse] = useState("");
    const scrollToSection = useScrollToSection();

    const handleTakeCourse = (courseName) => {
        setSelectedCourse(courseName);
        scrollToSection('book-course-section');
    };

      // Function to calculate the total amount based on the selected course
    const calculateTotalAmount = () => {
        const selectedCourseObject = courses.find(course => course.title === selectedCourse);
        return selectedCourseObject ? selectedCourseObject.cost : 0;
    }

    const courses = [
        {
            title: "Practical Driving Course 3",
            description: "The Practical Driving Course (PDC) 3 program (which costs ₱5,000.00) is designed to equip you with advanced driving skills and techniques necessary for operating vehicles such as trucks, buses, or motorcycles. With a comprehensive curriculum comprising both theoretical knowledge and practical training, we ensure you develop the expertise needed to navigate Philippine roads safely and responsibly.",
            cost: 5000,
            image: "/assets/truck1.jpg",
        },
        // Add more courses here and the select tag below
    ];


    return(
        <>

        {/* <section className="bg-gray-700 py-5">
            <div className="flex flex-row m-20 my-10 shadow-2xl">
                <div className="">
                    <img src="/assets/truck1.jpg" alt="aboutimage" className="relative z-10 object-cover w-full rounded h-96" />
                </div>
                <div className="flex flex-col max-w-xl ml-20 py-10">
                    <h1 className="mb-5 text-2xl font-bold">Practical Driving Course 3</h1>
                    <div className="flex h-full flex-col justify-between">
                        <p>
                            The Practical Driving Course (PDC) 3 program (which costs ₱5,000.00) is designed to equip you with advanced driving skills and techniques necessary for operating vehicles such as trucks, buses, or motorcycles. With a comprehensive curriculum comprising both theoretical knowledge and practical training, we ensure you develop the expertise needed to navigate Philippine roads safely and responsibly.
                        </p>
                        <button className="w-full py-4 my-2 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md hover:rounded-3xl hover:bg-blue-700" onClick={() => handleTakeCourse('Practical Driving Course 3')}>
                            Take course
                        </button>
                    </div>
                </div>
            </div>
        </section> */}

        {courses.map((course, index) => (
            <CourseSection
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            cost={course.cost}
            onTakeCourse={() => handleTakeCourse(course.title)}
            />
        ))}
        
        <section className="text-gray-700" id="book-course-section">
        <div className="flex flex-row m-20 my-10 shadow-2xl">
                <div className="w-96 my-auto">
                    <img src="/assets/KWDSicon.png" alt="aboutimage" className="relative z-10 object-cover ml-5 w-full rounded" />
                </div>
                <div className="flex flex-col max-w-xl ml-20 py-10">
                    <h1>Course to take:</h1>

                    {/* for scalability, add more here in the select */}
                    <select name="courses" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="w-full mb-2 p-2 border border-gray-400 rounded-md">
                        <option value="">--Please select a course--</option>
                        <option value="Practical Driving Course 3">Practical Driving Course 3</option>
                    </select>
                    <div className="flex h-full flex-col justify-between">
                        <p>{selectedCourse && `The ${selectedCourse} program (which costs ₱5,000.00) is designed to equip you with advanced driving skills and techniques necessary for operating vehicles such as trucks, buses, or motorcycles. With a comprehensive curriculum comprising both theoretical knowledge and practical training, we ensure you develop the expertise needed to navigate Philippine roads safely and responsibly.`}</p>
                        <br></br>
                        <p>Total Amount: ₱{calculateTotalAmount()}</p>
                        <br></br>
                        <p>Choose your date of Appointment: </p>
                        <input type="date" required id="dateInput" className="w-full mb-2 p-2 border border-gray-400 rounded-md" />
                        <button className="w-full py-4 my-2 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md hover:rounded-3xl hover:bg-blue-700">
                            Book the course
                        </button>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}