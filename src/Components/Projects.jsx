import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import coffee from "../assets/project1.png"
import todolist from "../assets/todolist.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

      useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration
              once: false, // Animation repeats every time you scroll up/down
            });
          }, []);

          const projects = [
            {image: coffee, url: "https://coffee-frontend-liart.vercel.app", name: "Coffee website", description: "Coffee website with user friendly interface and dashboard with authentication.", languages:[{language: "React"}, {language: "Django"}, {language: "Tailwind"} ]},
            {image: todolist, url: "https://todolistdjosefprog-frontend.vercel.app", name: "ToDoList", description: "ToDoList with add, update and delete fuctionalities", languages:[{language: "React"}, {language: "Django"}, {language: "Tailwind"}]}
          ]


      return(
            <section id="projects" className="max-w-[1400px] mx-auto mb-50">
                  <h1 className="text-4xl font-bold text-start p-4">Featured <span className="text-blue-500">Projects</span></h1>
                  <div className="flex items-center justify-between p-4">
                        <p className="text-xl font-bold">A selection of my recent work</p>
                        <div className="flex items-center gap-3 font-bold cursor-pointer"> 
                              <h1>View al on GitHub</h1>
                              <a className="font-bold "><GoArrowUpRight size={20}/></a>
                        </div>
                  </div>
                  {/* Cards */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-4 space-y-2">
                        {/* Card 1 */}
                        {projects.map((prev, key) => {
                              return (
                        <div key={key} className="flex flex-col justify-center bg-gradient-to-br from-[#0f1220] to-[#14182b] rounded-xl" data-aos="fade-right">
                              <a href={prev.url} className="max-w-[700px] rounded-t-xl items-center">
                                    <img className="object-cover h-full w-full rounded-t-xl" src={prev.image} alt="" />
                              </a>
                              <div className="text-start p-5 space-y-4">
                                    <h1 className="text-2xl font-bold">{prev.name}</h1>
                                    <p className="text-gray-300 max-w-[900px]">{prev.description}</p>
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                          {prev.languages.map((pre, key)=> {
                                                return (
                                                            <a key={key} className="text-[#04ABCB] bg-[#122736] px-5 py-2 rounded-3xl">{pre.language}</a>

                                                )
                                          })}
                                    </div>
                              </div>
                        </div>
                              )
                        })}
                        
                  </div>
            </section>
      )
}

export default Projects