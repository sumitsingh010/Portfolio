import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi language*/
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const projectImage = require.context("../../img", true);

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="project-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects-slider mySwiper"
        >
          <SwiperSlide className="contain">
            <img
              src={projectImage(`./Task Management Dashboard.jpg`)}
              alt="projects"
            />
            <div className="content">
              <h3>Blog</h3>
              <p>NextJS Based Blog</p>
              <p className="technologies">
                React-Js
                <span> -</span> ReactJS
                <span> -</span> NextJS
                
              </p>
              <a
                href="https://personal-b-l-o-g.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/Personal_blog"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* Tech Fest Website  */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./EnigmaSliderfinal.jpg`)} alt="projects" />
            <div className="content">
              <h3>Enigma : Tech-Fest Website</h3>
              <p>Mern Based Techfest Website </p>
              <p className="technologies">
                React-Js
                <span> -</span> MongoDB
                <span> -</span> Express
                <span> -</span> NodeJs
                <span> -</span> Sass
              </p>
              <a
                href="https://enigmamits.tech/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://enigmamits.tech/"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* SKILLNOTION  */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./SkillNotionSlider.jpg`)} alt="projects" />
            <div className="content">
              <h3>3-D Haunted House</h3>
              <p>Interactive 3D Haunted House Experience</p>
              <p className="technologies">
                React-Js
                <span> -</span> ThreeJS
                <span> -</span> JavaScript
                <span> -</span> Html
                <span> -</span> Tailwind CSS
              </p>
              <a
                href="https://3-d-haunted-house-six.vercel.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/3-D-Haunted-House"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* BUDGET BUDDY */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./budget.jpg`)} alt="projects" />
            <div className="content">
              <h3>Apple-Website-Clone</h3>
              <p> 3-D Landing Page using ThreeJS</p>
              <p className="technologies">
                React-Js
                <span> -</span> ReactJS
                <span> -</span> Tailwind CSS
                <span> -</span> ThreeJS
                <span> -</span> Vite
              </p>
              <a
                href="https://a-p-p-l-e-clone.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/Apple-website-clone"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* INTERIOR */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./interiorfinal.png`)} alt="projects" />
            <div className="content">
              <h3>Travel-website</h3>
              <p>Fully Responsive Travel Website</p>
              <p className="technologies">
                
                <span> -</span> Html,CSS, JavaScript
              </p>
              <a
                href="https://tourist-html-css.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/Tourest-html-css"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          {/* WEATHER  */}
          <SwiperSlide className="contain">
            <img src={projectImage(`./weather.jpg`)} alt="projects" />
            <div className="content">
              <h3>Restaurant-Web-Template</h3>
              
              <p className="technologies">
                
                <span> -</span> Html,CSS, JavaScript
              </p>
              <a
                href="https://restaurant-web-site-html-css.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/Restaurant-template"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="contain">
            <img src={projectImage(`./Text Wizards.jpg`)} alt="projects" />
            <div className="content">
              <h3>Employee-Management</h3>
              <p>Web Based CRUD Application</p>
              <p className="technologies">
                <span> -</span> Python, Django
                <span> -</span> HTML, CSS, Bootstrap
              </p>
              <a
                href="employee-management-blush-five.vercel.app"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/Employee-management"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="contain">
            <img src={projectImage(`./Cars.jpg`)} alt="projects" />
            <div className="content">
              <h3>Fe-male-Ecommerce</h3>
              <p>Ecommerce Website</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS, HTML
                <span> -</span> JavaScript
              </p>
              <a
                href="https://fre-male-ecommerce-website.vercel.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/Fre-male-Ecommerce-website"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="contain">
            <img src={projectImage(`./Paypal.jpg`)} alt="projects" />
            <div className="content">
              <h3>Recipes</h3>
              <p>React based application </p>
              <p className="technologies">
                HTML5
                <span> -</span> React
                <span> -</span> ESLint integration
              </p>
              <a
                href="https://recipes-nu-sand.vercel.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/sumitsingh010/Recipes"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-code portfolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      <div className="portfolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
