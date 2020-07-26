import MainPage from '../components/MainPage';
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){
    return {
        value : state.page.value
    }
}

export default connect(mapReduxStateToReactProps)(MainPage);