import React from 'react';
import Rightarrow from '../../icons/rightarrow'

const Thirdsection = () => {
  return (
    <div className="flex   mx-10 mt-10">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="font-normal text-xs text-zinc-400">
            Dec '19 - Jan '20
          </div>
          <div className="text-white text-base font-semibold mb-3">
            Earning graph
          </div>
        </div>
        <button
          className="border rounded-full p-1 text-white "
          title="Detail of graph"
        >
          <div>
            <Rightarrow className="w-5 h-5 fill-current " />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Thirdsection;
