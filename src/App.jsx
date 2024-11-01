import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Card from './components/Card.jsx';
import Card2 from './components/Card2.jsx';
import TextMain from './components/Text-Main.jsx';
import MemeCards from './components/MemeCards.jsx';
import Faq from './components/Faq.jsx';
import MemeGeneration from './components/MemeGeneration.jsx';
import Edit from './Edit.jsx';
import Nexus from './components/Nexus.jsx';

const App = () => {
  return (
    <Router>
      <div className="main bg-black w-full h-screen flex">
        <Routes>
          <Route path="/" element={
            <>
              <Sidebar />
              <div className="flex-1">
                <TextMain />
                <Card />
                <h3 className="card-title text-4xl font-bold text-white text-center ml-20 mt-10" style={{ fontFamily: "'Rowdies'" }}>
                  Trending <span style={{ color: '#007bff' }}> Now</span>
                </h3>
                <div className='flex justify-center'>
                  <MemeCards />
                </div>
                <div className='flex justify-center mt-5'>
                  <Card2 />
                </div>
              </div>
            </>
          } />
          <Route path="/dashboard" element={
            <>
              <Sidebar />
              <div className="flex-1">
                <TextMain />
                <Card />
                <h3 className="card-title text-4xl font-bold text-white text-center ml-20 mt-10" style={{ fontFamily: "'Rowdies'" }}>
                  Trending <span style={{ color: '#007bff' }}> Now</span>
                </h3>
                <div className='flex justify-center'>
                  <MemeCards />
                </div>
                <div className='flex justify-center mt-5'>
                  <Card2 />
                </div>
              </div>
            </>
          } />
          <Route path="/faq" element={
            <>
              <Sidebar />
              <Faq />
            </>
          } />
          <Route path="/generate-memes" element={
            <>
              <Sidebar />
              <MemeGeneration/>
            </>
          } />
          <Route path="/edit" element={
            <>
              <Sidebar />
              <Edit />
            </>
          } />
          <Route path="/nexus" element={<Nexus />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
