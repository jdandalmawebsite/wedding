import React, { useState, useEffect } from 'react';
import styles, { layout } from '../styles';

import { SectionTitle } from '../Components';
// import { FloatCounter } from '../Components';count

const Countdown = () => {
  const targetDate = new Date('2025-02-25T00:00:00'); // Target date: February 25, 2025
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [targetDate]);

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const totalMilliseconds = targetDate - now;

    if (totalMilliseconds <= 0) {
      return null; // Countdown is finished
    }

    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  if (timeRemaining === null) {
    return <div className={` container min-h-80  `}>
        <h1 className={`${styles.heading2} text-center `}>We're Getting Married Today!</h1>
        </div>;
  }

  return (
    <div className={` bg-skin-white px-9 sm:px-12  `}>
      <SectionTitle title="Countdown to our Big Day" subtitle="25 FEB 2025" />

    
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="relative">
        <img src="img/counter.png" alt="Image 1" className=' object-cover' />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-rusty-brown p-4">
            <h1 className={`${styles.ovoHeading1}`}>{timeRemaining.days}</h1>
            <p className={`${styles.ovoParagraph}`}>DAYS</p>
          </div>
        </div>
        <div className="relative">
        <img src="img/counter.png" alt="Image 1" className=' object-cover' />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-rusty-brown p-4">
            <h1 className={`${styles.ovoHeading1}`}>{timeRemaining.hours}</h1>
            <p className={`${styles.ovoParagraph}`}>HOURS</p>
          </div>
        </div>
        <div className="relative">
        <img src="img/counter.png" alt="Image 1" className=' object-cover' />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-rusty-brown p-4">
            <h1 className={`${styles.ovoHeading1}`}>{timeRemaining.minutes}</h1>
            <p className={`${styles.ovoParagraph}`}>MINUTES</p>
          </div>
        </div>
        <div className="relative">
        <img src="img/counter.png" alt="Image 1" className=' object-cover' />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-rusty-brown p-4">
            <h1 className={`${styles.ovoHeading1}`}>{timeRemaining.seconds}</h1>
            <p className={`${styles.ovoParagraph}`}>SECONDS</p>
          </div>
        </div>
      </div>







    <h3 className={`${styles.ovoHeading3} text-rusty-brown text-center py-4`}>#ALMAmakeitrealwithJD</h3>
      
    </div>
  );
};

export default Countdown;
