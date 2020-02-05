import React from "react";
import "./header.css";
import ButtonAppBar from './appbar';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from "./search";



// import { ReactComponent as Logo } from '/assets/images/Logo';
// Stateless Functional Component
// שנבנה לא ע"י מחלקה, אלא ע"י פונקציה Component
// State אין לו
// props הוא כן יכול לקבל
// הוא יותר מהיר Performance מבחינת

export const Header: React.SFC = () => {
  return (

    <Grid container spacing={3}>
        <Grid item xs={6}>
        <ButtonAppBar />
        </Grid>
        <Grid item xs={6}>
        <SearchAppBar />

        </Grid>
        </Grid>

)
  }

