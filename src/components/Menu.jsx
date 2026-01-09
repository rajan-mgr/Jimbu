import React from "react";
import "../styles/Menu.css";
import item1 from "../assets/menu1.webp";
import item2 from "../assets/menu2.webp";
import item3 from "../assets/menu3.webp";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-title">
        <h1>BLUE PLATE MENU</h1>
        <span>Chef's Special</span>
      </div>
      <div className="starter">
        <div className="starter-title">
          <h1>Starters</h1>
        </div>
        <div className="menu-items">
          <div className="menu-img">
            <img src={item1} alt="img"></img>
          </div>
          <div className="items-desc">
            <div>
              <h1>
                Creamy Wild Mushroom <br />
                Croquettes
              </h1>
            </div>
            <div>
              <p>
                Fresh mushroom puree, bread crumbed and deep fried served <br />
                with sweet chilli sauce.
              </p>
            </div>
            <div>
              <p1>Rs. 140</p1>
            </div>
          </div>
        </div>
        <div className="menu-items-flipped">
          <div className="menu-img">
            <img src={item2} alt="img"></img>
          </div>
          <div className="items-desc">
            <div>
              <h1>Chicken Satay Kai</h1>
            </div>
            <div>
              <p>
                Pan grilled diced skewers chicken marinated with traditional
                Thai <br />
                herbs served with peanut butter sauce
              </p>
            </div>
            <div>
              <p1>Rs. 590</p1>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-items">
        <div className="menu-img">
          <img src={item3} alt="img"></img>
        </div>
        <div className="items-desc">
          <div>
            <h1>Prawn Skewers</h1>
          </div>
          <div>
            <p>
              Grilled prawn's marinated with mustard paste and herbs served <br />with
              garlic butter sauce.
            </p>
          </div>
          <div>
            <p1>Rs. 800</p1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
