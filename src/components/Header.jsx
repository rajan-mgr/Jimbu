import React, { useState } from 'react';
import '../styles/Header.css';
import jimbu from '../assets/jimbu.svg';
import triplogo from '../assets/trip-logo.svg';

function Header() {
  const [hamopen, setHamopen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`nav-overlay ${hamopen ? 'active' : ''}`}
        onClick={() => setHamopen(false)}
      ></div>

      <header className="header-container">
        {/* Left: Hamburger + Nav */}
        <div className="left">
          <button
            className={`hamburger ${hamopen ? 'active' : ''}`}
            onClick={() => setHamopen(!hamopen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${hamopen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="/gallery" >Gallery</a>
            <a href="/blogs" >Blogs</a>
            <a href="/csr" >CSR</a>
            <a href="/contact" >Contact Us</a>
            <a href="/terms" >Terms and Conditions</a>
            <a href="/locations" >Locations</a>
          </nav>
        </div>

        {/* Center: Logos */}
        <div className="center">
          <img src={jimbu} alt="Jimbu Logo" className="jimbu-logo" />
          <span> | </span>
          <img src={triplogo} alt="Trip Logo" className="trip-logo" />
        </div>

        {/* Right: Dropdown + Book */}
        <div className="right">
          <div className="dropdown-container">
            <button className="dropdown-btn" onClick={() => setOpen(!open)}>
              Locations ▼
            </button>
            <ul className={`dropdown-menu ${open ? 'open' : ''}`}>
              <li><a href="/kalimati">Kalimati Branch</a></li>
              <li><a href="/newbaneshwor">New Baneshwor Branch</a></li>
              <li><a href="/jhamsikhel">Jhamsikhel Branch</a></li>
              <li><a href="/tangal">Tangal Branch</a></li>
            </ul>
          </div>
          <button className="book">Book a Table</button>
        </div>
      </header>
    </>
  );
}

export default Header;