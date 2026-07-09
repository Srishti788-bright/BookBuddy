import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>📖 Our Story</h1>
        <p>
          BookBuddy was founded in 2026 to help passionate readers and students
          organize their physical and digital libraries, track goals, and build consistent reading habits.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">12,000+</div>
          <div className="stat-label">Books Tracked</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5,200+</div>
          <div className="stat-label">Active Readers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div className="stat-label">Goal Completion</div>
        </div>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We believe that books have the unique power to transport us, teach us, and connect us.
          Our mission is to build the ultimate personal tracker that enables readers to structure their literary journey
          without distraction, turning reading from a chore into a lifelong joyful habit.
        </p>
      </div>

      <div className="about-section">
        <h2>Core Principles</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🎨 Simple & Focused</h3>
            <p>
              Your bookshelf should be organized, not cluttered. We build minimalist interfaces that put your books first.
            </p>
          </div>
          <div className="value-card">
            <h3>📅 Dynamic Planning</h3>
            <p>
              Set flexible goals, choose review schedules, and track monthly milestone achievements in a highly visual way.
            </p>
          </div>
          <div className="value-card">
            <h3>🔒 Your Data is Yours</h3>
            <p>
              We respect your digital space. Your library collections and personal journals belong strictly to you.
            </p>
          </div>
          <div className="value-card">
            <h3>🌱 Continuous Growth</h3>
            <p>
              Whether it's reading one chapter a day or 50 books a year, we believe in the magic of daily compound growth.
            </p>
          </div>
        </div>
      </div>

      <div className="about-quote-banner">
        <p>
          "The reading of all good books is like conversation with the finest minds of past centuries."
        </p>
        <span>— René Descartes</span>
      </div>
    </div>
  );
}

export default About;