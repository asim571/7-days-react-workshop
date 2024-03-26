import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">PMS</div>
        <div id="navbar-menu" className="nav-links">
          <ul>
            {/* Add your navigation links here */}
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
