import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_usuny0r", // Replace with your EmailJS Service ID
        "template_w7bbul4", // Replace with your EmailJS Template ID
        formData,
        "ff4F9P0A_Zg8Eyn2d" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", mobile: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="heading">Contact Us</h1>
      <p className="subheading">We'd love to hear from you!</p>

      <motion.form 
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="tel" 
          name="mobile" 
          placeholder="Your Mobile Number" 
          value={formData.mobile} 
          onChange={handleChange} 
          pattern="[0-9]{10}"
          required 
        />
        <textarea 
          name="message" 
          rows="5" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
