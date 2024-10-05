import React from "react";
import { HinavIcon } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
    return (
        <div name='home' className='w-full h-screen '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 mt-4'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#9ba9d5]'>
                    Prasad Sangale
                </h1>
                <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.
                </h2>
                <p className='text-[#8892b0] py-4 text-base sm:text-lg md:text-xl max-w-[700px]'>
                I'm a full-stack developer with expertise in building Web Application systems. Currently, my focus is on crafting responsive and dynamic full-stack web applications that deliver seamless user experiences.
                </p>
                <div>
                    <button className='border-2 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-6 py-3 my-2 mx-auto'>
                        <Link to='work' smooth={true} duration={500} className="flex">
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                {/* <HinavIcon className='ml-3 ' /> */}
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
