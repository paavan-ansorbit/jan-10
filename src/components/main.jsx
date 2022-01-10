import React from 'react';

function Main() {
  return (
    <div className="flex-7">
      <div className="flex justify-between">
        <div className="m-4">Dashboard</div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
        />
      </div>
    </div>
  );
}

export default Main;
