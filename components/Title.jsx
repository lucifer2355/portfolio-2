import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className='text-3xl'>{title}</h1>
      <div className='mt-2 before:rounded-sm after:rounded-sm before:active:bg-[rgba(3,127,255,.3)] before:active:empty-content before:absolute before:left-4 before:h-1 before:w-28 block rounded-sm after:empty-content after:absolute after:left-4 after:w-12 after:h-1 after:bg-[#037fff]'></div>
    </div>
  );
};

export default Title;
