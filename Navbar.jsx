import React from 'react'
import { useState } from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaGithub,FaLinkedin,FaTwitter,FaFacebook} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Wallpaper from './Wallpaper'


const Navbar = () => {
  
const[nav,setnav]=useState(false);
const handlenav=()=>{
  setnav(!nav)
};
  return (
    <div>
    <div className="flex absolute justify-between items-center w-full z-10 h-20 ">
        <div className="Name text-white text-5xl ml-2">
              SaMRaT
        </div>
        <div className='hidden md:flex cursor-pointer' >
          <ul className=" links flex text-white  ">
            <li className="p-4 hover:underline"><Link to="/">Home</Link></li>
            <li className=" p-4 hover:underline"><Link to="/About">About Me</Link></li>
            <li className="p-4 hover:underline"><Link to="/Projects">Projects & DSA</Link></li>
            <li className="p-4 hover:underline"><Link to="/Interests">Other Interests</Link></li>
          </ul>
        </div>
        <div className=' contact hidden md:flex mr-6 text-white hover:bg-black hover:text-blue-500 cursor-pointer '>
          <a href="https://mail.google.com/mail/u/0/#inbox"><buttton>Contact me</buttton></a>
        </div>
        <div onClick={handlenav} className="md:hidden mr-4 z-10">
           {nav ? <AiOutlineClose size={24} color='white'/>:<HiOutlineMenuAlt4 size={24} color='white'/>}
           
        </div>
        <div onClick={handlenav} className={nav?"left-0 top-0 absolute bg-black text-blue-500 w-full px-4 py-7 flex flex-col h-80  ml-0":"absolute left-[-100%]"}>
          <ul className="mobile space-y-4">
            <h1 className="text-5xl text-white"> SaMRaT</h1>
            <li className="hover:underline"><Link to="/">Home</Link></li>
            <li className="hover:underline"><Link to="/about">About Me</Link></li>
            <li className="hover:underline"><Link to="/projects">Projects & DSA</Link></li>
            <li className="hover:underline"><Link to="/interests">Other Interests</Link></li>
            <div className='flex justify-between pt-3'>
            <a href="https://www.linkedin.com/in/samrat-roy-58a638229/"><FaLinkedin size={24} onClick="https://www.linkedin.com/in/samrat-roy-58a638229/"/></a>
            <a href="https://leetcode.com/SAMRAT3112/" ><SiLeetcode size={24} onClick="https://leetcode.com/SAMRAT3112/"/></a>
            <a href="https://github.com/Samysr17"><FaGithub   size={24} onClick="https://github.com/Samysr17"/></a>
            <a href="https://twitter.com/SamratR02594473"><FaTwitter   size={24}/></a>
            <a href="https://www.facebook.com/profile.php?id=100052690812352"> <FaFacebook size={24}/></a>
            
            </div>
          </ul>
          
        </div>
    </div>
    <Wallpaper/>
    </div>
    
  )
}

export default Navbar