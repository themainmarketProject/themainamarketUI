import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <section className="navbar">
        <a href="/" className="navbar-item">User</a>
        <a href="/" className="navbar-item">Help</a>
        <a href="/" className="navbar-item">Cart</a>
      </section>
    );
}

export default Navbar;
