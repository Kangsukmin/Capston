import React from 'react';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';
import image_list from './image';

const useStyles = makeStyles((theme) => ({
    titleAlign:{
        lineHeight: 5,
        textAlign : 'right',
    },
    maindiv:{
        textAlign : 'center',
        fontSize : 40
    },
    city:{
        width : 90,
        height : 90,
        marginRight: 30,
        float : 'left',
    }
}));

export default function Citycard(props) {
    const classes = useStyles();

    return(
        <React.Fragment>
          <Title><span className={classes.titleAlign}>{props.city}</span> <img className={classes.city} src = {image_list[props.city]} alt={props.city} /></Title>
            <div className={classes.maindiv}>
                {props.number}
            </div>
        </React.Fragment>
    )
}