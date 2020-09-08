import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useSelector } from "react-redux";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useFirestoreConnect } from "react-redux-firebase";
import store from '../store';

const convertPage = (typeNum) => {
  store.dispatch({type:typeNum})
}

export default function AlertButton() {
    useFirestoreConnect({
        collection: 'alerts',
        storeAs: "alerts",
    })
    
    const alerts = useSelector((state) => state.firestore.data.alerts);
    //console.log(alerts);//여러번 실행됨

    let num;
    if (alerts !== undefined && alerts !== null) {
        num = Object.keys(alerts).length;
    }

    return (
        <IconButton color="inherit" onClick={(event) => {
            event.preventDefault();
            convertPage(3)
          }}>
            <Badge badgeContent={num} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}