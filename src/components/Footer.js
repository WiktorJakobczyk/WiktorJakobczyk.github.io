import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={32} sm={6} className="text-center">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/wiktor-jakobczyk99" target="_blank"><img src={navIcon1} alt="lD" /></a>
            <a href="https://github.com/WiktorJakobczyk" target="_blank"><img src={navIcon2} alt="GH" /></a>
            </div>
            <p>Powered by React, ThreeJS</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
