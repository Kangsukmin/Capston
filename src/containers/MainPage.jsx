import React from 'react';
import MainPage from '../components/MainPage';
import {connect} from 'react-redux';
import { StaticRouter } from 'react-router-dom';

function mapReduxStateToReactProps(state){
    return {
        value : state.page.value
    }
}

export default connect(mapReduxStateToReactProps)(MainPage);