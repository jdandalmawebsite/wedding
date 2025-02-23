import React from "react";
import styles from "../styles";

const Footer = () => {
  return (
    <footer id="footer" className="bg-rusty-brown text-white text-center py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`${styles.ovoHeading3} text-xl font-bold tracking-wide`}>JD & ALMA</h2>
        <p className={`${styles.ovoParagraph} text-sm opacity-80 mt-1`}>Bringing moments to life</p>
        {/* <p className="text-sm opacity-80 mt-1">Bringing moments to life</p> */}
        <hr className="border-skin-white700 my-4" />
        <p className="text-xs opacity-70 font-ovo">© 2025 JD and ALMA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
