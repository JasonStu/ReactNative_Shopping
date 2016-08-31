/**
 * Created by jason
 */
import React from 'react';
import {connect} from 'react-redux';
import Home from '../Components/Home';

class HomeContainer extends React.Component {
    
    render() {
        return (
            <Home {...this.props} />
            
        )
    }
}

export default connect((state) => {
    const { HomeReducer } = state;
    return {
        HomeReducer
    }
})(HomeContainer);