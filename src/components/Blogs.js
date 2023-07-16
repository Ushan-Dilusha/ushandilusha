import React from 'react'
import SingleProject from './SingleProject'
import mern from "../img/mern.jpg"
import php from "../img/htmlcss.jpg"
import app from "../img/app.jpg"


const Blogs = () => {
  return (
    <div name = 'blogs' >
      <div className='lg:h-screen w-full bg-[#13171c]'>
        <h1 className='pt-20  text-3xl text-center  lg:pt-15 lg:text-4xl  font-bold textdiv lg:leading-[1.5em] mb-5'>Projects</h1>
        <div className='flex flex-col lg:flex-row  cursor-pointer p-4 lg:w-[1200px] gap-8 w-auto lg:mx-auto lg:justify-between'>
          <SingleProject
            topic = "Hotel Gayana - MERN Project"
            desc = "To carry out our ITP project this semester, we undertook to create software system for a hotel management system for the Hotel Gayana which is situated in Tangalle as our client. Hotel Gayana is a banquet hotel, and it is specifically made for room reservations with a high standard of service to the customers."
            image = {mern}
            url = "https://github.com/Ushan-Dilusha/Hotel-Gayana-Hotel-Mangement-System"
          />
          <SingleProject
               topic = "ABC Travels - HTML CSS PHP SQL"
               desc = "ABC Travels is a travel agency system developed using HTML, CSS, PHP, and SQL. It allows customers to browse and book travel services like flights, hotels, car rentals, and tour packages. The system offers a user-friendly interface and secure online reservations. It utilizes a database management system (SQL) for storing and retrieving customer data and booking details."     
               image = {php}
               url = "https://github.com/Ushan-Dilusha/Traveling-mangement-System"
          />
          <SingleProject
              topic = "HelpMate - Android Kotlin FireBase"
              desc = "Our mobile application is a donation system that has been created to allow people to easily support those in need. We understand that many people want to help but may not know how to or have the time to do so. That is why we have developed an easy-to-use platform that enables you to feed a family and send a gift with just a few clicks. "     
              image = {app}
              url = "https://github.com/Ushan-Dilusha/Mad-Project-HelpMate"
          />
        </div>
      </div>
      
    </div>
    
  )
}

export default Blogs

