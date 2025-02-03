import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("7iy7dtRAS54ma09gQ"); // Initialize EmailJS in useEffect
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2mk2c9n", // Replace with your actual Service ID
        "template_fs7sczg", // Replace with your actual Template ID
        formData,
        "7iy7dtRAS54ma09gQ" // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contactUs_container" id="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
