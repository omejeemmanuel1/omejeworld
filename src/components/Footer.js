import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div  className='overflow-hidden w-full h-[130px] bg-[#304146] pt-10 md:flex justify-center text-gray-300 '>
      {/* Container */}
      <p className='text-center mb-5'>Copyright&copy; Emmanuel Omeje 2022</p>
      <div className='md:hidden flex justify-center'>
          <SocialIcon url='https://www.linkedin.com/in/omejeemmanuel1' className='mr-4 hover:scale-125 transition delay-150 duration-300 ease-in-out' target="_blank" fgColor='#fff' style={{width: 35, height: 35}} />
            <SocialIcon url='https://github.com/omejeemmanuel1' className='mr-4 hover:scale-125 transition delay-150 duration-300 ease-in-out' target="_blank" fgColor='#fff' style={{width: 35, height: 35}} />
           <SocialIcon url='https://twitter.com/code_freak1' className='mr-4 hover:scale-125 transition delay-150 duration-300 ease-in-out' target="_blank" fgColor='#fff' style={{width: 35, height: 35}} />
       </div>
 </div>
  )
};
