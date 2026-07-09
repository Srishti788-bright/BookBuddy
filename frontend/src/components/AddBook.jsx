function AddBook({ book, setBook, addBook }) {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter Book Name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />

      <button onClick={addBook}>
        Add Book
      </button>
    </div>
  );
}

export default AddBook;