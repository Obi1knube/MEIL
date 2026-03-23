import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init("7iy7dtRAS54ma09gQ");
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
    setIsSending(true);

    emailjs
      .send(
        "service_2mk2c9n",
        "template_fs7sczg",
        formData,
        "7iy7dtRAS54ma09gQ"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you. Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Something went wrong. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__panel">
        <div className="contact-section__intro">
          <p className="contact-section__eyebrow">Contact</p>
          <h2>Talk to us about engineering support or MEIL360</h2>
          <p className="contact-section__lead">
            Whether you need shift cover, breakdown support, maintenance
            improvement input or want to discuss MEIL360, send a message and we
            will get back to you.
          </p>

          <div className="contact-section__details">
            <div className="contact-detail">
              <span>Email</span>
              <strong>info@maintenanceengineeringinsider.co.uk</strong>
            </div>
            <div className="contact-detail">
              <span>Phone</span>
              <strong>(+44) 783 346 4281</strong>
            </div>
            <div className="contact-detail">
              <span>Location</span>
              <strong>Stourbridge, United Kingdom</strong>
            </div>
          </div>
        </div>

        <div className="contact-section__form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us what support you need"
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;