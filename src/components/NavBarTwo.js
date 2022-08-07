
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
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
                              'navbar bg-transparent h-[80px] fixed z-10 w-full flex justify-between items-center px-4 text-veryDarkBlue font-orbitron'}
    >
      <div className='md:mx-10 cursor-pointer'>
        <Link to='home' smooth={true} duration={500}>
        <img src={Image} alt='omejeworld' style={{ width: '100px' }} />
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex md:pr-10 md:space-x-7 cursor-pointer'>
        <li className='md:hover:border-b-4 border-pink-600'>
          <NavLink to='/' smooth={true} duration={500}>
            Home
          </NavLink>
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
            : 'overflow-x-hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center cursor-pointer'
        }
      >
        <li className='py-6 text-2xl'>
          <NavLink onClick={handleClick} to='/' smooth={true} duration={500}>
            Home
          </NavLink>
        </li>
        
        <li className='py-6 text-2xl'>
          {' '}
            <NavLink onClick={handleClick} to='/post'>
            Latest News
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
