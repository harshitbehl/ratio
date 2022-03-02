import React from "react";
import showcaseIllustration from "../../assets/images/showcaseIllustration.svg";

import "./Showcase.scss";

function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase__container main-container">
        <div className="showcase__content-container">
          <h1>
            <span>Easiest</span> Payment Method Ever
          </h1>
          <p>Simplifying paying vendors, and getting paid by customers</p>
          <button>Get Started</button>
        </div>
        <div className="showcase__graphic-container">
          <img src={showcaseIllustration} alt="Fintech Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
