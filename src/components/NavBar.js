import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { HiArrowNarrowUp, HiHome} from 'react-icons/hi';
import '../App.css';
import Image from '../assets/omeje.png';
import { NavLink} from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } 
    else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navBar ? 'navbar bg-[#0a192f] h-[80px] fixed z-10 w-full flex justify-between items-center px-4 text-gray-300 font-orbitron' : 
                              'navbar bg-transparent h-[80px] fixed z-10 w-full flex justify-between items-center px-4 text-gray-300 font-orbitron'}
    >
      <div className='md:mx-10 cursor-pointer'>
        <Link to='home' smooth={true} duration={500}>
        <img src={Image} alt="omejeworld" style={{ width: '100px' }} />
        </Link>
      </div>

      {/* Navbar menu */}
      <ul className='hidden md:flex md:pr-10 md:space-x-7 cursor-pointer'>
        <li className='md:hover:border-b-4 border-pink-600'>
          <NavLink to='/' smooth={true} duration={500}>
            Home
          </NavLink>
        </li>
        <li className='md:hover:border-b-4 border-pink-600'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:border-b-4 border-pink-600'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='md:hover:border-b-4 border-pink-600'>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='md:hover:border-b-4 border-pink-600'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='md:hover:border-b-4 border-pink-600'>
          <NavLink to='/post'>
            Latest News
          </NavLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center cursor-pointer'
        }
      >
        <li className='py-6 text-2xl'>
          <NavLink onClick={handleClick} to='/' smooth={true} duration={500}>
            Home
          </NavLink>
        </li>
        <li className='py-6 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          {' '}
            <NavLink onClick={handleClick} to='/post'>
            Latest News
          </NavLink>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-2'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/omejeemmanuel1/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/omejeemmanuel1'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:omejeemmanuel046@yahoo.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="../assets/my resume.pdf" download>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
        <div className='lg:flex fixed flex-col top-[80%] right-0'>
         <Link to='home' smooth={true} duration={500}>
         <button className='flex text-2xl rounded-full w-[60px] h-[60px] bg-pink-600 text-white group border-2 border-[#0a192f] px-1 py-3 my-2  md:bg-transparent hover:bg-pink-600 hover:border-pink-600'>
               <HiHome />
            <span>
              <HiArrowNarrowUp />
            </span>
            </button>
          </Link>
    </div>
    </div>
  );
};

export default Navbar;
