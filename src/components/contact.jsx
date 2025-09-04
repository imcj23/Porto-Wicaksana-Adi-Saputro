import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Notification from "./modal/notification";

export default function Contact() {
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success"); // success | error
  const [modalMessage, setModalMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wicaksana",
        "template_dlewonc",
        form.current,
        "g__lqEokUXzJrhEAG"
      )
      .then(
        (result) => {
          setModalType("success");
          setModalMessage("Message sent successfully!");
          setModalOpen(true);
          console.log(result.text);
        },
        (error) => {
          setModalType("error");
          setModalMessage("Message failed to send. Please try again.");
          setModalOpen(true);
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact">
      <div className="contact-text">
        <h1>Contact</h1>
        <p>If you would like to get in touch, please reach out me</p>
      </div>
      <form onSubmit={sendEmail} ref={form}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Send Message</button>
      </form>

      {/* Modal Notifikasi */}
      <Notification
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        message={modalMessage}
      />
    </section>
  );
}
