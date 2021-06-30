import React from "react";
import Navbar from "../navbar/Navbar";
import './Header.css';

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top-logo">
          <a href="/" className="header-logo">
            LOGO
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
        <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">999999999</section>
        <section className="header-bottom__email">market@gmail.com</section>
      </section>
    </section>
  );
}

export default Header;
