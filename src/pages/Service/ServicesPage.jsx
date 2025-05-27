import React from "react";
import "./ServicesPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Accordion from "./Accordion";

/* Multi language*/
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
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
                  defaultMessage="I specialize in crafting optimized solutions for complex challenges, leveraging my experience with over 150+ DSA questions across multiple platforms."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>
                <FormattedMessage
                  id="development"
                  defaultMessage="Web development"
                />
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
                <FormattedMessage
                  id="backend"
                  defaultMessage="Digital backend"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="backend-info"
                  defaultMessage="Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage
                  id="maintenance"
                  defaultMessage="Web maintenance"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="social-media-info"
                  defaultMessage="Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc."
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
                  defaultMessage="Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines"
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
                  defaultMessage="Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website"
                />
              </p>
            </div>
          </div>
        </section>

        <section className="questions">
          <h2 className="heading">
            <FormattedMessage
              id="services-questions"
              defaultMessage="Frequent questions"
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-1"
                  defaultMessage="What is a responsive web page?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p1"
                  defaultMessage="It is that page that is capable of adapting to any device where it is viewed, such as cell phones, tablets, laptops, without losing appearance or usability."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-2"
                  defaultMessage="What is a Domain and a Hosting?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p2"
                  defaultMessage="Both are essential elements of a website. In short, the domain name is the address of the web page, while the hosting provides the space and resources necessary to launch the website."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-3"
                  defaultMessage="Is monthly maintenance necessary?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p3"
                  defaultMessage="Regular maintenance of your website allows you to attract and retain customers with new information, new products and services, in addition to helping you maintain or improve your ranking in Google."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4"
                  defaultMessage="How to pay"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4"
                  defaultMessage="You can pay online by credit or debit cards and payments by transfers."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
