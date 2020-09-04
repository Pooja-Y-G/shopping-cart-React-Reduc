import React from "react";
import {} from "react-router-dom";
import Router from "./Router";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul className="ulist">
      <li className="list">
        <NavLink className="navlist" to="/">
          Home
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="navlist" to="/cart">
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <div className="page-container">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
