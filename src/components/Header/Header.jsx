import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-xl font-bold text-white tracking-wide"
        >
          Anshu<span className="text-red-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-tjjicaj-3EXstCCXnhnVYpv0GmwC3bm/view"
            target="_blank"
            rel="noreferrer"
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col items-center gap-6 py-6 text-gray-300">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/14QPRat3jHJWd8W3oWru7m-zpfVmfNqsh/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
