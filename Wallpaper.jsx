import React from 'react'
import wallpaper from './wallpaper.mp4'

const Wallpaper = () => {
  return (
    <div className="w-full h-screen relative">
        <video src={wallpaper} autoPlay loop muted className="h-full w-full object-cover"></video>
        <div className=" Body  flex flex-col  space-y-6 text-white absolute w-full h-full top-0 text-center justify-center p-4 ">
            <p className='text-white text-2xl'>Hi there, I am Samrat an upcoming SDE and a fullstack Developer</p>
            <a href="https://mail.google.com/mail/u/0/#inbox"><button className=" text-white flex justify-between  max-w-[700px] items-center p-1  mx-auto rounded-md  hover:bg-black hover:text-blue-500">Collaborate for projects</button></a>
      </div>
    </div>
  )
}

export default Wallpaper