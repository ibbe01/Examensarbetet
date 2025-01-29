import axios from "axios"

export const addToCart = async (product: { id: number; name: string; price: number }) => {
  try {
    const response = await axios.post("http://localhost:3001/api/cart", {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    if (response.status === 201) {
      console.log(`${product.name} added to cart!`)
      return true
    } else {
      throw new Error("Failed to add item to cart")
    }
  } catch (error) {
    console.error("Error adding to cart:", error)
    return false
  }
}

export const clearCart = async () => {
  try {
    await axios.delete("http://localhost:3001/api/cart")
    console.log("Cart cleared successfully")
    return true
  } catch (error) {
    console.error("Error clearing cart:", error)
    return false
  }
}

