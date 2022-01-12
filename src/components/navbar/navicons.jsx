import React from 'react';

function Navicons({ src, alt, classes }) {
  return (
    <button className={classes} title={`${alt} Section`}>
      <div className="flex items-center">
        <div className="mr-4 text-sm">{src}</div>
        {alt}
      </div>
    </button>
  );
}

export default Navicons;
