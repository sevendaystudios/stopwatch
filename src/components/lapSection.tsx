import React from 'react';
import {NeutralColors} from '@fluentui/theme';
import './lapSection.css';

const LapSection = (props: {
  currentTime: string
}): any => {
  return (
    <div className='lapSection'>
      <ul style={{color: NeutralColors.gray100}}>
        <li>
          {props.currentTime}
        </li>
      </ul>
    </div>
  );
};

export default LapSection;
