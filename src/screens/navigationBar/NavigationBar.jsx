// Import custom CSS for styling the navigation bar.
import "./navigation.css";

// Import Navbar and Nav components from React Bootstrap.
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Import navigation links array from a helper file.
import { navigationLinks } from "../../helpers/navigationLinks";

// Function to generate navigation link components based on the navigationLinks array.
function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>
      {e.name}
    </Nav.Link>
  ));
}

// Main NavigationBar component
function NavigationBar() {
  return (
    // Container div with an ID for linking purposes (e.g., scrolling to "home" section).
    <div id="home">
      {/* Navbar container with fixed position to stay at the top */}
      <Navbar
        className="navigation__container"
        style={{ zIndex: "2", position: "fixed", top: "0", width: "100%" }}
        collapseOnSelect
        expand="md"
      >
        {/* Brand name or logo with a link to the home section */}
        <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
          Maintenance Engineering Insider
        </Navbar.Brand>

        {/* Toggle button for collapsing the navbar on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible section of the Navbar for navigation links */}
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end", // Aligns links to the right side of the navbar
            marginRight: "1rem",
            borderBlockColor: "none",
          }}
        >
          {/* Container for navigation links, styled with a CSS class */}
          <Nav className="links" style={{ margin: "0, 1rem" }}>
            {createLinks()} {/* Inserts the dynamically generated links */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

// Export the NavigationBar component for use in other parts of the app.
export default NavigationBar;
