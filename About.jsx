import React from 'react'
import wallpaper from './wallpaper.mp4'
import python_image from'./python_image.png'
import java_image from'./java_image.png'
import c_image from'./c_image.png'
import cpp_image from'./cpp_image.png'
import sql_image_1 from'./sql_image_1.png'
import js_image from'./js_image.png'
import firebase_image from'./firebase_image.png'
import react_image from'./react_image.png'
import node_image from'./node_image.png'
import tailwind_image from'./tailwind_image.png'
const About = () => {
  return (
    <div>
    <div className="w-full h-screen relative">
    <video src={wallpaper} autoPlay loop muted className="h-full w-full object-cover"></video>
    <div className=" Body  space-y-6 text-white absolute w-full h-full top-0 text-center justify-center p-4 ">
    <div className="Name text-white text-3xl flex justify-between">
              SaMRaT
        </div>
        <p className='text-white text-xl'>Hi here I will share my Technology stack and Languages that I have worked on and my experiences with it</p>
        <p className="text-white text-xl">I started my programming journey from C language and web dev basics in HTML CSS and JS and Tailwind</p>
        <div className="flex justify justify-between">
        <img src={c_image} alt="" className="h-12"></img>
        <img src={js_image} alt="" className="h-12"></img>
        <img src={tailwind_image} alt="" className="h-10"></img>
        <img src={react_image} alt="" className="h-12"></img>
        <img src={cpp_image} alt="" className="h-12"></img>
        </div>    
        <p className="text-white text-xl">Then I started my problem solving in C++ and also started learning ReactJS framework.After this I explored Python for data analysis and Used libraries like matplotlib,pandas and SDKS like firebase for hosting</p>   
        <div className="flex justify-between ">
        <img src={sql_image_1} alt="" className="h-10"></img>
        <img src={python_image} alt="" className="h-12"></img>
        <img src={node_image} alt="" className="h-10"></img>
        <img src={firebase_image} alt="" className="h-12"></img>
        <img src={java_image} alt="" className="h-10"></img>
        </div>
        <p className="text-white text-xl">Currently I am learning Node JS and Django for backend. I have plans to learn the frameworks like express and next.I will also be learning JAVA for OOPS and the tensorflow library for machine learning </p>   
  </div>
  </div>
  </div>
  )
}

export default About
