import React from "react";
import twomillion from "../assets/twomillion.webp";
import "../styles/Million.css";

function Million() {
  return (
    <div className="content-container">
      <div className="title">
        <h1>Over 2 Million Thalis Served!</h1>
      </div>
      <div className="content">
        <div className="img">
          <img src={twomillion} alt="2 million thalis served" />
        </div>
        <div className="text">
          <div>
            <p>
              With over 2 million Thalis served, Jimbu Thakali continues to be
              the top choice for those searching for the best Thakali restaurant
              near me. Our signature Thakali Khana Set is more than just a meal
              — it’s a flavorful journey into Nepal’s rich culinary traditions.
              <br />
            </p>
          </div>
          <div>
            <p>
              Each Nepali Thakali Khana Set is prepared with care, using fresh,
              locally sourced ingredients and age-old recipes that celebrate the
              heart of Himalayan cuisine. From the first bite to the last, every
              thali tells a story of authenticity and warmth — and we’re proud
              to have shared that story over two million times.
             
            </p>
          </div>
           <div><p>And the numbers are still growing!</p></div>
        </div>
      </div>
    </div>
  );
}

export default Million;
