import React from 'react'
import "../../App.css";

const Nav = ({ cartCount = 0 }) => {
  return (
 <div className="navbar w-full px-4 sm:px-6 lg:px-12 bg-base-100">

        <div className="navbar-start">
          <a className="text-lg sm:text-xl font-bold text-blue-600">DigiTools</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 xl:gap-8 text-gray-600 font-medium text-sm lg:text-base">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-2 sm:gap-4">
          <div className="indicator">
            <span className="indicator-item badge badge-primary text-xs sm:text-sm">
              {cartCount}
            </span>
            <button className="btn btn-ghost btn-circle text-lg sm:text-xl">
              🛒
            </button>
          </div>

          <a className="text-gray-600 text-sm sm:text-base hidden sm:block">
            Login
          </a>

          <button className="btn bg-blue-500 text-white rounded-full px-4 sm:px-6 text-sm sm:text-base">
            Get Started
          </button>
        </div>

      </div>
  );
};

export default Nav;