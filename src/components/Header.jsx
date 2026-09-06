import React from 'react';
const Header = () => {
  return (
    <header className="hero-section">
      <div className="hero-overlay">
        <div className="container text-center text-white">
          <p className="hero-kicker mb-2">🍕 PIZZERÍA ARTESANAL</p>
          <h1 className="display-3 fw-bold mb-3">¡Pizzería Mamma Mia!</h1>
          <p className="lead mx-auto mb-0">
            Las mejores pizzas artesanales, preparadas con ingredientes frescos
            y mucho amor.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;