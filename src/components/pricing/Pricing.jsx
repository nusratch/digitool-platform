import React from "react";

export const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-24 text-center">

      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Simple, Transparent Pricing
      </h2>

      <p className="text-gray-500 mb-12">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Starter */}
        <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-500 mb-4">Perfect for getting started</p>

          <h2 className="text-3xl font-bold mb-6">
            $0 <span className="text-gray-400 text-sm">/Month</span>
          </h2>

          <ul className="text-gray-500 space-y-2 mb-8">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="w-full py-3 rounded-full bg-indigo-500 text-white">
            Get Started Free
          </button>
        </div>

        {/* Pro (highlighted) */}
        <div className="relative p-8 rounded-2xl text-left text-white bg-indigo-500">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="mb-4 opacity-90">Best for professionals</p>

          <h2 className="text-3xl font-bold mb-6">
            $29 <span className="text-sm opacity-80">/Month</span>
          </h2>

          <ul className="space-y-2 mb-8 opacity-90">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="w-full py-3 rounded-full bg-white text-indigo-600 font-semibold">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-gray-500 mb-4">For teams and businesses</p>

          <h2 className="text-3xl font-bold mb-6">
            $99 <span className="text-gray-400 text-sm">/Month</span>
          </h2>

          <ul className="text-gray-500 space-y-2 mb-8">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="w-full py-3 rounded-full bg-indigo-500 text-white">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};