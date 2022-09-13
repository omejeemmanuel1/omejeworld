import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({duration:3000})
  }, [])
  return (
    <div name='contact' className=' overflow-hidden h-[800px] md:h-[50%] bg-[#f5f5f5] flex justify-center md:mt-0 items-center md:pt-[100px]'>
        <form   method='POST' action="https://getform.io/f/86ba8aba-d414-4508-99c3-9578ccce3e4d" className='flex flex-col w-full  mx-3 md:w-2/4'>
            <div className='pl-4 pb-8'>
                <p className='text-2xl md:text-3xl font-bold  border-b-4 border-pink-600 text-veryDarkBlue inline font-orbitron'>Contact Me</p>
                <p className='text-veryDarkBlue py-4 pl-1 md:pl-0'>Submit the form below or shoot me an email - omejeemmanuel046@yahoo</p>
            </div>
            <input data-aos="flip-right" className='bg-[#ccd6f6] shadow shadow-[#040c16] p-2' type="text" placeholder='Name' name='name' />
            <input data-aos="flip-left"className='my-4 p-2 bg-[#ccd6f6] shadow shadow-[#040c16]' type="email" placeholder='Email' name='email' />
            <textarea data-aos="flip-down"className='bg-[#ccd6f6] shadow shadow-[#040c16] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button data-aos="flip-up" className='text-gray-300 md:text-veryDarkBlue border-2 shadow-md shadow-[#040c16] bg-pink-600 md:bg-transparent hover:text-gray-300 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact