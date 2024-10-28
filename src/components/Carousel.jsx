import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import Banner from "../assets/jasmine-v.jpg";
import Img2 from "../assets/ark.png";
import Img4 from "../assets/jasmine-v.jpg";

const Carousel = () => {
  const slides = [
    {
      image: Banner,
      caption: "Jasmine Villas",
      location: "Lagos",
    },
    { image: Img2, caption: "Atlantic Nominees", location: "Ajah, Lagos" },
    { image: Img4, caption: "Christ Avenue", location: "Lagos" },
  ];

  return (
    <aside id="thehero">
      <Swiper
        spaceBetween={50} // Space between slides
        slidesPerView={1} // Show one slide at a time
        pagination={{ clickable: true }} // Enable pagination dots
        loop={true} // Enable looping
        speed={1000}
        autoplay={{
          delay: 3000, // Time between slides (in milliseconds)
          disableOnInteraction: false, // Keeps autoplay running after user interactions
        }}
        modules={[Pagination, Autoplay]} // Register the pagination module
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="slider-text">
                  <p className="slide-caption">{slide.caption}</p>
                  <p>{slide.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
};

export default Carousel;
