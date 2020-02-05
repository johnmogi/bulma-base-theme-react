import React from "react";
import "./header.css";
import ButtonAppBar from './appbar';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from "./search";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ba000d',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

export const Header: React.SFC = () => {
  return (
    <AppBar position="static" color="secondary">
    <Toolbar >
    <Grid container spacing={3}>
        <Grid item xs={9}>
        <ButtonAppBar />
        </Grid>
        <Grid item xs={3}>
        <SearchAppBar />
        </Grid>
        </Grid>
</Toolbar>
</AppBar>
)
  }

