import React from "react";

function Contact() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-24 left-24 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <p className="text-red-500 font-semibold tracking-widest mb-4">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let’s <span className="text-red-500">Connect</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Open to internship opportunities and exciting
            frontend projects. Feel free to reach out!
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>📍 NIT Durgapur, West Bengal</p>
            <p>📞 +91 9389966470</p>
            <p>✉️ anshusingh0028@gmail.com</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-500"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
