import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useSelector } from "react-redux";
import NotificationsIcon from '@material-ui/icons/Notifications';
import store from '../store';
import { makeStyles } from '@material-ui/core/styles';
import { useFirebaseConnect, isLoaded } from 'react-redux-firebase';

const useStyles = makeStyles((theme) => ({
    buttonStyle:{
        marginRight: 15,
    }
}));


const convertPage = (typeNum) => {
  store.dispatch({type:typeNum})
}

export default function AlertButton() {
    const classes = useStyles();

    useFirebaseConnect(['Users']);
    
    const users = useSelector((state) => state.firebase.ordered.Users);
    // console.log(alerts); // 여러번 실행됨

    let num = null;
    if (isLoaded(users)) {
        Object.keys(users).filter(v => users[v].value.emergency).forEach(v => {
            if (users[v].value.emergency.time) {
                num += 1;
            }
        });
    }

    return (
        <IconButton className={classes.buttonStyle} color="inherit" onClick={(event) => {
            event.preventDefault();
            convertPage(3)
          }}>
            <Badge badgeContent={num} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}