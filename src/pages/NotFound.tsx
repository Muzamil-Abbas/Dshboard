import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          404
        </h1>
        <p className="text-4xl font-semibold text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-2s">
          Oops! Page not found
        </p>
        <p className="text-lg text-gray-500 mb-6 animate__animated animate__fadeIn animate__delay-3s">
          The page you are looking for does not exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-4s"
        >
          <FaHome className="mr-2 text-xl" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
