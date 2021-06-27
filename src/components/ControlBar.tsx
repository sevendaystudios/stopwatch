import React from 'react';
import './ControlBar.css';
import Reset from './buttons/Reset';
import Start from './buttons/Start';
import Lap from './buttons/Lap';

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
