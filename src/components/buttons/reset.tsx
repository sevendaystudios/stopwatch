import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const ResetButton = () =>
  <IconButton
    iconProps={{iconName: 'RevToggleKey'}}
    title="Reset" ariaLabel="Reset"
  />;

function ResetIconButton() {
  return (
    <>
      <ResetButton />
    </>
  );
}

export default ResetIconButton;
