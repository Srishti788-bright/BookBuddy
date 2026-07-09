import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>BookBuddy</h1>

        <h2>Organize. Read. Grow.</h2>

        <p className="quote">
          "Books are uniquely portable magic."
        </p>

        <p className="author">
          — Stephen King
        </p>

        <Link to="/library">
          <button className="hero-btn">
            Explore Library
          </button>
        </Link>

      </section>

      <section className="features">

        <h2>Why Choose BookBuddy?</h2>

        <div className="cards">

          <div className="card">
            <h3>📚 Manage Books</h3>
            <p>
              Keep your entire book collection organized
              in one place.
            </p>
          </div>

          <div className="card">
            <h3>📅 Reading Planner</h3>
            <p>
              Set monthly reading goals and track your
              progress.
            </p>
          </div>

          <div className="card">
            <h3>⭐ Reviews</h3>
            <p>
              Save your thoughts after every book you
              finish.
            </p>
          </div>

        </div>

      </section>

      <section className="daily-quote">

        <h2>Quote of the Day</h2>

        <p>
          "Reading is to the mind what exercise is to the
          body."
        </p>

        <span>— Joseph Addison</span>

      </section>

    </div>
  );
}

export default Home;