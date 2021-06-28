import React, {useState} from 'react';
import {useStopwatch} from 'react-timer-hook';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';
import {NeutralColors} from '@fluentui/theme';
import {SharedColors} from '@fluentui/theme';
import {Depths} from '@fluentui/theme';
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
      title='Stop'
      ariaLabel='Stop'
      onClick={stopTimer}
      style={{color: SharedColors.red20}}
    />;

  const StartButton: React.FC<{
    onClick?: React.MouseEventHandler<HTMLElement>;
  }> = () =>
    <IconButton
      iconProps={{iconName: 'Play'}}
      title='Start'
      ariaLabel='Start'
      onClick={startTimer}
      style={{color: SharedColors.green20}}
    />;

  const LapButton: React.FC<{
    onClick?: React.MouseEventHandler<HTMLElement>;
  }> = () =>
    <IconButton
      iconProps={{iconName: 'Flag'}}
      title='Lap'
      ariaLabel='Lap'
      onClick={setLap}
      style={{color: SharedColors.cyan20}}
    />;

  const setLap = () => {
    const currentTime = `${hours}: ${minutes}: ${seconds}`;
    console.log(currentTime);
  };

  return (
    <div
      className='outerWrapper'
      style={{backgroundColor: NeutralColors.gray180}}
    >
      <div className='timerSection'>
        <div
          className={'timer'}
          style={{
            color: NeutralColors.gray10,
            backgroundColor: NeutralColors.gray160,
            boxShadow: Depths.depth16,
          }}
        >
          <div className={`'timerInnerWrapper' ${blink ? '' : 'paused'}`}>
            <span>{hours}</span>:
            <span>{minutes}</span>:
            <span>{seconds}</span>
          </div>
        </div>
      </div>
      <div className='lapSection'>
      </div>
      <div className='controlSection'>
        <div className='innerWrapper'>
          <StartButton />
          <StopButton />
          <LapButton />
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
