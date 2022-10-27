import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="img/omnifood-logo.png" alt="Omnifood Logo" className="logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Section 1
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 2
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 3
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 4
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#">
              Section 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
