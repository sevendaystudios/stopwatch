import React from 'react';
import '../components/ControlBar.css';
import Reset from '../components/buttons/Reset';
import Start from '../components/buttons/Start';
import Lap from '../components/buttons/Lap';

function ControlBar() {
  return (
    <div>
      <Reset />
      <Start />
      <Lap />
    </div>
  );
}

export default ControlBar;
