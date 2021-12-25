import React from "react";
import "./header.css";
import punklogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeswitchlogo from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punklogo} alt="" className="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Enter Name of a collection or User ..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeswitchlogo} alt="" />
        </div>
      </div>

      <div className="loginButton">
          <p>GET IN</p>
      </div>
    </div>
  );
};

export default Header;
