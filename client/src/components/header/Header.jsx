import React from "react";
import Navbar from "./Navbar";
import Avatar from "@mui/material/Avatar";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container main-container">
        <div className="header__logo">ratio</div>
        <nav className="header__nav">
          <Navbar />
        </nav>
        <div className="header__account">
          <button>Create Account</button>
          <Avatar
            alt="Avatar"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
