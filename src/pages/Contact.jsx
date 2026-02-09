import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="hero small-hero">
        <h1>Contact Us</h1>
      </div>

      <div className="form-section">
        <form className="auth-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            required
          />

          <button className="full-btn">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;