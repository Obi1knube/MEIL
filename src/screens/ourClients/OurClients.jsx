// import React from 'react';
import clientData from "../../helpers/clientData" // Assuming clientData.jsx is in the same parent directory as screen/ourClient.jsx
import './OurClients.css'; // Assuming you have a CSS file for styling
import propTypes from "prop-types";

function OurClientCard({ image, link, description }) {
  return (
  
  
    <div className="client-card">
      
      <img src={image} alt="Client Logo" />
      <div className="client-info">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {description}
        </a>
      </div>
    </div>
   
  );
}

OurClientCard.propTypes={
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

function OurClients() {
  return (
    <div>
    <h1>Our Clients</h1>
    <div className="our-clients">
      {clientData.map((client, index) => (
        <OurClientCard key={index} {...client} /> // Spread operator for concise prop passing
      ))}
    </div>
    </div>
  );
}

export default OurClients;