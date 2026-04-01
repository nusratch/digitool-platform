import React from "react";

export const Cards = ({ cards = [], addToCart }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      
      {cards.map((product) => (
        <div
          key={product.id}
          className="relative bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition h-full flex flex-col justify-between"
        >

          <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xs px-2 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-600">
            {product.tag}
          </span>

          <div className="mb-4">
            <img 
              src={`/src/assets/products/design-tool.png`} 
              alt={product.name}
              className="w-8 sm:w-10"
            />
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              {product.name}
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm mb-4 leading-relaxed">
              {product.description}
            </p>

            <h3 className="text-lg sm:text-xl font-bold mb-4">
              ${product.price}
              <span className="text-xs sm:text-sm text-gray-400">
                /{product.period}
              </span>
            </h3>

            <ul className="text-xs sm:text-sm text-gray-500 space-y-2 mb-5 sm:mb-6">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full py-2.5 sm:py-3 rounded-full text-white font-medium bg-indigo-500 hover:bg-indigo-600 transition text-sm sm:text-base"
          >
            Buy Now
          </button>

        </div>
      ))}
      
    </div>
  );
};