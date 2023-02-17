import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ backgroundColor: "#F9F9F9", padding: "20px", textAlign:"right" }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ display: "inline-block", margin: "0 20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#555", fontSize: "20px" }}>Home</Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 20px" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "#555", fontSize: "20px" }}>About</Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 20px" }}>
          <Link to="/browse" style={{ textDecoration: "none", color: "#555", fontSize: "20px" }}>Browse</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

