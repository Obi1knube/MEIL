import "./App.css";
import Particles from "./Particles";
import Header from "./screens/header/Header";
import AboutUs from "./screens/aboutUs/AboutUs";
import Footer from "./screens/footer/Footer";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import ContactForm from "./screens/contactForm/ContactForm";
import OurClients from "./screens/ourClients/OurClients";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <main>
        <section id="home" className="hero-section">
          <div className="hero-section__background">
            <Particles />
          </div>
          <div className="container">
            <Header />
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <AboutUs />
          </div>
        </section>

        <section id="meil360" className="section section--dark">
          <div className="container">
            <div className="meil360-panel">
              <div className="meil360-panel__content">
                <p className="section-eyebrow">Digital Product</p>
                <h2>MEIL360</h2>
                <p className="meil360-panel__lead">
                  MEIL360 helps factories capture downtime faster, structure
                  fault data properly, and give engineering teams clearer
                  visibility into what is really happening on the plant floor.
                </p>

                <div className="meil360-grid">
                  <div className="info-card">
                    <h3>Fast downtime capture</h3>
                    <p>
                      Helps operators and engineers log real machine faults in
                      seconds instead of relying on vague notes or notebooks.
                    </p>
                  </div>

                  <div className="info-card">
                    <h3>Cleaner engineering data</h3>
                    <p>
                      Structured fault categories and machine-specific logging
                      improve visibility, reporting, and decision-making.
                    </p>
                  </div>

                  <div className="info-card">
                    <h3>Built for real factory use</h3>
                    <p>
                      Designed for tablets and plant-floor adoption, not just
                      management dashboards.
                    </p>
                  </div>
                </div>

                <div className="button-row">
                  <a
                    className="btn btn--primary"
                    href="https://app.maintenanceengineeringinsider.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open MEIL360
                  </a>

                  <a className="btn btn--secondary" href="#contact">
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <OurClients />
          </div>
        </section>

        <section id="contact" className="section section--light section--contact">
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
