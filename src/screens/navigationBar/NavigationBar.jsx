import "./navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((link, idx) => (
    <Nav.Link key={idx} href={link.ref}>
      {link.name}
    </Nav.Link>
  ));
}

function NavigationBar() {
  return (
    <header>
      <Navbar
        className="navigation__container"
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <div className="navigation__inner">
          <Navbar.Brand className="navigation__brand" href="#home">
            Maintenance Engineering Insider
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links ms-auto">{createLinks()}</Nav>

            <a
              className="navigation__cta"
              href="https://app.maintenanceengineeringinsider.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MEIL360 App
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default NavigationBar;