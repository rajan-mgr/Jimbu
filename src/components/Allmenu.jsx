import React, { useState } from "react";
import "../styles/Allmenu.css";
import { MenuItems } from "../Menu";

function Allmenu() {
  const [selectedCategory, setSelectedCategory] = useState(
    MenuItems[0]?.category || ""
  );

  const currentItems =
    MenuItems.find((cat) => cat.category === selectedCategory)?.items || [];

  return (
    <div className="menu-container">
      <div className="menu-title">
        <h1>Our Menu</h1>
      </div>
      <div className="order-btn">
        <button>Order Now</button>
      </div>

      <div className="menu-content">
        {/* Category navigation (left sidebar) */}
        <div className="menu-category">
          {MenuItems.map((cat) => (
            <button
              key={cat.category}
              className={cat.category === selectedCategory}
              onClick={() => setSelectedCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Main content area - category title + items */}
        <div className="menu-items-wrapper">
          <h2 className="current-category-title">{selectedCategory}</h2>

          <div className="menu-items">
            {currentItems.map((item) => (
              <div key={item.name} className="menu-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Rs. {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allmenu;
