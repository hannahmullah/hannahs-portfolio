import React, { useState } from 'react';
import cv from '../assets/hm-cv.pdf'

import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    // FaFacebook,
    // FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [downloadCV, setDownloadCV] = useState(false);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#a9c7ab] to-[#0bbbc8] text-white'> {/*bg-gradient-to-r from-[#0bbbc8] to-[#a9c7ab] */}
            <div>
                <h1 className=' font-thin text-2xl italic font-serif hover:scale-110 duration-500 '>HM</h1>
            </div>
            {/* menu */}
            <ul className='hidden md:flex gap-x-8 '>
                <li
                    className='hover:scale-110 duration-500'>
                    <Link to='home' smooth={true} duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                    <Link to='about' smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
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
                        : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-[#a9c7ab] to-[#0bbbc8] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <div className='flex space-x-4 mt-10'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center  bg-blue-600'>
                        {' '}
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/hannahmullah'
                        >
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#333333]'>

                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/hannahmullah'
                        >
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:hannahmullah@hotmail.co.uk'
                        >
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            onClick={() => setDownloadCV(true)}
                            href={cv}
                        >
                            <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </div>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/hannahmullah'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/hannahmullah'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:hannahmullah@hotmail.co.uk'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            onClick={() => setDownloadCV(true)}
                            href={cv}
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
};
export default Navbar;