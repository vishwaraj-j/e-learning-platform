import React from "react"
interface CardProps{
  title?: string;
  instructorName?: string;
  description?: string;
  progress?: number;
  imgSrc?: string;
  isEnrolled?: boolean
}
const Cards: React.FC<CardProps>= ({
  title="Course Titleee",
  instructorName="Instructor Name",
  description="Short description of the course Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  progress=50,
  imgSrc="/public/course.jpg",
  isEnrolled= false
},
) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg  hover:bg-gray-100 hover:scale-105 hover:shadow-lg transform transition-all duration-500 ease-in-out">
  <img className="w-full" src={imgSrc} alt="Course background image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <div className="text-m mb-2"> By - {instructorName}</div>
    <p className="text-gray-700 text-base">
      {description}
    </p>
  </div>
{
isEnrolled?
  <div className="px-6 pt-4 pb-10">
  <div className="w-full bg-gray-200 rounded-full ">
    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${progress}%` }}> {progress} %</div>
  </div>
  </div>
  :
  <div className="px-6 pt-4 pb-2">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2  px-3 py-1">View Details
    </button>
    <button className="bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mr-2 mb-2  px-3 py-1">Enroll
    </button>
  </div>
}
</div>
  )
}

export default Cards