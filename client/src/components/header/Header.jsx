import React from "react";
import Avatar from "@mui/material/Avatar";

import "./Header.scss";

function Header() {
  const createLink = (link, text) => {
    return (
      <li>
        <a href={link}>{text}</a>
      </li>
    );
  };

  return (
    <header className="header">
      <div className="header__container main-container">
        <div className="header__logo">
          <span className="header__logo-text">ratio</span>
        </div>
        <nav className="header__nav">
          <ul>
            {createLink("#", "Home")}
            {createLink("#", "About Us")}
            {createLink("#", "Service")}
            {createLink("#", "Resources")}
            {createLink("#", "Contact Us")}
          </ul>
        </nav>
        <div className="header__account">
          <button>Create Account</button>
          <Avatar
            alt="Avatar"
            src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
