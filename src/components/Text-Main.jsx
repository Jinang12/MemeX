import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
    const words = ["Create", "Laugh", "Repeat"];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const wordAnimation = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 50 }
        },
        exit: { 
            x: '100vw', 
            opacity: 0,
            transition: { ease: 'easeInOut' }
        }
    };

    const colors = ["#ffffff", "#ffffff", "#ffffff"]; // All colors set to white for glow effect

    return (
        <div className="wrapper mt-10">
            <motion.div 
                className="typing-demo flex w-full justify-around" 
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {words.map((word, index) => (
                    <motion.p 
                        key={index} 
                        variants={wordAnimation} 
                        className="text-xl sm:text-5xl font-light font-serif" 
                        style={{ 
                            fontFamily: "'Rowdies', cursive", 
                            color: "white"
                        }}
                        animate={{
                            textShadow: [
                                `0 0 5px ${colors[index]}, 0 0 10px ${colors[index]}`, // Minimal glow effect
                                `0 0 3px ${colors[index]}, 0 0 5px ${colors[index]}`,
                                `0 0 5px ${colors[index]}, 0 0 10px ${colors[index]}`
                            ]
                        }}
                        transition={{
                            textShadow: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        {word}
                    </motion.p>
                ))}
            </motion.div>
        </div>
    );
}

export default AnimatedText;
