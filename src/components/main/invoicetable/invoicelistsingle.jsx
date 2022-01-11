import React from 'react';
import Invoiceavatar from './invoiceavatar';
import moment from 'moment';

function invoicelistsingle({
  avatar,
  clientname,
  clientid,
  date,
  amount,
  status,
  statusclasses,
}) {
  return (
    <tr className="text-gray-800 font-medium text-xs border-b-2 border-collapse">
      <td>
        <Invoiceavatar avatar={avatar} name={clientname} id={clientid} />
      </td>
      <td>{moment(date).format('L')}</td>
      <td>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount)}
      </td>
      <td>
        <div className={statusclasses}>{status}</div>
      </td>
      <td>...</td>
    </tr>
  );
}

export default invoicelistsingle;
