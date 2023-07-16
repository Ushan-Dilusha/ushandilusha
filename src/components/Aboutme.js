import React from 'react'
import meimg from '../img/meimg.jpeg'

const Aboutme = () => {
  return (
    <div name='aboutme' className='lg:h-screen md:h-screen w-full mx-auto  bg-[#13171c]'>
      <h1 className='pt-20 mb-6 text-3xl font-bold text-center lg:pt-28 lg:text-4xl textdiv lg:mb-6'>About me</h1>

      <div className='lg:flex justify-center text-gray-300 lg:w-[1200px] mx-auto lg:mt-0'>

        <div className='mx-auto lg:mx-0 lg:self-center'>
          <img src={meimg} className='w-64 md:w-80 lg:w-[1400px] mx-auto rounded' alt='meimage' />
        </div>

        <div className='flex flex-col justify-between lg:ml-12'>
          <h1 className='mt-4 text-2xl font-bold text-center lg:text-4xl lg:text-left lg:mt-0 lg:mb-6'>Ushan Dilusha</h1>
          <p className='p-8 text-justify lg:p-0'>Hello there! I'm a passionate and driven IT student, eagerly seeking opportunities to gain hands-on experience and contribute to meaningful projects.
            I prioritize staying up-to-date with the latest industry trends and continuously expanding my knowledge through online courses and resources. Connecting with professionals in the tech community excites me as it opens doors to potential career opportunities.
            I'm confident that my enthusiasm and dedication will lead me to rewarding experiences in the field of Full stack development. If you have any questions or need assistance, don't hesitate to reach out!
          </p>

          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2">
              <h1 class="lg:mt-8 font-bold lg:text-2xl p-8 lg:p-0 textdiv">Education</h1>
              <div class="p-8 pt-0 lg:p-0">
              <p class="mt-6 font-bold">Bsc.(Hons) in Information Technology Specializing in Data Science - SLIIT</p>
                <p>2021 - Present</p>
                <p class="mt-6 font-bold">Sivali Central College - Ratnapura</p>
                <p>2016 - 2018</p>
                <p class="font-bold">Eheliyagoda Central College - Eheliyagoda</p>
                <p>2010 - 2016</p>
                
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <h1 class="lg:mt-8 font-bold lg:text-2xl p-8 lg:p-0 textdiv">Working Experience</h1>
              <div class="p-8 pt-0 lg:p-0">
              <p class="mt-6 font-bold">BoonFair Marketplace - Operations Manager / WordPress Administrator</p>
                <p>2021 - 2022</p>
              <p class="font-bold">Trade Finance & Investments PLC - Marketing Junior Executive</p>
                <p>2019 - 2021</p>
              </div>
            </div>
          </div>

        </div>


      </div>



    </div>
  )
}

export default Aboutme