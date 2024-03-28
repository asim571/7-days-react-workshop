import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="container">
        <div className="logo">Product Management System</div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <Link to="/addproduct" className="add-product-btn">Add Product</Link>
      </div>
    </nav>
  );
};

export default Navbar;
