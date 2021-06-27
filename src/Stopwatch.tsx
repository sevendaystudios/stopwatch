import React, {useState} from 'react';
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

  const [blink, setBlink] = useState<'start' | 'paused' | boolean>('start');

  function startTimer() {
    start();
    timerUnpaused();
  }

  function stopTimer() {
    pause();
    timerPaused();
  }

  function timerPaused() {
    setBlink(false);
  }

  function timerUnpaused() {
    setBlink(true);
  }

  const StopButton: React.FC<{
    onClick?: React.MouseEventHandler<HTMLElement>;
  }> = () =>
    <IconButton
      iconProps={{iconName: 'Stop'}}
      title="Stop"
      ariaLabel="Stop"
      onClick={stopTimer}
    />;

  const StartButton: React.FC<{
    onClick?: React.MouseEventHandler<HTMLElement>;
  }> = () =>
    <IconButton
      iconProps={{iconName: 'Play'}}
      title="Start"
      ariaLabel="Start"
      onClick={startTimer}
    />;

  return (
    <div style={{textAlign: 'center'}}>
      <div className={blink ? '' : 'paused'} style={{fontSize: '100px'}}>
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
