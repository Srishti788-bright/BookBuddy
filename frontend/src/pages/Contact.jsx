import { useState } from "react";
import "./Contact.css";

const faqData = [
  {
    question: "Is BookBuddy free to use?",
    answer: "Yes! BookBuddy's library organizer and calendar planner are completely free. We want to make book tracking accessible to all passionate readers."
  },
  {
    question: "How do I save my reading progress?",
    answer: "Currently, BookBuddy stores your planner dates locally on your device. Your library books are fetched and stored in our local database server."
  },
  {
    question: "Can I track multiple books at the same time?",
    answer: "Absolutely! You can add as many books as you like to your Library, edit their read status, and highlight multiple dates in your planner calendar."
  },
  {
    question: "How do I request a new feature?",
    answer: "We would love to hear your feedback! You can write to us using this contact form, or email us directly at support@bookbuddy.com."
  }
];

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    // Mock form submission
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    // Reset success banner after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }

  function toggleFaq(index) {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>📞 Get in Touch</h1>
        <p>Have questions, suggestions, or need help? We'd love to hear from you.</p>
      </div>

      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info-card">
          <div>
            <h2>Let's Connect</h2>
            <p>
              Fill out the form and our support team will get back to you within 24 hours.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-icon">📧</span>
              <div className="contact-detail-text">
                <h4>Email Support</h4>
                <p>support@bookbuddy.com</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-icon">📱</span>
              <div className="contact-detail-text">
                <h4>Phone Hotline</h4>
                <p>+1 (555) 019-2834</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-icon">📍</span>
              <div className="contact-detail-text">
                <h4>Main Office</h4>
                <p>100 Library Lane, Booktown</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="success-banner">
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <h3>Send us a Message</h3>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="How can we help?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows="4"
                placeholder="Write your thoughts here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="submit-contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className={`faq-arrow ${openFaqIndex === index ? "open" : ""}`}>
                  ▼
                </span>
              </button>
              {openFaqIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;