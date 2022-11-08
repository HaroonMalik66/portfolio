import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkx1vlu",
        "template_bc4f1fi",
        form.current,
        "lEYAnCQLfwTDVwHJA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    window.alert("Your message has been sent.");
  };
  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <span className="form-title ">
          Let's <span className="stroke-text">Talk</span>
        </span>
        <label htmlFor="name">Name </label>
        <input type="text" className="name" name="user_name" />
        <label htmlFor="email">Email </label>
        <input type="email" className="email" name="user_email" />
        <label htmlFor="message">Your Message </label>
        <textarea
          name="message"
          className="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <button className="btn submit-btn-f" type="submit" value="send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
