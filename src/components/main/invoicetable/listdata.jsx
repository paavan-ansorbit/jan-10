import React from 'react';
import Invoicelistsingle from './invoicelistsingle';
import User from '../../../icons/user'

function Listdata() {
  return (
    <tbody className="mt-3">
      <Invoicelistsingle
        avatar={<User className="h-5 w-5" />}
        clientname="Henry Richardson"
        clientid="#4093"
        date={new Date()}
        amount="244.55"
        status="Unpaid"
        statusclasses={
          'inline-flex font-bold rounded-full p-2 text-orange-400 bg-orange-100 w-16 justify-center'
        }
      />
      <Invoicelistsingle
        avatar={<User className="h-5 w-5" />}
        clientname="Homura Yunosuke"
        clientid="#2416"
        date={new Date()}
        amount="11.67"
        status="Overdue"
        statusclasses={
          'inline-flex font-bold rounded-full p-2 text-red-600 bg-red-100 w-16 justify-center'
        }
      />
      <Invoicelistsingle
        avatar={<User className="h-5 w-5" />}
        clientname="Kita Chihoko"
        clientid="#6921"
        date={new Date()}
        amount="273.88"
        status="Paid"
        statusclasses={
          'inline-flex  font-bold rounded-full p-2 text-green-400 bg-green-100 w-16 justify-center'
        }
      />
      <Invoicelistsingle
        avatar={<User className="h-5 w-5" />}
        clientname="Mba Tshinguta"
        clientid="#3029"
        date={new Date()}
        amount="112.27"
        status="Draft"
        statusclasses={
          'inline-flex font-bold rounded-full p-2 text-stone-500 bg-stone-200 w-16 justify-center'
        }
      />
    </tbody>
  );
}

export default Listdata;
