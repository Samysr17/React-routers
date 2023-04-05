import React from 'react'
import wallpaper from './wallpaper.mp4'
import mufc_image from './mufc_image.png'
import gsw_image from './gsw_image.png'
import ferrari_png from './ferrari_png.png'
import run from './run.png'
import idea from './idea.png'
import movies from './movies.png'




const Interests = () => {
  return (
    <div className="w-full h-screen relative">
    <video src={wallpaper} autoPlay loop muted className="h-full w-full object-cover"></video>
    
    <div className=" Body space-y-6 text-white absolute w-full h-full top-0 text-center justify-center p-4 ">
    <div className="Name text-white text-5xl flex justify-between">
              SaMRaT
        </div>
        <p className='text-white text-xl'>Hi, here I will share my interests and hobbies,will keep it short :)</p>
        <p className='text-white text-xl'>Firstly I am a die-hard fan of Manchester United Football club and I also like the NBA and Golden State are close to my heart.</p>
        <div className="flex justify-between">
        <img src={mufc_image} alt="" className="h-20"></img>
        <img src={gsw_image} alt="" className="h-20"></img>
        <img src={ferrari_png} alt="" className="h-20"></img>
     </div>
        <p className='text-white text-xl'>I love formula 1 and the red cars are my favourite</p>
        <p className='text-white text-xl'>I like to keep my body fit by regularly hitting the gym and running twice a week</p>
        <p className="text-white text-xl">Always have been fond of problem solving and keep learning something new</p>
        <div className="flex justify-between">
        <img src={run} alt="" className="h-20"></img>
        <img src={idea} alt="" className="h-20"></img>
        <img src={movies} alt="" className="h-20"></img>
        
     </div>
        <p className="text-white text-xl">Movies and Music have always helped me to relax</p>
  </div>
  </div>
  )
}

export default Interests