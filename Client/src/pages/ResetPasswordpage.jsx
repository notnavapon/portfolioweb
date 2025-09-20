import React from 'react'
// import { FaTools } from "react-icons/fa"; // icon สวย ๆ

function ResetPasswordpage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      {/* Icon */}
      <div className="text-6xl mb-6 animate-bounce">
        {/* <FaTools /> */}
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-4">Coming Soon</h1>



      {/* Optional button */}
      <a
        href="/"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Go Back
      </a>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-16 translate-y-16"></div>
    </div>
  )
}

export default ResetPasswordpage