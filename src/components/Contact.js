import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const contactStyle = {
    container: {
      padding: "30px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      marginTop: "30px",
      maxWidth: "500px",
      width: "100%",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#222",
      textAlign: "left",
    },
    infoItem: {
      fontSize: "18px",
      margin: "12px 0",
      color: "#444",
      lineHeight: "1.6",
    },
    label: {
      fontWeight: "bold",
      marginRight: "10px",
      color: "#000",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#0056b3",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "10px",
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                  style={contactStyle.image}
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  style={contactStyle.container}
                >
                  <h2 style={contactStyle.heading}>Get In Touch</h2>
                  <p style={contactStyle.infoItem}>
                    <span style={contactStyle.label}>Email:</span>
                    <a
                      href="mailto:sharan2732@gmail.com"
                      style={contactStyle.link}
                      onMouseOver={e => e.target.style.color = contactStyle.linkHover.color}
                      onMouseOut={e => e.target.style.color = contactStyle.link.color}
                    >
                      sharan2732@gmail.com
                    </a>
                  </p>
                  <p style={contactStyle.infoItem}>
                    <span style={contactStyle.label}>Phone:</span>
                    <a
                      href="tel:+918690272570"
                      style={contactStyle.link}
                      onMouseOver={e => e.target.style.color = contactStyle.linkHover.color}
                      onMouseOut={e => e.target.style.color = contactStyle.link.color}
                    >
                      +91-8690272570
                    </a>
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
