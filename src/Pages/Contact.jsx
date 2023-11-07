import React, { useState } from "react";
import { motion } from "framer-motion";
import bgr from "../assets/bgr.jpg";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
      style={{ backgroundImage: `url(${bgr})` }}
      className="contact">
      <div className="contact-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <div className="form-group">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="label">
              Message:
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
        {/* <div className="contact-container">
          <div>
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <div>
            <input type="text" placeholder="Enter Your Phone Number" />
          </div>
          <div>
            <button>Submit Message</button>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}
