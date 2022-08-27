import "./FormStyles.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l77jz4t",
        "template_jxbit8e",
        form.current,
        "cKB-x9rYkmrRofXdS"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
