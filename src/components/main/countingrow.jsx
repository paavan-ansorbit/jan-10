import React from 'react';
import Countingrowcomp from './countingrowcomp';
import Dashboard1 from '../../icons/dashboard1';
import Note from '../../icons/note';
import List from '../../icons/list';
import Download from '../../icons/download';

function Countingrow() {
  return (
    <div className="flex flex-1 flex-wrap mb-10">
      <Countingrowcomp
        icon={<Dashboard1 className="w-5 h-5 fill-current" />}
        countingtext="Paid"
        count="64"
        classes="rounded-2xl mr-4 bg-violet-700 p-3 text-white shadow-2xl "
      />
      <Countingrowcomp
        icon={<Note className="w-5 h-5 fill-current" />}
        countingtext="Unpaid"
        count="49"
        classes="rounded-2xl mr-4  p-3 text-white bg-cyan-400 shadow-2xl  "
        classes2="text-amber-500 "
      />
      <Countingrowcomp
        icon={<List className="w-5 h-5 fill-current" />}
        countingtext="Overdue"
        count="32"
        classes="rounded-2xl mr-4 p-3 text-white bg-amber-500  shadow-2xl "
      />
      <Countingrowcomp
        icon={<Download className="w-5  h-5 fill-current" />}
        countingtext="Draft"
        count="16"
        classes="rounded-2xl mr-4 p-3 text-white bg-gray-300  shadow-2xl "
      />
    </div>
  );
}

export default Countingrow;
