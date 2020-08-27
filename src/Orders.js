import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import store from './store';
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded } from 'react-redux-firebase';

// Generate Order Data

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {

  useFirebaseConnect([
    'Users' // { path: '/todos' } // object notation
  ])

  const users = useSelector((state) => state.firebase.ordered.Users);

  let user_list = [];


  if (isLoaded(users)) {
    user_list = Object.keys(users).map(v => {
      const temp = [];
      temp.push(users[v].value.name);
      temp.push(users[v].value.city);
      temp.push(users[v].value.address1 + " " + users[v].value.address2);
      temp.push(users[v].value.phone);
      temp.push(users[v].value.join);
      return temp;
    }).sort((a,b) => {
      if (a[4] > b[4]){
        return -1;
      } else if (a[4] < b[4]) {
        return 1;
      }
      return 0;
    }).slice(0,5).map((v,i) =>[...v, i]);
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>최근 가입자</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>가입일</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>도시</TableCell>
            <TableCell>주소</TableCell>
            <TableCell align="right">연락처</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user_list.map((row) => (
            <TableRow key={row[5]}>
              <TableCell>{row[4]}</TableCell>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell>{row[2]}</TableCell>
              <TableCell align="right">{row[3]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={(event) => {
          event.preventDefault();
          store.dispatch({ type: 1 });
        }}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}