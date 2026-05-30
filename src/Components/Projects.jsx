import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import coffee from "../assets/project1.png";
import todolist from "../assets/todolist.png";
import dolanan from "../assets/dolanan.png";
import flowup from "../assets/flowup.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
      useEffect(() => {
            AOS.init({
                  duration: 900,
                  once: true,
            });
      }, []);

      const projects = [
            {
                  image: coffee,
                  url: "https://coffee-frontend-liart.vercel.app",
                  name: "Coffee Website",
                  description: "Modern coffee shop platform with dashboard & clean UI.",
                  languages: ["React", "Django", "Tailwind"],
            },
            {
                  image: todolist,
                  url: "https://todolistdjosefprog-frontend.vercel.app",
                  name: "ToDo List",
                  description: "Task manager with CRUD functionality.",
                  languages: ["React", "Django", "Tailwind"],
            },
            {
                  image: dolanan,
                  url: "https://todolistdjosefprog-frontend.vercel.app",
                  name: "Travel Website",
                  description: "Modern travel landing page with smooth UX.",
                  languages: ["React", "Django", "Tailwind"],
            },
            {
                  image: flowup,
                  url: "https://todolistdjosefprog-frontend.vercel.app",
                  name: "FlowUp",
                  description: "Productivity app for daily task management.",
                  languages: ["React", "Django", "Tailwind"],
            },
      ];

      return (
            <section id="projects" className="max-w-[1200px] mx-auto py-20 px-4">

                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
                        <div>
                              <h1 className="text-3xl md:text-4xl font-black">
                                    Featured{" "}
                                    <span className="text-blue-400">Projects</span>
                              </h1>
                              <p className="text-gray-400 text-sm mt-2">
                                    Selected work I’ve built recently
                              </p>
                        </div>

                        <a
                              href="https://github.com/"
                              target="_blank"
                              className="text-sm flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                              GitHub <GoArrowUpRight size={16} />
                        </a>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {projects.map((project, index) => (

                              <div
                                    key={index}
                                    data-aos="fade-up"
                                    className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                              >

                                    {/* Image */}
                                    <div className="relative overflow-hidden">

                                          <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-[180px] md:h-[200px] object-cover group-hover:scale-105 transition duration-500"
                                          />

                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    </div>

                                    {/* Content */}
                                    <div className="p-4 md:p-5 space-y-3">

                                          <div className="flex justify-between items-center">

                                                <h2 className="text-lg md:text-xl font-bold">
                                                      {project.name}
                                                </h2>

                                                <a
                                                      href={project.url}
                                                      target="_blank"
                                                      className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition"
                                                >
                                                      <GoArrowUpRight size={18} />
                                                </a>

                                          </div>

                                          <p className="text-gray-400 text-sm">
                                                {project.description}
                                          </p>

                                          {/* Tech stack */}
                                          <div className="flex flex-wrap gap-2 pt-2">

                                                {project.languages.map((lang, idx) => (

                                                      <span
                                                            key={idx}
                                                            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                                                      >
                                                            {lang}
                                                      </span>

                                                ))}

                                          </div>

                                          {/* Buttons */}
                                          <div className="flex gap-3 pt-3">

                                                <a
                                                      href={project.url}
                                                      target="_blank"
                                                      className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
                                                >
                                                      Live
                                                </a>

                                                <a
                                                      href="https://github.com/"
                                                      target="_blank"
                                                      className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10"
                                                >
                                                      Code
                                                </a>

                                          </div>

                                    </div>
                              </div>

                        ))}

                  </div>

            </section>
      );
};

export default Projects;