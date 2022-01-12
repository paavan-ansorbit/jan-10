import React from 'react';
import Countingrow from './countingrow';
import Recentinvoices from './invoicetable/recentinvoices';
import Search from '../../icons/search';

function Main() {
  return (
    <div className="flex-7 ml-4 md:mr-20">
      <div className="flex sm:justify-between justify-around flex-wrap mb-16">
        <div className="font-extrabold text-3xl text-gray-700 ">Dashboard</div>
        <div className="md:mt-2 flex items-center text-gray-400 pl-4 h-12 relative">
          <Search className="w-5 h-5 fill-current absolute left-7 top-3.5 bottom-0" />
          <input
            className="focus:outline-none border-gray-300 pl-10 focus:ring focus:ring-violet-300 p-3 border rounded-full"
            type="search"
            name="search"
            title="Search Bar"
            placeholder="Search anything here"
          />
        </div>
      </div>
      <Countingrow />
      <Recentinvoices />
    </div>
  );
}

export default Main;
