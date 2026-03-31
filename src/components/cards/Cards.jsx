import React from 'react'




export const Cards = ({ cards }) => {
  console.log(cards)
  return (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
  {products.map((product) => (
    <div
      key={product.id}
      className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
    >
      
      <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">
        {product.tag}
      </span>

      <img
        src={`/src/assets/products/${product.icon}`}
        className="w-12 mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

      <p className="text-gray-500 mb-4">{product.description}</p>

      <h3 className="text-lg font-bold mb-4">
        ${product.price}
        <span className="text-sm text-gray-400">/{product.period}</span>
      </h3>

      <ul className="text-sm text-gray-500 space-y-2 mb-6">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button className="w-full py-2 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500">
        Buy Now
      </button>
    </div>
  ))}
</div>
  )
}
export default Cards;