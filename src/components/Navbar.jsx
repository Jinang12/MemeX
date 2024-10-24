import React, { useState } from 'react';
import { Zap } from 'lucide-react'; // Ensure you have this icon installed

const Navbar = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  const handleBlink = () => {
    setIsBlinking(true);
    document.body.classList.add('blink-effect');
    setTimeout(() => {
      setIsBlinking(false);
      document.body.classList.remove('blink-effect');
    }, 1000); // Blink effect lasts 1 second
  };

  return (
    <div className="w-full h-[64px] bg-neutral-900 rounded-lg overflow-hidden">
      <nav className="flex items-center justify-between h-full px-5">
        <img src="/MemeX-logo.png" alt="MemeX Logo" className="w-[140px] h-[130px] -ml-12" />
        
        {/* Blink Button */}
        <button 
          onClick={handleBlink} 
          className={`flex items-center justify-center p-2 bg-transparent rounded-md focus:outline-none ${isBlinking ? 'animate-blink' : ''}`}
        >
          <Zap size={24} className="text-yellow-500" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
