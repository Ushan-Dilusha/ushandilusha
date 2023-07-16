import React from 'react'

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <div className='bottom-0 h-[50px] flex items-center w-full bg-black mx-auto justify-center mt-8 lg:mt-24 text-white text-sm gap-5'>
        <p className=''>Copyright &copy; {currYear}</p>
        <p>Ushan Dilusha®</p>
    </div>
  )
}

export default Footer