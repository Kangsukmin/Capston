import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import store from './store';

const convertPage = (typeNum) => {
  store.dispatch({type:typeNum})
}

export const mainListItems = (
  <div>
    <ListItem button onClick={
      (event) => {
        event.preventDefault();
        convertPage(0)
      }
    }>
      <ListItemIcon>
        <DashboardIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="메인 화면" />
    </ListItem>
    <ListItem button onClick={
      (event) => {
        event.preventDefault();
        convertPage(1);
      }
    }>
      <ListItemIcon>
        <PeopleIcon style={{ color : '#ff1a55' }} />
      </ListItemIcon>
      <ListItemText primary="고객 목록" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset style={{ color : '#81f67d' }}>관리자</ListSubheader>
    <ListItem button onClick={
      (event) => {
        event.preventDefault();
        convertPage(2);
      }
    }>
      <ListItemIcon>
        <AssignmentIcon style={{ color : '#0ba0e3' }} />
      </ListItemIcon>
      <ListItemText primary="프로필 수정" />
    </ListItem>
  </div>
);