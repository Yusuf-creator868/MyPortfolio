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
            <section id="about" className="">
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


                  <div className="flex flex-col justify-center md:flex-row items-center gap-50 max-w-[1400px] mx-auto my-50 p-4">
                        {/* Skills */}
                        <div className="flex flex-col items-center gap-10" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                              {/* website development */}
                              <div className="flex items-start gap-5 px-10 py-5 bg-gradient-to-br from-[#0f1220] to-[#14182b] rounded-[10px] w-[300px]">
                                    <Code />
                                    <h1>Website Development</h1>
                              </div>

                              {/* UI/UX design */}
                              <div className="flex items-start gap-5 px-10 py-5 bg-gradient-to-br from-[#0f1220] to-[#14182b] rounded-[10px] w-[300px]">
                                    <Palette />
                                    <h1>UI/UX Design</h1>
                              </div>

                              {/* Deployment */}
                              <div className="flex items-start justify-start gap-5 px-10 py-5 bg-gradient-to-br from-[#0f1220] to-[#14182b] rounded-[10px] w-[300px]">
                                    <Server />
                                    <h1>Deployment</h1>
                              </div>
                        </div>



                        {/* About me */}
                        <div className="text-start space-y-10" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                              <h1 className="font-bold text-5xl">About <span className="text-blue-500">me:</span></h1>
                              <p className="max-w-[600px] text-gray-300">I’m a full-stack developer with a strong interest in building scalable products and startups.
                                    I enjoy working on ideas from concept to execution, focusing on clean design, performance,
                                    and real-world impact.</p>

                              <div className="flex gap-20">
                                    <div className="space-y-2">
                                          <h1 className="text-4xl font-bold">20 <span className="text-blue-500">+</span></h1>
                                          <h2>Completed projects</h2>
                                    </div>
                                    <div className="space-y-2">
                                          <h1 className="text-4xl font-bold">3 <span className="text-blue-500">+</span></h1>
                                          <h2>Years of experince</h2>
                                    </div>
                              </div>
                        </div>

                  </div>
            </section>
      )
}

export default AboutMe