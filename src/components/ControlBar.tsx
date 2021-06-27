import React from 'react';
import './ControlBar.css';
import Reset from './buttons/Reset';
import Play from './buttons/Play';
import Lap from './buttons/Lap';

function ControlBar() {
  return (
    <div>
      <Reset />
      <Play />
      <Lap />
    </div>
  );
}

export default ControlBar;
