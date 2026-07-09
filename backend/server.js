const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/Book");

const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


// GET all books
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new book
app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();

    res.json({
      message: "Book added successfully!"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// DELETE a book
app.delete("/books/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.json({
      message: "Book deleted successfully!"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});