import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Int3 from "../assets/int03.jpg";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About High Park</title>
        <meta name="description" content="Premier Architects specializes in innovative architectural designs across Nigeria, featuring projects like Lekki Beach Front and Jade's Court in Lagos." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <div className="container">
        <h1 className="aboutitle">About Us</h1>
        <div className="about-page">
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to High Park Architecture. We specialize in delivering
                comprehensive end-to-end architecture and project management
                solutions. Our mission is to transform spaces into captivating
                environments that inspire and enhance the lives of those who
                inhabit them. At High Park, we take pride in our meticulous
                approach to every project, ensuring excellence from conception
                to completion. Here's how we operate:
              </p>
              <ul>
                <li>
                  <strong>Design Expertise:</strong> Our designers create
                  innovative schemes tailored to client needs, blending
                  creativity and expertise from concept to finalization.
                </li>
                <li>
                  <strong>Carcass Delivery:</strong> We manage the structural
                  framework delivery, resolving issues early to streamline the
                  process and ensure quality.
                </li>
                <li>
                  <strong>Vendor Collaboration:</strong> Partnering with trusted
                  vendors across Europe, Asia, and Africa, we ensure precise
                  fabrication, delivery, and installation of FF&E as per
                  detailed technical drawings.
                </li>
                <li>
                  <strong>Supervision Excellence:</strong> Our team oversees
                  finishing teams, maintaining high standards of craftsmanship
                  from first fix to final installation.
                </li>
                <li>
                  <strong>Project Completion:</strong> We stage and hand over
                  the completed project, ensuring every detail is flawless,
                  creating enduring, sophisticated spaces.
                </li>
              </ul>
              <p>
                Welcome to a world of timeless elegance and unparalleled
                sophistication. <br /> <br />
                <strong>Welcome to High Park Architecture.</strong>
              </p>
            </div>
            <div className="about-image">
              <img src={Int3} alt="Integrity Tower Lekki" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
