import React from 'react';
import './OurClients.css'; // Assuming you have a CSS file for styling

function OurClients() {
  const clientImages = [
    // Replace these with your actual image URLs
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
  ];

  const renderClients = () => {
    return clientImages.map((image, index) => {
      const isRowStart = index % 3 === 0; // Check if it's the start of a new row
      const isRowEnd = index % 3 === 2; // Check if it's the end of a row

      return (
        <div key={index} className={`client-image ${isRowStart ? 'row-start' : ''} ${isRowEnd ? 'row-end' : ''}`}>
          <img src={image} alt={`Client ${index + 1}`} />
        </div>
      );
    });
  };

  return (
    <div className="about__container" id="about-me">
    <div className="our-clients">
      {renderClients()}
    </div>
    </div>
  );
}

export default OurClients;