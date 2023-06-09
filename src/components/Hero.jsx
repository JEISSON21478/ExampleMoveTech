import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import {GetStarted} from './index'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            MoveTech  <br className="sm:block hidden"/> {" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Presenta: Jeisson Junco Gonzalez 
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Estudiante En especialización de Software
        </p>
      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero