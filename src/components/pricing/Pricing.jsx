import React from "react";

export const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16 lg:mt-24 text-center">

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
        Simple, Transparent Pricing
      </h2>

      <p className="text-gray-500 mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-500 mb-4 text-sm sm:text-base">Perfect for getting started</p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            $0 <span className="text-gray-400 text-sm">/Month</span>
          </h2>

          <ul className="text-gray-500 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="w-full py-2.5 sm:py-3 rounded-full bg-indigo-500 text-white text-sm sm:text-base">
            Get Started Free
          </button>
        </div>

        <div className="relative p-6 sm:p-8 rounded-2xl text-left text-white bg-indigo-500">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-lg sm:text-xl font-semibold mb-2">Pro</h3>
          <p className="mb-4 opacity-90 text-sm sm:text-base">Best for professionals</p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            $29 <span className="text-sm opacity-80">/Month</span>
          </h2>

          <ul className="space-y-2 mb-6 sm:mb-8 opacity-90 text-sm sm:text-base">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="w-full py-2.5 sm:py-3 rounded-full bg-white text-indigo-600 font-semibold text-sm sm:text-base">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-gray-500 mb-4 text-sm sm:text-base">For teams and businesses</p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            $99 <span className="text-gray-400 text-sm">/Month</span>
          </h2>

          <ul className="text-gray-500 space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="w-full py-2.5 sm:py-3 rounded-full bg-indigo-500 text-white text-sm sm:text-base">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};