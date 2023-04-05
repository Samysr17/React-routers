import React from 'react'
import wallpaper from './wallpaper.mp4'

const Projects = () => {
  return (
    <div className="w-full h-screen relative">
    <video src={wallpaper} autoPlay loop muted className="h-full w-full object-cover"></video>
    <div className=" Body space-y-6 text-white absolute w-full h-full top-0 text-center justify-center p-4 ">
    <div className="Name text-white text-5xl ml-2 flex justify-between">
              SaMRaT
        </div>
        <p className='text-white text-xl'>DSA and Projects are two of the pillars that gives strength in the carrer of software Engineering</p>
        <p className='text-white text-xl'>I will share some of my work here and keep updating as I continue to grow.....</p>
        <p className='text-white text-xl cursor-pointer'>https://yaatraas.netlify.app</p>
        <p className="text-white text-xl ">Following three projects are unresponsive ,so u need to visit it on PC</p>
        <p className='text-white text-xl'>https://microsoft-static-clone.netlify.app</p>
        <p className='text-white text-xl'>https://flipkart-static-clone.netlify.app</p>
        <p className='text-white text-xl'>https://facebooklandingpage.netlify.app</p>
        <p className='text-white text-xl'>Working on a full Stack Netflix Clone</p>
        <p className="text-white text-xl"> Will also be working on some data analytics and machine learning projects,You can also visit my projects and work by clicking below</p>
        <p className='text-white text-xl'>https://leetcode.com/SAMRAT3112/</p>
        <p className='text-white text-xl'>https://github.com/Samysr17</p>
  </div>
  </div>
  )
}

export default Projects