import React from 'react';
import logo from '../images/logo.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <a
          className="footer-logo media_link"
          href="https://www.consumerfinance.gov"
        >
          <img src={logo} width="200" alt="Agency logo" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
