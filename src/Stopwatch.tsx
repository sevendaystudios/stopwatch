import React from 'react';
import {useStopwatch} from 'react-timer-hook';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';
import './Stopwatch.css';

initializeIcons();

function Stopwatch() {
  const {
    seconds,
    minutes,
    hours,
    pause,
    start,
  } = useStopwatch({autoStart: false});

  const StopButton: React.FC<{
    onClick?: React.MouseEventHandler<HTMLElement>;
  }> = () =>
    <IconButton
      iconProps={{iconName: 'Stop'}}
      title="Stop"
      ariaLabel="Stop"
      onClick={pause}
    />;

  const StartButton: React.FC<{
    onClick?: React.MouseEventHandler<HTMLElement>;
  }> = () =>
    <IconButton
      iconProps={{iconName: 'Play'}}
      title="Start"
      ariaLabel="Start"
      onClick={start}
    />;

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div>
        <StartButton />
        <StopButton />
      </div>
    </div>
  );
}

export default Stopwatch;
