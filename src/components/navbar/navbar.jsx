import React from 'react';
import Navicons from './navicons';
import { CgNotes } from 'react-icons/cg';
import { BiBarChartSquare } from 'react-icons/bi';
import { FaFileInvoice } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoIosSettings } from 'react-icons/io';
import { FaUserNinja } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';

function Navbar() {
  return (
    <div className="flex items-center md:justify-between justify-center h-13 flex-wrap overflow-auto mx-16 my-12">
      <button className="flex items-center m-2 text-violet-700 font-bold">
        <div className="mr-3">
          <CgNotes className="text-2xl" />
        </div>

        <div>I-Flow</div>
      </button>
      <div
        className="flex items-center md:justify-center
       flex-wrap hover:text-blue-700"
      >
        <Navicons
          classes="flex items-center mr-16 text-violet-700  hover:text-blue-700"
          src={<BiBarChartSquare />}
          alt="Dashboard"
        />
        <Navicons
          classes="flex items-center mr-16 text-gray-400 hover:text-blue-700"
          src={<FaFileInvoice />}
          alt="Invoice"
        />
        <Navicons
          classes="flex items-center mr-16 text-gray-400 hover:text-blue-700"
          src={<FiUsers />}
          alt="Clients"
        />
        <Navicons
          classes="flex items-center text-gray-400 hover:text-blue-700"
          src={<IoIosSettings />}
          alt="Settings"
        />
      </div>
      <div className="flex flex-wrap items-center">
        <button>
          <AiOutlineBell />
        </button>
        <button className="ml-10">
          <FaUserNinja className="h-10" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
