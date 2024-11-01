import React from 'react';
import { motion } from 'framer-motion';

const TextMain = () => {
    return (
        <div className='text-white text-center' style={{ marginLeft: '100px', marginRight: '5px', marginBottom: '20px', fontFamily: "'Rowdies'" }}>
            <motion.h3 
                className="text-3xl font-bold p-5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }} 
            >
                Meme<span style={{ color: '#007bff' }}>X</span>
            </motion.h3>
            <p className="text-md">
                MemeX is your ultimate platform for generating hilarious and creative memes in an instant. 
                Unleash your inner creativity with an easy-to-use interface that allows you to customize and share your unique memes effortlessly. 
                Join the fun and elevate your meme game with MemeX today!
            </p>
        </div>
    );
}

export default TextMain;
