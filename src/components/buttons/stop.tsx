import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const StopButton: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = () =>
  <IconButton
    iconProps={{iconName: 'Stop'}}
    title="Stop"
    ariaLabel="Stop"
  />;

export default StopButton;
