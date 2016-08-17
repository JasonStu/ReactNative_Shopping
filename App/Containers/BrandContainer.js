/**
 * Created by jason on 16/5/26.
 */
import React from 'react';
import {connect} from 'react-redux';
import Brand from '../Components/Brand';

class BrandContainer extends React.Component {
    
    render() {
        return (
            <Brand {...this.props} />
            
        )
    }
}

export default connect((state) => {
    const {BrandReducer } = state;
    return {
        BrandReducer
    }
})(BrandContainer);