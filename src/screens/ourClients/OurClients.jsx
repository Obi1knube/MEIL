import clientData from "../../helpers/clientData";
import "./OurClients.css";
import propTypes from "prop-types";

function OurClientCard({ image, link, description }) {
  return (
    <article className="client-card">
      <a
        className="client-card__logo-wrap"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit client website"
      >
        <img src={image} alt="Client logo" className="client-card__logo" />
      </a>

      <div className="client-card__body">
        <p>{description}</p>
      </div>
    </article>
  );
}

OurClientCard.propTypes = {
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

function OurClients() {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-section__header">
        <p className="clients-section__eyebrow">Trusted by Industry</p>
        <h2>Factories and industrial businesses we have supported</h2>
        <p className="clients-section__lead">
          We support manufacturers and industrial operations with practical,
          hands-on engineering cover, fault response and maintenance support.
        </p>
      </div>

      <div className="our-clients">
        {clientData.map((client, index) => (
          <OurClientCard key={index} {...client} />
        ))}
      </div>
    </section>
  );
}

export default OurClients;