import React from 'react'



const SingleProject = (props) => {

    
  return (

    
    <div className='lg:flex-row lg:w-[1200px] mx-auto rounded-lg shadow-lg shadow-[#212832] '>
        <div className='bg-white  rounded-xl '>
            <img className='rounded-lg h-[230px]' alt='imagesrc' src={props.image}/>
            
            <div className=' bg-[#161B22] p-6 flex flex-col justify-between h-[350px] text-white rounded-lg'>
                <h1 className = 'mb-3 font-bold text-2xl'>{props.topic}</h1>
                <p className='text-justify text-sm '>{props.desc}</p>
                <a href = {props.url}>
                    <button className='bg-white text-black p-2 rounded-md mt-auto w-full '><i class="fa-brands fa-github"></i> GitHub Code</button>
                </a>
               
            </div>
            
        </div>
    </div>
  )
}

export default SingleProject