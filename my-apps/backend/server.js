const express = require("express")
const mysql = require("mysql2/promise")
const cors = require("cors")

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "shadow98",
  database: "fullstack",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

// Get cart items
app.get("/api/cart", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM cart_items")
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "An error occurred while fetching cart items" })
  }
})

// Add item to cart
app.post("/api/cart", async (req, res) => {
  const { id, name, price, quantity } = req.body
  try {
    const [result] = await pool.query(
      "INSERT INTO cart_items (id, name, price, quantity) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?",
      [id, name, price, quantity, quantity],
    )
    const [insertedItem] = await pool.query("SELECT * FROM cart_items WHERE id = ?", [id])
    res.status(201).json(insertedItem[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "An error occurred while adding item to cart" })
  }
})

// Update cart item quantity
app.put("/api/cart/:id", async (req, res) => {
  const { id } = req.params
  const { quantity } = req.body
  try {
    await pool.query("UPDATE cart_items SET quantity = ? WHERE id = ?", [quantity, id])
    const [updatedItem] = await pool.query("SELECT * FROM cart_items WHERE id = ?", [id])
    if (updatedItem.length === 0) {
      res.status(404).json({ error: "Item not found" })
    } else {
      res.json(updatedItem[0])
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "An error occurred while updating item quantity" })
  }
})

// Remove item from cart
app.delete("/api/cart/:id", async (req, res) => {
  const { id } = req.params
  try {
    await pool.query("DELETE FROM cart_items WHERE id = ?", [id])
    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "An error occurred while removing item from cart" })
  }
})

// Clear all items from cart
app.delete("/api/cart", async (req, res) => {
  try {
    await pool.query("DELETE FROM cart_items")
    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "An error occurred while clearing the cart" })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

