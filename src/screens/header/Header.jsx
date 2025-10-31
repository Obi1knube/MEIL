import { ReactTyped } from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="main-Info">
      <h1>Electrical & Mechanical Maintenance Experts</h1>
      <p>
        <b>Tel: (+44) 7833 464 281</b>
      </p>

      <div></div>
      <h2>What We Deliver</h2>

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
          "Confidence. Competence. Consistency.",
        ]}
        typeSpeed={35}
        backSpeed={25}
        backDelay={1000}
        loop
      />
    </div>
  );
}

export default Header;
