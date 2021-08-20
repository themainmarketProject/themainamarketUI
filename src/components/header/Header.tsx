import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import DropDownProduct from "../dropDownProducts";
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../images/logo2.jpeg';
import './Header.css';

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top-logo">
          <a href="/" className="header-logo">
            <img src={logo} alt="logo" style={{width: "100%", height: "130%"}} />
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <div className="search_box">
              <input placeholder="Search..."/><button className="search"><SearchIcon /></button>
            </div>
              <Navbar />
          </section>
        <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">999999999</section>
        <section className="header-bottom__email">themainmarket7@gmail.com</section>
      </section>
      <hr className="header-top__seperator2" />
      <section className="header-bottom2">
      <DropDownProduct />
      </section>
    </section>
  );
}

export default Header;
