import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ textAlign: "right" }}>
      <ul style={{ display: "inline-block" }}>
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link to="/browse">Browse</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
