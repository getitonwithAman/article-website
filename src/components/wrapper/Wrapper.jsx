import React, { useState } from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

// Example data for categories or trending features
const trendingData = [
  { title: "Technology", subtitle: "Latest tech news and innovations" },
  { title: "Science", subtitle: "Discover the wonders of science" },
  { title: "Health", subtitle: "Tips and updates on health and wellness" },
  { title: "Business", subtitle: "Insights into the world of business" },
  { title: "Opinion", subtitle: "Thought-provoking opinions and editorials" },
];

const Wrapper = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="wrapper background">
      <Container>
        <h2 className="trending-heading">Trending Categories</h2>
        <Row className="justify-content-center">
          {trendingData.map((val, index) => {
            const isActive = activeIndex === index;
            return (
              <Col
                md={3}
                sm={5}
                xs={9}
                className={`feature ${isActive ? 'active' : ''}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  animationDelay: `${index * 0.1}s` // Delay animation for each item
                }}
              >
                <div className="icon animation">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.subtitle}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
