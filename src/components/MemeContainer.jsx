import React from 'react';
import { useNavigate } from 'react-router-dom';

const MemeContainer = (props) => {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center bg-neutral-900 rounded-lg shadow-lg overflow-hidden w-72 min-h-fit lg:w-80 p-4 rounded-xl">
      <div className="w-full h-auto ">
        <img src={props.url} className="object-cover w-full rounded-t-lg" alt="meme image" />
      </div>
      <div className="text-center mt-2">
        <h5 className="text-white text-lg font-bold" style={{ fontFamily: "'Rowdies', cursive" }}>
          {props.title}
        </h5>
        <button className="mt-4 rounded-xl text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"style={{ fontFamily: "'Rowdies', cursive",backgroundColor:"#007bff" }} onClick={e=>navigate(`/edit?url=${props.url}`)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default MemeContainer;
