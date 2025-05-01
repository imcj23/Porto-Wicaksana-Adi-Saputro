import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();
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
            alert("message sent successfully", result.text);
            console.log(result.text);
          },
          (error) => {
            alert("message not sent", error.text);
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
    </section>
  );  
}