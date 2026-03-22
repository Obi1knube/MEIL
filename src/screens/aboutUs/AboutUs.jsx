// src/screens/aboutUs/AboutUs.jsx (path may differ slightly in your project)
import "./aboutUs.css";
import logo from "../../assets/images/logo.png"; // make sure this file exists with this exact name

function AboutUs() {
  return (
    <div className="about__container" id="about-me">
      <div className="about__image">
        <img
          src={logo}
          alt="Maintenance Engineering Insider logo"
          className="about__logo"
        />
      </div>

      <div className="about__text">
        <h1>ABOUT US</h1>
        <p>
          Electrical and Mechanical Maintenance with a modern, data-driven
          approach to plant reliability. Our background covers commercial
          laundries, food and beverage processing, automotive assembly, waste
          recycling, and energy facilities, where we have delivered both
          preventive and corrective maintenance on complex automated systems. We
          are not just technicians—we are partners in performance. MEIL
          understands the pressures of high-uptime manufacturing and brings the
          flexibility of IR35-compliant contract engineering to strengthen your
          in-house maintenance capability. We continuously evolve with emerging
          technologies in controls, instrumentation, and predictive maintenance,
          enabling clients to reduce downtime, extend equipment life, and
          transition confidently toward Industry 4.0 standards.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
