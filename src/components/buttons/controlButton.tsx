import React from 'react';
import {IconButton} from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/react/lib/Icons';

initializeIcons();

const ControlButton = (props: {
  iconProps: any,
  title: string,
  ariaLabel: string,
  onClick: any,
  buttonStyle: any;
}): any =>
  <IconButton
    iconProps={props.iconProps}
    title={props.title}
    ariaLabel={props.ariaLabel}
    style={props.buttonStyle}
    onClick={props.onClick}
  />;

export default ControlButton;
