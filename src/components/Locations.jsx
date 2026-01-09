import React from "react";
import Kalimati from "../assets/location1.webp";
import NewBaneshwor from "../assets/location2.webp";
import Jhamsikhel from "../assets/location3.webp";
import Tangal from "../assets/location4.webp";
import three from "../assets/360.svg";
import map from "../assets/maps-and-flags.svg";

import "../styles/Locations.css";

function Locations() {
  return (
    <div className="location-container">
      <h1>Our Branches: Taste Tradition Near You</h1>

      <div className="locations">
        <div className="location-card">
          <img src={Kalimati} alt="Kalimati Branch" />
          <div className="tandi">
            <div className="summary">
              <a href="">Kalimati Branch</a>
            </div>
            <div className="icons">
              <a href="https://tour-kalimati.jimbuthakali.com/">
                <img src={three} alt="360 View Icon" />
              </a>
              <a href="https://www.google.com/maps/place/Jimbu+Thakali+by+Capital+Grill,+Kalimati/@27.6977185,85.2966576,15z/data=!4m6!3m5!1s0x39eb19003b2f72cb:0x32c08134d0e9851!8m2!3d27.6974804!4d85.2966657!16s%2Fg%2F11w98yv8kd?entry=tts&g_ep=EgoyMDI1MDQwOS4wIPu8ASoASAFQAw%3D%3D&skid=e35304e3-729e-4123-90d7-2bbc5176e220">
                <img src={map} alt="Map Icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="location-card">
          <img src={NewBaneshwor} alt="NewBaneshwor Branch" />
          <div className="tandi">
            <div className="summary">
              <a href="">New Baneshwor</a>
            </div>
            <div className="icons">
              <a href="https://tour-kalimati.jimbuthakali.com/">
                <img src={three} alt="360 View Icon" />
              </a>
              <a href="https://www.google.com/maps/place/Jimbu+Thakali+by+Capital+Grill,+Kalimati/@27.6977185,85.2966576,15z/data=!4m6!3m5!1s0x39eb19003b2f72cb:0x32c08134d0e9851!8m2!3d27.6974804!4d85.2966657!16s%2Fg%2F11w98yv8kd?entry=tts&g_ep=EgoyMDI1MDQwOS4wIPu8ASoASAFQAw%3D%3D&skid=e35304e3-729e-4123-90d7-2bbc5176e220">
                <img src={map} alt="Map Icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="location-card">
          <img src={Jhamsikhel} alt="Jhamsikhel Branch" />
          <div className="tandi">
            <div className="summary">
              <a href="">Jhamsikel Branch</a>
            </div>
            <div className="icons">
              <a href="https://tour-kalimati.jimbuthakali.com/">
                <img src={three} alt="360 View Icon" />
              </a>
              <a href="https://www.google.com/maps/place/Jimbu+Thakali+by+Capital+Grill,+Kalimati/@27.6977185,85.2966576,15z/data=!4m6!3m5!1s0x39eb19003b2f72cb:0x32c08134d0e9851!8m2!3d27.6974804!4d85.2966657!16s%2Fg%2F11w98yv8kd?entry=tts&g_ep=EgoyMDI1MDQwOS4wIPu8ASoASAFQAw%3D%3D&skid=e35304e3-729e-4123-90d7-2bbc5176e220">
                <img src={map} alt="Map Icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="location-card">
          <img src={Tangal} alt="Tangal Branch" />
          <div className="tandi">
            <div className="summary">
              <a href="">Tangal Branch</a>
            </div>
            <div className="icons">
              <a href="https://tour-kalimati.jimbuthakali.com/">
                <img src={three} alt="360 View Icon" />
              </a>
              <a href="https://www.google.com/maps/place/Jimbu+Thakali+by+Capital+Grill,+Kalimati/@27.6977185,85.2966576,15z/data=!4m6!3m5!1s0x39eb19003b2f72cb:0x32c08134d0e9851!8m2!3d27.6974804!4d85.2966657!16s%2Fg%2F11w98yv8kd?entry=tts&g_ep=EgoyMDI1MDQwOS4wIPu8ASoASAFQAw%3D%3D&skid=e35304e3-729e-4123-90d7-2bbc5176e220">
                <img src={map} alt="Map Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Locations;
