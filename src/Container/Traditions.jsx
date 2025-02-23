import React from 'react';
import styles, { layout } from '../styles';
// import { dulot, kamaybigas, sabitan, backgroundImage } from '../assets';
import { SectionTitle } from '../Components';

const Traditions = () => {
  return (
    <section 
      className={`${layout.section} text-rusty-brown bg-skin-white relative bg-cover bg-center`} 
      style={{ backgroundImage: `url(img/bg2.svg)` }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      <div className={`${styles.flexCenter} flex-col pt-9 px-9 relative z-10`}>
        <SectionTitle title="Traditions" subtitle="Honoring family, prosperity, and unity through the wedding traditions of Batangas" />
        {/* <p className={`${styles.ovoParagraph} text-center`}>Honoring family, prosperity, and unity through the wedding traditions of Batangas</p> */}
      </div>

      <div className='flex flex-wrap sm:flex-cols-3 gap-4 p-9 sm:mx-[5rem] sm:py-9 relative z-10'>
        <div className={`${styles.flexCenter} ${styles.flexCol} flex-1 gap-5`}>
          <img src="img/dulot.svg" alt="" />
          <h1 className={`${styles.scriptHeading3} font-bold tracking-wider`}>Dulot</h1>
          <p className={`${styles.ovoParagraph} px-4 mx-5 text-center`}>A tradition where a couple gives gifts to their godparents, or ninongs and ninangs, as a sign of gratitude and respect</p>
        </div>

        <div className={`${styles.flexCenter} ${styles.flexCol} flex-1 gap-5`}>
          <img src="img/kamaybigas.svg" alt="" />
          <h1 className={`${styles.scriptHeading3} font-bold tracking-wider`}>Kalamay at Bigas</h1>
          <p className={`${styles.ovoParagraph} px-4 mx-5 text-center`}>A tradition where rice is poured over the couple’s hands, symbolizing hard work, unity, and prosperity in their married life.</p>
        </div>

        <div className={`${styles.flexCenter} ${styles.flexCol} flex-1 gap-5`}>
          <img src="img/sabitan.svg" alt="" />
          <h1 className={`${styles.scriptHeading3} font-bold tracking-wider`}>Sabitan</h1>
          <p className={`${styles.ovoParagraph} px-4 mx-5 text-center`}>A tradition custom where guests pin money on the bride and groom as they dance, symbolizing blessings and financial support.</p>
        </div>
      </div>
    </section>
  );
};

export default Traditions;
