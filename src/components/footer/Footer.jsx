import React from "react";

export const Footer = () => {
  return (
    <div className="mt-24 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">

       
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
          <p className="text-white/80">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

  
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-white/80">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-white/80">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-white/80">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
    <h3 className="font-semibold mb-3">Social Links</h3>

     <div className="flex gap-3 mt-3">

 <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
              f
         </div>

            <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
              in
            </div>

            <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
              X
            </div>

          </div>
        </div>

      </div>

    
      <div className="border-t border-white/30 mt-6 py-6 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-white/80 text-sm">

        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>

      </div>

    </div>
  );
};