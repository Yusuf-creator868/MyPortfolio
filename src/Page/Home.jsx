import React from "react";
// import ThemeToggle from "../Components/TheneToggle"
import StarBackGround from "../Components/StarBackGround";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import Testimonials from "../Components/Testimonials";
import Conclution from "../Components/Conclution";


const Home = () => {
      return(
            <div className="min-h-screen overflow-x-hidden">
                  {/* <ThemeToggle/> */}
                  <StarBackGround/>
                  <Navbar/>
                  <Hero/>
                  <AboutMe/>
                  <Projects/>
                  <Testimonials/>
                  <Conclution/>
            </div>
      )
}

export default Home