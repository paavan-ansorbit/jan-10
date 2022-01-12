import React from 'react';

const Note = (props) => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill-rule="evenodd"
      >
        <g id="icon-44-note-text" >
          <path
            d="M5,11 L5,25.9991358 C5,27.0983727 5.8927712,28 6.99406028,28 L21,28 L21,21.9981014 C21,20.8867064 21.8980806,20 23.0059191,20 L28,20 L28,11 L5,11 L5,11 Z M5,10 L5,7.00086422 C5,5.89581743 5.90162726,5 7.00086422,5 L25.9991358,5 C27.1041826,5 28,5.89339733 28,6.99188419 L28,10 L5,10 L5,10 Z M22,28 L22,22.0029293 C22,21.4490268 22.4509752,21 22.990778,21 L28,21 L22,28 L22,28 Z M8,14 L8,15 L25,15 L25,14 L8,14 L8,14 Z M8,17 L8,18 L25,18 L25,17 L8,17 L8,17 Z M8,20 L8,21 L19,21 L19,20 L8,20 L8,20 Z M8,23 L8,24 L19,24 L19,23 L8,23 L8,23 Z"
            id="note-text"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Note;
