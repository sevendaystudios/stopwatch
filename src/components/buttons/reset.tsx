import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const ResetButton: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = () =>
  <IconButton
    iconProps={{iconName: 'RevToggleKey'}}
    title="Reset"
    ariaLabel="Reset"
  />;

export default ResetButton;
