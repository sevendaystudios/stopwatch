import React from 'react';
import {SharedColors} from '@fluentui/theme';
import ControlButton from './buttons/controlButton';
import './controlSection.css';

const ControlSection = (props: {
  startTimer: any,
  stopTimer: any,
  setLap: any,
}): any => {
  return (
    <div className="controlSection">
      <div className='innerWrapper'>
        <ControlButton
          iconProps={{iconName: 'Stop'}}
          title='Stop'
          ariaLabel='Stop'
          setLap={props.stopTimer}
          buttonStyle={{color: SharedColors.red20}}
        />
        <ControlButton
          iconProps={{iconName: 'Play'}}
          title='Start'
          ariaLabel='Start'
          setLap={props.startTimer}
          buttonStyle={{color: SharedColors.green20}}
        />
        <ControlButton
          iconProps={{iconName: 'Flag'}}
          title='Flag'
          ariaLabel='Flag'
          setLap={props.setLap}
          buttonStyle={{color: SharedColors.cyan20}}
        />
      </div>
    </div>
  );
};

export default ControlSection;
