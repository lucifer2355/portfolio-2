import React from "react";

import { personalData } from "../data/personal/personal";

const PersonalInfo = () => {
  return (
    <div className='mt-4'>
      {Object.keys(personalData).map(function(key, index) {
        return (
          <div key={index} className='text-gray-400 flex'>
            <span className='flex w-24 justify-between'>
              {key} <span>:</span>
            </span>
            <span className='ml-2'>{personalData[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfo;
