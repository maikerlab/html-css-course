import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="header-logo">
        <img src="img/omnifood-logo.png" alt="Omnifood Logo" className="logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#try">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
