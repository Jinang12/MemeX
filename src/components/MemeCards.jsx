import React from 'react';
import { motion } from 'framer-motion';

const MemeCards = () => {
    const images = ["/meme1.jpg", "/meme2.jpg", "/meme3.jpg", "/meme4.jpg"];

    return (
        <div
            className="flex flex-wrap justify-center items-start gap-4"
            style={{ marginLeft: '90px', padding: '20px' }}
        >
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    className="card bg-neutral-900 text-white shadow-lg rounded-lg p-3"
                    style={{
                        width: '100%',               
                        maxWidth: '500px',           
                        height: '300px',             
                        borderRadius: '12px',
                    }}
                    initial={{ y: 50, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }} 
                >
                    <img
                        src={src}
                        alt={`Meme ${index + 1}`}
                        className="w-full h-full rounded-xl object-cover "
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default MemeCards;
