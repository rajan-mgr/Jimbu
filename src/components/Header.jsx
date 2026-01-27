import React, { useState } from "react";
import "../styles/Header.css";
import jimbu from "../assets/jimbu.svg";
import triplogo from "../assets/trip-logo.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [hamOpen, setHamOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const navigate = useNavigate();

  const closeAll = () => {
    setHamOpen(false);
    setLocationOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {(hamOpen || locationOpen) && (
        <div className="nav-overlay active" onClick={closeAll}></div>
      )}

      <header className="header-container">
        {/* Left */}
        <div className="left">
          <button
            className={`hamburger ${hamOpen ? "active" : ""}`}
            onClick={() => setHamOpen(!hamOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={hamOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${hamOpen ? "open" : ""}`}>
            <Link to="/" onClick={closeAll}>
              Home
            </Link>
            <Link to="/gallery" onClick={closeAll}>
              Gallery
            </Link>
            <Link to="/blogs" onClick={closeAll}>
              Blogs
            </Link>
            <Link to="/csr" onClick={closeAll}>
              CSR
            </Link>
            <Link to="/contact" onClick={closeAll}>
              Contact Us
            </Link>
            <Link to="/terms" onClick={closeAll}>
              Terms & Conditions
            </Link>
            <Link to="/locations" onClick={closeAll}>
              Locations
            </Link>
          </nav>
        </div>

        {/* Center */}
        <div className="center">
          <Link to="/">
            <img src={jimbu} alt="Jimbu Logo" className="jimbu-logo" />
          </Link>
          <span> | </span>
          <Link to="/">
            <img src={triplogo} alt="Trip Logo" className="trip-logo" />
          </Link>
        </div>

        {/* Right */}
        <div className="right">
          <div className="dropdown-container">
            <button
              className="dropdown-btn"
              onClick={() => setLocationOpen(!locationOpen)}
              aria-haspopup="true"
              aria-expanded={locationOpen}
            >
              Locations ▼
            </button>

            <ul className={`dropdown-menu ${locationOpen ? "open" : ""}`}>
              <li>
                <Link to="/kalimati" onClick={closeAll}>
                  Kalimati Branch
                </Link>
              </li>
              <li>
                <Link to="/newbaneshwor" onClick={closeAll}>
                  New Baneshwor Branch
                </Link>
              </li>
              <li>
                <Link to="/jhamsikhel" onClick={closeAll}>
                  Jhamsikhel Branch
                </Link>
              </li>
              <li>
                <Link to="/tangal" onClick={closeAll}>
                  Tangal Branch
                </Link>
              </li>
            </ul>
          </div>

          
          <button className="book" onClick={()=> navigate('/contact')}>
            Book a Table 
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
