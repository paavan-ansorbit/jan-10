 import React from 'react';
import User from '../../icons/user';

const Secondsection = () => {
  return (
    <div className="flex flex-col mx-10 mt-9 pb-7 border-b  ">
      <div className="font-normal text-xs text-zinc-400">Jan '20</div>
      <div className="text-white text-base font-semibold mb-3">
        Client of the month
      </div>
      <div >
        <div className="flex items-center rounded-full bg-transparent bg-violet-500 p-3">
          <div>
            <User className=" h-16 mx-5 " />
          </div>
          <div className="flex flex-col ">
            <div className='text-zinc-200  text-base font-semibold'>Margje Jutten ⭐</div>
            <div className="flex text-white font-light">
              <div className="mr-3">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(1464)}
              </div>
              <div>63%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
