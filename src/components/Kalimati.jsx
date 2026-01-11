import React from "react";
import "../styles/Locations2.css";
import Kalimatilocation from "../assets/location1.webp";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Kalimati() {
  return (
    <div className="location2-container">
      <div className="location2-content">
        <div className="location2-img">
          <img src={Kalimatilocation} alt="Kalimati Branch" />
        </div>
        <div className="location2-descrp">
          <h1>Jimbu Thakali,Kalimati Branch</h1>
          <div className="location2-icons">
            <a>
              <FaMapMarkerAlt />
              <span>Kalimati, Kathmandu</span>
            </a>
            <a>
              <FaPhoneAlt />
              <span>01-5922559 , 9801912483</span>
            </a>
            <a>
              <FaEnvelope />
              <span>contact@jimbuthakali.com</span>
            </a>
            <div className="location2-button">
          <a href="https://tour-jhamsikhel.jimbuthakali.com/"><button>Step Inside and Explore</button></a>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Kalimati;
