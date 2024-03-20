

export default function CourseSection({ title, description, cost, onTakeCourse, image }) {

    return (
        <section className="bg-gray-700 py-5">
        <div className="flex flex-row m-20 my-10 shadow-2xl">
            <div className="">
                <img src={image} alt="vehicle image" className="relative z-10 object-cover w-full rounded h-96" />
            </div>
            <div className="flex flex-col max-w-xl ml-20 py-10">
                <h1 className="mb-5 text-2xl font-bold">{title}</h1>
                <div className="flex h-full flex-col justify-between">
                    <p>{description}</p>
                    <p>Amount: ₱{cost}</p>
                    <button className="w-full py-4 my-2 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md hover:rounded-3xl hover:bg-blue-700" onClick={onTakeCourse}>
                    Take course
                    </button>
                </div>
            </div>
        </div>
        </section>
    );
}