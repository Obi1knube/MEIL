import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";

export function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      <a href={e.ref}> {e.name} </a>
    </p>
  ));
}

export default function ContactMe() {
  return (
    <div className="contactMe_container" id="contact">
      <div className="contactMe_data_links">
        <div>
          <p>Stourbridge, United Kingdom</p>
          <p>Maintenance Engineering Insider Ltd</p>
          <p>obiora@maintenanceEngineeringInsider.co.uk</p>
          <p> obi1knube@hotmail.com</p>
          <p>(+44) 783 346 4281</p>
        </div>
        <div>{createLinks()}</div>
      </div>

      <div style={{ textAlign: "center" }}>
        Copyright&copy;{new Date().getFullYear()}Maintenance Engineering Insider{" "}
      </div>
    </div>
  );
}
