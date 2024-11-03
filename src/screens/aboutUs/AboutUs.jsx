// Import custom CSS for styling the About Us component.
import "./aboutUs.css";

// Main AboutUs component
function AboutUs() {
  return (
    // Container div with class for styling and an ID for linking purposes.
    <div className="about__container" id="about-me">
      
      {/* Div for displaying the 'About Us' image */}
      <div className="about__image"></div>
      
      {/* Text container for 'About Us' content */}
      <div className="about__text">
        
        {/* Heading for the About Us section */}
        <h1>ABOUT US</h1>
        
        {/* Paragraph describing the company, experience, and expertise */}
        <p>
          We are driven and outcome-focused professionals with a keen interest
          in serving our customers well. We bring nearly two decades of rich
          experience in Electrical/Mechanical Maintenance Engineer. Our
          expertise spans various sectors, ranging from esteemed Commercial
          Laundries, Food and Drink Industries, to Automotive Industries and
          Waste Recycling to Energy Plants, as well as extensive experience in
          Industrial Electrical and Electronic Installations. We are deeply
          passionate about staying ahead of the curve with emerging
          technologies, demonstrating a proven ability to adapt seamlessly to
          evolving industry landscapes. We are able to integrate into your team
          rapidly.
        </p>
      </div>
    </div>
  );
}

// Export the AboutUs component for use in other parts of the app.
export default AboutUs;
