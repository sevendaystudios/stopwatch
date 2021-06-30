import React from 'react';
import {NeutralColors} from '@fluentui/theme';
import './lapSection.css';

const LapSection = (props: {
  currentTime: Array<string>
}): any => {
  const laps = props.currentTime?.map((lap) =>
    <li key={lap.toString()}>
      {lap}
    </li>,
  );
  return (
    <div className='lapSection'>
      <div className="innerWrapper">
        <ul style={{color: NeutralColors.gray100}}>
          {laps}
        </ul>
      </div>
    </div>
  );
};

export default LapSection;
