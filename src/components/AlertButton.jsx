import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useSelector } from "react-redux";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useFirestoreConnect } from "react-redux-firebase";

export default function AlertButton(){
    useFirestoreConnect({
        collection: 'alerts' ,
        storeAs: "alerts",
    })
    
    const alerts = useSelector((state) => state.firestore.data.alerts);
    console.log(alerts);
    
    let num = 0;
    if (alerts !== undefined){
        num = Object.keys(alerts).length;
    }

    const handleOnClick = () => {
        console.log(alerts);
    }


    return(
        <IconButton color="inherit" onClick={handleOnClick}>
            <Badge badgeContent={num} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}