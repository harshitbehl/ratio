import React from "react";
import showcaseIllustration from "../../assets/images/showcaseIllustration.svg";
import { motion } from "framer-motion";

import "./Showcase.scss";

function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase__container main-container">
        <div className="showcase__content-container">
          <h1>
            <motion.span
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              Easiest
            </motion.span>{" "}
            Payment Method Ever
          </h1>
          <p>Simplifying paying vendors, and getting paid by customers</p>
          <motion.button whileHover={{ scale: 1.03 }}>
            Get Started
          </motion.button>
        </div>
        <div className="showcase__graphic-container">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={showcaseIllustration}
            alt="Fintech Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
