import React, {useState} from 'react';
import {useStopwatch} from 'react-timer-hook';
import {NeutralColors} from '@fluentui/theme';
import {SharedColors} from '@fluentui/theme';
import {Depths} from '@fluentui/theme';
import ControlButton from './components/buttons/controlButton';
import './Stopwatch.css';
import './components/timerSection.css';
import './components/controlSection.css';
import './components/lapSection.css';

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
          <ControlButton
            iconProps={{iconName: 'Stop'}}
            title='Stop'
            ariaLabel='Stop'
            setLap={stopTimer}
            buttonStyle={{color: SharedColors.red20}}
          />
          <ControlButton
            iconProps={{iconName: 'Play'}}
            title='Start'
            ariaLabel='Start'
            setLap={startTimer}
            buttonStyle={{color: SharedColors.green20}}
          />
          <ControlButton
            iconProps={{iconName: 'Flag'}}
            title='Flag'
            ariaLabel='Flag'
            setLap={setLap}
            buttonStyle={{color: SharedColors.cyan20}}
          />
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
