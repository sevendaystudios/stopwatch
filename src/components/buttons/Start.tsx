import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const StartButton = () =>
  <IconButton
    iconProps={{iconName: 'Play'}}
    title="Start" ariaLabel="Start"
  />;

function StartIconButton() {
  return (
    <>
      <StartButton />
    </>
  );
}

export default StartIconButton;
