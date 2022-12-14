import React, { useEffect } from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import Aos from 'aos';
import "aos/dist/aos.css";
import Image from '../assets/me.JPG';
import Resume from '../assets/My resume.pdf';

const About = () => {
   useEffect(() => {
        Aos.init({duration:3000})
    }, [])

  return (
    <div id="about" name='about' className='w-full overflow-hidden min-h-screen md:h-[500px] bg-[#0a192f]  md:pt-[150px] pt-[100px] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8  md:-mt-[200px]'>
          <div className='pb-8 pl-4'>
            <p className='text-2xl font-bold inline border-b-4 border-pink-600 font-orbitron'>
              About Me
              <img src={Image} alt="Emmanuel" className="rounded-full w-20 h-20 relative top-4 left-4 md:hidden" />
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-left text-4xl font-bold'>
              <p>Hi. I'm Emmanuel, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent applications that improves
              the lives of those around me. I specialize in creating web and mobile applications
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. I look forward to knowing you</p>  
            </div>
          </div>
          <button data-aos="flip-up" className='mt-10 justify-center text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <a href={Resume} download="My Resume.pdf">My Resume</a>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowDown className='ml-3 ' />
            </span>
            </button>
      </div>
    </div>
  );
};

export default About;
