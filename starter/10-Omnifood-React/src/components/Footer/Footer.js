import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img
              src="img/omnifood-logo.png"
              alt="Omnifood Logo"
              className="logo"
            />
          </a>
          <ul className="social-links">
            <li>
              <a href="#" className="footer-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy; 2027 by Omnifood Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107 Phone:
              415-201-6370 Email: hello@omnifood.com
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <a className="footer-link" href="mailto:hello@omnifood-com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <div className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a href="#" className="footer-link">
                Create account
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Android App
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                iOS App
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a href="#" className="footer-link">
                About Omnifood
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                For Business
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Cooking partners
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a href="#" className="footer-link">
                Recipe directory
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy & Termins
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
