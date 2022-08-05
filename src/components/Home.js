import React from 'react'
import Image from '../assets/me1.png';
import Typewriter from 'typewriter-effect';
import { HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';
import '../App.css';
import Skills from './Skills';
import Contact from './Contact';
import Project from "./Project";
import About from "./About";
import NavBar from './NavBar';


const Home = () =>{
  return (
    <div>
    <NavBar />
    <section id="hero" name="home">
        <div className="mx-auto container flex flex-col-reverse  pt-10 items-center px-6 space-y-0 md:space-y-0 font-pacifico md:flex-row">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="pr-2 pb-2max-w-md pt-20 text-5xl text-center md:text-5xl md:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-gray-300">
                    Hello, I'm Emmanuel. I'm a Software engineer and a graduate of computer science.
                </h1>
                <p className="max-w-sm text-center text-sky-100 md:text-left">
                    <Typewriter onInit= {(typewriter) => {
                    typewriter.typeString("I started coding since 2018 and I have been learning to be  good in it. I'm always eager to learn new technology and work with smart minds so we can build and develop together.")
                    .start()
                    }} />
                </p>
                 <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='projects' smooth={true} duration={500}>
                View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
           </div>
           <div className="md:w-2/6 ml-8 hidden md:flex">
                <img src={Image} alt="Emmanuel" />
            </div>
        </div>
        <About />
         <Skills />
        <Project />
        <Contact />
      
    </section>
    </div>
  )
}

export default Home



