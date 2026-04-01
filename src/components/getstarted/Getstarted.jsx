import React from "react";

import user from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

export const Getstarted = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16 lg:mt-20 text-center">
      
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
        Get Started In 3 Steps
      </h2>

      <p className="text-gray-500 mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
            01
          </span>

          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <img src={user} className="w-7 sm:w-8" />
          </div>

          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Create Account
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
            02
          </span>

          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <img src={packageImg} className="w-7 sm:w-8" />
          </div>

          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Choose Products
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
            03
          </span>

          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <img src={rocket} className="w-7 sm:w-8" />
          </div>

          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Start Creating
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};