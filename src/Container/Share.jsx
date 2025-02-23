import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import SectionTitle from './../Components/SectionTitle';
// import {  backgroundImage2,  qrFblive } from '../assets';
import backgroundImage2 from '/img/bg3.svg';
import qrFblive from '/img/qrLive.png';
import qrShare from '/img/qrShare.png';

const Share = () => {
  return (
    <section
      className="relative w-full sm:h-screen bg-cover bg-center flex flex-col items-center py-10 px-4"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
    >
      <div className="sm:pr-[25rem] sm:pt-[3rem]">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center mb-10"
        >
          <SectionTitle title="Share the Love:" subtitle="Watch & Capture the Moments" />
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Facebook Live Section */}
          <motion.div 
            id='share'
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5"
          >
            <motion.img 
              src={qrFblive} 
              alt="Facebook Live QR" 
              className="w-40 sm:w-48 md:w-56"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <div className="flex flex-col items-center sm:items-start text-rusty-brown">
              <h1 className={`${styles.ovoParagraph} font-bold text-lg sm:text-xl md:text-2xl`}>
                Join Us Live!
              </h1>
              <h2 className={`${styles.ovoParagraph} text-sm sm:text-base md:text-lg w-full sm:w-[18rem] tracking-wider`}>
                Can’t be there in person? Watch our wedding via Facebook Live and celebrate with us! 💕🎥✨
              </h2>
            </div>
          </motion.div>

          {/* Share Moments Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5"
          >
            <motion.img 
              src={qrShare} 
              alt="Share Moments QR" 
              className="w-40 sm:w-48 md:w-56"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <div className="flex flex-col items-center sm:items-start text-rusty-brown">
              <h1 className={`${styles.ovoParagraph} font-bold text-lg sm:text-xl md:text-2xl`}>
                Share Your Moments!
              </h1>
              <h2 className={`${styles.ovoParagraph} text-sm sm:text-base md:text-lg w-full sm:w-[18rem] tracking-wider`}>
                Share your photos with <span className="font-bold">#ALMAmakeitrealwithJD</span> or upload them to our Memory Box! 💕📸✨
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Share;
