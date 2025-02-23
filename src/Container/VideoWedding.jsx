import { motion } from "framer-motion";

const VideoWedding = () => {
  return (
    <motion.div
      className="flex justify-center items-center  h-[250px] md:h-screen "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-full h-full p-4">
        <iframe
          src="https://drive.google.com/file/d/18YqSkbooCfW1E1-6QiRhgXNBx1TJQWhC/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          className="rounded-lg shadow-lg w-full md:h-full"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default VideoWedding;
