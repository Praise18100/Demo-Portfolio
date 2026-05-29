import "./contact.scss";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hand-shake.png" alt="Handshake illustration" />
      </div>

      <div className="right">
        <h2>Let's build your next product.</h2>
        <p>
          Share your idea, timeline, or current challenge. I will respond with
          a clear next step.
        </p>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" aria-label="Email address" required />
          <textarea placeholder="Tell me about your project" aria-label="Project details" required></textarea>
          <button type="submit">Send</button>

          {message && <span>Thanks. I will reply as soon as possible.</span>}
        </form>
      </div>
    </div>
  );
}
