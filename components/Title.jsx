import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className='text-3xl'>{title}</h1>
      <div class='bg-gradient-to-r from-blue-500 to-green-400 h-1 w-28 rounded-sm'></div>
    </div>
  );
};

export default Title;
