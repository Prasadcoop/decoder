import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <span className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </span>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Prasad Sangale, welcome to my world of software development! Feel free to explore.</p>
            </div>
            <div>
              <p>I am dedicated to crafting high-quality software solutions that enhance both business operations and individual experiences. Whether it's a tailored application for a small business or a comprehensive system for a large enterprise, I aim to deliver efficient, scalable, and innovative software. Imagine having a software expert at your fingertips—how would that transform your project?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
