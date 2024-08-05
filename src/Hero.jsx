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
            Front end Developer A motivated and enthusiastic frontend developer with a strong foundation in creating
visually appealing and user-friendly web interfaces. Equipped with a solid understanding of modern web
technologies. Proficient in HTML, CSS, and JavaScript for building the structure, styling, and interactivity of web
pages. Familiar with responsive web design principles to ensure websites are accessible and functional on various
devices, including desktops, tablets, and smartphones.
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