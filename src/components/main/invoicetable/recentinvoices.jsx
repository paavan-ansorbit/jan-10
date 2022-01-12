import React from 'react';
import Invoiceheader from './invoiceheader';
import Invoicelist from './invoicelist';
import Rightarrow from '../../../icons/rightarrow';

function Recentinvoices() {
  return (
    <div className="flex-1 shadow-2xl rounded-3xl p-6">
      <Invoiceheader />
      <Invoicelist />
      <div className="mt-6 flex justify-between text-sm">
        <div className="text-gray-500">Showing 5 out of 120</div>
        <button className="flex items-center text-indigo-700 font-bold" title='See All Button'>
          <div className="mr-3">See all </div>{' '}
          <Rightarrow className="h-7 w-7 fill-current" />
        </button>
      </div>
    </div>
  );
}

export default Recentinvoices;
