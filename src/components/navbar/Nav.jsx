import React from 'react'
import "../../App.css";


const Nav = ({ cartCount = 0 }) => {
  return (
 <div className="navbar bg-base-100 w-full px-16">

        <div className="navbar-start">
          <a className="text-xl font-bold text-blue-600">DigiTools</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 text-gray-600 font-medium">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <div className="indicator">
    <span className="indicator-item badge badge-primary">
      {cartCount}
    </span>
    <button className="btn btn-ghost btn-circle text-xl">
      🛒
    </button>
  </div>
          <a className="text-gray-600">Login</a>
          <button className="btn bg-blue-500 text-white rounded-full px-6">
            Get Started
          </button>
        </div>

      </div>
  );
};

export default Nav;