import React from "react";

import "./Navbar.scss";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Service</a>
      </li>
      <li>
        <a href="#">Resources</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  );
}

export default Navbar;
