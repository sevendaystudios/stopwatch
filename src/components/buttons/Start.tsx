import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const StartButton: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = () =>
  <IconButton
    iconProps={{iconName: 'Play'}}
    title="Start"
    ariaLabel="Start"
  />;

export default StartButton;
