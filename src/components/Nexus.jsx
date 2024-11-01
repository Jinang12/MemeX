import React, { useState } from 'react';
import axios from 'axios';
import { Send, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nexus() {
    const [userPrompt, setUserPrompt] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isSending, setIsSending] = useState(false);

    async function generateChatbotResponse() {
        setIsSending(true);
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCqLL0ZUCTmoBUUmU44NYQZv5cnI1HIII0",
            { contents: [{ parts: [{ text: userPrompt }] }] }
        );
        const botResponse = response.data.candidates[0].content.parts[0].text;

        setChatHistory(prevHistory => [...prevHistory, { role: "user", content: userPrompt }]);
        setUserPrompt("");

        setTimeout(() => {
            setChatHistory(prevHistory => [...prevHistory, { role: "bot", content: botResponse }]);
            setIsSending(false);
        }, 500);
    }

    return (
        <motion.div 
            className="flex flex-col justify-between items-center w-[22rem] md:w-[36rem] lg:w-[60rem] h-[38rem] md:h-[44rem] lg:h-[50rem] bg-neutral-900 text-white p-6 rounded-3xl mx-auto mt-5 relative" 
            style={{ fontFamily: "Rowdies" }} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2.0 }}
        >
            <div className="flex items-center justify-between w-full mb-4">
                <Link to="/dashboard" className="text-white">
                    <Home className="w-6 h-6" />
                </Link>
                <div className="flex items-center">
                    <img src="/MemeX.png" alt="Nexus Logo" className="w-8 h-8 mr-2 rounded-xl" />
                    <h1 className="text-white font-bold text-xl">Nexus.<span style={{ color: '#007bff' }}>Ai</span></h1>
                </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 w-full h-full px-4 mt-4 overflow-y-auto">
                {chatHistory.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-2xl transition-all duration-300 min-w-[120px] max-w-[80%] ${
                            msg.role === "user" ? "bg-blue-500 text-white self-end" : "bg-white text-black self-start"
                        }`}
                    >
                        {msg.content}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-2 w-full p-2 flex items-center space-x-2">
                <input
                    type="text"
                    className="flex-1 p-3 bg-neutral-700 rounded-full text-white outline-none"
                    placeholder="Type your prompt..."
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                />
                <motion.button
                    onClick={generateChatbotResponse}
                    className="bg-blue-500 p-3 rounded-full"
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 1.1 }}
                    animate={isSending ? { y: -20, transition: { duration: 0.3, type: "spring", stiffness: 200, damping: 5 } } : {}}
                >
                    <Send className="text-white w-5 h-5" />
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Nexus;
