import React from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { addToCart } from "../utils/cartUtils.ts"
import Iphone16pro from "../images/Iphone16pro.webp"
import macbookair from "../images/macbookair.webp"
import SonyXM4 from "../images/SonyXM4.webp"
import GamingLaptop from "../images/h525.png"
import GalaxyS21 from "../images/GalaxyS21.avif"
import AirPodsPro from "../images/AirPod.png"
import LaptopDell from "../images/LaptopDell.png"

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    category: "Smartphone",
    price: 999,
    image: Iphone16pro,
    description: "The latest iPhone with advanced features.",
  },
  {
    id: 2,
    name: "MacBook Air M1",
    category: "Laptop",
    price: 999,
    image: macbookair,
    description: "Thin and light laptop with powerful M1 chip.",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    category: "Headphones",
    price: 349,
    image: SonyXM4,
    description: "Premium noise-cancelling headphones.",
  },
  {
    id: 4,
    name: "Asus Elegant Gaming Laptop",
    category: "Laptop",
    price: 599,
    image: GamingLaptop,
    description: "High-performance gaming laptop.",
  },
  {
    id: 5,
    name: "Samsung Galaxy S21",
    category: "Smartphone",
    price: 799,
    image: GalaxyS21,
    description: "Feature-packed Android smartphone.",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 1299,
    image: LaptopDell,
    description: "Compact and powerful ultrabook.",
  },
  {
    id: 7,
    name: "AirPods Pro",
    category: "Earbuds",
    price: 249,
    image: AirPodsPro,
    description: "Wireless earbuds with active noise cancellation.",
  },
]

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === Number.parseInt(id || ""))
  const [notification, setNotification] = useState<string | null>(null)

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const handleAddToCart = async () => {
    const success = await addToCart(product)
    if (success) {
      setNotification(`${product.name} added to cart!`)
      setTimeout(() => setNotification(null), 3000)
    } else {
      setNotification("Error adding to cart. Please try again.")
      setTimeout(() => setNotification(null), 3000)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
      >
        &larr; Back
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover md:w-48 rounded-lg"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">{product.category}</div>
            <h1 className="mt-1 text-4xl font-semibold text-gray-900 leading-tight">{product.name}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            </div>
            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">{notification}</div>
      )}
    </main>
  )
}

