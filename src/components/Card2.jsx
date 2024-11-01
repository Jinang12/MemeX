import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Card2 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const navigate = useNavigate();

  return (
    <div className="cardcontainer" style={{ fontFamily: "'Rowdies'", marginLeft: '80px' }}>
      <div className="flex justify-center mx-2">
        <motion.div
          ref={ref}
          className="w-full sm:w-1/2"
          initial={{ x: '100%', opacity: 0 }} 
          animate={isInView ? { x: 0, opacity: 1 } : {}} 
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '100%',
            padding: '5px',
            height: '300px',
          }}
        >
          <div
            className="card bg-neutral-900 text-white shadow-lg rounded-lg p-3"
            style={{ minWidth: '18rem', borderRadius: '12px', marginTop: "5px", height: 'max-content' }}
          >
            <div className="card-body flex flex-col h-full space-y-4">
              <h5 className="card-title text-2xl font-bold">
                Ask Nexus.<span style={{ color: '#007bff' }}> Ai</span>
              </h5>
              <p className="card-subtitle text-md text-muted-foreground">
                Get instant support from Nexus, our AI-powered chatbot, designed to help you navigate through queries effortlessly.
              </p>
              <button
                className="btn text-white mt-auto"
                style={{
                  backgroundColor: '#007bff',
                  padding: '10px 20px',
                  borderRadius: '8px'
                }}
                onClick={() => navigate('/nexus')}
              >
                Start Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card2;
