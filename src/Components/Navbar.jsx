import React, {useState, useRef, useEffect  } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import './../Button.css';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';


const Navbar = ({ theme, setTheme }) => {
  const [nav, setNav] = useState(false);
  const navbarRef = useRef(null);

  const handleClick = () => setNav(!nav);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/resume/commodline.docx';
    a.download = 'commodline.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleHref =(action) =>{
    const a = document.createElement('a');
    a.href = '/education';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }

  const toggleMode = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // document.body.className = theme;
    const appElements = document.getElementsByClassName("App");
    console.log(appElements);
     for (let i = 0; i < appElements.length; i++) {
       console.log(appElements[i]);
       appElements[i].id = theme;
     }
     if (navbarRef.current) {
       navbarRef.current.className = `fixed w-full h-[80px] flex justify-between items-center px-4 navbar ${theme}`;
     }
   }, [theme]);

  return (
    <nav ref={navbarRef} className={`navbar ${theme}`}>
    <span className="font-bold text-3xl ml-14 ">PSD
    </span>

      {/* menu */}
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className='hidden md:flex space-x-4 listate'
      >
        
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        {/* <li>
         <Link onClick={() => handleHref("education")}  smooth={true} duration={500}>
            Education
          </Link>
        </li> */}
          <li>
          <Link to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
           <Link onClick={handleDownload} smooth={true} duration={500}>
           Resume
           </Link>
        </li>
        <li>
          <span
              onClick={toggleMode}
              role="button"
              className={theme}
              tabIndex={0}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <FaSun size={30} color="black" /> : <FaMoon size={30} color="light" />}
            </span>
        </li>

      </ motion.ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='text-white py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='text-white py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' text-white py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='text-white py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <span
              onClick={toggleMode}
              role="button"
              className={theme}
              tabIndex={0}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <FaSun size={30} color="black" /> : <FaMoon size={30} color="light" />}
            </span>
        </li>
        <li className='text-white py-6 text-4xl'>
          {' '}

        </li>
       
      </ul>
 
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://in.linkedin.com/in/prasad-sangale-7128231b1'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/prasadcoop'
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
   

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
