/**
 * Created by jason on 16/5/26.
 */
import React from 'react';
import {connect} from 'react-redux';
import ShoppingCart from '../Components/ShoppingCart';

class ShopCarContainer extends React.Component {
    
    render() {
        return (
            <ShoppingCart {...this.props} />
            
        )
    }
}

export default connect((state) => {
    const { ShopCarReducer } = state;
    return {
        ShopCarReducer
    }
})(ShopCarContainer);