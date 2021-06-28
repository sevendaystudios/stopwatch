import React, {useState} from 'react';
import {useStopwatch} from 'react-timer-hook';
import {NeutralColors} from '@fluentui/theme';
import {Depths} from '@fluentui/theme';
import ControlSection from './components/controlSection';
import LapSection from './components/lapSection';
import './Stopwatch.css';
import './components/timerSection.css';

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
      <LapSection />
      <ControlSection
        startTimer={startTimer}
        stopTimer={stopTimer}
        setLap={setLap}
      />
    </div>
  );
}

export default Stopwatch;
