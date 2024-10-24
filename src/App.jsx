import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AnimatedText from './components/Text-Main';
import Background from './components/Background';

function App() {
  return (
    <>
      <Background />
        <Sidebar />
        <div className="ml-[calc(64px+25px)] mr-2">
          <Navbar />
          <AnimatedText />
        </div>
    </>
  );
}

export default App;
