import React from 'react';
import Main from './main';
import Navbar from './navbar';
import Sidebar from './sidebar';

function Fullweb() {
  return (
    <div className='flex flex-col flex-1'>
      <div className='mb-12'>
        <Navbar />
      </div>
      <div className='flex'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Fullweb;
