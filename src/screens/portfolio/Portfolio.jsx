import { useState } from "react";
import { Container, Row, Card, Image, Modal, Button } from "react-bootstrap";
import portfolioData from "../../helpers/portfolioData"; // Importing portfolio data
import "./portfolio.css"; // Importing CSS file

function Portfolio() {
  const [modalShow, setModalShow] = useState(false); // State for showing modal
  const [tempData, setTempData] = useState({}); // State for temporary data to display in modal

  // Function to create the modal content
  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: "200px" }} />
        </Modal.Body>
        <a
          id="portfolio_modal_link"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          Go to site
        </a>
        <Modal.Footer>
          <div>Technologies used:</div>
          <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // Mapping over portfolio data to display cards
  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio_card_container">
        <Image
          className="portfolio_image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech,
            });
            setModalShow(true); // Show the modal when image is clicked
          }}
          src={e.image}
        />
        <div className="portfolio_click_info">&#x1F50E;&#xFE0E;</div>
      </Card>
    );
  });

  return (
    <div className="portfolio_main_container" id="portfolio">
      <h1>PORTFOLIO</h1>
      <Container fluid style={{ padding: "2rem 0" }}>
        <Row>{mapped}</Row>
      </Container>
      {createModal(tempData)} {/* Rendering the modal */}
    </div>
  );
}

export default Portfolio;
