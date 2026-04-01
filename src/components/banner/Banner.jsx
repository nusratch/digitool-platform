import React from 'react'
import bannerImg from '../../assets/banner.png'

export const Banner = () => {
  return (

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-10 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div className="text-center lg:text-left">
          <p className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
            New AI-Powered Tools Available
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Access premium AI tools, design assets, templates, and productivity 
            software all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="btn bg-blue-500 text-white rounded-full px-6 w-full sm:w-auto">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full px-6 w-full sm:w-auto">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img 
            src={bannerImg}
            alt="banner"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>

      </div>
  )
}