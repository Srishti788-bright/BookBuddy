import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";

import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";

const API_BASE = "https://bookbuddy-backend-stou.onrender.com";

function App() {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Load books
  useEffect(() => {
    fetchBooks();
  }, []);

  // Fetch books from backend
  function fetchBooks() {
    axios
      .get(`${API_BASE}/books`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        // Fetch error handled silently
      });
  }

  // Add book
  function addBook() {
    if (book.trim() === "") {
      alert("Please enter a book name");
      return;
    }

    axios
      .post(`${API_BASE}/books`, {
        title: book,
        author: "Unknown",
        status: "Not Started",
      })
      .then(() => {
        setBook("");
        fetchBooks();
      })
      .catch((error) => {
        // Add error handled silently
      });
  }

  // Delete book
  function deleteBook(id) {
    axios
      .delete(`${API_BASE}/books/${id}`)
      .then(() => {
        fetchBooks();
      })
      .catch((error) => {
        // Delete error handled silently
      });
  }

  return (
    <div className="container">
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Library */}
        <Route
          path="/library"
          element={
            <>
              <div className="header">
                <h1>📚 BookBuddy</h1>
                <p>Your Smart Reading Companion</p>
              </div>

              <AddBook
                book={book}
                setBook={setBook}
                addBook={addBook}
              />

              <h2>📖 My Library</h2>

              <SearchBar
                search={search}
                setSearch={setSearch}
              />

              {books
                .filter((item) =>
                  item.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((item) => (
                  <BookCard
                    key={item._id}
                    item={item}
                    deleteBook={deleteBook}
                  />
                ))}
            </>
          }
        />

        {/* Planner */}
        <Route path="/planner" element={<Planner />} />

        {/* Reviews */}
        <Route path="/reviews" element={<Reviews />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;