import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi language*/
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [stateModal1, setStateModal1] = useState(false);
  const [stateModal2, setStateModal2] = useState(false);
  const [stateModal3, setStateModal3] = useState(false);

  const [stateModal7, setStateModal7] = useState(false);

  const [stateModal8, setStateModal8] = useState(false);
  const [stateModal9, setStateModal9] = useState(false);
  const [stateModal10, setStateModal10] = useState(false);
  const [stateModal11, setStateModal11] = useState(false);
  const [stateModal12, setStateModal12] = useState(false);
  // const [stateModal13, setStateModal13] = useState(false);
  // const [stateModal14, setStateModal14] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="projects more-project" id="projects">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="site-web" defaultMessage="websites" />
            </NavLink>
          </nav>
        </section>
        {/* TechfestWebsite  */}
        <section className="projects__grid ">
          <div className="projects__item">
            <button onClick={() => setStateModal11(!stateModal11)}>
              <img
                src={proyectsImg(`./EnigmaSliderfinal.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          {/* SkillNotion  */}
          <div className="projects__item">
            <button onClick={() => setStateModal12(!stateModal12)}>
              <img
                src={proyectsImg(`./SkillNotionSlider.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          {/* expense Tracker  */}
          <div className="projects__item">
            <button onClick={() => setStateModal9(!stateModal9)}>
              <img
                src={proyectsImg(`./budget.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>

          <div className="projects__item">
            <button onClick={() => setStateModal1(!stateModal1)}>
              <img
                src={proyectsImg(`./Task Management Dashboard.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>

          {/* Interior  */}
          <div className="projects__item">
            <button onClick={() => setStateModal8(!stateModal8)}>
              <img
                src={proyectsImg(`./interiorfinal.png`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          {/* weather  */}
          <div className="projects__item">
            <button onClick={() => setStateModal10(!stateModal10)}>
              <img
                src={proyectsImg(`./weather.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal2(!stateModal2)}>
              <img
                src={proyectsImg(`./Text Wizards.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
          <div className="projects__item">
            <button onClick={() => setStateModal3(!stateModal3)}>
              <img
                src={proyectsImg(`./Cars.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
         
          
          <div className="projects__item">
            <button onClick={() => setStateModal7(!stateModal7)}>
              <img
                src={proyectsImg(`./Paypal.jpg`)}
                alt=""
                className="projects__img"
              />
            </button>
          </div>
        </section>
      </main>

      <Modal state={stateModal11} setState={setStateModal11}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./EnigmaModal.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-9-p1"
                  defaultMessage="Developed the official website for Enigma, the tech fest of MITSDU — a fully responsive, secure, and feature-rich platform crafted with modern web technologies to deliver an engaging user experience."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-9-p2"
                  defaultMessage="Engineered robust features ranging from seamless user authentication to event access and management, with a strong emphasis on security, scalability, and performance — successfully supporting over 4,500 live users and 700+ registered participants."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://enigmamits.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal12} setState={setStateModal12}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./SkillNotionModal.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-8-p1"
                  defaultMessage="3D Haunted House is an immersive and interactive 3D web experience designed to simulate a spooky haunted house environment. Built using Three.js, HTML, and CSS, the project combines real-time 3D rendering with smooth user interactions to create a visually engaging environment."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-8-p2"
                  defaultMessage="3D Haunted House aims to provide:
•	A realistic and eerie walkthrough experience using modern 3D web technologies.
•	A learning showcase for implementing textures, lighting, shadows, and camera controls in a 3D scene.
"
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://3-d-haunted-house-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal1} setState={setStateModal1}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./task mngmt.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-1-p1"
                  defaultMessage="Built a responsive Personal Blog using HTML, CSS, and JavaScript to showcase posts and portfolio content with a clean, minimal design optimized for all devices."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-1-p2"
                  defaultMessage="The site is fully optimized for different screen sizes, ensuring seamless viewing across mobile, tablet, and desktop devices. Its minimal design and structured content make it ideal for static publishing or as a foundation for future CMS integration."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://personal-b-l-o-g.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal2} setState={setStateModal2}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./txt analyser tool.jpeg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-2-p1"
                  defaultMessage="  Built an Employee Management System using Python and Django, designed to manage employee records with functionalities like add, update, delete, and search."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-2-p2"
                  defaultMessage=" The system features a user-friendly interface for easy navigation and management of employee data, ensuring efficient record-keeping and retrieval. It is fully responsive, adapting seamlessly to various screen sizes for optimal usability across devices." 
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://github.com/sumitsingh010/Employee-management"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal3} setState={setStateModal3}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./retro car.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-3-p1"
                  defaultMessage="Developed a visually engaging eCommerce website, Fre-male, using HTML, CSS, and JavaScript. The site features a modern, vibrant design with bold typography, smooth transitions, and responsive layouts. It showcases a wide range of fashion and lifestyle products, offering intuitive navigation and an interactive shopping experience."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-3-p2"
                  defaultMessage="The project features smooth animations and interactive hover effects. JavaScript enhances the experience with dynamic elements such as product carousels, modals, and notification toasts. The responsive design ensures seamless browsing and shopping across all devices, creating an engaging and modern eCommerce experience."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://fre-male-ecommerce-website.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* interior modal -8 */}

      <Modal state={stateModal8} setState={setStateModal8}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./interiormodel.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-5-p1"
                  defaultMessage="Built a responsive Tourist Website using HTML, CSS, and JavaScript, showcasing travel destinations and packages with an engaging layout."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-5-p2"
                  defaultMessage="The website features a user-friendly interface with smooth navigation, allowing users to explore various travel options easily. It is fully responsive, ensuring optimal viewing and interaction across all devices, from desktops to mobile phones."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://tourist-html-css.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* expense modal  */}

      <Modal state={stateModal9} setState={setStateModal9}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./expensemodel.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-6-p1"
                  defaultMessage="Developed an Apple Homepage Clone using HTML, CSS, and JavaScript, replicating the design and layout of Apple’s official website. The project focuses on pixel-perfect UI, smooth scrolling, and clean section transitions to mirror the premium feel of Apple’s branding."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-6-p2"
                  defaultMessage="The clone is fully responsive and showcases attention to detail in animations, grid layouts, and typography. It serves as a front-end practice project to sharpen skills in recreating real-world, high-fidelity web interfaces."

                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://a-p-p-l-e-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg"
                    alt=""
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* weather model  */}

      <Modal state={stateModal10} setState={setStateModal10}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./weathermodel.jpg`)} alt="" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-7-p1"
                  defaultMessage="Developed a responsive Restaurant Template using HTML, CSS, and JavaScript, designed to showcase menus, specials, and reservations in a modern layout."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-7-p2"
                  defaultMessage=" The template features a clean UI, smooth scrolling, and mobile optimization, making it a solid front-end project for hospitality and food service websites."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://restaurant-web-site-html-css.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal state={stateModal7} setState={setStateModal7}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="single-modal-preview">
              <img src={proyectsImg(`./paypal mod.jpg`)} alt="img" />
            </div>
            <div className="single-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-4-p1"
                  defaultMessage="Developed a Recipes website using HTML, CSS, and JavaScript, featuring a user-friendly interface for browsing, searching, and viewing various recipes. The site includes dedicated pages for recipe details, categories, and a responsive layout that adapts seamlessly to different devices. Smooth transitions and interactive elements enhance the user experience, making it easy to discover and manage favorite recipes."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-4-p2"
                  defaultMessage="The website adapts effortlessly to any screen size, ensuring a consistent experience on all devices. JavaScript powers dynamic features such as recipe filtering and interactive elements, while CSS animations deliver smooth transitions for a visually appealing and intuitive user interface."
                />
              </p>
              <div className="single-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://recipes-nu-sand.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here !
                </a>
              </div>
              <div className="single-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="single-modal-tech">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
