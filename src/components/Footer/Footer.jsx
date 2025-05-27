import React from "react";
import "./Footer.css";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fetch current year
  let fetchYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-info"
              defaultMessage="Page created by Nahuel61920"
            />
          </p>
          <p>&copy; {fetchYear}. All Rights Reserved.</p>
        </div>
        <div className="social-networks">
          <a
            href="https://www.linkedin.com/in/sumit-singh-sengar-5ba664255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sumitsingh010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/_sumitsingh_010_?igsh=MXB2cGhwdXQ4cTdrYQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
