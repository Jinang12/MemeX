import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();

  return (
    <div className="cardcontainer" style={{ fontFamily: "'Rowdies'", marginLeft: '80px' }}>
      <div className="row flex justify-center flex-wrap mx-2">
        <motion.div
          className="col-sm-6 mb-3 mb-sm-0 w-full sm:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '100%', padding: '5px' }}
        >
          <div
            className="card bg-neutral-900 text-white shadow-lg rounded-lg p-3"
            style={{ minWidth: '18rem', borderRadius: '12px', marginTop: "5px" }}
          >
            <div className="card-body flex flex-col h-full space-y-4">
              <h5 className="card-title text-2xl font-bold">
                Generate <span style={{ color: '#007bff' }}>Memes</span>
              </h5>
              <p className="card-subtitle text-md text-muted-foreground">
                Unleash Your inner Creativity and Create Hilarious Memes Instantly with Meme<span style={{ color: '#007bff' }}>X</span>.
              </p>
              <button
                onClick={() => navigate('/generate-memes')}
                className="btn text-white mt-auto"
                style={{
                  backgroundColor: '#007bff',
                  padding: '10px 20px',
                  borderRadius: '8px'
                }}
              >
                Generate Now
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-sm-6 w-full sm:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '100%', padding: '5px' }}
        >
          <div
            className="card bg-neutral-900 text-white shadow-lg rounded-lg p-3"
            style={{ minWidth: '18rem', borderRadius: '12px', marginTop: "5px" }}
          >
            <div className="card-body flex flex-col h-full space-y-4">
              <h5 className="card-title text-2xl font-bold">FAQ<span style={{ color: '#007bff' }}>'s</span></h5>
              <p className="card-subtitle text-md text-muted-foreground">
                Find Answers to Common Questions and Master Meme<span style={{ color: '#007bff' }}>X</span> Easily & Effortlessly.
              </p>
              <button
              onClick={() => navigate('/faq')}
                className="btn text-white mt-auto"
                style={{
                  backgroundColor: '#007bff',
                  padding: '10px 20px',
                  borderRadius: '8px'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
