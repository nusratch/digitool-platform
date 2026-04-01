import React from "react";

export const Workflow = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-0">
      
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-center py-10 sm:py-12 lg:py-16 px-4 sm:px-6 text-white">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/80 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
          
          <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-indigo-600 font-semibold w-full sm:w-auto">
            Explore Products
          </button>

          <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white text-white w-full sm:w-auto">
            View Pricing
          </button>

        </div>

        <p className="text-xs sm:text-sm text-white/70 mt-4 sm:mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </div>
  );
};