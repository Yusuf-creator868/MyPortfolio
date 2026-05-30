import React from "react";
import { Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Company Director",
    text: "One of the most talented developers I've worked with. Yusuf consistently delivered high-quality solutions and exceeded expectations.",
  },
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    text: "Excellent communication, clean code, and outstanding attention to detail. The final product was exactly what we needed.",
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    text: "Professional, reliable and highly skilled. Yusuf transformed our idea into a modern and scalable application.",
  },
  {
    name: "David Wilson",
    role: "Business Owner",
    text: "Fast delivery and exceptional quality. The project significantly improved our online presence and user experience.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto py-32 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 w-[350px] h-[350px] bg-blue-500/10 blur-[160px] rounded-full"></div>
        <div className="absolute right-0 bottom-20 w-[350px] h-[350px] bg-cyan-500/10 blur-[160px] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-14">

        <div>
          <h1 className="text-5xl md:text-6xl font-black">
            Client{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            What clients and collaborators say about working with me.
          </p>
        </div>

        <button className="group flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all">
          Become My Next Client

          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition"
          />
        </button>

      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

        {testimonials.map((item, index) => (

          <div
            key={index}
            className="group relative shrink-0 w-[380px] rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute top-0 left-0 w-60 h-60 bg-blue-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="p-8 relative">

              {/* Badge */}
              <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-6">
                Verified Client
              </div>

              <Quote
                size={40}
                className="text-blue-500 mb-6"
              />

              <p className="text-gray-300 leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-16">

        <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all">
          Let's Build Something Amazing Together
        </button>

      </div>

    </section>
  );
};

export default Testimonials;