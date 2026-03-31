import React from 'react'

  export const Banner = () => {
    const bannerImg = "/banner.png"
  return (

     
      <div className="w-full max-w-7xl mx-auto px-20 py-16 grid lg:grid-cols-2 gap-10 items-center">

    
        <div>
          <p className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
            New AI-Powered Tools Available
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-gray-500 mb-6">
            Access premium AI tools, design assets, templates, and productivity 
            software — all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4">
            <button className="btn bg-blue-500 text-white rounded-full px-6">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full px-6">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        
        <div className="flex justify-end">
          <img 
            src={bannerImg}
            alt="banner"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

      </div>
  )
}
