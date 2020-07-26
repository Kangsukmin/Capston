import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useSelector } from "react-redux";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useFirestoreConnect } from "react-redux-firebase";
import { useFirestore } from "react-redux-firebase";

export default function AlertButton(){
    const firestore = useFirestore();

    useFirestoreConnect({
        collection: 'alerts' ,
        storeAs: "alerts",
    })
    
    const alerts = useSelector((state) => state.firestore.data);
    const handleOnClick = () => {
        firestore
            .collection("alerts")
            .add({
                title: 'hello!',
                isDone: false,
            })
            .then((docRef) => {
                docRef.update({
                todoID: docRef.id,
                });
            });
    }
    return(
        <IconButton color="inherit" onClick={handleOnClick}>
            <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}