import "./footer.css";
import { createLinks } from "./createLinks.jsx";
import ChatCTA from "../ChatCTA/ChatCTA.jsx";

function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__eyebrow">Maintenance Engineering Insider Ltd</p>
            <h3>Engineering support for factories that need dependable uptime.</h3>
            <p>
              Electrical, mechanical and reliability-focused support, plus
              practical digital tools like MEIL360 for better downtime
              visibility.
            </p>
          </div>

          <div className="footer__contact">
            <h4>Contact</h4>
            <p>Stourbridge, United Kingdom</p>
            <p>info@maintenanceengineeringinsider.co.uk</p>
            <p>obi1knube@hotmail.com</p>
            <p>(+44) 783 346 4281</p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            {createLinks()}
            <p>
              <a
                href="https://app.maintenanceengineeringinsider.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MEIL360 APP
              </a>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          Copyright &copy; {new Date().getFullYear()} Maintenance Engineering
          Insider Ltd. Created by Obiora Ezeasor
        </div>
      </footer>

      <ChatCTA />
    </>
  );
}

export default Footer;