import './App.css';
import StarRating from './components/ StarRating';
import Star from './components/Star';
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  const handleOpenDialog = () => {
    setShowDialog(true);
  }
  return (
    <div className="App">

      <div>
        <StarRating />
      </div>
      <div>
        <button className='ButtonD' onClick={handleOpenDialog}>Open Dialog</button>
        {showDialog && <Dialog onClose={handleCloseDialog} />}

      </div>
    </div>
  );
}

export default App;
