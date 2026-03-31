import React from "react";

import user from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

export const Getstarted = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-20 text-center">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Get Started In 3 Steps
      </h2>

      <p className="text-gray-500 mb-12">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="relative bg-white p-8 rounded-2xl shadow-sm">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">
            01
          </span>

          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <img src={user} className="w-8" />
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Create Account
          </h3>

          <p className="text-gray-500 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="relative bg-white p-8 rounded-2xl shadow-sm">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <img src={packageImg} className="w-8" />
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Choose Products
          </h3>

          <p className="text-gray-500 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="relative bg-white p-8 rounded-2xl shadow-sm">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <img src={rocket} className="w-8" />
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Start Creating
          </h3>

          <p className="text-gray-500 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};