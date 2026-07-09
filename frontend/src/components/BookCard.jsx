function BookCard({ item, deleteBook }) {
  return (
    <div className="book-card">
      <div className="book-info">
        <div className="book-title">
          📚 {item.title}
        </div>

        <div className="book-author">
          👤 {item.author}
        </div>

        <div className="book-status">
          📖 {item.status}
        </div>
      </div>

      <button onClick={() => deleteBook(item._id)}>
        Delete
      </button>
    </div>
  );
}

export default BookCard;