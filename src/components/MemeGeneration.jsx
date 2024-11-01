import React, { useEffect, useState } from 'react';
import { getAllMemes } from '../one.js';
import MemeContainer from './MemeContainer.jsx';

const MemeGeneration = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="flex justify-center items-start min-h-screen ml-24 pt-10"> 
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {data.map((el) => (
          <MemeContainer key={el.id} url={el.url} title={el.name} />
        ))}
      </div>
    </div>
  );
};

export default MemeGeneration;
