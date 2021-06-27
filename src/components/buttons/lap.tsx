import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const LapButton = () =>
  <IconButton
    iconProps={{iconName: 'Flag'}}
    title="Lap" ariaLabel="Lap"
  />;

function LapIconButton() {
  return (
    <>
      <LapButton />
    </>
  );
}

export default LapIconButton;
