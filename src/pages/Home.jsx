import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import Parkview from "../assets/parkview-ext.jpg";
import Ark from "../assets/ark2.jpg";
import Ark2 from "../assets/ark.png";
import Ark3 from "../assets/ark3.jpg";
import Ark4 from "../assets/ark4.jpg";
import Ark5 from "../assets/ark5.jpg";
import Trim from "../assets/TRIMNELL TOWER_01.jpg";
import Trim1 from "../assets/trim1.jpg";
import Trim2 from "../assets/trim2.jpg";
import Trim3 from "../assets/trim3.jpg";
import Trim4 from "../assets/trim4.jpg";
import Trim5 from "../assets/trim5.jpg";
import Trim6 from "../assets/trim6.png";
import Trim7 from "../assets/trim7.jpg";
import Jas from "../assets/jasmine-villas.jpg";
import Jv1 from "../assets/jv1.jpg";
import Jv2 from "../assets/jv2.jpg";
import Jv3 from "../assets/jv3.jpg";
import Jv4 from "../assets/jv4.jpg";
import Jv5 from "../assets/jv5.jpg";
import Jv6 from "../assets/jv6.jpg";
import Jv7 from "../assets/jv7.jpg";
import Integrity from "../assets/integrity-tower.jpg";
import Int1 from "../assets/int1.jpg";
import Int2 from "../assets/int2.jpg";
import Int3 from "../assets/int3.jpg";
import Int4 from "../assets/int4.jpg";
import Int5 from "../assets/int5.jpg";
import Int6 from "../assets/int6.jpg";
import Oniru from "../assets/oni-EXTERIOR_01.jpg";
import Oniru2 from "../assets/oniru-EXTERIOR_02.jpg";
import Oniru3 from "../assets/oniru-RECEPTION.png";
import Guzape from "../assets/Guz-PERSPECTIVE 01.jpg";
import Guz1 from "../assets/Guz-LOUNGE.png";
import Guz2 from "../assets/Guz-lounge2.png";
import Guz3 from "../assets/Guz-MASTER SUITE.png";
import Guz4 from "../assets/Guz-KITCHEN.png";
import Villam from "../assets/villa-m.jpg";
import Vm1 from "../assets/vm1.jpg";
import Vm2 from "../assets/vm2.jpg";
import Vm3 from "../assets/vm3.jpg";
import Vm4 from "../assets/vm4.jpg";
import Vm5 from "../assets/vm5.jpg";
import Vm6 from "../assets/vm6.jpg";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = {
    oniru: {
      title: "Oniru Project",
      location: "Oniru, Lagos",
      images: [Oniru, Oniru2, Oniru3],
      description: "A modern architectural marvel in the heart of Oniru, featuring contemporary design elements and sustainable materials.",
      details: [
        "Contemporary architectural design",
        "Sustainable building materials",
        "Smart home integration",
        "Premium location in Oniru"
      ]
    },
    trimnell: {
      title: "Trimnell Tower",
      location: "Victoria Island, Lagos",
      images: [Trim, Trim7, Trim1, Trim2, Trim3, Trim4, Trim5, Trim6],
      description: "Trimnell Tower is a luxury high rise development situated in the exclusive enclave of Victoria Island Lagos. The development is a radical and bold architectural statement on the Lagos skyline that seeks an innovative and ingenious approach to spatial organization in the context of high density.",
      details: [
        "Luxury residential apartments",
        "Premium amenities",
        "Ocean view terraces",
        "24/7 security"
      ]
    },
    integrity: {
      title: "Integrity Tower",
      location: "Lekki, Lagos",
      images: [Integrity, Int1, Int2, Int3, Int4, Int5, Int6],
      description: "Integrity Tower is a contemporary statement on the Lekki skyline, which soars uniquely in a class of its own. With HIGH PARK engaged as Architect + Interior Architect, we set out to create a modern, yet stylish design. Geometric lines and curves are masterfully composed into a uniquely identifiable landmark which recapitulates and confounds to the stylish Art Nouveau Era. Minimal yet fashionably elegant and sophisticated, Integrity Tower aims for a balance between pared back barefoot luxury and elegant living.",
      details: [
        "Luxury residential apartments",
        "Modern facilities",
        "A skillful combination of earth tones, neutral fabrics and metallic accents",
        "Sustainable design features and abundant day lighting"
      ]
    },
    villam: {
      title: "Villa M",
      location: "Lagos",
      images: [Villam, Vm1, Vm2, Vm3, Vm4, Vm5, Vm6],
      description: "Located on a lagoon facing peninsula, Villa M delicately slots into the luxurious neighborhood of Cowrie Creek Estate. The narrow and elongated door plate created an opportunity for HIGH PARK to discretely break down the volume into zones of activities, each defined by a set of unique custom elements.",
      details: [
        "- The foyer is defined by a series of vertical custom lights which double as directional markers.",
        "- The stair volume by an organic dematerialized staircase and wall cladding with differently sized elements and serrations.",
        "- Custom interior finishes",
        "- The living area maintains a similar vertical archetype with it’s custom light rain suspension chandelier and towering wall unit."
      ]
    },
    parkview: {
      title: "Parkview Extension",
      location: "Ikoyi, Lagos",
      images: [Parkview],
      description: "An elegant residential development in the prestigious Parkview Estate area.",
      details: [
        "- Premium residential development",
        "- Landscaped surroundings",
        "- Modern amenities",
        "- Exclusive location"
      ]
    },
    jasmine: {
      title: "Jasmine Villas",
      location: "Ikoyi, Lagos",
      images: [Jas, Jv1, Jv2, Jv3, Jv4, Jv5, Jv6, Jv7],
      description: "When approached to design the Interior Architecture of these homes in this Ikoyi development, HIGH PARK sought to create distinct visual identities for each scheme.",
      details: [
        "VILLA 1",
        "- Double height living area which features a cluster of ring suspension lighting", 
        "- The elevator shaft is a rough textured volume which runs through the four(4) levels of the home, revealing presence on every floor.",
        "VILLA 2",
        "- Elevated beautifully lit open plan living experience.", 
        "- The use of soft organic forms throughout the home is used to convey a sense of comfort and relaxation.",
        "A neutral aesthetic with slight pops of rich color serves to enliven the schemes while maintaining a sense of calm and serenity."
      ]
    },
    ark: {
      title: "The Ark",
      location: "Lekki, Lagos",
      images: [Ark, Ark2, Ark3, Ark4, Ark5],
      description: "As Architect + Interior Architect, HIGH PARK was tasked by the client’s brief to create a ‘boutique living experience.’ The development is situated in the upmarket Lekki Neighborhood and delivers a sense of ‘savoir vivre’ - the ability to live elegantly. This gem of a living space with it’s high ceilings, walls of folding glass doors and wide panorama conveys the opulence of a Manhattan Penthouse, right in the heart of Lagos!",
      details: [
        "- Comprises four(4) triplexes and two(2) penthouses",
        "- Living areas spill onto expansive perimeter loggia, for entertainment and enjoyment of the tropical seasons",
        "- 2 penthouses are perched above, with loggias stretching the width of the units and crowned with a cantilevered deck above.",
        "- Living areas are elevated via a sculptural staircase which runs through the triplexes."
      ]
    },
    guzape: {
      title: "Guzape Project",
      location: "Guzape, Abuja",
      images: [Guzape, Guz1, Guz2, Guz3, Guz4],
      description: "A landmark development in Abuja's emerging Guzape district.",
      details: [
        "Mixed-use development",
        "Modern architecture",
        "Premium facilities",
        "Strategic location"
      ]
    }
  };

  const handleProjectClick = (projectKey, e) => {
    e.preventDefault();
    setSelectedProject(projectsData[projectKey]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div id="fh5co-intro">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-md-pull-2">
              <h2>A New Paradigm for Architectural Design &amp; Interior.</h2>
            </div>
          </div>
        </div>

        <div id="fh5co-portfolio">
          <div className="row nopadding">
            <div className="col-md-6 padding-right">
              <div className="row">
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('oniru', e)}>
                    <img
                      src={Oniru}
                      className="img-responsive"
                      alt="Oniru project lagos"
                    />
                    <div className="desc">
                      <h3>Oniru Project</h3>
                      <span>Oniru, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('trimnell', e)}>
                    <img
                      src={Trim}
                      className="img-responsive"
                      alt="Trimnell Tower Interior"
                    />
                    <div className="desc">
                      <h3>Trimnell Tower</h3>
                      <span>Victoria Island, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('integrity', e)}>
                    <img
                      src={Integrity}
                      className="img-responsive"
                      alt="Integrity Tower Lekki"
                      style={{ width: '100%' }}
                    />
                    <div className="desc">
                      <h3>Integrity Tower</h3>
                      <span>Lekki, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('villam', e)}>
                    <img
                      src={Villam}
                      className="img-responsive"
                      alt="Villa M Lagos"
                    />
                    <div className="desc">
                      <h3>Villa M</h3>
                      <span>Lagos</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 padding-left">
              <div className="row">
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('parkview', e)}>
                    <img
                      src={Parkview}
                      className="img-responsive"
                      alt="Parkview Extension Ikoyi"
                    />
                    <div className="desc">
                      <h3>Parkview Extension</h3>
                      <span>Ikoyi, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('jasmine', e)}>
                    <img
                      src={Jas}
                      className="img-responsive"
                      alt="Jasmine Villas Ikoyi"
                    />
                    <div className="desc">
                      <h3>Jasmine Villas</h3>
                      <span>Ikoyi, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('ark', e)}>
                    <img
                      src={Ark}
                      className="img-responsive"
                      alt="The Ark Lekki"
                    />
                    <div className="desc">
                      <h3>The Ark</h3>
                      <span>Lekki, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a href="#" className="portfolio-grid" onClick={(e) => handleProjectClick('guzape', e)}>
                    <img
                      src={Guzape}
                      className="img-responsive"
                      alt="Guzape Project Abuja"
                    />
                    <div className="desc">
                      <h3>Guzape Project</h3>
                      <span>Guzape, Abuja</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <Footer />
    </div>
  );
};

export default Home;