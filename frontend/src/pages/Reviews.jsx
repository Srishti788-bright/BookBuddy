import { useState, useEffect } from "react";
import "./Reviews.css";

const defaultReviews = [
  {
    id: 1,
    bookTitle: "The Great Gatsby",
    reviewerName: "Jane Doe",
    rating: 5,
    date: "July 8, 2026",
    content: "A timeless masterpiece that beautifully captures the disillusionment of the American Dream. The prose is pure poetry, and the themes of obsession and class remain incredibly relevant today.",
    helpfulCount: 12,
    clickedHelpful: false
  },
  {
    id: 2,
    bookTitle: "Atomic Habits",
    reviewerName: "John Smith",
    rating: 4,
    date: "July 5, 2026",
    content: "Incredibly practical advice on how to build good habits and break bad ones. The systems-first approach changed how I plan my daily schedule. Highly recommend for personal growth.",
    helpfulCount: 8,
    clickedHelpful: false
  },
  {
    id: 3,
    bookTitle: "To Kill a Mockingbird",
    reviewerName: "Alice Walker",
    rating: 5,
    date: "June 28, 2026",
    content: "A deeply moving and powerful story about justice, empathy, and innocence. Atticus Finch is one of the greatest characters in literature. A must-read for everyone.",
    helpfulCount: 15,
    clickedHelpful: false
  }
];

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("bookbuddy_reviews");
    return saved ? JSON.parse(saved) : defaultReviews;
  });

  const [bookTitle, setBookTitle] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    localStorage.setItem("bookbuddy_reviews", JSON.stringify(reviews));
  }, [reviews]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!bookTitle.trim() || !reviewerName.trim() || !content.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const newReview = {
      id: Date.now(),
      bookTitle: bookTitle.trim(),
      reviewerName: reviewerName.trim(),
      rating: rating,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      content: content.trim(),
      helpfulCount: 0,
      clickedHelpful: false
    };

    setReviews([newReview, ...reviews]);
    setBookTitle("");
    setReviewerName("");
    setRating(5);
    setContent("");
  }

  function handleHelpful(id) {
    setReviews(
      reviews.map((rev) => {
        if (rev.id === id) {
          if (rev.clickedHelpful) {
            return {
              ...rev,
              helpfulCount: rev.helpfulCount - 1,
              clickedHelpful: false
            };
          } else {
            return {
              ...rev,
              helpfulCount: rev.helpfulCount + 1,
              clickedHelpful: true
            };
          }
        }
        return rev;
      })
    );
  }

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h1>⭐ Reader Reviews</h1>
        <p>Share your reading insights and see what other BookBuddy members are saying.</p>
      </div>

      <div className="review-form-section">
        <h3>Write a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="bookTitle">Book Title</label>
              <input
                id="bookTitle"
                type="text"
                placeholder="e.g. The Hobbit"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="reviewerName">Your Name</label>
              <input
                id="reviewerName"
                type="text"
                placeholder="e.g. Alex Mercer"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label>Rating</label>
            <div className="star-rating-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${
                    star <= (hoverRating || rating) ? "active" : ""
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="content">Review</label>
            <textarea
              id="content"
              rows="4"
              placeholder="What did you think of the book? What were your key takeaways?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>
      </div>

      <div className="reviews-list">
        <h3>Recent Reviews ({reviews.length})</h3>
        {reviews.length === 0 ? (
          <p style={{ color: "#64748b", textAlign: "center" }}>
            No reviews yet. Be the first to write one!
          </p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-card-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {rev.reviewerName.charAt(0)}
                  </div>
                  <div className="reviewer-meta">
                    <h4>{rev.reviewerName}</h4>
                    <span>{rev.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= rev.rating ? "filled" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="review-book-title">{rev.bookTitle}</h4>
              <p className="review-content">{rev.content}</p>

              <div className="review-card-footer">
                <button
                  className={`helpful-btn ${rev.clickedHelpful ? "clicked" : ""}`}
                  onClick={() => handleHelpful(rev.id)}
                >
                  👍 Helpful ({rev.helpfulCount})
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;