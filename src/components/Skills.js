import React, { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Php from '../assets/php.svg';
import Bootstrap from '../assets/bootstrap.png';
import "../App.css";
import Aos from 'aos';
import "aos/dist/aos.css";


const Skills = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    }, [])
  return (
    <div  id="skills" name='skills' className='overflow-hidden w-full min-h-screen md:pt-[500px] pt-[100px]  bg-[#f5f5f5] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full  md:-mt-[400px]'>
          <div className='text-veryDarkBlue  md:-mt-0'>
              <p className='text-2xl md:text-3xl font-bold inline border-b-4 border-pink-600 font-orbitron'>My Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div data-aos="fade-right" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div data-aos="fade-right" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Node} alt="Node js icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div data-aos="fade-right" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Mongo} alt="Mongodb icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Php} alt="Php icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
            
          </div>
      </div>
    </div>
  );
};

export default Skills;
