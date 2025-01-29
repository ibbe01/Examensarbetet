import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
}

export const Carousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const navigate = useNavigate()

  const products: Product[] = [
    { id: 1, name: "iPhone 16 Pro", category: "Smartphone", price: 999, image: Iphone16pro },
    { id: 2, name: "MacBook Air M1", category: "Laptop", price: 999, image: macbookair },
    { id: 3, name: "Sony WH-1000XM4", category: "Headphones", price: 349, image: SonyXM4 },
    { id: 4, name: "Asus Elegant Gaming Laptop", category: "Laptop", price: 599, image: GamingLaptop },
    { id: 5, name: "Samsung Galaxy S21", category: "Smartphone", price: 799, image: GalaxyS21 },
    { id: 6, name: "Dell XPS 13", category: "Laptop", price: 1299, image: LaptopDell },
    { id: 7, name: "AirPods Pro", category: "Earbuds", price: 249, image: AirPodsPro },
  ]

  const totalSlides = Math.max(0, products.length - 4)
  const progressPercentage = (scrollPosition / totalSlides) * 100

  const handlePrevClick = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const handleNextClick = () => {
    setScrollPosition(Math.min(totalSlides, scrollPosition + 1))
  }

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`)
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Explore Our Latest Electronics</h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${scrollPosition * 25}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[25%] px-4">
                <div
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-1">{product.category}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-xl font-bold text-blue-600">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevClick}
          disabled={scrollPosition === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous item"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          disabled={scrollPosition === totalSlides}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next item"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="mt-6 mx-auto max-w-md h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
        </div>
      </div>
    </section>
  )
}

