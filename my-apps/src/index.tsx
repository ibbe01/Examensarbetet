import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"

// Components
import { Header } from "./components/Header.tsx"
import { Intro } from "./components/Intro.tsx"
import { Carousel } from "./components/Carousel.tsx"
import { Trends } from "./components/Trends.tsx"
import { Footer } from "./components/Footer.tsx"
import { Products } from "./info/Products.tsx"
import { About } from "./info/About.tsx"
import { Contact } from "./info/Contact.tsx"
import { ProductPage } from "./components/ProductPage.tsx"
import { Cart } from "./header/Cart.tsx"
// ProductDevices
import { Headphones } from "./productDevices/Headphones.tsx"
import { SmartPhones } from "./productDevices/SmartPhones.tsx"
import { Laptops } from "./productDevices/Laptops.tsx"
import { Gaming } from "./productDevices/Gaming.tsx"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Router>
    <Routes>
      {/* Main route */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Intro />
            <Carousel />
            <Trends />
            <Footer />
          </>
        }
      />

      {/* Products route */}
      <Route
        path="/products"
        element={
          <>
            <Products />
            <Footer />
          </>
        }
      />

      {/* About page route */}
      <Route
        path="/about"
        element={
          <>
            <About />
            <Footer />
          </>
        }
      />

      {/* Contact page route */}
      <Route
        path="/contact"
        element={
          <>
            <Contact />
            <Footer />
          </>
        }
      />

      {/* Routes for product categories */}
      <Route
        path="/productDevices/Headphones"
        element={
          <>
            <Headphones />
            <Footer />
          </>
        }
      />
      <Route
        path="/productDevices/SmartPhones"
        element={
          <>
            <SmartPhones />
            <Footer />
          </>
        }
      />
      <Route
        path="/productDevices/Laptops"
        element={
          <>
            <Laptops />
            <Footer />
          </>
        }
      />
      <Route
        path="/productDevices/Gaming"
        element={
          <>
            
            <Gaming />
            <Footer />
          </>
        }
      />

      {/* Dynamic route for individual product pages */}
      <Route
        path="/product/:id"
        element={
          <>
            <Header />
            <ProductPage />
            <Footer />
          </>
        }
      />

      {/* Cart route */}
      <Route
        path="/cart"
        element={
          <>
            <Cart />
            <Footer />
          </>
        }
      />
    </Routes>
  </Router>
)

