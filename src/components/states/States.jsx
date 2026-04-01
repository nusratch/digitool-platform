import React from 'react'

export const States = () => {
  return (
   <div className="w-full bg-blue-600 py-8 sm:py-10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center text-white gap-6 sm:gap-0">

        <div className="sm:border-r border-white/20">
          <h2 className="text-2xl sm:text-3xl font-bold">50K+</h2>
          <p className="text-xs sm:text-sm opacity-80">Active Users</p>
        </div>

        <div className="md:border-r border-white/20">
          <h2 className="text-2xl sm:text-3xl font-bold">200+</h2>
          <p className="text-xs sm:text-sm opacity-80">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">4.9</h2>
          <p className="text-xs sm:text-sm opacity-80">Rating</p>
        </div>

      </div>

   </div>
  )
}