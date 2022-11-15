import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <a href="#cta" className="btn btn--full mr-sm">
              Start eating well
            </a>
            <a href="#how" className="btn btn--outline">
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="img/customers/customer-1.jpg" alt="Customer photo" />
                <img src="img/customers/customer-2.jpg" alt="Customer photo" />
                <img src="img/customers/customer-3.jpg" alt="Customer photo" />
                <img src="img/customers/customer-4.jpg" alt="Customer photo" />
                <img src="img/customers/customer-5.jpg" alt="Customer photo" />
                <img src="img/customers/customer-6.jpg" alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250.000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="img/hero.png"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              className="hero-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
