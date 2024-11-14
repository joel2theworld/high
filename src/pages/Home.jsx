import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import OptimizedImage from "../components/OptimizedImage.jsx";
import Ark from "../assets/ark2.jpg";
import Ark2 from "../assets/ark.png";
import Ark3 from "../assets/ak03.jpg";
import Ark4 from "../assets/ark3.jpg";
import Ark5 from "../assets/ark4.jpg";
import Ark6 from "../assets/ark5.jpg";
import Ark7 from "../assets/ak07.jpg";
import Ark8 from "../assets/ak08.jpg";
import Ark9 from "../assets/ak09.jpg";
import Trim from "../assets/TRIMNELL TOWER_01.jpg";
import Trim1 from "../assets/trt05.jpg";
import Trim2 from "../assets/trt02.jpg";
import Trim3 from "../assets/trt03.jpg";
import Trim4 from "../assets/trt08.jpg";
import Trim5 from "../assets/trim5.jpg";
import Trim6 from "../assets/trim6.png";
import Trim7 from "../assets/trim7.jpg";
import Trim9 from "../assets/trt09.jpg";
import Trim10 from "../assets/trt10.jpg";
import Trim11 from "../assets/trt11.jpg";
import Trim12 from "../assets/trt12.jpg";
import Trim13 from "../assets/trt13.jpg";
import Jas from "../assets/jasmine-villas.jpg";
import Jv2 from "../assets/jv2.jpg";
import Jv3 from "../assets/jv3.jpg";
import Jv4 from "../assets/jv4.jpg";
import Jv5 from "../assets/jv5.jpg";
import Jv6 from "../assets/jv6.jpg";
import Jv7 from "../assets/jv7.jpg";
import Jv8 from "../assets/jv8.jpg";
import Jv9 from "../assets/jv9.jpg";
import Jv10 from "../assets/jv10.jpg";
import Jv11 from "../assets/jv11.jpg";
import Jv12 from "../assets/jv12.jpg";
import Jv13 from "../assets/jv13.jpg";
import Jv14 from "../assets/jv14.jpg";
import Integrity from "../assets/integrity-tower.jpg";
import Int2 from "../assets/int02.jpg";
import Int3 from "../assets/int03.jpg";
import Int4 from "../assets/int04.jpg";
import Int5 from "../assets/int05.jpg";
import Int6 from "../assets/int06.jpg";
import Int7 from "../assets/int07.jpg";
import Int8 from "../assets/int08.jpg";
import Int9 from "../assets/int09.jpg";
import int10 from "../assets/int10.jpg";
import int11 from "../assets/int11.jpg";
import int12 from "../assets/int12.jpg";
import int13 from "../assets/int13.jpg";
import int14 from "../assets/int14.jpg";
import int15 from "../assets/int15.jpg";
import int16 from "../assets/int16.jpg";
import Jade from "../assets/jc1.jpg";
import Jade2 from "../assets/jc2.jpg";
import Jade3 from "../assets/jc3.jpg";
import landbridge from "../assets/ldb01 COVER.jpg";
import landbridge2 from "../assets/ldb02.jpg";
import landbridge3 from "../assets/ldb03.png";
import landbridge4 from "../assets/ldb04.png";
import landbridge5 from "../assets/ldb05.png";
import landbridge6 from "../assets/ldb06.png";
import landbridge7 from "../assets/ldb07.png";
import landbridge8 from "../assets/ldb08.png";
import landbridge9 from "../assets/ldb09.png";
import landbridge10 from "../assets/ldb10.png";
import landbridge11 from "../assets/ldb11.png";
import Lbf from "../assets/lbf01 COVER.jpg";
import Lbf2 from "../assets/lbf02.jpg";
import Lbf3 from "../assets/lbf03.jpg";
import Lbf4 from "../assets/lbf04.jpg";
import Lbf5 from "../assets/lbf05.jpg";
import Oasis from "../assets/osv01 COVER.jpg";
import Oasis2 from "../assets/osv02.jpg";
import Oasis3 from "../assets/osv03.jpg";
import Oasis4 from "../assets/osv04.jpg";
import Oasis5 from "../assets/osv05.jpg";
import Oasis6 from "../assets/osv06.jpg";
import Oasis7 from "../assets/osv07.jpg";
import Oasis8 from "../assets/osv08.jpg";
import Oasis9 from "../assets/osv09.jpg";
import Oasis10 from "../assets/osv10.jpg";
import Oasis11 from "../assets/osv11.jpg";
import Oasis12 from "../assets/osv12.jpg";
import Oasis13 from "../assets/osv13.jpg";
import Oasis14 from "../assets/osv14.jpg";
import Oasis15 from "../assets/osv15.jpg";
import Patrick from "../assets/PATRICK HARBOUR_E01.jpg";
import Patrick2 from "../assets/PATRICK HARBOUR_E02.jpg";
import Project425 from "../assets/425-01 COVER.jpg";
import Project4252 from "../assets/425-02.jpg";
import Project4253 from "../assets/425-03.jpg";
import Guzape from "../assets/Guz-PERSPECTIVE 01.jpg";
import Guz1 from "../assets/guz02.png";
import Guz2 from "../assets/guz03.png";
import Guz3 from "../assets/guz04.png";
import Guz4 from "../assets/guz05.png";
import Guz5 from "../assets/guz06.png";
import Shoreline from "../assets/shvCOVER.jpg";
import Sh2 from "../assets/shv02.jpg";
import Vm1 from "../assets/vm01.jpg";
import Vm2 from "../assets/vm02.jpg";
import Vm3 from "../assets/vm03.jpg";
import Vm4 from "../assets/vm04.jpg";
import Vm5 from "../assets/vm05.jpg";
import Vm6 from "../assets/vm06.jpg";
import Vm7 from "../assets/vm07.jpg";
import Vm8 from "../assets/vm08.jpg";
import Vm9 from "../assets/vm09.jpg";
import Vm10 from "../assets/vm10.jpg";
import Vm11 from "../assets/vm11.jpg";
import Vm12 from "../assets/vm12.jpg";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = {
    shoreline: {
      title: "AZURE EDGE",
      location: "Shoreline Estate, Lagos",
      images: [Shoreline, Sh2],
      description:
        "This high-end villa in Shoreline Estate, Lagos, epitomizes luxury living and sophistication, blending modern design with the beauty of coastal surroundings. Shoreline Estate is one of the most exclusive neighborhoods in Lagos, offering a serene, upscale environment with top-tier amenities and a prime location along the waterfront. The villa features contemporary architecture with clean, sleek lines and expansive glass facades that maximize views of the serene surroundings.",
      details: [
        "Contemporary architectural design",
        "Sustainable building materials",
        "Smart home integration",
        "Premium location in Oniru",
      ],
    },
    trimnell: {
      title: "Trimnell Tower",
      location: "Victoria Island, Lagos",
      images: [
        Trim,
        Trim2,
        Trim3,
        Trim7,
        Trim1,
        Trim6,
        Trim5,
        Trim4,
        Trim9,
        Trim10,
        Trim11,
        Trim12,
        Trim13,
      ],
      description:
        "Trimnell Tower is a luxury high rise development situated in the exclusive enclave of Victoria Island Lagos. The development is a radical and bold architectural statement on the Lagos skyline that seeks an innovative and ingenious approach to spatial organization in the context of high density.",
      details: [
        "Luxury residential apartments",
        "Premium amenities",
        "Ocean view terraces",
        "24/7 security",
      ],
    },
    integrity: {
      title: "INTEGRITY TOWER",
      location: "Lekki, Lagos",
      images: [
        Integrity,
        Int2,
        Int3,
        Int4,
        Int5,
        Int6,
        Int7,
        Int8,
        Int9,
        int10,
        int11,
        int12,
        int13,
        int14,
        int15,
        int16,
      ],
      description:
        "Integrity Tower is a contemporary statement on the Lekki Skyline which soars uniquely in a class of its own.The language of the design is unmistakably modern. Geometric lines and curves are masterfully composed into a cutting-edge 21st-century residential development.",
      details: [
        "Luxury residential apartments",
        "Modern facilities",
        "A skillful combination of earth tones, neutral fabrics and metallic accents",
        "Sustainable design features and abundant day lighting",
      ],
    },
    villam: {
      title: "Villa M",
      location: "Cowrie Creek, Lagos",
      images: [Vm1, Vm2, Vm3, Vm4, Vm5, Vm6, Vm7, Vm8, Vm9, Vm10, Vm11, Vm12],
      description:
        "Located on a lagoon facing peninsula, Villa M delicately slots into the luxurious neighborhood of Cowrie Creek Estate. The narrow and elongated floor plate created an opportunity for HIGH PARK to discretely break down the volume into zones of activities, each defined by a set of unique custom elements.",
      details: [
        "- The foyer is defined by a series of vertical custom lights which double as directional markers.",
        "- The stair volume by an organic dematerialized staircase and wall cladding with differently sized elements and serrations.",
        "- Custom interior finishes",
        "- The living area maintains a similar vertical archetype with it’s custom light rain suspension chandelier and towering wall unit.",
      ],
    },
    oasis: {
      title: "OASIS VILLA",
      location: "Lagos",
      images: [
        Oasis,
        Oasis2,
        Oasis3,
        Oasis4,
        Oasis5,
        Oasis6,
        Oasis7,
        Oasis8,
        Oasis9,
        Oasis10,
        Oasis11,
        Oasis12,
        Oasis13,
        Oasis14,
        Oasis15,
      ],
      description: `Situated on a private drive off the commercial Admiralty strip, the architecture of this home is informed by its metropolitan condition. An oasis in the heart of the city, a hideaway from the buzzing city of Lagos, yet within reach of major high end art institutions, fine dining & business. 

Designed by renowned South-African Architecture Studio - Luc Zeghers Architects (LZA), HIGH PARK was commissioned as Interior Architect and Project manager. Ambitious from the onset, we set to maintain the minimalist rigor of the architecture whilst infusing a layer of sensory and emotional richness to the design without compromising the refined functionality of it’s concept.

With that in mind, we opted to create a unified inner shell which allowed us to combine discreet elements such as doors, cabinetry, wall units & wine display into a unified system to present sleek uncluttered surfaces throughout the home.

A layer of rich textures, finely detailed loose furniture, art & eclectic accessories is then introduced to create an emotive sense of luxury & well being.`,
      details: [
        "- Premium residential development",
        "- Landscaped surroundings",
        "- Modern amenities",
        "- Exclusive location",
      ],
    },
    jasmine: {
      title: "JASMINE VILLAS",
      location: "Ikoyi, Lagos",
      images: [Jas, Jv2, Jv3, Jv4, Jv5, Jv6, Jv7, Jv8, Jv9, Jv10, Jv11, Jv12, Jv13, Jv14],
      description:
        "These modern family villas combine minimalist design, functional spaces, and a strong connection to nature. The residences are conceived as a harmonious blend of form and function, with an emphasis on openness, light, and comfort. Featuring clean lines, large glass windows, and a thoughtful layout, the villas are designed to accommodate the needs of a growing family while maintaining a sense of sophistication and timelessness",
      details: [
        "VILLA 1",
        "- Double height living area which features a cluster of ring suspension lighting",
        "- The elevator shaft is a rough textured volume which runs through the four(4) levels of the home, revealing presence on every floor.",
        "VILLA 2",
        "- Elevated beautifully lit open plan living experience.",
        "- The use of soft organic forms throughout the home is used to convey a sense of comfort and relaxation.",
        "A neutral aesthetic with slight pops of rich color serves to enliven the schemes while maintaining a sense of calm and serenity.",
      ],
    },
    ark: {
      title: "THE ARK",
      location: "Lekki, Lagos",
      images: [Ark, Ark2, Ark3, Ark4, Ark5, Ark6, Ark7, Ark8, Ark9],
      description:
        "This modern development is situated in the upmarket Lekki neighborhood of Lagos. The design delivers a sense of ‘savoir vivre’ - the ability to live elegantly.The scheme comprises four triplexes and two penthouse apartments. Each unit is beautifully lit and rigorously designed to convey a minimalistic version of contemporary elegance.",
      details: [
        "- Comprises four(4) triplexes and two(2) penthouses",
        "- Living areas spill onto expansive perimeter loggia, for entertainment and enjoyment of the tropical seasons",
        "- 2 penthouses are perched above, with loggias stretching the width of the units and crowned with a cantilevered deck above.",
        "- Living areas are elevated via a sculptural staircase which runs through the triplexes.",
      ],
    },
    landbridge: {
      title: "LANDBRIDGE TOWER",
      location: "Oniru, Lagos",
      images: [landbridge, landbridge2, landbridge3, landbridge4, landbridge5, landbridge6, landbridge7, landbridge8, landbridge9, landbridge10, landbridge11],
      description:
        "Landbridge Tower is an Architectural phenomenon where modern architecture fuses with enduring grandeur. It transcends the norms and meets today's contemporary and sustainable fundamentals that makes it a living environment of first choice within one of Lagos's highbrow neighborhoods.",
      details: [
        "Contemporary architectural design",
        "Premium finishes",
        "Landscaped surroundings",
        "Exclusive location",
      ],
    },
    patrick: {
      title: "PATRICK HARBOUR",
      location: "Parkview, Lagos",
      images: [Patrick, Patrick2],
      description:
        "This striking 4-storey modern home embodies cutting-edge design and architectural innovation. It seamlessly blends form and function, using clean lines, expansive glass panels, and a thoughtful balance of natural materials to create an open, airy, and sophisticated living environment.",
      },
    guzape: {
      title: "GUZAPE SLOPES",
      location: "Guzape, Abuja",
      images: [Guzape, Guz1, Guz2, Guz3, Guz4, Guz5],
      description:
        "The Guzape slopes redefines the concept of multi-unit dwellings on a steep slope, offering modern homes that’s as much about embracing the environment as it is about architectural expression. By respecting the site's natural features and integrating sustainable design practices, the project becomes an example of how modern architecture can adapt to and enhance the land it occupies, turning a challenging slope into a unique and harmonious living experience."
    },
    project425: {
      title: "PROJECT 425",
      location: "Lekki, Lagos",
      images: [Project425, Project4252, Project4253],
      description:
        "This modern three-story family home is designed with clean lines, open spaces, and natural materials, creating a harmonious blend of luxury and comfort. The exterior features a minimalist façade with large floor-to-ceiling windows, smooth stucco, and wood accents, giving it a warm yet contemporary look.",
    },
    lekkibeachfront: {
      title: "LEKKI BEACH FRONT",
      location: "Lekki, Lagos",
      images: [Lbf, Lbf2, Lbf3, Lbf4, Lbf5],
      description:
        `The Lekki beachfront project is an innovative residential development that strategically integrates private and communal spaces to maximize the site’s unique waterfront views despite a narrow frontage. The layout places most units perpendicular to the water, with only the corner unit at the edge directly facing the waterfront. This design creates a sense of exclusivity for the edge unit, enhancing its panoramic waterfront exposure, while providing all other residences with privacy and lateral views.

The design prioritizes a cohesive connection to the waterfront for all residents through communal amenities. A key feature is the central swimming pool and open landscaped areas, carefully positioned to offer unobstructed views of the water. This pool area acts as the heart of the site, with loungers, terraces, and open spaces where residents can enjoy expansive waterfront vistas. The generous layout of these communal areas allows everyone to share in the waterfront experience, creating a resort-like atmosphere.`
    },
    jades: {
      title: "JADE'S COURT",
      location: "Ikeja GRA, Lagos",
      images: [Jade, Jade2, Jade3],
      description:
        "The Jade’s Court project is a bold and modern terraced residential complex designed to provide a serene living environment within a bustling cityscape. With its distinctive black stucco façade, this project stands out as a sophisticated and contemporary addition to the urban fabric, exuding a sense of refined minimalism that aligns with our modern aesthetic ideals for the city of Lagos."
    }
  };

  const handleProjectClick = (projectKey, e) => {
    e.preventDefault();
    const project = projectsData[projectKey];
    // Reset the current image index when opening the modal
    setSelectedProject({
      ...project,
      currentImageIndex: 0 // Ensure we always start from the first image
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div id="fh5co-intro">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-md-pull-2">
              <h2>VISIONARY ARCHITECTURE. <br></br>MODERN CREATIONS.</h2>
            </div>
          </div>
        </div>

        <div id="fh5co-portfolio">
          <div className="row nopadding">
            <div className="col-md-6 padding-right">
              <div className="row">
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("trimnell", e)}
                  >
                    <OptimizedImage
                      src={Trim}
                      className="img-responsive"
                      alt="Trimnell Tower"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>TRIMNELL TOWER</h3>
                      <span>Victoria Island, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("shoreline", e)}
                  >
                    <OptimizedImage
                      src={Shoreline}
                      className="img-responsive"
                      alt="Azure Edge, Shoreline estate lagos"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>AZURE EDGE</h3>
                      <span>Shoreline Estate, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("integrity", e)}
                  >
                    <OptimizedImage
                      src={Integrity}
                      className="img-responsive"
                      alt="Integrity Tower Lekki"
                      loading="lazy"
                      style={{ width: "100%" }}
                    />
                    <div className="desc">
                      <h3>INTEGRITY TOWER</h3>
                      <span>Lekki, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("landbridge", e)}
                  >
                    <OptimizedImage
                      src={landbridge}
                      className="img-responsive"
                      alt="Landbridge Tower Lagos"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>LANDBRIDGE TOWER</h3>
                      <span>Oniru, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("guzape", e)}
                  >
                    <OptimizedImage
                      src={Guzape}
                      className="img-responsive"
                      alt="Guzape Project Abuja"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>GUZAPE SLOPES</h3>
                      <span>Guzape, Abuja</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("lekkibeachfront", e)}
                  >
                    <OptimizedImage
                      src={Lbf}
                      className="img-responsive"
                      alt="Lekki Beach Front Lagos"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>LEKKI BEACH FRONT</h3>
                      <span>Lekki, Lagos</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 padding-left">
              <div className="row">
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("oasis", e)}
                  >
                    <OptimizedImage
                      src={Oasis}
                      className="img-responsive"
                      alt="Oasis Villa"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>OASIS VILLA</h3>
                      <span>Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("ark", e)}
                  >
                    <OptimizedImage
                      src={Ark}
                      className="img-responsive"
                      alt="The Ark Lekki"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>THE ARK</h3>
                      <span>Lekki, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("jasmine", e)}
                  >
                    <OptimizedImage
                      src={Jas}
                      className="img-responsive"
                      alt="Jasmine Villas Ikoyi"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>JASMINE VILLAS</h3>
                      <span>Ikoyi, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("patrick", e)}
                  >
                    <OptimizedImage
                      src={Patrick}
                      className="img-responsive"
                      alt="PATRICK HARBOUR Lagos"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>PATRICK HARBOUR</h3>
                      <span>Parkview, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("project425", e)}
                  >
                    <OptimizedImage
                      src={Project425}
                      className="img-responsive"
                      alt="PROJECT425 Lagos"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>PROJECT 425</h3>
                      <span>Lekki, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("villam", e)}
                  >
                    <OptimizedImage
                      src={Vm1}
                      className="img-responsive"
                      alt="Villa M Lagos"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>VILLA M</h3>
                      <span>Cowrie Creek, Lagos</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 animate-box">
                  <a
                    href="#"
                    className="portfolio-grid"
                    onClick={(e) => handleProjectClick("jades", e)}
                  >
                    <OptimizedImage
                      src={Jade}
                      className="img-responsive"
                      alt="JADE'S COURT Lagos"
                      loading="lazy"
                    />
                    <div className="desc">
                      <h3>JADE'S COURT</h3>
                      <span>Ikeja GRA, Lagos</span>
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
