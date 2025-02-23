import { motion } from "framer-motion";
import { FaRing, FaCameraRetro, FaGlassCheers, FaMusic, FaUtensils, FaBirthdayCake } from "react-icons/fa";
import SectionTitle from "./../Components/SectionTitle";

const timeline = [
  { time: "9:30 AM", event: "Ceremony", icon: <FaRing /> },
  { time: "11:00 PM", event: "Photos Session", icon: <FaCameraRetro /> },
  { time: "11:30 PM", event: "Short Snack", icon: <FaGlassCheers /> },
  { time: "12:00 NN", event: "Start Program", icon: <FaMusic /> },
  { time: "1:00 PM", event: "Lunch", icon: <FaUtensils /> },
  { time: "3:00 PM", event: "Socials", icon: <FaBirthdayCake /> },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, staggerChildren: 0.3 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } }
};

const ReceptionTimeline = () => {
  return (
    <motion.div 
      id="timeline"
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center bg-[#f8f5f0]  py-10 px-6"
    >
      <SectionTitle title="Wedding Timeline" subtitle="Follow along as we celebrate our big day!" />

      <motion.div 
        variants={timelineVariants} 
        className="my-9  px-9 w-full max-w-5xl font-ovo text-rusty-300"
      >
        {/* Vertical layout for small screens, horizontal layout for large screens */}
        <div className="relative flex flex-col lg:flex-row lg:justify-between border-l-2 lg:border-l-0 lg:border-t-2 border-rusty-300 pl-6 lg:pl-0 lg:pt-6">
          {timeline.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="mb-6 lg:mb-0 flex items-center gap-4 lg:flex-col lg:text-center lg:relative"
            >
              {/* Icon positioning adapts based on screen size */}
              <motion.div 
                className="absolute -left-5 lg:-top-11 lg:left-1/2 transform lg:-translate-x-1/2 bg-white text-rusty-300 p-2 rounded-full border border-gray-300"
                whileHover={{ scale: 1.2 }}
              >
                {item.icon}
              </motion.div>
              <div className="pl-3 lg:pl-0">
                <p className="text-base font-semibold">{item.time}</p>
                <p className="text-2xl text-rusty-brown font-bold">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReceptionTimeline;
