import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Int3 from "../assets/integrity-tower.jpg";
import { Helmet } from "react-helmet";
const Services = () => {
  return (
    <div>
      <Helmet>
        <title>High Park Services</title>
        <meta name="description" content="Premier Architects specializes in innovative architectural designs across Nigeria, featuring projects like Lekki Beach Front and Jade's Court in Lagos." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <div className="container">
        {/* <h1 className="aboutitle">Our Services</h1> */}
        <div className="about-page">
          <div className="about-content">
            {/* <div className="about-image">
              <img src={Int3} alt="Integrity Tower Lekki" />
            </div> */}
            <div className="container mx-auto px-4 py-8">
              <h2 className="text-5xl font-bold text-center mb-8">
                Our Services
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Service 1: Architecture Design */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-yellow-900 mb-4">
                    Architecture Design
                  </h3>
                  <p className="text-gray-700">
                    High Park offers comprehensive architectural design
                    services. Our team of skilled architects works closely with
                    clients to conceptualize, plan, and design structures that
                    are functional, aesthetically pleasing, and aligned with the
                    client's vision and requirements.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3">
                    <li>Site Analysis</li>
                    <li>Conceptual Design</li>
                    <li>Schematic Design</li>
                    <li>Design Development</li>
                    <li>Construction Documentation</li>
                    <li>Architectural Visualization</li>
                  </ul>
                </div>

                {/* Service 2: Interior Design */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-yellow-900 mb-4">
                    Interior Design
                  </h3>
                  <p className="text-gray-700">
                    High Park specializes in creating captivating interior
                    spaces that harmonize with the architecture and meet the
                    functional needs of our clients. Our interior design
                    services cover a wide range of areas including residential,
                    commercial, hospitality, and institutional spaces.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3">
                    <li>Space Planning</li>
                    <li>Material Selection</li>
                    <li>Furniture Layout</li>
                    <li>Lighting Design</li>
                    <li>Color Coordination</li>
                    <li>Aesthetic Direction</li>
                  </ul>
                </div>

                {/* Service 3: FF&E Contracting */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-yellow-900 mb-4">
                    FF&E Contracting
                  </h3>
                  <p className="text-gray-700">
                    High Park manages the procurement and installation of
                    fixtures, furniture, and equipment for their clients'
                    projects. We source high-quality FF&E items from Europe,
                    Asia, and Africa that align with the project's design
                    concept and budget.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3">
                    <li>Supplier Coordination</li>
                    <li>Logistics Management</li>
                    <li>Timely Delivery</li>
                    <li>Installation Oversight</li>
                  </ul>
                </div>

                {/* Service 4: Project Management */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-yellow-900 mb-4">
                    Project Management
                  </h3>
                  <p className="text-gray-700">
                    High Park offers comprehensive project management services
                    to oversee every aspect of the project from inception to
                    completion, ensuring seamless execution, timely delivery,
                    and adherence to budget and quality standards.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3">
                    <li>Project Planning & Scheduling</li>
                    <li>Budget Management</li>
                    <li>Risk Mitigation</li>
                    <li>Quality Control</li>
                    <li>Stakeholder Communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
