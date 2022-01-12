import React from 'react';
import Navicons from './navicons';
import DashboardIcon from '../../icons/dashboard';
import Iflow from '../../icons/iflow';
import Invoice from '../../icons/invoice';
import Clients from '../../icons/clients';
import Settings from '../../icons/settings';
import Bell from '../../icons/bell';
import User from '../../icons/user';

function Navbar() {
  return (
    <div className="flex items-center md:justify-between justify-center h-13 flex-wrap overflow-auto mx-16 my-12">
      <button
        className="flex items-center m-2 text-violet-700 font-bold"
        title="Home Button"
      >
        <div className="mr-3">
          <Iflow className=" h-6 w-6 fill-current" />
        </div>

        <div>I-Flow</div>
      </button>
      <div
        className="flex items-center md:justify-center
       flex-wrap"
      >
        <Navicons
          classes="flex items-center mr-16 text-violet-700 "
          src={<DashboardIcon className="h-5 w-5  fill-current  " />}
          alt="Dashboard"
        />

        <Navicons
          classes="flex items-center mr-16 text-gray-400 hover:text-violet-700 "
          src={<Invoice className="h-5 w-5 fill-current  " />}
          alt="Invoice"
        />
        <Navicons
          classes="flex items-center mr-16 text-gray-400 hover:text-violet-700 "
          src={<Clients className="h-5 w-5 fill-current" />}
          alt="Clients"
        />
        <Navicons
          classes="flex items-center text-gray-400 hover:text-violet-700 "
          src={<Settings className="h-5 w-5 fill-current" />}
          alt="Settings"
        />
      </div>
      <div className="flex flex-wrap items-center">
        <button
          className="text-gray-600 hover:text-violet-700 flex"
          title="Notification Button"
        >
          <Bell className="h-5 w-5 fill-current " />
          <div className="animate-ping  bg-orange-800 w-1 h-1 rounded"></div>
        </button>
        <button className="ml-10" title="User Button">
          <User className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
