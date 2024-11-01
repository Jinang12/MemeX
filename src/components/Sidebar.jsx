import React, { useState } from "react";
import { Calendar, X, Home, User, HelpCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const whiteColor = "#ffffff";

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-screen bg-neutral-900 text-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "w-64 sm:w-72" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div
            className="p-3 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all cursor-pointer"
            onClick={toggleSidebar}
          >
            {isOpen ? <X size={24} color="white" /> : <Calendar size={24} />}
          </div>
        </div>

        <nav className="flex flex-col justify-between h-full">
          <div className={`py-4 flex flex-col ${isOpen ? 'items-start' : 'items-center'}`}>
            {isOpen ? (
              <div className="flex flex-col w-full">
                <Link to="/dashboard" className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <Home size={24} color={whiteColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive" }}>Dashboard</span>
                </Link>
                <Link to="/nexus" className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <Star size={24} color={whiteColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive" }}>Nexus.<span style={{ color: '#007bff' }}>Ai</span></span>
                </Link>
                <a onClick={() => { window.location.href = 'https://jinangshah.vercel.app' }} className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <User size={24} color={whiteColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive" }}>About Me</span>
                </a>
                <Link to="/faq" className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <HelpCircle size={24} color={whiteColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive" }}>FAQ's</span>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center w-full">
                <Link to="/dashboard" className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <Home size={24} color={whiteColor} />
                </Link>
                <Link to="/nexus" className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <Star size={24} color={whiteColor} />
                </Link>
                <a onClick={() => { window.location.href = 'https://jinangshah.vercel.app' }} className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <User size={24} color={whiteColor} />
                </a>
                <Link to="/faq" className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <HelpCircle size={24} color={whiteColor} />
                </Link>
              </div>
            )}
          </div>
        </nav>

        <footer className="p-4 bg-neutral-800 flex items-center justify-center mt-auto w-full z-50">
          <div className="flex items-center">
            <Link to="/nexus">
              <img
                src="/MemeX.png"
                alt="MemeX Logo"
                className="h-8 w-8 mr-2"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  left: "20px",
                  border: "none",
                  backgroundColor: "transparent",
                  borderRadius: "12px",
                  zIndex: "1000",
                  width: "40px",
                  height: "auto"
                }}
              />
              {isOpen && (
                <span
                  className="font-serif text-white"
                  style={{
                    fontFamily: "'Rowdies', cursive",
                    position: "fixed",
                    bottom: "20px",
                    left: "70px",
                    fontSize: "1.5rem",
                  }}
                >
                  Meme<span style={{ color: '#007bff' }}>X</span>
                </span>
              )}
            </Link>
          </div>
        </footer>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
      )}
    </>
  );
}

export default Sidebar;
