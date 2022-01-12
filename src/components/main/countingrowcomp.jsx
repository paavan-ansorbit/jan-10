import React from 'react';
// import Countbg from '../../icons/countbg';

function Countingrowcomp({ icon, countingtext, count, classes,classes2 }) {
  return (
    <div className={`flex flex-1 items-center mx-3 bg-transparent  ${classes2}`}>

      {/* <Countbg className="h-20 w-36  absolute -z-50 fill-current" /> */}
      <div className={classes}>{icon}</div>
      <div className="flex flex-col bg-transparent">
        <div className="text-xs text-gray-500">{countingtext}</div>
        <div className="font-bold text-gray-700 text-2xl">{count}</div>
      </div>
    </div>
  );
}

export default Countingrowcomp;
