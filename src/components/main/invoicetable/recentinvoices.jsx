import React from 'react';
import Invoiceheader from './invoiceheader';
import Invoicelist from './invoicelist';
import { BiRightArrowAlt } from 'react-icons/bi';

function recentinvoices() {
  return (
    <div className="flex-1 shadow-2xl rounded-3xl p-6">
      <Invoiceheader />
      <Invoicelist />
      <div className="mt-6 flex justify-between text-sm">
        <div className="text-gray-500">Showing 5 out of 120</div>
        <button className="flex items-center text-indigo-700 font-bold">
          <div className="mr-3">See all </div>{' '}
          <BiRightArrowAlt className="text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default recentinvoices;
