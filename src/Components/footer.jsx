import React from "react";
import { Github, Linkedin, Send, ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative max-w-[1400px] mx-auto px-6 py-20 mt-20">

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-12"></div>

            <div className="flex flex-col lg:flex-row justify-between gap-12">

                {/* Left */}
                <div className="max-w-md">

                    <h2 className="text-3xl font-black">
                        Yusuf
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            .Dev
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Full-stack developer building modern web applications,
                        scalable products and startup solutions.
                    </p>

                </div>

                {/* Center */}
                <div>

                    <h3 className="font-bold text-lg mb-4">
                        Navigation
                    </h3>

                    <div className="flex flex-col gap-3 text-gray-400">

                        <a href="#home" className="hover:text-white transition">
                            Home
                        </a>

                        <a href="#about" className="hover:text-white transition">
                            About
                        </a>

                        <a href="#projects" className="hover:text-white transition">
                            Projects
                        </a>

                        <a href="#contact" className="hover:text-white transition">
                            Contact
                        </a>

                    </div>

                </div>

                {/* Right */}
                <div>

                    <h3 className="font-bold text-lg mb-4">
                        Connect
                    </h3>

                    <div className="flex gap-4">

                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition"
                        >
                            <Github size={20} />
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition"
                        >
                            <Linkedin size={20} />
                        </a>

                        <a
                            href="https://t.me/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition"
                        >
                            <Send size={20} />
                        </a>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-white/10">

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Yusuf Yakubov. All rights reserved.
                </p>

                <div className="flex items-center gap-6">

                    <p className="text-gray-500 text-sm">
                        Built with React & Tailwind CSS
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition"
                    >
                        <ArrowUp size={18} />
                    </button>

                </div>

            </div>

        </footer>
    );
};

export default Footer;