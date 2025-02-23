import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-6 md:pt-[4rem]">
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-rusty-brown font-script">
        {title}
      </h1>
      <h2 className="text-sm sm:text-base md:text-xl text-rusty-brown mt-2 font-ovo">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
