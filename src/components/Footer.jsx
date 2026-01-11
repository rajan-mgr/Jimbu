import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <h1>Location Near You</h1>
      </div>
      <div className="locations">
        <div className="location-t">
          <h1>Kalimati Branch</h1>
          <div className="address">
            <p>Kalimati,Kathmandu</p>
            <p>01-5922559 , 9801912483</p>
          </div>
        </div>
         <div className="location-t">
          <h1>New Baneshwor Branch</h1>
          <div className="address">
            <p>Min Bhawan (New Baneshwor), Kathmandu</p>
            <p>9803064988 , 01-4622423</p>
          </div>
        </div>
         <div className="location-t">
          <h1>Jhamsikhel Branch</h1>
          <div className="address">
            <p>777 Jhamsikhel Road, Patan</p>
            <p>01-5444011 , 9803052855</p>
          </div>
        </div>
         <div className="location-t">
          <h1>Tangal Branch</h1>
          <div className="address">
            <p>Next to Tangaal Chaata Ganesh, Gahana Pokhari <br/>Marg, Kathmandu</p>
            <p>01-4537674 , 9703898597</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
