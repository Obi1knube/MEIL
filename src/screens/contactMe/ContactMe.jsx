import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      {" "}
      <a href={e.ref}> {e.name} </a>
    </p>
  ));
}

export function ContactForm() {
  return (
    <form
      className="container_contactForm"
      id="contactForm"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" />
      <button className="btn_submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default function ContactMe() {
  // const githubLink = "https://github.com/Obi1knube";
  const linkedInLink = "https://linkedin.com/in/obi1knube";

  return (
    <div className="contactMe_container" id="contact">
      <div className="contactMe_data_links">
        <div>
          <p>Birmingham, UK</p>
          <p>Obiora Ezeasor</p>
          <p>obi1knube@hotmail.com</p>
          <p>(+44) 783 346 4281</p>
          <p>
            {" "}
            linkedInLink:{" "}
            <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
              ObioraEzeasor
            </a>
          </p>
          <p>
            <p>
              <span style={{ marginLeft: "10px" }}>
                <a
                  href="https://github.com/Obi1knube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ transform: "scale(5)" }}
                  />
                  {/* GitHub icon */}
                </a>
              </span>
            </p>
          </p>
        </div>
        <div>{createLinks()}</div>
      </div>
      <div>
        <ContactForm />
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright&copy;{new Date().getFullYear()} Obiora Ezeasor Nwosu{" "}
      </div>
    </div>
  );
}
