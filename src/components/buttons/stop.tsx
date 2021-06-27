import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const StopButton = () =>
  <IconButton
    iconProps={{iconName: 'Stop'}}
    title="Stop" ariaLabel="Stop"
  />;

function StopIconButton() {
  return (
    <>
      <StopButton />
    </>
  );
}

export default StopIconButton;
