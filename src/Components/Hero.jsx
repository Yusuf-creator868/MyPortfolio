import React from "react";
import photo from '../assets/Mypicture.png'

const Hero = () => {
      return(
            <section id="home" className="max-w-325 flex flex-col-reverse md:flex-row items-center mt-30 mx-auto mb-50">
                  <div className="space-y-10">
                        <span className="opacity-0 animate-fade-in text-4xl md:text-6xl font-black tracking-tight">Hi, I'm</span>
                        <span className="text-blue-500 opacity-0 animate-fade-in-delay-1 text-4xl md:text-6xl font-black tracking-tight">{" "}Yusuf</span>
                        <h1 className="text-3xl font-bold mt-3 opacity-0 animate-fade-in-delay-1 ">Full-stack <span className="text-blue-500">Developer |</span></h1>
                        <p className="text-xl max-w-[850px] px-7 opacity-0 animate-fade-in-delay-2 text-start">A passionate full-stack web developer building modern, 
                              scalable web applications focused on real-world solutions 
                              and impactful products.</p>
                        <div className="flex gap-4 px-7">
                              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg shadow-blue-900/30 hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300 animate-fade-in-delay-3 cursor-pointer">View Projects</button>
                              <button className="px-6 py-3 rounded-2xl border border-blue-500/30 bg-white/5 backdrop-blur-md text-blue-400 font-semibold hover:bg-blue-500/10 hover:text-white transition-all duration-300 cursor-pointer">Contact Me</button>
                        </div>
                  </div>

                  <div className="relative">
                        <img className="w-[1000px] opacity-0 animate-fade-in-delay-3 filter brightness-70" src={photo} alt="" />
                        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
            </section>
      )
}

export default Hero