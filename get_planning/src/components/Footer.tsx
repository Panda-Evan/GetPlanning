import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div className="footer-social">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className="footer-copy">
        &copy; 2023 My Website. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
