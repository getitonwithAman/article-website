import React, { useEffect } from 'react';
import './Advertising.css';

const Advertising = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="advertising-container">
      <h1>Advertising</h1>
      <p>
        Advertise with Jade and reach a global audience interested in technology,
        science, culture, and more.
      </p>
      <p>
        Contact us today to discuss advertising opportunities.
      </p>
    </div>
  );
};

export default Advertising;
