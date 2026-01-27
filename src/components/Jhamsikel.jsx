import React from "react";
import "../styles/Locations2.css";
import Jhamsikellocation from "../assets/location3.webp";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Jhamsikel() {
  return (
    <div className="location2-container">
      <div className="location2-content">
        <div className="location2-img">
          <img src={Jhamsikellocation} alt="Jhamsikhel Branch" />
        </div>
        <div className="location2-descrp">
          <h1>Jimbu Thakali, Jhamsikhel Branch</h1>
          <div className="location2-icons">
            <a>
              <FaMapMarkerAlt />
              <span>Jhamsikhel, Kathmandu</span>
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

export default Jhamsikel;
