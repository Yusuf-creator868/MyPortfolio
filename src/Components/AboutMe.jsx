import AOS from 'aos';
import 'aos/dist/aos.css';
import { Code, Palette, Server } from 'lucide-react';
import { TbBrandPython } from "react-icons/tb";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiPostman, SiTailwindcss, SiMysql } from "react-icons/si";
import { useEffect } from 'react';
import LogoLoop from "@/component/LogoLoop";


const AboutMe = () => {

      useEffect(() => {
            AOS.init({
                  duration: 1000, // Animation duration
                  once: false, // Animation repeats every time you scroll up/down
            });
      }, []);

      return (
            <section id="about" className="mt-20">
                  <LogoLoop
                        logos={[
                              {
                                    node: <FaReact size={80} color="#61DBFB" />,
                                    ariaLabel: "React"
                              },
                              {
                                    node: <FaJsSquare size={80} color="#F7DF1E" />,
                                    ariaLabel: "JavaScript"
                              },
                              {
                                    node: <TbBrandPython size={80} color="#3776AB" />,
                                    ariaLabel: "Python"
                              },
                              {
                                    node: <DiDjango size={80} color="#092E20" />,
                                    ariaLabel: "Django"
                              },
                              {
                                    node: <SiTailwindcss size={80} color="#38BDF8" />,
                                    ariaLabel: "Tailwind CSS"
                              },
                              {
                                    node: <SiMysql size={80} color="#00758F" />,
                                    ariaLabel: "MySQL"
                              },
                              {
                                    node: <SiPostman size={80} color="#FF6C37" />,
                                    ariaLabel: "Postman"
                              }
                        ]}
                        speed={100}
                        gap={40}
                        pauseOnHover={true}
                        scaleOnHover={true}
                  />


                  <div className="relative overflow-hidden max-w-[1400px] mx-auto my-30 px-6">

                        {/* Background Glow */}
                        <div className="absolute inset-0 -z-10">
                              <div className="absolute top-0 left-0 w-96 h-200 bg-blue-500/20 blur-[150px] rounded-full"></div>
                              <div className="absolute bottom-0 right-0 w-96 h-200 bg-cyan-500/20 blur-[150px] rounded-full"></div>
                        </div>

                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

                              {/* Skills */}
                              <div
                                    className="flex flex-col gap-6"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                              >

                                    <div className="
                group
                relative
                overflow-hidden
                flex items-center
                gap-5
                px-8
                py-6
                w-[340px]
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                hover:scale-105
                hover:border-blue-500/50
                transition-all
                duration-300
                cursor-pointer
            ">
                                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

                                          <Code className="text-blue-500 text-3xl" />

                                          <div>
                                                <h2 className="font-semibold text-lg">
                                                      Website Development
                                                </h2>
                                                <p className="text-sm text-gray-400">
                                                      React, Django & Full Stack Apps
                                                </p>
                                          </div>
                                    </div>

                                    <div className="
                group
                relative
                overflow-hidden
                flex items-center
                gap-5
                px-8
                py-6
                w-[340px]
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                hover:scale-105
                hover:border-purple-500/50
                transition-all
                duration-300
                cursor-pointer
            ">
                                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

                                          <Palette className="text-purple-500 text-3xl" />

                                          <div>
                                                <h2 className="font-semibold text-lg">
                                                      UI / UX Design
                                                </h2>
                                                <p className="text-sm text-gray-400">
                                                      Modern, responsive user experiences
                                                </p>
                                          </div>
                                    </div>

                                    <div className="
                group
                relative
                overflow-hidden
                flex items-center
                gap-5
                px-8
                py-6
                w-[340px]
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                hover:scale-105
                hover:border-cyan-500/50
                transition-all
                duration-300
                cursor-pointer
            ">
                                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

                                          <Server className="text-cyan-500 text-3xl" />

                                          <div>
                                                <h2 className="font-semibold text-lg">
                                                      Deployment
                                                </h2>
                                                <p className="text-sm text-gray-400">
                                                      VPS, Docker & Production Hosting
                                                </p>
                                          </div>
                                    </div>

                              </div>

                              {/* About */}
                              <div
                                    className="max-w-[650px] space-y-8"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                              >

                                    <h1 className="text-5xl md:text-6xl font-black leading-tight">
                                          About{" "}
                                          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                Me
                                          </span>
                                    </h1>

                                    <p className="text-gray-300 text-lg leading-relaxed">
                                          I'm a full-stack developer passionate about building scalable
                                          digital products and startups. I enjoy transforming ideas into
                                          real applications with clean architecture, modern design and
                                          excellent user experience.
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3">

                                          {[
                                                "React",
                                                "Django",
                                                "Python",
                                                "PostgreSQL",
                                                "Tailwind",
                                          ].map((tech) => (
                                                <span
                                                      key={tech}
                                                      className="
                            px-4
                            py-2
                            rounded-full
                            bg-blue-500/10
                            border
                            border-blue-500/20
                            text-blue-400
                            text-sm
                        "
                                                >
                                                      {tech}
                                                </span>
                                          ))}

                                    </div>

                                    {/* Stats */}
                                    <div className="flex flex-wrap gap-6 pt-4">

                                          <div className="
                    px-8
                    py-6
                    rounded-3xl
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    hover:scale-105
                    transition-all
                    duration-300
                ">
                                                <h2 className="text-5xl font-black text-blue-500">
                                                      20+
                                                </h2>
                                                <p className="text-gray-400 mt-2">
                                                      Completed Projects
                                                </p>
                                          </div>

                                          <div className="
                    px-8
                    py-6
                    rounded-3xl
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    hover:scale-105
                    transition-all
                    duration-300
                ">
                                                <h2 className="text-5xl font-black text-cyan-500">
                                                      3+
                                                </h2>
                                                <p className="text-gray-400 mt-2">
                                                      Years Experience
                                                </p>
                                          </div>

                                    </div>

                              </div>

                        </div>

                  </div>
            </section>
      )
}

export default AboutMe