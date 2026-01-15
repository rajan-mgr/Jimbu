import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import JimbuLogo from "../assets/jimbu.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <h1>Location Near You</h1>
      </div>
      <div className="locations-2">
        <div className="location-t">
          <h1>Kalimati Branch</h1>
          <div className="address">
            <p className="p1">Kalimati,Kathmandu</p>
            <p>01-5922559 , 9801912483</p>
          </div>
        </div>
        <div className="location-t">
          <h1>New Baneshwor Branch</h1>
          <div className="address">
            <p className="p1">Min Bhawan (New Baneshwor), Kathmandu</p>
            <p>9803064988 , 01-4622423</p>
          </div>
        </div>
        <div className="location-t">
          <h1>Jhamsikhel Branch</h1>
          <div className="address">
            <p className="p1">777 Jhamsikhel Road, Patan</p>
            <p>01-5444011 , 9803052855</p>
          </div>
        </div>
        <div className="location-t">
          <h1>Tangal Branch</h1>
          <div className="address">
            <p className="p1">
              Next to Tangaal Chaata Ganesh, Gahana Pokhari <br />
              Marg, Kathmandu
            </p>
            <p>01-4537674 , 9703898597</p>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <div className="email">
          <p>Email : contact@jimbuthakali.com</p>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com">
            <FaYoutube />
          </a>
          <a href="https://www.tiktok.com">
            <SiTiktok />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-time">
          <div className="icon">
            <img src={JimbuLogo}></img>
            <div className="topic">
              <h1>Jimbu Thakali By Capital Grill</h1>
            </div>
          </div>
          <div className="time">
            <h1>SUNDAY – SATURDAY: 10:00 am-10:00 pm</h1>
            <p>Weekdays- Last Order 9:30 PM </p>
            <p> Weekends- Last Order 10:00 PM</p>
          </div>
        </div>
        <div className="links">
          <div className="link-title">
            <h1>Site Links</h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Blogs</li>
              <li>CSR</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div className="links">
          <div className="link-title">
            <h1>Locations</h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>Kalimati Branch</li>
              <li>New Baneshwor Branch</li>
              <li>Jhamsikhel Branch</li>
              <li>Tangal Branch</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>&copy; 2024 Jimbu Thakali. All rights reserved.</p>
        <p>Website Developed by <span>Rajan Magar</span></p>

      </div>
    </div>
  );
}

export default Footer;
