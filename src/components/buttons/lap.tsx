import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const LapButton: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = () =>
  <IconButton
    iconProps={{iconName: 'Flag'}}
    title="Lap"
    ariaLabel="Lap"
  />;

export default LapButton;
