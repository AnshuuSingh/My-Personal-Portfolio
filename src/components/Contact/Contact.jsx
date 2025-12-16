import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg grid md:grid-cols-2 overflow-hidden">
        
        {/* Left Info */}
        <div className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Open to internship opportunities and collaborations.
          </p>

          <p className="text-gray-700 mb-3">
            📍 NIT Durgapur, West Bengal
          </p>
          <p className="text-gray-700 mb-3">
            📞 +91 9389966470
          </p>
          <p className="text-gray-700">
            ✉️ anshusingh0028@gmail.com
          </p>
        </div>

        {/* Form */}
        <form className="p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-red-500"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-red-500"
          />

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
