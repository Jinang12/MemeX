import React, { useState, createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from './components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memeRef = createRef();

    const imageUrl = params.get('url');
    const addText = () => {
        setCount(count + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 md:p-0 ml-20">
            <div ref={memeRef} className="relative">
                <img 
                    src={imageUrl} 
                    alt="" 
                    className="max-w-full h-auto w-[500px] md:h-[400px] object-contain mb-5" 
                />
                {Array(count).fill(0).map((_, index) => (
                    <Text key={index} />
                ))}
            </div>
            <div className="flex space-x-4 mt-4">
                <button 
                    className="rounded-xl text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                    style={{ fontFamily: "'Rowdies', cursive", backgroundColor: "#007bff" }}
                    onClick={addText}
                >
                    Add Text
                </button>

                <button 
                    className="rounded-xl text-white py-2 px-4 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all bg-green-500" 
                    style={{ fontFamily: "'Rowdies', cursive" }}
                    onClick={() => exportComponentAsJPEG(memeRef)}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Edit;
