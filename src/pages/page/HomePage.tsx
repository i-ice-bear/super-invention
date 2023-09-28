import React from "react";
import { motion } from "framer-motion";

const HomeComponent = () => {
  return (
    <>
      <div className="wrapper">
        {/* Hero section container */}
        <section className="hero-section bg-rose-500  h-auto w-full">
          <div className="container m-auto w-90 p-24 bg-blue-500">
            <motion.h1
              className="text-6xl"
            >
              Hi, I&apos;m Obvillion
            </motion.h1>
            <h3 className="text-md">
              A sciene stream student,
              <br /> who develops web apps and design them
            </h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeComponent;
