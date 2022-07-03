import { Box } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import ListIcon from '@mui/icons-material/List';
import GroupIcon from '@mui/icons-material/Group';

import useStyles from './style';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
        to="todos">
        <ListIcon />
        <span>Todo</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
        to="users">
        <GroupIcon />
        <span>Users</span>
      </NavLink>
    </Box>
  );
};

export default Header;
