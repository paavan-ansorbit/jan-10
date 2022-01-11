import React from 'react';
import Countingrowcomp from './countingrowcomp';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaListAlt } from 'react-icons/fa';
import { IoMdListBox } from 'react-icons/io';
import { IoMdDownload } from 'react-icons/io';

function countingrow() {
  return (
    <div className="flex flex-1 flex-wrap mb-10">
      <Countingrowcomp
        icon={<MdSpaceDashboard />}
        countingtext="Paid"
        count="64"
        classes="rounded-2xl mr-4 bg-violet-700 p-3 text-white "
      />
      <Countingrowcomp
        icon={<FaListAlt />}
        countingtext="Unpaid"
        count="49"
        classes="rounded-2xl mr-4  p-3 text-white bg-cyan-400 "
      />
      <Countingrowcomp
        icon={<IoMdListBox />}
        countingtext="Overdue"
        count="32"
        classes="rounded-2xl mr-4 p-3 text-white bg-amber-500 "
      />
      <Countingrowcomp
        icon={<IoMdDownload />}
        countingtext="Draft"
        count="16"
        classes="rounded-2xl mr-4 p-3 text-white bg-gray-300 "
      />
    </div>
  );
}

export default countingrow;
