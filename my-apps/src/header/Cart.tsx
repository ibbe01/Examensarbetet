import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Header } from "../components/Header.tsx"
import { clearCart as clearCartUtil } from "../utils/cartUtils.ts"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showThankYou, setShowThankYou] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)

  useEffect(() => {
    fetchCartItems()
  }, [])

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/cart")
      console.log("Fetched cart items:", response.data)
      setCartItems(response.data)
    } catch (error) {
      console.error("Error fetching cart items:", error)
    }
  }

  const updateQuantity = async (id: number, newQuantity: number) => {
    try {
      await axios.put(`http://localhost:3001/api/cart/${id}`, { quantity: newQuantity })
      fetchCartItems()
    } catch (error) {
      console.error("Error updating quantity:", error)
    }
  }

  const removeItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/cart/${id}`)
      fetchCartItems()
    } catch (error) {
      console.error("Error removing item:", error)
    }
  }

  const clearCart = async () => {
    try {
      const success = await clearCartUtil()
      if (success) {
        setCartItems([])
        setNotification("Cart cleared successfully")
      } else {
        setNotification("Error clearing cart. Please try again.")
      }
      setTimeout(() => setNotification(null), 3000)
    } catch (error) {
      console.error("Error clearing cart:", error)
      setNotification("Error clearing cart. Please try again.")
      setTimeout(() => setNotification(null), 3000)
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleBuy = () => {
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
      clearCart()
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                  <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
              <div>
                <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded mr-4 hover:bg-red-600">
                  Clear Cart
                </button>
                <button onClick={handleBuy} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Buy Now
                </button>
              </div>
            </div>
          </>
        )}
        {showThankYou && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h2>
              <p>Your order has been placed successfully.</p>
            </div>
          </div>
        )}
        {notification && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            {notification}
          </div>
        )}
      </main>
    </div>
  )
}

