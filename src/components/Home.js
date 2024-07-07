import React from 'react'
import home from '../img/homepage.png'

import Typed from 'react-typed'
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp, FaStackOverflow } from 'react-icons/fa'
import { FaMedium } from "react-icons/fa6";



const Home = () => {
  return (
    <div name='home' className='md:h-screen lg:w-[1200px] items-center  md:grid grid-cols-2 h:screen md:768px mx-auto  justify-between'>
      <div className='flex flex-col text-xs font-semibold text-gray-300 grid-span-3'>
        <h1 className='pt-20 text-4xl text-center md:text-6xl md:text-left lg:text-left'>Hi, I'm</h1>

        <Typed
          className='col-span-1 pt-1 text-4xl text-center md:text-6xl md:pt-4 textdiv md:text-left lg:text-left'
          strings={['Ushan Dilusha']}
          typeSpeed={150}
          backSpeed={150}
          loop='true'
        />

        <p className='pt-4 font-light text-center uppercase md:text-xl md:text-left lg:text-left'>Full-Stack Developer</p>


        <div className='py-8'>
          <ul className='flex justify-center gap-6 lg:justify-start md:justify-start'>
            <li>
              <a href="https://www.linkedin.com/in/ushan-dilusha-492b1519b/" target={"_blank"} rel="noreferrer">
                <FaLinkedin size={'30'} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Ushan-Dilusha" target={"_blank"} rel="noreferrer">
                <FaGithub size={'30'} />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@ushandilusha" target={"_blank"} rel="noreferrer">
                <FaMedium size={'30'} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ushan.dilusha.10" target={"_blank"} rel="noreferrer">
                <FaFacebook size={'30'} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/94719788669" target={"_blank"} rel="noreferrer">
                <FaWhatsapp size={'30'} />
              </a>
            </li>
            <li>
              <a href="https://meta.stackoverflow.com/users/20942289/ushan-dilusha" target={"_blank"} rel="noreferrer">
                <FaStackOverflow size={'30'} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center col-span-1'>
        <img src={home} alt="HomePng" style={{ width: '700px'}} />
      </div>
    </div>

  )
}

export default Home