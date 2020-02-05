import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
   
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <a className="primary" href="/">
        <img
              src="/assets/images/logo.svg"
              width="300"
              height="45"
              alt="logo"
            />
          </a>

          <Typography variant="h6" className={classes.title}>
          <Button color="inherit">About</Button>

          </Typography>

    </div>
  );
}