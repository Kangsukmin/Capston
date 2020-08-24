import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useSelector } from "react-redux";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useFirestoreConnect } from "react-redux-firebase";


export default function AlertButton() {
    useFirestoreConnect({
        collection: 'alerts',
        storeAs: "alerts",
    })

    const importAll = (r) => {
        let images = {};
        r.keys().map((item) => images[item.replace('./', '')] = r(item));
        return images;
    }

    const images = importAll(require.context('../city_image', false, /\.(png|jpe?g|svg)$/));
    const alerts = useSelector((state) => state.firestore.data.alerts);
    //console.log(alerts);//여러번 실행됨

    let num;
    if (alerts !== undefined && alerts !== null) {
        num = Object.keys(alerts).length;
    }

    const handleOnClick = () => {
        console.log(images);
        console.log(alerts);
    }


    return (
        <IconButton color="inherit" onClick={handleOnClick}>
            <Badge badgeContent={num} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}