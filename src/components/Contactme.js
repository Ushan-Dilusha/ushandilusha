import React from 'react';
import imgs from '../img/contactMain.png'
const Contactme = () => {
  return (
    <div name='contactme' className='w-full lg:h-screen'>
      <h1 className='pt-20 text-3xl font-bold text-center :plgt-28 lg:text-4xl textdiv'>Contact me</h1>
      <div className='flex flex-row pl-20'>
        {/* Left side */}
        <div className='w-1/2 p-10 m-4 text-white'>
          <div className='mt-10'>
            <h2 className='text-lg font-bold'>Contact&nbsp;Number:</h2>
            <p>
              <a href="tel:+94719788669">+94 71 978 8669</a>
              </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-lg font-bold'>Email&nbsp;Address:</h2>
            <p><a href="mailto:ushandilusha10@gmail.com">ushandilusha10@gmail.com</a> </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-lg font-bold'>Address:</h2>
            <p>No&nbsp;348/A, <br />Matuwagala, <br />Kiriella,<br />Sabaragamuwa,<br />Sri&nbsp;Lanaka,<br />70482</p>
          </div>
        </div>
        {/* Right side */}
        <div className='w-1/2 p-10'>
          <img src={imgs} alt='YourImage' className='w-full' />
        </div>
      </div>
    </div>
  );
}

export default Contactme;
