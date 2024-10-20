
  import "./contactForm.css";
  // import { createLinks } from "./createLinks.jsx";
  import { useState } from "react";
  
  function ContactForm() {

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log("Form data:", formData);
  };
  
  return (
    <div className="contactMe_container" id="contact">
<h2> Contact Form</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  ); 
  
   
}

export default ContactForm;
