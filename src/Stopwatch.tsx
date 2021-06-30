import React, {useState} from 'react';
import {useStopwatch} from 'react-timer-hook';
import {NeutralColors} from '@fluentui/theme';
import TimerSection from './components/timerSection';
import ControlSection from './components/controlSection';
import LapSection from './components/lapSection';
import './Stopwatch.css';

function Stopwatch() {
  const {
    seconds,
    minutes,
    hours,
    pause,
    start,
  } = useStopwatch({autoStart: false});

  const [blink, setBlink] = useState<'start' | 'paused' | boolean>('start');

  const [currentTime, setCurrentTime] =
    useState<string>(`${hours} : ${minutes} : ${seconds}`);

  function setLap() {
    setCurrentTime((currentTime) => `${hours} : ${minutes} : ${seconds}`);
  }

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

  return (
    <div
      className='outerWrapper'
      style={{backgroundColor: NeutralColors.gray180}}
    >
      <TimerSection
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        blink={blink}
      />
      <ControlSection
        startTimer={startTimer}
        stopTimer={stopTimer}
        setLap={setLap}
      />
      <LapSection
        currentTime={currentTime}
      />
    </div>
  );
}

export default Stopwatch;
