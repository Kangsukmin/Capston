import React, { Component } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import city_image from './city_image/seoul.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleAlign:{
        lineHeight: 5,
        textAlign : 'center',
    },
    maindiv:{
        textAlign : 'center',
        fontSize : 50
    },
    city:{
        width : 90,
        height : 90,
        float : 'left',
    }
}));

export default function Citycard() {
    const theme = useTheme();
    const classes = useStyles();

    return(
        <React.Fragment>
            <Title><span className={classes.titleAlign}>서울특별시</span> <img className={classes.city} src = {city_image} /></Title>
            <div className={classes.maindiv}>
                151,525              
            </div>
        </React.Fragment>
    )
}