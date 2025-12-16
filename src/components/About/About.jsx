import React from "react";

function About() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-30"></div>
              <img
                src="forPortfolio-removebg-preview.png"
                alt="Anshu Kumari"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-800"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 text-white">
            <p className="text-red-500 font-semibold tracking-widest mb-4">
              ABOUT ME
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Know <span className="text-red-500">About Me</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              I am a 3rd year Computer Science and Engineering undergraduate at
              National Institute of Technology, Durgapur. I have a strong
              interest in frontend development and problem solving, and I enjoy
              building clean, scalable web applications using modern
              technologies.
            </p>

            <p className="mt-4 text-lg text-gray-400 max-w-xl">
              I enjoy working with React.js, JavaScript, and modern CSS
              frameworks, and I actively practice Data Structures & Algorithms
              to strengthen my problem-solving skills.
            </p>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-400">
              <span className="px-3 py-1 border border-gray-700 rounded-full">
                C
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full">
                C++
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full">
                Javascript
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full">
                MySQL
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full">
                DSA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
