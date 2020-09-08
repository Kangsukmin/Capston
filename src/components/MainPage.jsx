import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Tables from './Tables';
import Alertpage from './Alertpage';

export default function MainPage(props){
    switch(props.value){
        case 0:
            return (<Dashboard classes={props.classes} />)
        case 1:
            return (<Tables />)
        case 2:
            return (<Profile />)
            //return (<Sample />)
        case 3:
            return (<Alertpage />)
        default :
            return (<Dashboard classes={props.classes} />)
    }
}