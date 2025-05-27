// components/Footer/Footer.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  useEffect(() => {
    function adjustFooter() {
      const wrapper = document.getElementById('wrapper');
      const footer = document.getElementById('footer');
      
      if (wrapper && footer) {
        const wrapperHeight = wrapper.offsetHeight;
        const windowHeight = window.innerHeight;

        if (wrapperHeight < windowHeight) {
          footer.style.position = 'absolute';
          footer.style.bottom = '0';
          footer.style.width = '100%';
        } else {
          footer.style.position = 'relative';
        }
      }
    }

    adjustFooter();
    window.addEventListener('resize', adjustFooter);

    return () => {
      window.removeEventListener('resize', adjustFooter);
    };
  }, []);

  return (
    <footer className="footer bg-primary text-white py-3 mt-auto" id="footer">
      <div className="container text-center">
        <p className="mb-0">Copyright © 2025 All rights reserved. Design And Developed By InstaMD Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;