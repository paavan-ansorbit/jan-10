import React from 'react';
import Download from '../../../icons/download';
import Print from '../../../icons/print';

function Invoiceheader() {
  return (
    <div className="flex flex-1 items-center justify-between mb-9 flex-wrap">
      <div className="font-medium text-xl text-gray-700">Recent invoices</div>
      <div className="flex">
        <button
          className="mr-4 border-2 rounded-full p-2 text-gray-400 hover:text-blue-700 hover:border-blue-700"
          title="Print Button"
        >
          <Print className="w-4 h-4 fill-current" />
        </button>
        <button
          className="mr-4 border-2 rounded-full p-2 text-gray-400 hover:text-blue-700 hover:border-blue-700"
          title="Download Button"
        >
          <Download className="w-4 h-4 fill-current" />
        </button>
      </div>
    </div>
  );
}

export default Invoiceheader;
