import React from "react";

export const Cart = ({ cart, setCart }) => {
  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-8 lg:mt-10">
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">

        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-sm sm:text-base">
            Cart is empty
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-4 gap-3 sm:gap-0"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={`/src/assets/writing.png`}
                      className="w-8 sm:w-10"
                    />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 text-xs sm:text-sm self-start sm:self-auto"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 sm:mt-6 font-semibold text-sm sm:text-base">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button
              onClick={() => setCart([])}
              className="w-full mt-4 sm:mt-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm sm:text-base"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};