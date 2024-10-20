// import Navigation from "./screens/navigationBar/NavigationBar";
import "./App.css";
import Particles from "./Particles";
import Header from "./screens/header/Header";
import AboutUs from "./screens/aboutUs/AboutUs";
import Footer from "./screens/footer/Footer";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import ContactForm from "./screens/contactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Particles />
      <AboutUs />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
