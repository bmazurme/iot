import React from 'react';
import classNames from 'classnames';
import { IconButton } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

import style from './button.module.css';

export default function Button({ isOpen, handlerClick }
  : { isOpen: boolean; handlerClick: () => void; }) {
  return (
    <IconButton
      size="small"
      onClick={handlerClick}
      className={classNames(style.button, { [style.opened]: isOpen })}
    >
      {isOpen ? <Menu /> : <Close />}
    </IconButton>
  );
}
