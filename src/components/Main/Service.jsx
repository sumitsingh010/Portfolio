import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="services" id="services">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="Services" />
    </h2>
    <div className="row">
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-code"></i>
        <h3>
          <FormattedMessage
            id="DSA"
            defaultMessage="Data Structures & Algorithms"
          />
        </h3>
        <p>
          <FormattedMessage
            id="DSA-info"
            defaultMessage="I specialize in crafting optimized solutions for complex challenges, leveraging my experience with over 400+ DSA questions across multiple platforms."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="Web development" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="400">
        <i className="fas fa-database"></i>
        <h3>
          <FormattedMessage id="backend" defaultMessage="Digital backend" />
        </h3>
        <p>
          <FormattedMessage
            id="backend-info"
            defaultMessage="I develop scalable, secure backends, handling databases and APIs to ensure smooth data flow and reliable performance for web applications."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="500">
        <i className="fas fa-wrench"></i>
        <h3>
          <FormattedMessage id="maintenance" defaultMessage="Web maintenance" />
        </h3>
        <p>
          <FormattedMessage
            id="social-media-info"
            defaultMessage="As the Social Media Lead for GDG, I strategize and manage online presence, fostering community growth and enhancing outreach."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="600">
        <i className="fas fa-user"></i>
        <h3>
          <FormattedMessage
            id="CleanCode"
            defaultMessage="Web positioning (SEO)"
          />
        </h3>
        <p>
          <FormattedMessage
            id="cleancode-info"
            defaultMessage="I focus on writing clean, efficient, and maintainable code while excelling in team collaborations to bring projects to life effectively."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="700">
        <i className="fas fa-tachometer-alt"></i>
        <h3>
          <FormattedMessage
            id="optimization"
            defaultMessage="Website optimization"
          />
        </h3>
        <p>
          <FormattedMessage
            id="website-optimization-info"
            defaultMessage="Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website."
          />
        </p>
      </div>
    </div>
    <div className="portfolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
