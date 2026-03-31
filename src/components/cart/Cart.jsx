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
    <div className="max-w-5xl mx-auto px-6 mt-10">
      <div className="bg-white p-6 rounded-2xl shadow-md">

        <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`/src/assets/products/${item.icon}`}
                      className="w-10"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6 font-semibold">
              <span>Total</span>
              <span>${total}</span>
            </div>

          <button onClick={handleCheckout}>
  Proceed to Checkout
</button>
          </>
        )}
      </div>
    </div>
  );
};