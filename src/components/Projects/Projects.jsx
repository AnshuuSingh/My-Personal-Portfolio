import React from "react";
import automobImg from "/src/assets/automob.png";
import portfolioImg from "/Portfolio.png";

const projects = [
  {
    title: "AutoMob – Mechanic",
    description:
      "A full-stack car service booking platform enabling users to explore services, book appointments, and view service reports.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/your-repo",
    image: automobImg,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A high-performance personal portfolio built with React and Vite, optimized for speed, responsiveness, and clean UI.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/your-portfolio-repo",
    image: portfolioImg,
  },
  {
    title: "JavaScript Application Suite",
    description:
      "A collection of 10+ interactive JavaScript applications including Weather App, Notes Manager, and Quote Generator.",
    tech: ["JavaScript", "APIs", "HTML", "CSS"],
    github: "https://github.com/your-js-projects",
    image: automobImg,
  },
];

function Projects() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-6">

      {/* Background Glow */}
      <div className="absolute top-24 left-16 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-16 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="text-red-500 font-semibold tracking-widest mb-4">
            PROJECTS
          </p>
          <h2 className="text-5xl font-extrabold mb-6">
            Things I’ve{" "}
            <span className="text-red-500">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects that reflect my skills in frontend
            development, problem solving, and building real-world applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500 transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-gray-600 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold text-red-400 hover:text-red-500 transition"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
