import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { IoMdPrint } from 'react-icons/io';

function invoiceheader() {
  return (
    <div className="flex flex-1 items-center justify-between mb-9 flex-wrap">
      <div className="font-medium text-xl text-gray-700">Recent invoices</div>
      <div className="flex">
        <button className="mr-4 border-2 rounded-full p-2 text-gray-400">
          <IoMdPrint />
        </button>
        <button className="mr-4 border-2 rounded-full p-2 text-gray-400">
          <IoMdDownload />
        </button>
      </div>
    </div>
  );
}

export default invoiceheader;
