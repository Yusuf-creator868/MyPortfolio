import React, { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosSend } from "react-icons/io";
import axios from "axios"

const Conclution = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [status, setStatus] = useState("");

      const sendMessage = async (e) => {
            e.preventDefault()
            setStatus("Sending...");

            try{
                  const res = await axios.post("http://localhost:8000/api/contact/send/", {name, email, message});

                  setStatus("Message sent successfully!");
                  setName("");
                  setEmail("");
                  setMessage("");
                  alert("Your message sent successfully!")
            }catch(error){
                  console.error(error)
                  setStatus("Failed to send message. Try again.")
            }
      };

      useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration
              once: false, // Animation repeats every time you scroll up/down
            });
          }, []);




      return(
            <section id="contact" className="max-w-[1400px] mx-auto flex flex-col items-center justify-center md:flex-row gap-30 mb-10">
                  <div className="text-start flex flex-col max-w-[600px] p-4 space-y-10" data-aos="zoom-in-right">
                        <h1 className="text-5xl font-bold text-start">Let's Work <span className="text-blue-500">Together</span></h1>
                        <p className="max-w-[400px] text-gray-400">Have a project in mind? I'm always open to discussing new opportunities and interesting ideas.</p>

                        <div className="flex items-center gap-4">
                              <MdOutlineMail size={50} className="border-2 border-gray-800 rounded-[6px] text-blue-400 p-2 bg-gradient-to-br from-[#0f1220] to-[#14182b]"/>
                              <div>
                                    <h1 className="text-xl font-bold">Email</h1>
                                    <p className="text-gray-400">yakubovyusuf821@gmail.com</p>
                              </div>
                        </div>

                        <div className="flex items-center gap-4">
                              <CiLocationOn size={50} className="border-2 border-gray-800 rounded-[6px] text-blue-400 p-2 bg-gradient-to-br from-[#0f1220] to-[#14182b]" />
                              <div>
                                    <h1 className="text-xl font-bold">Location</h1>
                                    <p className="text-gray-400">Uzb, Tashkent</p>
                              </div>
                        </div>

                        <div className="flex items-center gap-4">
                              <FaPhoneAlt size={50} className="border-2 border-gray-800 rounded-[6px] text-blue-400 p-2 bg-gradient-to-br from-[#0f1220] to-[#14182b]" />
                              <div>
                                    <h1 className="text-xl font-bold">Phone</h1>
                                    <p className="text-gray-400">+998(99)316-20-11</p>
                              </div>
                        </div>
                  </div>

                  <div className="p-2 w-full max-w-[500px]" data-aos="zoom-in-left">
                        <form onSubmit={sendMessage} className="relative p-10 border-2 rounded-[10px] border-gray-800 bg-gradient-to-br from-[#0f1220] to-[#14182b] text-start">
                              <div className="mb-5">
                                    <label className="block text-blue-500 font-semibold mb-3">Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="John Wick" className="w-full border border-gray-800 bg-[#0f1220] rounded-[6px] px-4 py-3"/>
                              </div>

                              <div className="mb-5">
                                    <label className="block text-blue-500 font-semibold mb-3">Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="john@example.com" className="w-full border border-gray-800 bg-[#0f1220] rounded-[6px] px-4 py-3"/>
                              </div>

                              <div className="mb-5">
                                    <label className="block text-blue-500 font-semibold mb-3">Message</label>
                                    <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Tell me about your projects..." className="w-full border h-30 border-gray-800 bg-[#0f1220] rounded-[6px] px-4 py-3"/>
                              </div>

                              <button
                                    type="submit"
                                    className="w-full cursor-pointer bg-blue-900 flex items-center justify-center gap-2 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition">

                                    Send Message 
                                    <IoIosSend size={16}/>
                              </button>
                        </form>
                  </div>
            </section>
      )
}

export default Conclution