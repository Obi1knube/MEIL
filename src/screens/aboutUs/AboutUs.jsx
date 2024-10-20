import "./aboutUs.css";
import myPic from "../../images/Logo.png";

function AboutUs() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={myPic} alt=" person icon" />
      </div>
      <div className="about_text">
        <h1>ABOUT US</h1>
        <p>
          We are driven and outcome-focused professionals with a keen interest
          in serving our customers well. We bring nearly two decades of rich
          experience in Electrical/Mechanical Maintenance Engineer. Our
          expertise spans various sectors, ranging from esteemed Commercial
          Laundries, Food and Drink Industries, to Automotive Industries and
          Waste Recycling to Energy Plants, as well as extensive experience in
          Industrial Electrical and Electronic Installations.
           We are deeply passionate about staying ahead of
          the curve with emerging technologies, demonstrating a proven ability
          to adapt seamlessly to evolving industry landscapes.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
