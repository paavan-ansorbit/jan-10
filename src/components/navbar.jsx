import React from 'react';
import Navicons from './navicons';

function Navbar() {
  return (
    <div className='flex items-center md:justify-between justify-center h-13 flex-wrap overflow-auto'>
      <div className='flex items-center m-2'>
        <div>
          <img
            className='flex'
            src='https://img.icons8.com/material-outlined/24/000000/note.png'
            alt='I-flow'
          />
        </div>

        <div>I-Flow</div>
      </div>
      <div className='flex items-center md:justify-center flex-wrap'>
        <Navicons
          src='https://img.icons8.com/ios-glyphs/30/000000/graph.png'
          alt='Dashboard'
        />
        <Navicons
          src='https://img.icons8.com/ios-glyphs/30/000000/invoice.png'
          alt='Invoice'
        />
        <Navicons
          src='https://img.icons8.com/ios-glyphs/30/000000/group.png'
          alt='Clients'
        />
        <Navicons
          src='https://img.icons8.com/ios/50/000000/apple-settings.png'
          alt='Settings'
        />
      </div>
      <div className='flex flex-wrap items-center'>
        <div>
          <img
            className='mr-2'
            src='https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-application-active-notification-bell-both-on-phone-and-tablet-date-filled-tal-revivo.png'
            alt='notification bell'
          />
        </div>
        <div>
          <img src='https://img.icons8.com/color/48/000000/user.png' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
