"use client"; // If using Next.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles, { layout } from "../styles";
import { SectionTitle } from "../Components";
// import { pic1, pic2, pic3 } from "../assets";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about-section" className={`${layout.section} sm:mx-[5rem]`}>
      <SectionTitle title="Our Love Story" subtitle="Bride and Groom"/>

      <div className="flex flex-wrap gap-4  justify-center items-center p-9 sm:gap-5">
        {/* Groom */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <img src="img/about1.svg" alt="Jeudiel Maunahan" className="w-full object-cover" />
          </motion.div>
          <div className="py-9 text-rusty-brown">
            <h1 className={`${styles.scriptHeading3} ${styles.flexCenter} text-center font-bold tracking-wider`}>
              Jeudiel Maunahan
            </h1>
            <p className={`${styles.ovoParagraph} ${styles.flexCenter} text-center `}>
              masayahin, palangiti at simpleng manamit
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
            className="sm:mb-[5rem]"
          >
            <img src="img/about2.svg" alt="Center Image" className="w-full object-cover" />
          </motion.div>
        </div>

        {/* Bride */}
        <div className="flex flex-col-reverse sm:flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.4 }}
          >
            <img src="img/about3.svg"alt="Alma Perez" className="w-full object-cover" />
          </motion.div>
          <div className="py-9 text-rusty-brown">
            <h1 className={`${styles.scriptHeading3} ${styles.flexCenter} text-center font-bold tracking-wider`}>
              Alma Perez
            </h1>
            <p className={`${styles.ovoParagraph} ${styles.flexCenter} text-center`}>
              laging kalmado, maaalalahanin at mapagbigay
            </p>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default About;
