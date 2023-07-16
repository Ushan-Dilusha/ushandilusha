import React from 'react'
import {FaReact, FaJava, FaNode, FaHtml5, FaCss3} from 'react-icons/fa'
import {SiTailwindcss, SiMongodb, SiJavascript, SiPython, SiMysql, SiAdobephotoshop, SiAdobepremierepro,SiAndroidstudio,SiAdobeillustrator,SiMicrosoftexcel} from 'react-icons/si'
import { FaWordpress,FaBootstrap,FaWix,FaAws} from 'react-icons/fa'
import {TbBrandVisualStudio,TbBrandKotlin } from 'react-icons/tb'





const Skills = () => {
  return (
    <div name = 'skills' className='w-full mx-auto mb-8 '>
        <h1 className='pt-20 mb-10 text-3xl font-bold text-center lg:pt-28 lg:text-4xl textdiv'>Skills</h1>

        <div className='flex flex-wrap items-center justify-center gap-4 px-8 mt-6 lg:gap-8 lg:pt-16 '>
          
          <FaJava size={50} color='white'/>
          <SiJavascript size={50} color='white'/>
          <TbBrandKotlin size={50} color='white'/>

          <FaReact size={50} color='white'/>
          <FaNode size={50} color='white'/>
          <SiMongodb size={50} color='white'/>
          <SiTailwindcss size={50} color='white'/>
          
          <FaHtml5 size={50} color='white'/>
          <FaCss3 size={50} color='white'/>
          <FaBootstrap size={50} color='white'/>
          <SiMysql size={50} color='white'/>

          <SiPython size={50} color='white'/>

        </div>

    
        <div className='flex flex-wrap items-center justify-center gap-4 px-8 mt-1 lg:gap-8 lg:pt-6'>
          <FaAws size={50} color='white'/>
          <TbBrandVisualStudio size={50} color='white'/>
          <SiAndroidstudio size={50} color='white'/>
          <FaWordpress size={50} color='white'/>
          <FaWix size={50} color='white'/>
          <SiMicrosoftexcel size={50} color='white'/>
          <SiAdobepremierepro size={50} color='white'/>
          <SiAdobephotoshop size={50} color='white'/>
          <SiAdobeillustrator size={50} color='white'/>
          
          
          

           
        </div>
        
    </div>
  )
}

export default Skills

