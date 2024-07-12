// src/components/TermsOfService/TermsOfService.jsx
import React, { useEffect } from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-of-service-container">
      <h1>Terms of Service</h1>
      <p>
        Welcome to Jade! These terms and conditions outline the rules and regulations for the use of our website.
      </p>
      <p>
        By accessing this website, you accept these terms and conditions. Do not continue to use Jade if you do not agree to all of the terms and conditions stated on this page.
      </p>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person logging on this website and compliant to the Company’s terms and conditions.
      </p>
      {/* <!-- Add more terms and conditions content here --> */}
    </div>
  );
};

export default TermsOfService;
