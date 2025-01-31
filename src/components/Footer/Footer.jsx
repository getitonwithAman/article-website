import React from "react";
import { Link } from "react-router-dom"; 
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="article-footer">
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={6} className="box">
            <div className="logo">
              <h1 className="logo-text">Jade</h1>
            </div>
            <p>
              Bringing you the latest articles and insights on technology,
              science, culture, and more.
            </p>
          </Col>
          <Col md={3} sm={6} className="box">
            <h2>Explore</h2>
            <ul>
              <li>Technology</li>
              <li>Science</li>
              <li>Health</li>
              <li>Business</li>
              <li>Opinion</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="box">
            <h2>Useful Links</h2>
            <ul>
              <li><Link to="/about-us">About Us</Link></li> 
              <li><Link to="/contact-us">Contact Us</Link></li> 
              <li><Link to="/terms-of-service">Terms of Service</Link></li> 
              <li><Link to="/privacy-policy">Privacy Policy</Link></li> 
              <li><Link to ="advertising">Advertising</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="box">
            <h2>Contact Information</h2>
            <ul>
              <li>123 Jade, Cityville</li>
              <li>Email: info@Jade.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
