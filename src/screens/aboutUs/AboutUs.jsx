import "./aboutUs.css";
import logo from "../../assets/images/Logo.png";

function AboutUs() {
  return (
    <section className="about" id="about-me">
      <div className="about__container">
        <div className="about__image">
          <img
            src={logo}
            alt="Maintenance Engineering Insider logo"
            className="about__logo"
          />
        </div>

        <div className="about__content">
          <p className="about__eyebrow">About Us</p>

          <h2>
            Practical maintenance engineering support for demanding production
            environments
          </h2>

          <p className="about__lead">
            Maintenance Engineering Insider supports factories that need strong
            electrical, mechanical and reliability-focused engineering input
            without the overhead of a large internal team.
          </p>

          <p>
            Our experience spans food and beverage processing, commercial
            laundries, automotive assembly, waste recycling and energy-related
            facilities, where dependable uptime, fault response and maintenance
            discipline matter.
          </p>

          <p>
            We deliver preventive and corrective support on automated equipment,
            while also bringing a modern, data-aware mindset around controls,
            instrumentation, downtime reduction and smarter plant visibility.
          </p>

          <div className="about__highlights">
            <span>Electrical & Mechanical Support</span>
            <span>Factory Breakdown Response</span>
            <span>Shift Cover & Contract Support</span>
            <span>Reliability Improvement Mindset</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;