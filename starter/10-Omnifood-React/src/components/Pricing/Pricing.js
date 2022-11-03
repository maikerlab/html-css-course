import "./Pricing.css";

import React from "react";

export default function Pricing() {
  return (
    <section className="section-pricing">
      <div className="container center-text">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. Thats just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Order times are between 11am and 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon name="close-outline"></ion-icon>
              <span> </span>
            </li>
          </ul>
          <div className="plan-signup">
            <a href="#" className="btn btn--full mr-sm">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month. Thats just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-signup">
            <a href="#" className="btn btn--full mr-sm">
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className="container grid grid--4-cols">
        <div className="feature">Feature 1</div>
        <div className="feature">Feature 2</div>
        <div className="feature">Feature 3</div>
        <div className="feature">Feature 4</div>
      </div>
    </section>
  );
}
