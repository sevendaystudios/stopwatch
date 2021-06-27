import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const PlayButton = () =>
  <IconButton
    iconProps={{iconName: 'Play'}}
    title="Add" ariaLabel="Play"
  />;

function PlayIconButton() {
  return (
    <>
      <PlayButton />
    </>
  );
}

export default PlayIconButton;
