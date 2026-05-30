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
                  duration: 1000,
                  once: false,
            });
      }, []);

      const projects = [
            {
                  image: coffee,
                  url: "https://coffee-frontend-liart.vercel.app",
                  name: "Coffee Website",
                  description:
                        "Modern coffee shop platform with responsive UI, dashboard and user-friendly experience.",
                  languages: ["React", "Django", "Tailwind"],
            },
            {
                  image: todolist,
                  url: "https://todolistdjosefprog-frontend.vercel.app",
                  name: "ToDo List",
                  description:
                        "Task management application with create, update and delete functionality.",
                  languages: ["React", "Django", "Tailwind"],
            },
            {
                  image: dolanan,
                  url: "https://todolistdjosefprog-frontend.vercel.app",
                  name: "Travel Website",
                  description:
                        "Modern travel landing page with elegant UI and smooth user experience.",
                  languages: ["React", "Django", "Tailwind"],
            },
            {
                  image: flowup,
                  url: "https://todolistdjosefprog-frontend.vercel.app",
                  name: "FlowUp",
                  description:
                        "Productivity application focused on helping users organize their day efficiently.",
                  languages: ["React", "Django", "Tailwind"],
            },
      ];

      return (
            <section
                  id="projects"
                  className="relative max-w-[1400px] mx-auto py-32 px-6"
            >
                  {/* Background Glow */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-0 left-20 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full"></div>
                        <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">

                        <div>
                              <h1 className="text-5xl md:text-6xl font-black">
                                    Featured{" "}
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                          Projects
                                    </span>
                              </h1>

                              <p className="text-gray-400 mt-4 text-lg">
                                    A selection of my recent work and products.
                              </p>
                        </div>

                        <a
                              href="https://github.com/"
                              target="_blank"
                              rel="noreferrer"
                              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all"
                        >
                              <span>View GitHub</span>

                              <GoArrowUpRight
                                    size={18}
                                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                              />
                        </a>

                  </div>

                  {/* Projects Grid */}
                  <div className="grid lg:grid-cols-2 gap-8">

                        {projects.map((project, index) => (

                              <div
                                    key={index}
                                    data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                                    className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-blue-500/40 hover:-translate-y-3 transition-all duration-500"
                              >

                                    {/* Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                                          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
                                    </div>

                                    {/* Image */}
                                    <div className="relative overflow-hidden">

                                          <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
                                          />

                                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                          <div className="absolute top-5 left-5 text-6xl font-black text-white/10">
                                                0{index + 1}
                                          </div>

                                          <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/20 backdrop-blur-xl text-blue-400 text-sm">
                                                Featured
                                          </div>

                                    </div>

                                    {/* Content */}
                                    <div className="relative p-8">

                                          <div className="flex justify-between items-start gap-4">

                                                <div>
                                                      <h2 className="text-3xl font-bold">
                                                            {project.name}
                                                      </h2>

                                                      <p className="text-gray-400 mt-4 leading-relaxed">
                                                            {project.description}
                                                      </p>
                                                </div>

                                                <a
                                                      href={project.url}
                                                      target="_blank"
                                                      rel="noreferrer"
                                                      className="p-4 rounded-full bg-blue-500/10 hover:bg-blue-500/20 hover:rotate-45 transition-all duration-300"
                                                >
                                                      <GoArrowUpRight size={22} />
                                                </a>

                                          </div>

                                          {/* Tech Stack */}
                                          <div className="flex flex-wrap gap-3 mt-8">

                                                {project.languages.map((lang, idx) => (

                                                      <span
                                                            key={idx}
                                                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-blue-500/30 hover:text-blue-400 transition"
                                                      >
                                                            {lang}
                                                      </span>

                                                ))}

                                          </div>

                                          {/* Buttons */}
                                          <div className="flex gap-4 mt-8">

                                                <a
                                                      href={project.url}
                                                      target="_blank"
                                                      rel="noreferrer"
                                                      className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-medium hover:scale-105 transition"
                                                >
                                                      Live Demo

                                                      <GoArrowUpRight
                                                            size={18}
                                                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                                                      />
                                                </a>

                                                <a
                                                      href="https://github.com/"
                                                      target="_blank"
                                                      rel="noreferrer"
                                                      className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                                                >
                                                      Source Code
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