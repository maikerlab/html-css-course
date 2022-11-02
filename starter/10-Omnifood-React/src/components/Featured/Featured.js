import "./Featured.css";

import React from "react";

export default function Featured() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src="img/logos/techcrunch.png" alt="Techcrunch Logo" />
          <img src="img/logos/business-insider.png" alt="Techcrunch Logo" />
          <img src="img/logos/the-new-york-times.png" alt="Techcrunch Logo" />
          <img src="img/logos/forbes.png" alt="Techcrunch Logo" />
          <img src="img/logos/usa-today.png" alt="Techcrunch Logo" />
        </div>
      </div>
    </section>
  );
}
