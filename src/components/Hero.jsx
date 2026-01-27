import React from "react";
import "../styles/Hero.css";
import {Link} from "react-router-dom"
import arrow from "../assets/arrow.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Savor Traditional Thakali Delights</h1>
        <div className="hero-para">
          <p className="green-text"> 2 Million </p>
          <p className="orange-text">Thalis Served </p>
          <p className="normal-text"> and counting...</p>
        </div>
      </div>
      <div className="list">
        <ul>
          <a href="#blue"><li>Menu</li></a>
          <a href="/contact"><li>Contact</li></a>
          <a href="#blue"><li>Gallery</li></a>
        </ul>
        <div clasName="icon">
          <img src={arrow} alt="arrow-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
