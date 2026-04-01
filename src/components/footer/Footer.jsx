import React from "react";

export const Footer = () => {
  return (
   <div className="mt-16 sm:mt-20 lg:mt-24 bg-[#020617] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-start">

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">DigiTools</h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="sm:col-span-2 md:col-span-1 text-left md:text-right">
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Social Links</h3>

          <div className="flex gap-3 sm:gap-4 md:justify-end">
            <img src="/fb.jpg" className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full p-2" />
            <img src="/msg.png" className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full p-2" />
            <img src="/x.jpg" className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full p-2" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400">

          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-4 sm:gap-6 mt-3 md:mt-0 flex-wrap justify-center">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>

        </div>
      </div>

    </div>
  );
};