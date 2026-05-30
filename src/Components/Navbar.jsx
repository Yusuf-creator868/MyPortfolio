import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsMobile(false);
  };

  return (
    <>
      <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]">

        <div
          className={`flex items-center justify-between px-6 py-4 rounded-3xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer text-2xl font-black"
          >
            Yusuf
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              .Dev
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                {item.name}
              </button>
            ))}

          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-medium hover:scale-105 transition"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="md:hidden p-2 rounded-xl bg-white/5"
          >
            {isMobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-3 overflow-hidden transition-all duration-300 ${
            isMobile
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl bg-[#0f1220]/95 backdrop-blur-xl border border-white/10 p-6">

            <div className="flex flex-col gap-4">

              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 rounded-xl hover:bg-white/5 transition"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-medium"
              >
                Let's Talk
              </button>

            </div>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;