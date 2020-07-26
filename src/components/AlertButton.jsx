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

    const handleOnClick = () => {
        console.log(alerts);
    }


    return(
        <IconButton color="inherit" onClick={handleOnClick}>
            <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}