import React from "react";
import "../css/Gallery.css";
import VillaM from "../assets/villa-m.jpg"
import Atl from "../assets/ark.png"
import Trim from "../assets/trimnell2.png"
import Integrity from "../assets/integritytower-2.jpg"
import Ark from "../assets/the-ark-2.jpg"
import Jas from "../assets/jv1.jpg"
import Christave from "../assets/ark.png"
import Image005 from "../assets/ark.png"
const projects = [
  { id: 1, name: "Shoreline Project", location: "Ajah, Lagos", image: Atl },
  { id: 2, name: "Trimnell Tower", location: "Victoria Island, Lagos", image: Trim },
  { id: 3, name: "Integrity Tower", location: "Lekki, Lagos", image: Integrity},
  { id: 4, name: "The Ark", location: "Lekki, Lagos", image: Ark },
  { id: 5, name: "Jasmine Villas", location: "Ikoyi, Lagos", image: Jas},
  { id: 6, name: "Villa M", location: "Lekki, Lagos", image: VillaM },
  { id: 7, name: "Oniru Project", location:"Oniru, Lagos", image: Christave },
  { id: 8, name: "Guzape Project", location: "Guzape, Abuja", image: Image005},
];


const GalleryItem = ({ name, location, image }) => (
    <div className="gallery-item">
      <img 
        src={image} 
        alt={name} 
        className="gallery-image"
      />
      <div className="gallery-overlay">
        <h3 className="gallery-title">{name}</h3>
        <span className="gallery-location">{location}</span>
      </div>
    </div>
  );
const Gallery = () => {
    return (
        <div className="gallery-container">
          <div className="gallery-grid">
            {projects.map((project) => (
              <GalleryItem key={project.id} {...project} />
            ))}
          </div>
        </div>
      );
};

export default Gallery;
