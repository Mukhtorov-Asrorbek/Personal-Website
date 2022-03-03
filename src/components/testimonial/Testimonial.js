import React from "react";
import "./Testimonial.css";
import IMG from "../../assets/testimonal.jpg";
import IMG1 from "../../assets/testimonal1.jpg";
import IMG2 from "../../assets/testimonal2.jpg";
import IMG3 from "../../assets/testimonal3.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG} alt="Avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium illum aperiam iusto molestiae ab error
            vitae? Sapiente eius facilis quos minus, quod ullam, modi vitae
            numquam cumque commodi soluta!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG1} alt="Avatar" />
          </div>
          <h5 className="client__name">Charlotte</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium illum aperiam iusto molestiae ab error
            vitae? Sapiente eius facilis quos minus, quod ullam, modi vitae
            numquam cumque commodi soluta!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG2} alt="Avatar" />
          </div>
          <h5 className="client__name">Benjamin</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium illum aperiam iusto molestiae ab error
            vitae? Sapiente eius facilis quos minus, quod ullam, modi vitae
            numquam cumque commodi soluta!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG3} alt="Avatar" />
          </div>
          <h5 className="client__name">Sophia</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium illum aperiam iusto molestiae ab error
            vitae? Sapiente eius facilis quos minus, quod ullam, modi vitae
            numquam cumque commodi soluta!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
