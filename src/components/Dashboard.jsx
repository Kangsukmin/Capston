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
    '서울': 0,
    '부산': 0,
    '충북': 0,
    '충남': 0,
    '대구': 0,
    '대전': 0,
    '강원': 0,
    '광주': 0,
    '경기': 0,
    '경북': 0,
    '경남': 0,
    '인천': 0,
    '제주특별자치도': 0,
    '전북': 0,
    '전남': 0,
    '세종특별자치시': 0,
    '울산': 0
  }

  useFirebaseConnect([
    'Users' // { path: '/todos' } // object notation
  ])

  const users = useSelector((state) => state.firebase.ordered.Users)

  let user_list = null

  if (!isLoaded(users)) {
    return <div>Loading...</div>
  } else {
    user_list = Object.keys(users).map(v => {
      return users[v].value.profile.city
    });
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