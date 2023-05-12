import React from 'react';

const Dialog = ({ onClose }) => {
  return (
    <div className='DialogC'>
      <h2>Dialog Content</h2>
      <p>This is the content of the dialog box.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Dialog;
