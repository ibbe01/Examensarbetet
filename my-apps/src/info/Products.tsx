import React from "react"
import { useState } from "react"
import axios from "axios"
import { Header } from "../components/Header.tsx"
// headphones
import AirPodsPro from "../images/AirPod.png"
import SonyXM4 from "../images/SonyXM4.webp"
// laptops
import h525 from "../images/h525.png"
import LaptopDell from "../images/LaptopDell.png"
import macbookair from "../images/macbookair.webp"
//smartphones
import GalaxyS21 from "../images/GalaxyS21.avif"
import Iphone16pro from "../images/Iphone16pro.webp"

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

// Sample data for All Products
const AllProducts: Product[] = [
  { id: 1, name: "h525", category: "Laptop", price: 249, image: h525 },
  { id: 2, name: "LaptopDell", category: "Laptop", price: 349, image: LaptopDell },
  { id: 3, name: "macbookair", category: "Laptop", price: 349, image: macbookair },
  { id: 4, name: "GalaxyS21", category: "Smartphones", price: 349, image: GalaxyS21 },
  { id: 5, name: "Iphone 16 pro", category: "Smartphones", price: 349, image: Iphone16pro },
  { id: 6, name: "AirPods pro", category: "Headphones", price: 349, image: AirPodsPro },
  { id: 7, name: "SonyXM4", category: "Headphones", price: 349, image: SonyXM4 },
]

export const Products: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null)

  const handleAddToCart = async (product: Product) => {
    try {
      const response = await axios.post("http://localhost:3001/api/cart", {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      })
      if (response.status === 201) {
        setNotification(`${product.name} added to cart!`)
        setTimeout(() => setNotification(null), 3000)
      } else {
        throw new Error("Failed to add item to cart")
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
      setNotification("Error adding to cart. Please try again.")
      setTimeout(() => setNotification(null), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AllProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg p-4 shadow-md transition-transform hover:scale-105"
            >
              <div className="relative h-48 mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {notification && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            {notification}
          </div>
        )}
      </main>
    </div>
  )
}

