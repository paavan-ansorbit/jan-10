import React from 'react';

function countingrowcomp({ icon, countingtext, count, classes }) {
  return (
    <div className="flex flex-1 items-center mx-3">
      <div className={classes}>{icon}</div>
      <div className="flex flex-col">
        <div className="text-xs text-gray-500">{countingtext}</div>
        <div className="font-bold text-gray-700 text-xl">{count}</div>
      </div>
    </div>
  );
}

export default countingrowcomp;
