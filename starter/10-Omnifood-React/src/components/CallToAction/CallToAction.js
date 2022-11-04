import React from "react";
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <div className="heading-secondary">
              Get your first meal for free!
            </div>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className="cta-form" action="#" method="post">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">E-Mail Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select name="where" id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="facebook">Facebook Ad</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}
