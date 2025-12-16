import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <p className="text-red-500 font-semibold tracking-widest mb-4">
            FRONTEND DEVELOPER
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-red-500">Anshu Kumari</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            3rd year Computer Science student at NIT Durgapur, focused on building
            responsive, high-performance web applications using React.js and
            JavaScript. Passionate about clean UI and problem solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/14QPRat3jHJWd8W3oWru7m-zpfVmfNqsh/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold transition"
            >
              View Resume
            </a>

            <Link
              to="/projects"
              className="border border-gray-600 hover:border-white text-white px-7 py-3 rounded-full font-semibold transition"
            >
              View Projects
            </Link>
          </div>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-30"></div>
            <img
              src="forPortfolio-removebg-preview.png"
              alt="Anshu Kumari"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
