import React from "react";

const Title = ({ title }) => {
  return (
    <div className='mt-16 mb-10 relative'>
      <h1 className='text-3xl xl:text-4xl'>{title}</h1>
      <div className='mt-2 before:rounded-sm after:rounded-sm before:active:bg-[rgba(3,127,255,.3)] before:active:empty-content before:absolute before:left-4 before:h-1 before:w-24 block rounded-sm after:empty-content after:absolute after:left-1 after:w-10 after:h-1 after:bg-[#037fff] after:z-10 before:z-10' />
      <h1 className='text-textShadow text-6xl xl:text-7xl absolute top-5.5 font-bold'>
        {title}
      </h1>
    </div>
  );
};

export default Title;
