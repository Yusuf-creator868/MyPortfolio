import React from "react";
import { Quote } from 'lucide-react';

const Testimonials = () => {
      return(
            <section className="max-w-[1300px] mx-auto p-4 mb-50">
                  <div className="text-start mb-3">
                        <h1 className="text-4xl font-bold">Client <span className="text-blue-500">Stories</span></h1>
                  </div>

                  <div className="flex overflow-x-auto scroll-smooth scrolling gap-3 p-4">

                        {/* Card 1 */}
                        <div className="shrink-0 max-w-96 space-y-5 bg-gradient-to-br from-[#0f1220] to-[#14182b] px-5 py-3 rounded-xl">
                         <Quote className="text-blue-500"/>
                         <p className="italic text-start">"One of the most talented developer I've had the pleasure of working with.
                              His attention to detail and ability to solve complex problems in unmatched."                         
                         </p>
                         <div className="text-start">
                              <h1 className="text-3xl font-bold">Name</h1>
                              <h2 className="text-gray-500">Director</h2>
                         </div>
                        </div>

                        {/* Card 1 */}
                        <div className="shrink-0 max-w-96 space-y-5 bg-gradient-to-br from-[#0f1220] to-[#14182b] px-5 py-3 rounded-xl">
                         <Quote className="text-blue-500"/>
                         <p className="italic text-start">"One of the most talented developer I've had the pleasure of working with.
                              His attention to detail and ability to solve complex problems in unmatched."                         
                         </p>
                         <div className="text-start">
                              <h1 className="text-3xl font-bold">Name</h1>
                              <h2 className="text-gray-500">Director</h2>
                         </div>
                        </div>

                        {/* Card 1 */}
                        <div className="shrink-0 max-w-96 space-y-5 bg-gradient-to-br from-[#0f1220] to-[#14182b] px-5 py-3 rounded-xl">
                         <Quote className="text-blue-500"/>
                         <p className="italic text-start">"One of the most talented developer I've had the pleasure of working with.
                              His attention to detail and ability to solve complex problems in unmatched."                         
                         </p>
                         <div className="text-start">
                              <h1 className="text-3xl font-bold">Name</h1>
                              <h2 className="text-gray-500">Director</h2>
                         </div>
                        </div>
                        {/* Card 1 */}
                        <div className="shrink-0 max-w-96 space-y-5 bg-gradient-to-br from-[#0f1220] to-[#14182b] px-5 py-3 rounded-xl">
                         <Quote className="text-blue-500"/>
                         <p className="italic text-start">"One of the most talented developer I've had the pleasure of working with.
                              His attention to detail and ability to solve complex problems in unmatched."                         
                         </p>
                         <div className="text-start">
                              <h1 className="text-3xl font-bold">Name</h1>
                              <h2 className="text-gray-500">Director</h2>
                         </div>
                        </div>

                  </div>
            </section>
      )
}

export default Testimonials