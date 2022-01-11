import React from 'react';

function invoiceavatar({ avatar, name, id }) {
  return (
    <div className="inline-flex items-center mt-6">
      <div className="rounded-full mr-6  p-3 text-white bg-cyan-400 pulseanimation">
        {avatar}
      </div>
      <div className="flex flex-col">
        <div className="text-sm">{name}</div>
        <div className="text-xs text-gray-500">{id}</div>
      </div>
    </div>
  );
}

export default invoiceavatar;
