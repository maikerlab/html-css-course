import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Featured from "./components/Featured/Featured";
import Meals from "./components/Meals/Meals";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import React, { Component } from "react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a:link");
    allLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        // Scroll back to the top
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else if (href.startsWith("#")) {
          // Scroll to links
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("header")) {
          console.log("toggle nav-open");
          link.classList.toggle("nav-open");
        }
      });
    });
  });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Featured />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}

export default App;
