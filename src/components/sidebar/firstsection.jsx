import React from 'react';

const Firstsection = () => {
  return (
    <div className="flex justify-between flex-wrap  flex-1 mt-9 mx-10 border-b border-b-gray-200 pb-8 ">
      <div className="font-bold text-white text-2xl">
        Create new <br /> invoice
      </div>
      <button className="bg-white font-semibold my-3 text-violet-700 rounded-full px-5 py-3 overflow-x-hidden" title='Create new invoice Button'>
        Get started
      </button>
    </div>
  );
};

export default Firstsection;
