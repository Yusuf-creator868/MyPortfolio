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

            try {
                  const res = await axios.post("http://localhost:8000/api/contact/send/", { name, email, message });

                  setStatus("Message sent successfully!");
                  setName("");
                  setEmail("");
                  setMessage("");
                  alert("Your message sent successfully!")
            } catch (error) {
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




      return (

            <section
                  id="contact"
                  className="relative max-w-[1400px] mx-auto py-32 px-6"
            >
                  {/* Background Glow */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute left-0 top-20 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full"></div>
                        <div className="absolute right-0 bottom-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Left Side */}
                        <div
                              data-aos="fade-right"
                              className="flex-1 space-y-10"
                        >

                              <div>

                                    <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
                                          Available For Freelance Work
                                    </div>

                                    <h1 className="text-5xl md:text-6xl font-black leading-tight">
                                          Let's Build Something{" "}
                                          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                Amazing
                                          </span>
                                    </h1>

                                    <p className="text-gray-400 text-lg mt-6 max-w-[550px]">
                                          Have a project idea, startup concept or business website in mind?
                                          Let's discuss how we can bring it to life.
                                    </p>

                              </div>

                              {/* Contact Cards */}

                              <div className="space-y-5">

                                    <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition">

                                          <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                                                <MdOutlineMail size={28} />
                                          </div>

                                          <div className="text-start">
                                                <h3 className="font-bold text-lg">Email</h3>
                                                <p className="text-gray-400">
                                                      yakubovyusuf821@gmail.com
                                                </p>
                                          </div>

                                    </div>

                                    <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition">

                                          <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                                                <CiLocationOn size={28} />
                                          </div>

                                          <div className="text-start">
                                                <h3 className="font-bold text-lg">Location</h3>
                                                <p className="text-gray-400">
                                                      Tashkent, Uzbekistan
                                                </p>
                                          </div>

                                    </div>

                                    <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition">

                                          <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                                                <FaPhoneAlt size={24} />
                                          </div>

                                          <div className="text-start">
                                                <h3 className="font-bold text-lg">Phone</h3>
                                                <p className="text-gray-400">
                                                      +998 99 316 20 11
                                                </p>
                                          </div>

                                    </div>

                              </div>

                        </div>

                        {/* Right Side */}
                        <div
                              data-aos="fade-left"
                              className="flex-1 w-full"
                        >

                              <form
                                    onSubmit={sendMessage}
                                    className="p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                              >

                                    <h2 className="text-3xl font-bold mb-8">
                                          Send Me a Message
                                    </h2>

                                    <div className="space-y-6">

                                          <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your Name"
                                                className="w-full px-5 py-4 rounded-2xl bg-[#0f1220]/50 border border-white/10 focus:border-blue-500 outline-none transition"
                                          />

                                          <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Your Email"
                                                className="w-full px-5 py-4 rounded-2xl bg-[#0f1220]/50 border border-white/10 focus:border-blue-500 outline-none transition"
                                          />

                                          <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Tell me about your project..."
                                                rows="6"
                                                className="w-full px-5 py-4 rounded-2xl bg-[#0f1220]/50 border border-white/10 focus:border-blue-500 outline-none resize-none transition"
                                          />

                                          <button
                                                type="submit"
                                                className="group w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-[1.02] transition"
                                          >
                                                {status ? status : "Send Message"}

                                                <IoIosSend
                                                      size={18}
                                                      className="group-hover:translate-x-1 transition"
                                                />
                                          </button>

                                    </div>

                              </form>

                        </div>

                  </div>

                  {/* Bottom CTA */}

                  <div className="mt-24 text-center">

                        <h2 className="text-3xl md:text-4xl font-black">
                              Ready to start your next project?
                        </h2>

                        <p className="text-gray-400 mt-4">
                              I'm currently available for freelance projects and startup collaborations.
                        </p>

                  </div>

            </section>
      );
}

export default Conclution