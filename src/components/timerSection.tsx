import React from 'react';
import {NeutralColors} from '@fluentui/theme';
import {Depths} from '@fluentui/theme';
import './timerSection.css';

const ControlSection = (props: {
  hours: number,
  minutes: number,
  seconds: number,
  blink: any
}): any => {
  return (
    <div className='timerSection'>
      <div
        className={'timer'}
        style={{
          color: NeutralColors.gray10,
          backgroundColor: NeutralColors.gray160,
          boxShadow: Depths.depth16,
        }}
      >
        <div className={`'timerInnerWrapper' ${props.blink ? '' : 'paused'}`}>
          <span>{props.hours}</span>:
          <span>{props.minutes}</span>:
          <span>{props.seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default ControlSection;
