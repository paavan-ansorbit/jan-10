import React from 'react';
import Countingrow from './countingrow';
import Recentinvoices from './invoicetable/recentinvoices';
// import {BiSearch} from 'react-icons/bi'

function Main() {
  return (
    <div className="flex-6 ml-4 md:mr-20">
      <div className="flex sm:justify-between justify-around flex-wrap mb-16">
        <div className="font-extrabold text-3xl text-gray-700 ">Dashboard</div>
        <div className="md:mt-2">
          <input
            className="rounded-full border text-gray-400 focus:outline-none border-gray-300 mr-4 p-3"
            type="search"
            name="search"
            placeholder="      Search anything here"
          />
        </div>
      </div>
      <Countingrow />
      <Recentinvoices />
    </div>
  );
}

export default Main;
