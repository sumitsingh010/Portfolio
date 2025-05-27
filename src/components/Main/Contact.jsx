import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typical from "react-typical";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Contact = () => (
  <section className="contacts" id="contacts">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact" />
    </h2>
    <h3 className="title" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
      <Typical
        className="site-contacts"
        loop={Infinity}
        wrapper="b"
        steps={[
          "Gmail",
          2000,
          "LinkedIn",
          2000,
          "Instagram",
          2000,
          "GitHub",
          2000,
          "Telegram",
          2000,
        ]}
      />
    </h3>

    
    <div>
      <button
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSd0nBPuPsOT1ebgDr9JTXmOlO0-Crt59oMU38Ev4V3O33J48Q/viewform?usp=preview",
            "_blank"
          )
        }
        className="Feedback"
      >
        Give Your Valuable Feedback ! 📝
      </button>
    </div>
    <div className="icons">
      <a
        href="mailto:sengarsumit7047@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href="https://www.linkedin.com/in/sumit-singh-sengar-5ba664255/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in"></span>
        </div>
        <div className="text">LinkedIn</div>
      </a>
      <a
        href="https://www.instagram.com/_sumitsingh_010_?igsh=MXB2cGhwdXQ4cTdrYQ=="
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-instagram"></span>
        </div>
        <div className="text">Instagram</div>
      </a>

      <a
        href="https://github.com/sumitsingh010"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
      
    </div>
  </section>
);

export default React.memo(Contact);
