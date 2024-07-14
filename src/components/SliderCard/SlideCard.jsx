import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";
import { Link } from "react-router-dom";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className='box'>
      <Row>
        <Col md={6}>
          <div className='content-wrapper'>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className='btn btn-primary'>
            <Link to={`/${title}`} className="category-link" style={{textDecoration: 'none', color:'white'}}>
              Read More
              </Link>
              </button>
          </div>
        </Col>
        <Col md={6}>
          <div className='image-wrapper'>
            <img src={cover} alt={title} className='card-image' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
