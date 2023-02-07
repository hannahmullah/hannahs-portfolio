import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.jpg';

import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#fff]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-64">
                    <h2 className="text-4xl sm:text-7xl font-bold text-[#c28688]">
                        Junior developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        An aspiring junior developer currently working on web development.
                        At present, I love to work on web application using technologies like
                        React, Tailwind, Node.js and Mongodb.
                    </p>
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0bbbc8] to-[#a9c7ab] cursor-pointer"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-full mx-auto w-2/3 md:w-98"
                    />
                </div>
            </div>
        </div >
    );
};
export default Home;