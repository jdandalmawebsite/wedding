import { motion } from "framer-motion";
import { SectionTitle } from "../Components";
import styles from "../styles";
// import { colordress, dresscode, qr1 } from "../assets";

const Details = () => {
  return (
    <motion.section
      id="details"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto p-6 bg-white rounded-2xl text-center sm:my-9 sm:mx-[15rem]"
    >
      {/* Section Title with Motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle title="Wedding Details" subtitle="A Day to Remember" />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${styles.ovoParagraph} text-rusty-brown mt-4`}
      >
        We can’t wait to celebrate with you! Here’s everything you need to know—from the ceremony to the reception—so you can relax, enjoy, and make unforgettable memories with us.
      </motion.p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-rusty-brown">
        
        {/* Church & Reception Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-4 border rounded-lg shadow-sm"
        >
          <span className={`${styles.ovoParagraph} font-semibold`}>Church Venue:</span>
          <p className={`${styles.ovoParagraph} tracking-wider pt-5`}>
            INVENCION DE LA STA. CRUZ PARISH ALITAGTAG, BATANGAS
          </p>
          <div className={`${styles.flexCenter} p-4`}>
            <img src="img/qrChurch.png" alt="Church QR Code" />
          </div>

          <span className={`${styles.ovoParagraph} font-semibold mt-5`}>Reception Venue:</span>
          <p className={`${styles.ovoParagraph} tracking-wider pt-5`}>
            VILLA SALOME, PINAGKURUSAN, ALITAGTAG BATANGAS
          </p>
          <div className={`${styles.flexCenter} p-4`}>
            <img src="img/qrReception.png" alt="Reception QR Code" />
          </div>
        </motion.div>

        {/* Dress Code Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-4 border rounded-lg shadow-sm"
        >
          <span className={`${styles.ovoParagraph} font-semibold`}>Dress Code:</span>
          <p className={`${styles.ovoParagraph} tracking-wider pt-5`}>
            We would love to see you in Barong Tagalog and Modern Filipiniana Inspired Attire.
          </p>
          <div className={`${styles.flexCenter} p-4`}>
            <img src="img/dresscode.svg" alt="Dress Code" />
          </div>
          <div className={`${styles.flexCenter} p-4`}>
            <img src="img/colordress.svg" alt="Color Dress Code" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Details;
