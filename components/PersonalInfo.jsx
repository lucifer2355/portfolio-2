import React from "react";

import { personalData } from "../data/personal/personal";

const PersonalInfo = () => {
  return (
    <div className='mt-4'>
      {Object.keys(personalData).map(function(key, index) {
        return (
          <div key={index} className='flex'>
            <span className='flex w-24 justify-between text-lg text-gray-400 font-bold'>
              {key} <span>:</span>
            </span>
            <span className='ml-2 text-gray-400'>{personalData[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfo;
