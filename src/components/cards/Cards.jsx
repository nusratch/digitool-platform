import React from "react";

export const Cards = ({ cards = [], addToCart }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((product) => (
        <div
          key={product.id}
          className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition h-full flex flex-col justify-between"
        >
          
          {/* badge top right */}
          <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">
            {product.tag}
          </span>

          {/* icon */}
          <div className="mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
              alt=""
              className="w-10 h-10"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              {product.name}
            </h2>

            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              {product.description}
            </p>

            <h3 className="text-xl font-bold mb-4">
              ${product.price}
              <span className="text-sm text-gray-400">
                /{product.period}
              </span>
            </h3>

            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* PERFECT BUTTON */}
          <button
            onClick={() => addToCart(product)}
            className="w-full py-3 rounded-full text-white font-medium bg-indigo-500"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};