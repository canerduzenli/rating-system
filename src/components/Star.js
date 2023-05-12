import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../style/index.css'


const Star = ({ selected, onClick }) => {
  return (
    <div className='Stars' onClick={onClick}>
      {selected ? <FaStar color="yellow" /> : <FaStar />}

    </div>
  );
};

export default Star
