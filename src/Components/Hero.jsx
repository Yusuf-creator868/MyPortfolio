import React from "react";
import photo from '../assets/Mypicture.png'

const Hero = () => {
      return(
            <section id="home" className="max-w-325 flex flex-col-reverse md:flex-row items-center mt-30 mx-auto">
                  <div className="space-y-10">
                        <span className="opacity-0 animate-fade-in text-4xl md:text-6xl font-black tracking-tight">Hi, I'm</span>
                        <span className="text-blue-500 opacity-0 animate-fade-in-delay-1 text-4xl md:text-6xl font-black tracking-tight">{" "}Yusuf</span>
                        <h1 className="text-3xl font-bold mt-3 opacity-0 animate-fade-in-delay-1 ">Full-stack <span className="text-blue-500">Developer</span></h1>
                        <p className="text-xl max-w-[850px] px-7 opacity-0 animate-fade-in-delay-2 text-start">A passionate full-stack web developer building modern, 
                              scalable web applications focused on real-world solutions 
                              and impactful products.</p>
                        <div className="flex gap-4 px-7">
                              <button className="px-4 py-2 rounded-[3px] cursor-pointer border-2 bg-blue-500 hover:border-blue-500 hover:bg-transparent opacity-0 animate-fade-in-delay-3">Projects</button>
                              <button className="px-4 py-2 rounded-[3px] cursor-pointer border-2 border-blue-500 hover:bg-blue-500 hover:text-white opacity-0 animate-fade-in-delay-4">Email</button>
                        </div>
                  </div>

                  <div className="relative">
                        <img className="w-[1000px] opacity-0 animate-fade-in-delay-3" src={photo} alt="" />
                  </div>
            </section>
      )
}

export default Hero