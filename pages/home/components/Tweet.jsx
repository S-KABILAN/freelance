// components/Tweet.js
import React from 'react';
import PER from './person.jpg'

const Tweet = ({ text, size, photo, name, profession }) => {
    return (
      <div className='grid grid-cols-2'>
      <div className={`bg-slate-900 p-4 m-2 rounded-lg ${size} ` }>
        <div className="flex flex-grow items-center mb-2">
          <img
            src={photo}
            alt={`${name}'s profile`}
            className="rounded-full w-8 h-8 mr-2"
          />
          <div>
            <p className="font-bold text-white">{name}</p>
            <p className="text-white">{profession}</p>
          </div>
        </div>
        <p className='text-white'>{text}</p>
      </div>
      </div>
    );
  };
export default Tweet;
    