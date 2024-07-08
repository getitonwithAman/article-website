// src/components/AboutUs/AboutUs.jsx
import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <section className="about-us-section">
        <h2>Welcome to Jade</h2>
        <p>
          At Jade, we strive to bring you the latest articles and insights on a wide range of topics, including technology, science, culture, and more. Our mission is to provide our readers with valuable information and thought-provoking content that inspires and informs.
        </p>
      </section>
      <section className="about-us-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to create a platform where knowledge and curiosity intersect. We believe in the power of information to drive progress and encourage continuous learning. Jade is dedicated to being a trusted source for readers seeking to expand their understanding of the world around them.
        </p>
      </section>
      <section className="about-us-section">
        <h2>Our Team</h2>
        <p>
          Jade is powered by a diverse team of passionate writers, editors, and content creators. Each member of our team brings a unique perspective and expertise, ensuring that our content is well-rounded and insightful. We are committed to maintaining high standards of quality and integrity in everything we publish.
        </p>
        <ul>
          <li><strong>Editors:</strong> Our editors ensure that every article meets our standards for accuracy, clarity, and relevance.</li>
          <li><strong>Writers:</strong> Our team of writers includes experts in various fields who are dedicated to providing in-depth analysis and engaging content.</li>
          <li><strong>Contributors:</strong> We also feature contributions from guest writers who offer fresh perspectives on trending topics.</li>
        </ul>
      </section>
      <section className="about-us-section">
        <h2>What We Offer</h2>
        <p>
          Jade offers a wide variety of content to cater to diverse interests and preferences. Here’s what you can expect:
        </p>
        <ul>
          <li><strong>In-Depth Articles:</strong> Comprehensive articles that delve into the latest trends and developments in technology, science, and culture.</li>
          <li><strong>Opinion Pieces:</strong> Thought-provoking opinions and analyses from industry experts and thought leaders.</li>
          <li><strong>Interviews:</strong> Exclusive interviews with innovators, creators, and influencers who are shaping the future.</li>
          <li><strong>Reviews:</strong> Detailed reviews of products, services, and experiences to help you make informed decisions.</li>
        </ul>
      </section>
      <section className="about-us-section">
        <h2>Join Our Community</h2>
        <p>
          We invite you to join our growing community of readers and contributors. Connect with us on social media, subscribe to our newsletter, and share your thoughts and feedback. Together, we can create a dynamic and engaging platform that fosters knowledge and curiosity.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
