import { ReactTyped } from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="hero-content">
      <p className="hero-content__eyebrow">
        Maintenance Engineering Insider Ltd
      </p>

      <h1>Reduce downtime. Fix faster. Build smarter maintenance operations.</h1>

      <p className="hero-content__lead">
        We support factories with practical electrical, mechanical and
        reliability engineering input, while helping teams move from reactive
        repairs toward better downtime data, clearer visibility and smarter
        maintenance decisions through MEIL360.
      </p>

      <div className="hero-content__meta">
        <span>Stourbridge, United Kingdom</span>
        <span>Outside IR35 contract support</span>
        <span>Engineering support + MEIL360</span>
      </div>

      <div className="hero-content__typed-wrap">
        <span className="hero-content__typed-label">
          Support today. Smarter systems next.
        </span>
        <div className="hero-content__typed">
          <ReactTyped
            strings={[
              "Electrical & mechanical maintenance support",
              "Breakdown response and contract engineering cover",
              "PPM, fault finding and plant reliability support",
              "Downtime capture and visibility with MEIL360",
              "Structured fault data for better engineering decisions",
              "A practical path from reactive repairs to smarter maintenance",
            ]}
            typeSpeed={34}
            backSpeed={20}
            backDelay={1300}
            loop
          />
        </div>
      </div>

      <div className="hero-content__actions">
        <a className="btn btn--primary" href="#contact">
          Get Engineering Support
        </a>

        <a className="btn btn--secondary" href="#meil360">
          See MEIL360
        </a>
      </div>

      <p className="hero-content__supporting-note">
        For factories that need stronger maintenance delivery now and a better
        digital foundation for the future.
      </p>
    </div>
  );
}

export default Header;