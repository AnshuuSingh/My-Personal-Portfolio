import React from "react";

function Anshu() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
        Hi, I’m <span className="text-red-500">Anshu Kumari</span> 👋
      </h1>

      <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl">
        3rd year CSE student at NIT Durgapur, passionate about building
        responsive and user-friendly web applications using React.js.
      </p>

      <p className="mt-2 text-lg text-gray-500">
        Actively seeking Frontend / SDE Internship opportunities
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/resume.pdf"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          View Resume
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-300 hover:border-gray-500 px-6 py-3 rounded-full font-semibold transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Anshu;
