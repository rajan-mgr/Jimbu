import React from "react";
import "../styles/Locations2.css";
import NewBaneshWorLocation from "../assets/location2.webp";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Newbaneshwor() {
  return (
    <div className="location2-container">
      <div className="location2-content">
        <div className="location2-img">
          <img src={NewBaneshWorLocation} alt="New Baneshwor Branch" />
        </div>
        <div className="location2-descrp">
          <h1>Jimbu Thakali, <br/>New Baneshwor Branch</h1>
          <div className="location2-icons">
            <a>
              <FaMapMarkerAlt />
              <span>New Baneshwor, Kathmandu</span>
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

export default Newbaneshwor;
