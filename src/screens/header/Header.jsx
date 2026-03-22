import { ReactTyped } from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="hero-content">
      <p className="hero-content__eyebrow">Maintenance Engineering Insider Ltd</p>

      <h1>
        Electrical, Mechanical and Reliability Support for Modern Manufacturing
      </h1>

      <p className="hero-content__lead">
        Practical maintenance engineering support for factories that need
        stronger uptime, faster fault response, and a clearer path toward
        smarter operations.
      </p>

      <div className="hero-content__meta">
        <span>Stourbridge, United Kingdom</span>
        <span>Outside IR35 contract support</span>
        <span>Tel: (+44) 7833 464 281</span>
      </div>

      <div className="hero-content__typed-wrap">
        <span className="hero-content__typed-label">What we deliver</span>
        <div className="hero-content__typed">
          <ReactTyped
            strings={[
              "Planned Preventive Maintenance (PPM)",
              "Breakdown & Emergency Call-Outs",
              "Shift Cover & Contract Support",
              "Instrumentation & Calibration Services",
              "PLC, VFD & Automation Support",
              "Control Panel Upgrades & Installations",
              "Predictive Maintenance Solutions",
              "Energy & Process Optimisation",
              "App & Web Tools for Smart Maintenance",
              "Technical Documentation & Reporting",
            ]}
            typeSpeed={34}
            backSpeed={20}
            backDelay={1200}
            loop
          />
        </div>
      </div>

      <div className="hero-content__actions">
        <a className="btn btn--primary" href="#contact">
          Talk to Us
        </a>

        <a
          className="btn btn--secondary"
          href="https://app.maintenanceengineeringinsider.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore MEIL360
        </a>
      </div>
    </div>
  );
}

export default Header;