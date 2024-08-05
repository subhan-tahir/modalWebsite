import React from 'react'
import helloPic from './assets/handPic.gif'
import coderVideo from "./assets/coderVideo.mp4";
import { buttons } from "./script";
const Hero = () => {
  return (
    <>
    <div className="max-w-full  flex gap-5 items-center flex-wrap-reverse md:flex-nowrap p-4 md:p-12 my-14">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex  gap-2 items-center text-xl font-[600]">
              <h1>Hello</h1>
              <img src={helloPic} alt="" className="w-6" />
              <h1>I'am</h1>
            </div>

            <div className='text-3xl sm:text-4xl font-extrabold cursor-pointer'>
              
              <h1>Muhammad Subhan</h1>
            </div>
            <div className='text-2xl sm:text-3xl font-medium'>
              
              <h1>Frontend Developer </h1>
            </div>
          </div>
          <div className="">
            <p>
              Holding a BSCS degree from NED University, I specialize in
              frontend development and am now venturing into full stack
              capabilities. I thrive on creating exceptional digital experiences
              and am open to new freelance collaborations to showcase my
              expanding expertise.
            </p>
          </div>
          <div className="flex gap-2">
          
            {buttons.map((button, index) => {
                const Icon = button.icon; // Get the icon component
                return (
                  <button key={index} className="p-[12px] border-2 border-black bg-black rounded-md text-white text-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                    <a key={index} href={button.link} target="_blank" rel="noopener noreferrer"> <Icon /> {/* Render the icon */}
                    </a> 
                  </button>  
                );
            })}
          </div>
        </div>
        <div className="flex items-center flex-1 justify-center mx-auto min-w-[270px]">
          <video src={coderVideo} autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
    
}

export default Hero