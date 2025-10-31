import "./footer.css";
import { createLinks } from "./createLinks.jsx";
// ✅ keep this path accurate to your tree:
import ChatCTA from "../ChatCTA/ChatCTA.jsx"; // from .../footer → up one → ChatCTA

function Footer() {
  return (
    <>
      <div className="contactMe_container" id="footer">
        <div className="contactMe_data_links">
          <div>
            <p>Stourbridge, United Kingdom</p>
            <p>Maintenance Engineering Insider Ltd</p>
            <p>obiora@maintenanceEngineeringInsider.co.uk</p>
            <p>obi1knube@hotmail.com</p>
            <p>(+44) 783 346 4281</p>
          </div>
          <div>{createLinks()}</div>
        </div>

        <div style={{ textAlign: "center" }}>
          Copyright&copy;{new Date().getFullYear()} Obiora Ezeasor
        </div>
      </div>

      <ChatCTA />
    </>
  );
}
export default Footer;
