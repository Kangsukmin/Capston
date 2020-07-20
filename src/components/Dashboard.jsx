import clsx from 'clsx';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from '../Orders';
import Citycard from '../Citycard';

export default function Dashboard(props) {
    const { classes } = props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Citycard />
              </Paper>
            </Grid>
          </Grid>
    )
}