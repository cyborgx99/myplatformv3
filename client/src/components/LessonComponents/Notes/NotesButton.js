import React from 'react';

const NotesButton = (props) => {
  return (
    <button
      className={props.className}
      key={props.cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name}
    </button>
  );
};

export default NotesButton;
