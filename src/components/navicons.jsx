import React from 'react'

function Navicons({src,alt}) {
  return (
    <div className='flex items-center mr-5'>
      <div className='flex'>
        <img
          className='h-5 mr-2'
          src={src}
          alt={alt}
        />
      {alt}
      </div>

    </div>
  );
}

export default Navicons
