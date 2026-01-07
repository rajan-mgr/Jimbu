import React from "react";
import "../styles/Content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/content.webp";
import img2 from "../assets/content2.webp";
import img3 from "../assets/content3.webp";
import img4 from "../assets/content4.webp";
import img5 from "../assets/content5.webp";
import img6 from "../assets/content6.webp";

function Content() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="content-container">
      <div className="content-title">
        <h1>Experience Tradition, Taste Authenticity</h1>
        <p>
          Jimbu Thakali is a traditional Thakali Restaurant named after
          Himalayan herb called jimbu. Thakali Khana Set (meal) is widely
          celebrated in Nepal because of its irresistible taste and variety of
          portions offered as a meal. Owner Vivek Sherchan’s family whose origin
          is Thak-Khola Village of Mustang District had an urge to introduce
          Thakali Khana to Nepalese and Tourist ever since he started working in
          hospitality.
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`slide-${idx}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Content;
