import React from 'react';
import Firstsection from './firstsection';
import Secondsection from './secondsection';
import Thirdsection from './thirdsection';

function Sidebar() {
  return (
    <div className="flex-3 hidden md:flex  px-20">
      <div className=" flex-1 bg-violet-700 rounded-3xl ">
        <Firstsection />
        <Secondsection />
        <Thirdsection/>
      </div>
    </div>
  );
}

export default Sidebar;
