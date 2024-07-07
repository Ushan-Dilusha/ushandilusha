import React from 'react'
import SingleProject from './SingleProject'
import project from "../img/project3.png"
import springBoot from "../img/springboot.png"

const Blogs = () => {
  return (
    <div name='blogs' >
      <div className='lg:h-screen w-full bg-[#13171c]'>
        <br />
        <br />
        <div className='flex flex-col lg:flex-row  cursor-pointer p-4 lg:w-[1200px] gap-8 w-auto lg:mx-auto lg:justify-between'>
          <SingleProject
            topic="Support Educational Programming Environment For Beginners - FrontEnd"
            desc="This study delves into the development of a web application using the MERN stack to facility and educational programming environment tailored for beginners. The focus lies on leveraging the MERN (MongoDB, Express.js, React.js, Node.js) technologies to create an interactive platform aimed at supporting novices in learning programming concepts."
            image={project}
            url="https://github.com/Ushan-Dilusha/mysticwebcraft-frontend"
          />
          <SingleProject
            topic="Support Educational Programming Environment For Beginners - BackEnd"
            desc="This study delves into the development of a web application using the MERN stack to facility and educational programming environment tailored for beginners. The focus lies on leveraging the MERN (MongoDB, Express.js, React.js, Node.js) technologies to create an interactive platform aimed at supporting novices in learning programming concepts."
            image={project}
            url="https://github.com/Ushan-Dilusha/mysticwebcraft-backend"
          />
          <SingleProject
            topic="FitConnet - Social Media Web application"
            desc="Our project focuses on developing a social networking platform tailored specifically for fitness enthusiasts, providing a space for them to connect, share experiences. Users will have the ability to follow other members, like and comment on posts. while also being able to create their own posts featuring workout routines, and dietary insights. Our platform will be accessible as a web application, ensuring security with OAuth-based authentication to protect user information."
            image={springBoot}
            url="https://github.com/Ushan-Dilusha/FitConnect"
          />
        </div>
      </div>
    </div>

  )
}

export default Blogs
