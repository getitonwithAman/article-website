// src/components/PrivacyPolicy/PrivacyPolicy.jsx
import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This Privacy Policy outlines the types of personal information that is received and collected by Jade and how it is used.
      </p>
      <p>
        By using this website, you consent to the terms of this Privacy Policy. If you do not agree with this Privacy Policy, please do not use this website.
      </p>
      <p>
        The following terminology applies to this Privacy Policy and any agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company’s terms and conditions.
      </p>
      {/* <!-- Add more privacy policy content here --> */}
    </div>
  );
};

export default PrivacyPolicy;
