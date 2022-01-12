import React from 'react';
import Listdata from './listdata';

function Invoicelist() {
  return (
    <table className="table-auto text-xs w-full">
      <thead>
        <tr className="text-gray-400 font-normal">
          <td>CLIENT</td>
          <td>DATE</td>
          <td>AMOUNT</td>
          <td>STATUS</td>
          <td></td>
        </tr>
      </thead>
      <Listdata />
    </table>
  );
}

export default Invoicelist;
