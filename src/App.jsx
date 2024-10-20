// import Navigation from "./screens/navigationBar/NavigationBar";
import "./App.css";
import Particles from "./Particles";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import ContactMe from "./screens/footer/ContactMe";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import ContactForm from "./screens/contactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Particles />
      <AboutMe />
      <ContactForm/>
      <ContactMe />
    </div>
  );
}

export default App;
