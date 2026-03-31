import { useEffect, useState } from 'react'
import './App.css'
import { Cards } from './components/cards/Cards'
import { Banner } from './components/banner/Banner'
import Nav from './components/navbar/Nav'
import { States } from './components/states/States'
import { Getstarted } from './components/getstarted/Getstarted'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Pricing } from './components/pricing/Pricing'
import { Workflow } from './components/workflow/Workflow'
import { Footer } from './components/footer/Footer'
function App() {
  const [cards, setCards] = useState([])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const handleAddToCart = (product) => {
    setCart([...cart, product])
    toast.success("Product added to cart")
  }

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => {
        console.error('Failed to load cards:', error)
      })
  }, [])

  return (
    <>
      <Nav cartCount={cart.length} />
      <Banner />
      <States />

      <div className="text-center mt-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Premium Digital Tools
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowCart(false)}
            className={`px-6 py-2 rounded-full ${
              !showCart
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`px-6 py-2 rounded-full ${
              showCart
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {
        showCart ? (
          <div className="text-center mt-10 text-gray-600">
            Cart Items: {cart.length}
          </div>
        ) : (
          <Cards cards={cards} addToCart={handleAddToCart} />
        )
      }

      <Getstarted />
      <Pricing/>
      <Workflow/>
      <Footer/>

      <ToastContainer />

    </>
  )
}

export default App