import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import "../Home.css"
import "../App.css"


function Footer() {
  return (
    <footer className="footer-bg text-black py-4">
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <h5>- Read the book!- </h5>
            <p>Atomic Habits</p>
            <p>By James Clear</p>
            <p>https://jamesclear.com/</p>
          </Col>
          {/* <Col xs={12} md={4} className="text-center">
            <h5>- Opening Hours -<br/>(all locations)</h5>
            <p>Sunday-Thursday: 11 am to 9 pm </p>
            <p>Friday-Saturday: 11 am to 9 pm</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5>- Follow Us -</h5>
            <p><Link to="/home">Facebook</Link></p>
            <p><Link to="/home">Instagram</Link></p>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;