import React from "react";

export const Workflow = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-24">
      
      <div className="rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 text-center py-16 px-6 text-white">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          
          <button className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold">
            Explore Products
          </button>

          <button className="px-6 py-3 rounded-full border border-white text-white">
            View Pricing
          </button>

        </div>

        <p className="text-sm text-white/70 mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </div>
  );
};