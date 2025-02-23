import React from 'react'
import styles, { layout } from '../styles'


const Home = () => {
  return (
    <section id='home'>
        <div className="relative">
            <img src="img/bgHome.svg" alt=""  className='w-full md:h-screen object-cover'/>
            <div className='absolute bottom-[3rem] left-[2rem]  md:bottom-[12rem]  md:left-[5rem]'>
                <h1 className={`${styles.scriptHeading1} text-skin-white `}>Jd and Alma </h1>
                <p className={`${styles.ovoParagraph} text-skin-white pr-9`}>The best things in life are meant to be shared. Come and witness our wedding</p>
            <div>
            
          </div>

        </div>
        </div>

    </section>
  )
}

export default Home