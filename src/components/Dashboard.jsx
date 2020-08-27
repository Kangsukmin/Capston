import clsx from 'clsx';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from '../Orders';
import Citycard from '../Citycard';
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded } from 'react-redux-firebase';

export default function Dashboard(props) {
  const { classes } = props;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const city_list = {
    '서울특별시': 0,
    '부산광역시': 0,
    '충청북도': 0,
    '충청남도': 0,
    '대구광역시': 0,
    '대전광역시': 0,
    '강원도': 0,
    '광주광역시': 0,
    '경기도': 0,
    '경상북도': 0,
    '경상남도': 0,
    '인천광역시': 0,
    '제주도': 0,
    '전라북도': 0,
    '전라남도': 0,
    '세종특별자치시': 0,
    '울산광역시': 0
  }

  useFirebaseConnect([
    'Users' // { path: '/todos' } // object notation
  ])

  const users = useSelector((state) => state.firebase.ordered.Users)

  let user_list = null

  if (!isLoaded(users)) {
    return <div>Loading...</div>
  } else {
    user_list = Object.keys(users).map(v => users[v].value.city);
    for (let i of user_list) {
      city_list[i] += 1;
    }
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
      </Grid>
      {/* Chart */}
      {Object.keys(city_list).map(v => (
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Citycard city={v} number={city_list[v]}/>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}