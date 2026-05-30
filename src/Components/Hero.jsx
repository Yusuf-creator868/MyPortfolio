import React from "react";
import photo from "../assets/Mypicture.png";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
      return (
            <section
                  id="home"
                  className="relative max-w-[1350px] mx-auto min-h-screen mt-[75px] flex flex-col-reverse lg:flex-row items-center justify-between px-6 overflow-hidden"
            >
                  {/* Background */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
                  </div>

                  {/* Left */}
                  <div className="max-w-[700px] space-y-8 text-center lg:text-left">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
                              🚀 Building products & startups
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
                              Hi, I'm{" "}
                              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Yusuf
                              </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-bold text-white/90">
                              Full-Stack Developer
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-[650px]">
                              I help businesses and startups build modern websites and web applications that attract customers, improve efficiency, and bring ideas to life.
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">

                              {[
                                    "React",
                                    "Django",
                                    "Python",
                                    "PostgreSQL",
                                    "Tailwind",
                              ].map((item) => (
                                    <span
                                          key={item}
                                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300"
                                    >
                                          {item}
                                    </span>
                              ))}

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-3">

                              <button className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition-all cursor-pointer flex items-center gap-2">
                                    View Projects

                                    <GoArrowUpRight
                                          size={20}
                                          className="group-hover:-translate-y-1 group-hover:translate-x-1 transition"
                                    />
                              </button>

                              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all cursor-pointer">
                                    Contact Me
                              </button>

                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">

                              <div>
                                    <h3 className="text-4xl font-black text-blue-500">20+</h3>
                                    <p className="text-gray-400">Projects</p>
                              </div>

                              <div>
                                    <h3 className="text-4xl font-black text-blue-500">3+</h3>
                                    <p className="text-gray-400">Years Experience</p>
                              </div>

                              <div>
                                    <h3 className="text-4xl font-black text-blue-500">100%</h3>
                                    <p className="text-gray-400">Passion</p>
                              </div>

                        </div>
                  </div>

                  {/* Right */}
                  <div className="relative mb-12 lg:mb-0 float">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>

                        {/* Image Card */}
                        <div className="relative p-2 rounded-[32px] bg-gradient-to-br from-blue-500/30 to-cyan-500/20">

                              <div className="rounded-[28px] overflow-hidden bg-[#0f1220] backdrop-blur-xl border border-white/10">

                                    <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>

                                    <img
                                          src={photo}
                                          alt="Yusuf"
                                          className="w-[420px] object-cover hover:scale-105 transition duration-700"
                                    />

                              </div>

                        </div>


                        {/* Floating Card */}
                        <div className="absolute -left-10 top-12 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hidden md:block">
                              <p className="text-sm text-gray-400">
                                    Stack
                              </p>

                              <h4 className="font-semibold">
                                    React + Django
                              </h4>
                        </div>

                  </div>
            </section>
      );
};

export default Hero;