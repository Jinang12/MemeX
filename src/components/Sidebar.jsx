import React, { useState } from "react";
import { Calendar, X, Home, Settings, User, HelpCircle } from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const blueColor = "#364bde";

  const glowStyle = {
    textShadow: `
      0 0 3px ${blueColor}, 0 0 5px ${blueColor}
    `,
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-screen bg-neutral-900 text-white shadow-lg z-40 transition-all duration-300 ease-in-out mr-5 ${
          isOpen ? "w-64 sm:w-40" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div
            className="p-3 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all cursor-pointer"
            onClick={toggleSidebar}
          >
            {isOpen ? <X size={24} color="white" /> : <Calendar size={24}  />}
          </div>
        </div>

        <nav className="flex flex-col justify-between h-full">
          <div className={`py-4 flex flex-col ${isOpen ? 'items-start' : 'items-center'}`}>
            {isOpen ? (
              <>
                <a href="#" className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <Home size={24} color={blueColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive", textShadow: glowStyle.textShadow }}>Dashboard</span>
                </a>
                <a href="#" className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <Settings size={24} color={blueColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive", textShadow: glowStyle.textShadow }}>Settings</span>
                </a>
                <a href="#" className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <User size={24} color={blueColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive", textShadow: glowStyle.textShadow }}>Profile</span>
                </a>
                <a href="#" className="flex items-center p-4 hover:bg-neutral-700 w-full">
                  <HelpCircle size={24} color={blueColor} />
                  <span className="ml-2 font-serif" style={{ fontFamily: "'Rowdies', cursive", textShadow: glowStyle.textShadow }}>Support</span>
                </a>
              </>
            ) : (
              <>
                <a href="#" className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <Home size={24} color={blueColor} />
                </a>
                <a href="#" className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <Settings size={24} color={blueColor} />
                </a>
                <a href="#" className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <User size={24} color={blueColor} />
                </a>
                <a href="#" className="flex flex-col items-center p-4 hover:bg-neutral-700 w-full">
                  <HelpCircle size={24} color={blueColor} />
                </a>
              </>
            )}
          </div>
        </nav>
      </aside>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>
      )}
    </>
  );
}

export default Sidebar;
