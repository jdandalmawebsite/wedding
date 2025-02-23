"use client"; // If using Next.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gallery1, gallery2,  } from "../assets"; // Import your images
import { SectionTitle } from "../Components";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("gallery-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    document.documentElement.style.scrollBehavior = "smooth"; // Smooth scrolling
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define gallery images and their grid positions
  const images = [
    { src: gallery1, col: "col-span-2", row: "row-span-1" },
    { src: gallery2, col: "col-span-2", row: "row-span-2" },
    { src: gallery1, col: "col-span-2", row: "row-span-1" },
    { src: gallery2, col: "col-span-2", row: "row-span-2" },
    { src: gallery2, col: "col-span-2", row: "row-span-2" },
    { src: gallery2, col: "col-span-2", row: "row-span-2" },
    { src: gallery1, col: "col-span-2", row: "row-span-1" },
    { src: gallery1, col: "col-span-2", row: "row-span-1" },
  ];

  return (
    <section id="gallery-section" className="py-10 px-5 sm:px-20">
       <SectionTitle title="Our Feature Photos"  subtitle="A glimpse into our love story" />    

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
            className={`overflow-hidden rounded-lg ${img.col} ${img.row}`}
          >
            <motion.img
              src={img.src}
              alt=""
              className="w-full h-full object-cover rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
