import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const EmailModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Email sent successfully!");
      onClose();
    })
    .catch(() => {
      alert("Failed to send email.");
    });
  };

  return (
    <div className="email-overlay" onClick={onClose}>
      <div className="email-modal" onClick={(e) => e.stopPropagation()}>
        <button className="email-close" onClick={onClose}>✕</button>

        <h3>Contact Me</h3>

        <form onSubmit={sendEmail}>
          <label htmlFor="">Nama</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <label htmlFor="">Send your Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            onChange={handleChange}
          />

          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
