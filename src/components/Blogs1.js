import React from 'react'
import SingleProject from './SingleProject'
import php from "../img/htmlcss.jpg"
import java from "../img/java.jpg"
import java1 from "../img/java1.jpg"

const Blogs = () => {
  return (
    <div name='blogs' >
      <div className='lg:h-screen w-full bg-[#13171c]'>
        <br />
        <br />
        <div className='flex flex-col lg:flex-row  cursor-pointer p-4 lg:w-[1200px] gap-8 w-auto lg:mx-auto lg:justify-between'>
          <SingleProject
            topic="Online Flight Booking System"
            desc="The e-channeling system is an online platform that utilizes Java EE technologies to facilitate convenient and secure appointment booking.The system prioritizes security and aims to enhance the overall eChannelling experience."
            image={java}
            url="https://github.com/Ushan-Dilusha/phoenix-flight"
          />
          <SingleProject
            topic="E-Channelling"
            desc="A platform that allows doctors to advertise and promote their skills, expertise and experience, and allows patients to search for the doctor they want at their convenience."
            image={php}
            url="https://github.com/Ushan-Dilusha/Doctor-Channeling-System"
          />
          <SingleProject
            topic="E-Channelling"
            desc="A project that demonstrates Java EE technologies such as Servlets, JSP and Java beans. An online Flight booking system for a small scale airport, that covers user management, ticket management and flight management."
            image={java1}
            url="https://github.com/Ushan-Dilusha/E-Channeling"
          />
        </div>
      </div>
    </div>
  )
}

export default Blogs
